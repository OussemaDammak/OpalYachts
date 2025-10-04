'use client';

import { useState, useEffect } from "react";
import {Range} from 'react-date-range';

import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";

import DatePicker from "../forms/Calendar";


const initialDateRange= {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}


export type Property ={
    id:string;
    guests:number;
    price_per_day:number;
}

interface ReservationSideBarProps {
    userId:string | null
    property:Property
}


const ReservationSideBar:React.FC<ReservationSideBarProps> =({
    property,
    userId
}) => {

    const loginModal=useLoginModal();

    const [fee, setFee] = useState<number>(20);
    const [days, setDays] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [minDate, setMinDate] = useState<Date>(new Date());
    const [guests, setGuests] = useState<string>('1');
    //max guests allowed
    const guestsRange = Array.from({length: property.guests},(_, index)=> index+1);
    
    //for submit the booking
    const performBooking= async ()=>{
        if (userId){
            if (dateRange.startDate && dateRange.endDate){
            const formData = new FormData();
            formData.append('guests',guests);
            formData.append('start_date',format(dateRange.startDate, 'yyyy-MM-dd'));
            formData.append('end_date',format(dateRange.endDate, 'yyyy-MM-dd'));
            formData.append('number_of_days',days.toString());
            formData.append('total_price',totalPrice.toString());

            const response = await apiService.post(`/api/properties/${property.id}/book/`, formData);
            if (response.success){
                console.log('booking successful')
            } else {
                console.log('something wrong with booking')
            }

        }

        } else{
            loginModal.open();
        }
    }
    
    
    //for datePicker
    const _setDateRange = (selection:any)=>{
        const newStartDate=new Date(selection.startDate);
        const newEndDate=new Date(selection.endDate);

        if (newEndDate <= newStartDate){
            newEndDate.setDate(newStartDate.getDate()+1);
        }

        setDateRange({
            ...dateRange,
            startDate:newStartDate,
            endDate:newEndDate,
        })

    }

    //this runs on every guests or day change
    useEffect(()=>{
        if (dateRange.startDate && dateRange.endDate){
            const dayCount = differenceInDays (
                dateRange.endDate,
                dateRange.startDate
            );
            if (dayCount && property.price_per_day){
                const _fee=((dayCount * property.price_per_day)/100)*5;

                setFee(_fee);
                setTotalPrice((dayCount * property.price_per_day)+_fee);
                setDays(dayCount);

            } else {
                const _fee = (property.price_per_day /100) *5 ;
                setFee(_fee);
                setTotalPrice(property.price_per_day+_fee);
                setDays(1);
            }
        }
    }, [dateRange])


    return(
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${property.price_per_day} per day</h2>
            
            <DatePicker
                value={dateRange}
                onChange={(value)=> _setDateRange(value.selection)}
                
            />
            
            
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="block font-bold text-xs">Guests</label>
                
                
                <select 
                    value={guests}
                    onChange={(e)=> setGuests(e.target.value)}
                    className="mb-1 w-full -ml-1 text-sm"
                    >
                    
                    {guestsRange.map(number => (
                        <option key={number} value={number}>{number}</option>
                    ))}
               
                 </select>
            </div>

            <div 
                onClick={performBooking}
                className="w-full mb-6 py-6 text-center text-white bg-opalyachts hover:bg-opalyachts-dark rounded-xl">
                <strong>Book</strong>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>${property.price_per_day} * {days} days</p>
                <p>${property.price_per_day * days}</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>OpalYacht fee</p>
                <p>${fee}</p>
            </div>
            <hr/>
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>${totalPrice}</p>
            </div>
        </aside>
    )
}
export default ReservationSideBar;