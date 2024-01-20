"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

type Props = {
  apartmentTypeFilter: string;
  roomTypeFilter: string;
  setApartmentTypeFilter: (value: string) => void;
  setRoomTypeFilter: (value: string) => void;
};

const Search: FC<Props> = ({
  apartmentTypeFilter,
  roomTypeFilter,
  setApartmentTypeFilter,
  setRoomTypeFilter,
}) => {
  const router = useRouter();

  const handleApartmentTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setApartmentTypeFilter(event.target.value);
  };

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(
      `/rooms?apartmentType=${apartmentTypeFilter}&roomType=${roomTypeFilter}`
    );
  };

  return (
    <section className="bg-tertiary-light px-4 py-6 rounded-lg">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Apartment
          </label>
          <div className="relative">
            <select
              title="Apartment"
              value={apartmentTypeFilter}
              onChange={handleApartmentTypeChange}
              className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Diyani-Suites">Diyani-Suites</option>
              <option value="Oasis-Kwenet">Oasis-Kwenet</option>
              <option value="Oasis-Ne-Tai">Oasis-Ne-Tai</option>
            </select>
          </div>
        </div>
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Room Type
          </label>
          <div className="relative">
            <select
              title="Room"
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Bed-Sitter">Bed-Sitter</option>
              <option value="Single-Room">Single-Room</option>
            </select>
          </div>
        </div>

        <button
          className="btn-primary"
          type="button"
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
