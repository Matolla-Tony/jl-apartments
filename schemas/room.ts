import { defineField } from "sanity";

const roomTypes = [
  { title: "Single Room", value: "single" },
  { title: "Bed Sitter", value: "bedSitter" },
];

const room = {
  name: "room",
  title: "Room",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum of 50 characters"),
    }),
    defineField({
      name: "apartment",
      title: "Apartment",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rent",
      title: "Rent",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Images",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "FILE" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Room Type",
      type: "string",
      options: { list: roomTypes },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isVacant",
      title: "Is Vacant",
      type: "boolean",
      initialValue: false,
    }),
  ],
};

export default room;
