'use client';

import { useState } from 'react';

import Search from '../Search/Search';

const PageSearch = () => {
  const [apartmentTypeFilter, setApartmentTypeFilter] = useState('');
  const [roomTypeFilter, setRoomTypeFilter] = useState('');

  return (
    <Search
      apartmentTypeFilter={apartmentTypeFilter}
      roomTypeFilter={roomTypeFilter}
      setApartmentTypeFilter={setApartmentTypeFilter}
      setRoomTypeFilter={setRoomTypeFilter}
    />
  );
};

export default PageSearch;
