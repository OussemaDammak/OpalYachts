import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";



const PropertyDetailPage = async ({params}:{params:Promise<{id:string}>}) =>{
    const {id} = await params;
    const property = await apiService.get(`/api/properties/${id}`)
    
    const userId = await getUserId();


return(
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-2l relative">
            <Image
                src="/GigaY1.jpg"
                className="object-cover w-full h-full"
                fill
                alt="giga y1"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">{property.title}</h1>
                <span className="mb-6 block text-lg text-gray-600">
                    {property.guests} guests - {property.cabins} Cabins - {property.bathrooms} Bathrooms - {property.country}
                </span>
                <hr/>
                <div className="py-6 flex items-center space-x-4">
                    {property.host.avatar_url && (
                    <Image
                        src={property.host.avatar_url}
                        alt="Rich Frog"
                        width={70}
                        height={70}
                        className="rounded-full"
                    />
                    )}
                    <p><strong>{property.host.name}</strong> is your host</p>
                </div>
                <hr/>
                <p className="mt-6 text-lg">
                    {property.description}
                </p>


            </div> 

            <ReservationSideBar
                property={property}
                userId={userId}
            />
            
        </div>


    </main>
)
}
export default PropertyDetailPage;