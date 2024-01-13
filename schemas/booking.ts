import { defineField } from "sanity";

const booking = {
  name: "booking",
  title: "Booking",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "apartment",
      title: "Apartment",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "apartmentRoom",
      title: "Apartment Room",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rent",
      title: "Rent",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default booking;
