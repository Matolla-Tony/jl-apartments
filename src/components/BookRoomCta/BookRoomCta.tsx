'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';

type Props = {
  moveInDate: Date | null;
  setMoveInDate: Dispatch<SetStateAction<Date | null>>;
  rent: number;
  isVacant: boolean;
  handleBookNowClick: () => void;
};

const BookRoomCta: FC<Props> = props => {
  const {
    rent,
    moveInDate,
    setMoveInDate,
    isVacant,
    handleBookNowClick,
  } = props;

  return (
    <div className='px-7 py-6'>
      <h3 className="font-bold text-xl">
          Kes {rent}/=
      </h3>

      <div className='w-full border-b-2 border-b-secondary my-2' />
      <div className='flex'>
        <div className='w-1/2 pr-2'>
          <label
            htmlFor='move-in-date'
            className='block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Move In date
          </label>
          <DatePicker
            selected={moveInDate}
            onChange={date => setMoveInDate(date)}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            id='move-in-date'
            className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
          />
        </div>
      </div>

      <button
        disabled={!isVacant}
        onClick={handleBookNowClick}
        className='btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed'
      >
        {isVacant ? 'BOOK NOW' : 'CURRENTLY OCCUPIED'}
      </button>
    </div>
  );
};

export default BookRoomCta;
