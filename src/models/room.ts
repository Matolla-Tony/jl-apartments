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
  roomNameNumber: string;
  apartment: string;
  slug: Slug;
  type: string;
  rent: number;
  description: string;
  isVacant: boolean;
  coverImage: CoverImage;
  images: Image[];
};

export type CreateBookingDto = {
  user: string;
  apartmentRoom: string;
  moveInDate: string;
};
