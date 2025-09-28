import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

const PropertyDetailPage =() =>{
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
                <h1 className="mb-4 text-4xl">Yacht Name</h1>
                <span className="mb-6 block text-lg text-gray-600">
                    10 guests - 3 Cabins - 2 Bathrooms
                </span>
                <hr/>
                <div className="py-6 flex items-center space-x-4">
                    <Image
                        src="/RichFrog1.jpg"
                        alt="Rich Frog"
                        width={70}
                        height={70}
                        className="rounded-full"
                    />
                    <p><strong>Rich Frog</strong> is your host</p>
                </div>
                <hr/>
                <p className="mt-6 text-lg">
                    Luxury yacht with 3 cozy cabins and 2 bathrooms, accommodating up to 10 guests. Enjoy a spacious sun deck, fully equipped galley, and modern amenities for a comfortable stay on the water.
                </p>


            </div> 

            <ReservationSideBar/>
            
        </div>


    </main>
)
}
export default PropertyDetailPage;