type CoverImage = {
  url: string;
};

export type Image = {
  _key: string;
  url: string;
};

type Slug = {
  _type: string;
  current: string;
};

export type Room = {
  _id: string;
  name: string;
  slug: Slug;
  type: string;
  description: string;
  rent: number;
  isVacant: boolean;
  coverImage: CoverImage;
  images: Image[];
};

// export type CreateBookingDto = {
//   user: string;
//   hotelRoom: string;
//   checkinDate: string;
//   checkoutDate: string;
//   numberOfDays: number;
//   adults: number;
//   children: number;
//   totalPrice: number;
//   discount: number;
// };
