'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getRooms } from '@/libs/apis';
import { Room } from '@/models/room';
import Search from '@/components/Search/Search';
import RoomCard from '@/components/RoomCard/RoomCard';

const Rooms = () => {
  const [apartmentTypeFilter, setApartmentTypeFilter] = useState('');
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const apartmentType = searchParams.get('apartmentType');
    const roomType = searchParams.get('roomType');

    if (apartmentType) setApartmentTypeFilter(apartmentType);
    if (roomType) setRoomTypeFilter(roomType);
  }, []);

  async function fetchData() {
    return getRooms();
  }

  const { data, error, isLoading } = useSWR('get/apartmentRooms', fetchData);

  if (error) throw new Error('Cannot fetch data');
  if (typeof data === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  const filterRooms = (apartmentRooms: Room[]) => {
    return apartmentRooms.filter(room => {
      // Apply apartment type filter

      if (
        apartmentTypeFilter &&
        apartmentTypeFilter.toLowerCase() !== 'all' &&
        room.apartment.toLowerCase() !== apartmentTypeFilter.toLowerCase()
      ) {
        return false;
      }

      //   Apply room type filter
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== 'all' &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredRooms = filterRooms(data || []);
  console.log(filteredRooms)

  return (
    <div className='container mx-auto pt-10'>
      <Search
        apartmentTypeFilter={apartmentTypeFilter}
        roomTypeFilter={roomTypeFilter}
        setApartmentTypeFilter={setApartmentTypeFilter}
        setRoomTypeFilter={setRoomTypeFilter}
      />

      <div className='flex mt-20 justify-between flex-wrap'>
        {filteredRooms.map(room => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
