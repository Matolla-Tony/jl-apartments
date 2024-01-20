import { groq } from "next-sanity";

export const getVacantRoomQuery = groq`*[_type == "apartmentRoom" && isVacant == true][0] {
    _id,
    roomNameNumber,
    apartment,
    slug,
    type,
    rent,
    description,
    isVacant,
    rent,
    coverImage,
    images,
}`;

export const getRoomsQuery = groq`*[_type == "apartmentRoom"] {
    _id,
    roomNameNumber,
    apartment,
    slug,
    type,
    rent,
    description,
    isVacant,
    rent,
    coverImage,
    images,
}`;
