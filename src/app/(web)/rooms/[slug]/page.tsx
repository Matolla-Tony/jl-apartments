'use client';

import useSWR from 'swr';
import { useState } from 'react';
// import axios from 'axios';

import { getRoom } from '@/libs/apis';
import LoadingSpinner from '../../loading';
import RoomPhotoGallery from '@/components/RoomPhotoGallery/RoomPhotoGallery';
import BookRoomCta from '@/components/BookRoomCta/BookRoomCta';
import toast from 'react-hot-toast';
// import { getStripe } from '@/libs/stripe';

const RoomDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const [moveInDate, setMoveInDate] = useState<Date | null>(null);

  const fetchRoom = async () => getRoom(slug);

  const { data: apartmentRoom, error, isLoading } = useSWR('/api/room', fetchRoom);

  if (error) throw new Error('Cannot fetch data');
  if (typeof apartmentRoom === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  if (!apartmentRoom) return <LoadingSpinner />;


  const handleBookNowClick = async () => {
    if (!moveInDate)
      return toast.error('Please provide move in date');

    // if (moveInDate > Date.now)
    //   return toast.error('Please choose a valid checkin period');


    const apartmentRoomSlug = apartmentRoom.slug.current;

    // const stripe = await getStripe();

    // try {
    //   const { data: stripeSession } = await axios.post('/api/stripe', {
    //     moveInDate,
    //     apartmentRoomSlug,
    //   });

    //   if (stripe) {
    //     const result = await stripe.redirectToCheckout({
    //       sessionId: stripeSession.id,
    //     });

    //     if (result.error) {
    //       toast.error('Payment Failed');
    //     }
    //   }
    // } catch (error) {
    //   console.log('Error: ', error);
    //   toast.error('An error occured');
    // }
  };

  return (
    <div>
      <RoomPhotoGallery photos={apartmentRoom.images} />

      <div className='container mx-auto mt-20'>
        <div className='md:grid md:grid-cols-12 gap-10 px-3'>
          <div className='md:col-span-8 md:w-full'>
            <div>
              <h2 className='font-bold text-left text-lg md:text-2xl'>
                {apartmentRoom.apartment} {apartmentRoom.roomNameNumber} ({apartmentRoom.type})
              </h2>

              <div className='mb-11'>
                <h2 className='font-bold text-3xl mb-2'>Description</h2>
                <p>{apartmentRoom.description}</p>
              </div>

            </div>
          </div>

          <div className='md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto'>
            <BookRoomCta
              rent={apartmentRoom.rent}
              moveInDate={moveInDate}
              setMoveInDate={setMoveInDate}
              isVacant={apartmentRoom.isVacant}
              handleBookNowClick={handleBookNowClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
