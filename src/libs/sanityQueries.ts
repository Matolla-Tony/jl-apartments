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

export const getRoomQuery = groq`*[_type == "apartmentRoom" && slug.current == $slug][0] {
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

export const getUserBookingsQuery = groq`*[_type == "booking" && user._ref == $userId {
    _id,
    apartmentRoom -> {
        _id,
        roomNameNumber,
        slug,
        rent,
    },
    moveInDate,
}`;

export const getUserDataQuery = groq`*[_type == "user" && _id == $userId][0] {
    _id,
    isAdmin,
    name,
    image,
    email,
    about,
    _createdAt,
}`;
