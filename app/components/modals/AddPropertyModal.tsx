'use client';

import Image from "next/image";
import Categories from "../addproperty/Categories";
import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import LoginModal from "./LoginModal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";

const AddPropertyModal =() => {
    //states
    const [CurrentStep,setCurrentStep]=useState(1);
    const [dataCategory, setDataCategory]= useState('');
    const [dataTitle, setDataTitle]=useState('');
    const [dataDescription, setDataDescription]=useState('');
    const [dataPrice,setDataPrice] = useState('');
    const [dataCabins, setDataCabins] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');



    const addPropertyModal=useAddPropertyModal();

    const setCategory = (category:string)=> {
        setDataCategory(category)
    }

    const content= (
        <>

            {CurrentStep==1 ? (
            <>
            <h2 className="mb-6 text-2xl">Choose Category</h2>

            <Categories
                dataCategory={dataCategory}
                setCategory={(category) => setCategory(category)}
            />


            <CustomButton
                label='Next'
                onClick={()=> setCurrentStep(2)}
                />
            </>
            ) : CurrentStep==2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe your yacht</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Title</label>
                            <input 
                                type="text"
                                value={dataTitle}
                                onChange={(e)=>setDataTitle(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Description</label>
                            <textarea 
                                
                                value={dataDescription}
                                onChange={(e)=>setDataDescription(e.target.value)}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                                />
                        </div>
                    </div>
                    
                    <CustomButton
                        label='Previous'
                        className="mb-2 !bg-gray-500 hover:!bg-gray-400"
                        onClick={()=> setCurrentStep(1)}
                        />

                    <CustomButton
                        label='Next'
                        onClick={()=> setCurrentStep(3)}
                        />
                </>
            
            ) : CurrentStep==3 ?(
                <>

                    <h2 className="mb-6 text-2xl">Details</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Price per day</label>
                            <input 
                                type="number"
                                value={dataPrice}
                                onChange={(e)=>setDataPrice(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Cabins</label>
                            <input 
                                type="number"
                                value={dataCabins}
                                onChange={(e)=>setDataCabins(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Bathrooms</label>
                            <input 
                                type="number"
                                value={dataBathrooms}
                                onChange={(e)=>setDataBathrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Max Guests</label>
                            <input 
                                type="number"
                                value={dataGuests}
                                onChange={(e)=>setDataGuests(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                />
                        </div>
                    </div>



                    <CustomButton
                        label='Previous'
                        className="mb-2 !bg-gray-500 hover:!bg-gray-400"
                        onClick={()=> setCurrentStep(2)}
                        />

                    <CustomButton
                        label='Next'
                        onClick={()=> setCurrentStep(4)}
                        />
                </>
            ) : (
                <p>ues</p>
            )
        
        }
        </>
    )
    
    return (
        <>
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add Yacht"
                content={(
                    content
                )}
            />
        </>

    )

}

export default AddPropertyModal;