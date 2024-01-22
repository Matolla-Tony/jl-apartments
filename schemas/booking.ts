import { defineField } from 'sanity';

const booking = {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'apartmentRoom',
      title: 'Apartment Room',
      type: 'reference',
      to: [{ type: 'apartmentRoom' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'moveInDate',
      title: 'Move-in Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
  ],
};

export default booking;
