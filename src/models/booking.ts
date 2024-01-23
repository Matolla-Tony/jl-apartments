export type Booking = {
  _id: string;
  apartmentRoom: {
    _id: string;
    roomNameNumber: string;
    slug: { current: string };
    rent: number;
  };
  moveInDate: string;
};
