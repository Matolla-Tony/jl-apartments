import Stripe from 'stripe';

import { authOptions } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getRoom } from '@/libs/apis';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

type RequestData = {
  moveInDate: string;
  apartmentRoomSlug: string;
};

export async function POST(req: Request, res: Response) {
  const {
    moveInDate,
    apartmentRoomSlug,
  }: RequestData = await req.json();

  if (
    !moveInDate ||
    !apartmentRoomSlug
  ) {
    return new NextResponse('All fields are required', { status: 400 });
  }

  const origin = req.headers.get('origin');

  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Authentication required', { status: 400 });
  }

  const userId = session.user.id;
  const formattedMoveInDate = moveInDate.split('T')[0];

  try {
    const room = await getRoom(apartmentRoomSlug);
    const rent = room.rent

    // Create a stripe payment
    const stripeSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'Kes',
            product_data: {
              name: `${room.apartment} ${room.roomNameNumber}`,
              images: room.images.map(image => image.url),
            },
            unit_amount: parseInt((rent * 100).toString()),
          },
        },
      ],
      payment_method_types: ['card'],
      success_url: `${origin}/users/${userId}`,
      metadata: {
        moveInDate: formattedMoveInDate,
        apartmentRoom: room._id,
        user: userId,
      }
    });

    return NextResponse.json(stripeSession, {
      status: 200,
      statusText: 'Payment session created',
    });
  } catch (error: any) {
    console.log('Payment falied', error);
    return new NextResponse(error, { status: 500 });
  }
}
