'use client';

import { useEffect, useState } from "react";

import PropertyListItem from "./propertyListItem";

import apiService from "@/app/services/apiService";

import useSearchModal from "@/app/hooks/useSearchModal";
import {format} from "date-fns";

// refresh front automatically
import { useSearchParams } from "next/navigation";
//

export type PropertyType ={
    id:string;
    title:string;
    price_per_day:number;
    image_url:string;
    is_favorite:boolean;
    
}

interface PropertyListProps{
    landlord_id?: string | null;
    favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id,
    favorites

}) => {

    const params = useSearchParams();

    const searchModal = useSearchModal();

    console.log('query::',searchModal.query);

    const country=searchModal.query.country;
    const numGuests=searchModal.query.guests;
    const numBathrooms=searchModal.query.bathrooms;
    const numCabins=searchModal.query.cabins;
    const checkInDate=searchModal.query.checkIn;
    const checkOutDate=searchModal.query.checkOut;
    const category=searchModal.query.category;



    const [properties,setProperties] = useState<PropertyType[]>([]);


    const markFavorite=(id:string, is_favorite:boolean)=>{
        const tmpProperties=properties.map((property: PropertyType)=> {
            if (property.id==id){
                property.is_favorite=is_favorite
                if (is_favorite){
                    console.log('added to list yacht favorite')
                }
                else{
                    console.log('removed from favorite')
                }
            }
            return property;

        })
        setProperties(tmpProperties);
    }

    const getProperties=async ()=>{
        
        let url='/api/properties/';

        if (landlord_id){
            url+=`?landlord_id=${landlord_id}`
        } else if (favorites){
            url+= '?is_favorites=true'
        } else {
            //FOR SEARCH
            let urlQuery = '';
            if (country){
                urlQuery+='&country='+country
            }
            if (numGuests){
                urlQuery+='&numGuests='+numGuests
            }
            if (numCabins){
                urlQuery+='&numCabins='+numCabins
            }
            if (numBathrooms){
                urlQuery+='&numBathrooms='+numBathrooms
            }
            if (category){
                urlQuery+='&category='+category
            }
            if (checkInDate){
                urlQuery+='&checkin='+format(checkInDate,'yyyy-MM-dd')
            }
            if (checkOutDate){
                urlQuery+='&checkout='+format(checkOutDate,'yyyy-MM-dd')
            }

            if (urlQuery.length){
                console.log('query:', urlQuery);
                urlQuery='?'+urlQuery.substring(1);
                url+=urlQuery
            }
        }

        const tmpProperties = await apiService.get(url)

        setProperties(tmpProperties.data.map((property:PropertyType)=> {
            if (tmpProperties.favorites.includes(property.id)){
                property.is_favorite=true
            }else {
                property.is_favorite=false
            }
            return property
        }));
    };


    useEffect(()=>{
        getProperties();
    },[category, searchModal.query, params])
    return(
        <>
        {properties.map((property)=>{
            return(
                <PropertyListItem
                    key={property.id}
                    property={property}
                    markFavorite={(is_favorite:any)=>markFavorite(property.id, is_favorite)}
                />
            )
        })}
        
        
        </>
    )
}
export default PropertyList;