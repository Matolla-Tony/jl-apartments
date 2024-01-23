export type User = {
  _id: string;
  isAdmin: boolean;
  name: string;
  image: string;
  email: string;
  about: string | null;
  _createdAt: string;
};
