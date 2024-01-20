import { defineField } from "sanity";

const apartments = [
  { title: "Diyani-Suites", value: "Diyani-Suites" },
  { title: "Oasis-Kwenet", value: "Oasis-Kwenet" },
  { title: "Oasis-Ne-Tai", value: "Oasis-Ne-Tai" },
];

const roomTypes = [
  { title: "Single-Room", value: "Single-Room" },
  { title: "Bed-Sitter", value: "Bed-Sitter" },
];

const description = [
  {
    title: "Diyani Description",
    value: "Spacious bed sitters located in Kericho Town",
  },
  {
    title: "Oasis Kwenet Description",
    value: "Spacious single rooms located in Kipsitet",
  },
  {
    title: "Oasis Ne Tai Description",
    value: "Spacious bed sitters located in Kipsitet",
  },
];

const rent = [
  { title: "2000", value: 2000 },
  { title: "2500", value: 2500 },
  { title: "2700", value: 2700 },
  { title: "3200", value: 3200 },
  { title: "5500", value: 5500 },
  { title: "6500", value: 6500 },
];

const apartmentRoom = {
  name: "apartmentRoom",
  title: "Apartment Room",
  type: "document",
  fields: [
    defineField({
      name: "roomNameNumber",
      title: "Room Name or Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "apartment",
      title: "Apartment",
      type: "string",
      options: { list: apartments },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "roomNameNumber",
      },
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
      name: "rent",
      title: "Rent",
      type: "number",
      options: { list: rent },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      options: { list: description },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isVacant",
      title: "Is Vacant",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Images",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "File" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "File" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error("Minimum of 3 images required"),
    }),
  ],
};

export default apartmentRoom;
