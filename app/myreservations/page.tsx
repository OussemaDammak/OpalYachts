
import Image from "next/image";
import apiService from "../services/apiService";
import Link from "next/link";


const MyReservationsPage = async () =>{
    const reservations= await apiService.get('/api/auth/myreservations/')
return(
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        
        <h1 className="my-6 text-2xl">My reservations</h1>
        
        <div className="space-y-4">
            {reservations.map((reservation : any)=>{
                return( 
            <div className="rounded-xl p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image
                            fill
                            src={reservation.property.image_url}
                            alt="Giga Y1"
                            className="hover:scale-110 object-cover transition h-full w-full"
                        />       
                    </div>
                </div>
                
                <div className="col-span-1 md:col-span-3 space-y-2">
                    <h2 className="mb-4 text-xl">
                        {reservation.property.title}
                    </h2>
                    <p><strong>Check in date : </strong>{reservation.start_date}</p>
                    <p><strong>Check out date : </strong>{reservation.end_date}</p>
                    <p><strong>Number of days </strong>{reservation.number_of_days}</p>
                    <p><strong>Total Price </strong>${reservation.total_price}</p>

                    <Link 
                    
                        
                        href={`/properties/${reservation.property.id}`}
                        
                        className="mt-6 inline-block cursor-pointer py-4 px-6 bg-opalyachts text-white rounded-xl hover:bg-opalyachts-dark">
                        Go to Yacht
                    </Link>
                </div>
            </div>
             )
              })}
        </div>

    </main>

)
}
export default MyReservationsPage;