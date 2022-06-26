import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationSlice'
import { v4 as uuid } from "uuid";


interface reservationCardTypes {
    name: string
    index: number
}

export const ReservationCard = ({name, index}: reservationCardTypes) => {

    const dispatch = useDispatch();

  return (
    <div className="reservation-card-container"
    onClick={() => {dispatch(removeReservation(index));
      dispatch(addCustomer({
        id: uuid(),
        name,
        food: [],
      }));
      }} >{name}</div>
  );
}
