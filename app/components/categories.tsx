'use client';

import { useState } from "react";
import Image from "next/image";
import useSearchModal, {SearchQuery} from "../hooks/useSearchModal";


const Categories = () =>{

    const searchModal = useSearchModal();
    const [category, setCategory]= useState('');

    const _setCategory = (_category: string)=>{
        setCategory(_category);

        const query:SearchQuery = {
            country:searchModal.query.country,
            guests:searchModal.query.guests,
            bathrooms:searchModal.query.bathrooms,
            cabins:searchModal.query.cabins,
            checkIn:searchModal.query.checkIn,
            checkOut:searchModal.query.checkOut,
            category:_category,
        }

        searchModal.setQuery(query);

    }

    return(
        <div className="pt-3 cursor-pointer pb-6 justify-center flex items-center space-x-12">
            <div 
                onClick={()=>_setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                <Image
                    src="/bigyacht.png"
                    alt="Gigayachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">All</span> 
            </div>
            
            <div 
                onClick={()=>_setCategory('gigayachts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='gigayachts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                <Image
                    src="/bigyacht.png"
                    alt="Gigayachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Gigayachts</span> 
            </div>
            <div 
                onClick={()=>_setCategory('megayachts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='megayachts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                <Image
                    src="/bigyacht.png"
                    alt="Megayachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Megayachts</span> 
            </div>
            <div 
                onClick={()=>_setCategory('motor_yachts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='motor_yachts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                <Image
                    src="/bigyacht.png"
                    alt="Motor Yachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Motor Yachts</span> 
            </div>
            <div 
                onClick={()=>_setCategory('catamaran_yachts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='catamaran_yachts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                <Image
                    src="/bigyacht.png"
                    alt="Catamaran Yachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Catamaran Yachts</span> 
            </div>
        <div 
            onClick={()=>_setCategory('sport_yachts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='sport_yachts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                <Image
                    src="/bigyacht.png"
                    alt="Sport Yachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Sport Yachts</span> 
            </div>
            <div 
                onClick={()=>_setCategory('pocket_yachts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='pocket_yachts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                <Image
                    src="/bigyacht.png"
                    alt="Pocket Yachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Pocket Yachts</span> 
            </div>

        </div>
    )
}
export default Categories;