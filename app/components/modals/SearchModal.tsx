'use client';
import Modal from "./Modal";
import useSearchModal from "@/app/hooks/useSearchModal";
import SelectCountry, {SelectCountryValue} from "../forms/SelectCountry";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import { Range } from "react-date-range";
import DatePicker from "../forms/Calendar";

const initialDateRange= {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}



const SearchModal = () =>{
    let content = (<></>);
    const searchModal = useSearchModal();

    const [country, setCountry]= useState<SelectCountryValue>();

    const [dateRange, setDateRange]= useState<Range>(initialDateRange);

    //set date range
    const _setDateRange = (selection:Range)=> {
        if (searchModal.step === 'checkin'){
            searchModal.open('checkout');
        } else if (searchModal.step === 'checkout'){
            searchModal.open('details');
        }

        setDateRange(selection);

    }


    //


    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Where do you want to go ?</h2>

            <SelectCountry 
                value={country}
                onChange={(value)=> setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="Check in date ->"
                    onClick={()=>searchModal.open('checkin')}
                />
            </div>
        </>
    )

    
    const contentCheckin = (
        <>
            <h2 className="mb-6 text-2xl">When do you want to check in ?</h2>
            <DatePicker
                value={dateRange}
                onChange={(value)=> _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<- Location"
                    onClick={()=>searchModal.open('location')}
                />
                <CustomButton
                    label="Check out date ->"
                    onClick={()=>searchModal.open('checkout')}
                />
            </div>

        </>

    )

    const contentCheckout = (
        <>
            <h2 className="mb-6 text-2xl">When do you want to check out ?</h2>
            <DatePicker
                value={dateRange}
                onChange={(value)=> _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<- Check in date"
                    onClick={()=>searchModal.open('checkin')}
                />
                <CustomButton
                    label="Details ->"
                    onClick={()=>searchModal.open('details')}
                />
            </div>

        </>

    )


    if (searchModal.step == 'location'){
        content=contentLocation;
    }else if (searchModal.step=='checkin') {
        content=contentCheckin
    }else if (searchModal.step=='checkout') {
        content=contentCheckout
    }


    return (
        <Modal
            isOpen={searchModal.isOpen}
            close={searchModal.close}
            label="Search"
            content={content}
        />
    )

}

export default SearchModal;