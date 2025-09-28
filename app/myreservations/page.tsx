import Image from "next/image";
const MyReservationsPage =() =>{
return(
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        
        <h1 className="my-6 text-2xl">My reservations</h1>
        
        <div className="space-y-4">
            <div className="rounded-xl p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image
                            fill
                            src="/GigaY1.jpg"
                            alt="Giga Y1"
                            className="hover:scale-110 object-cover transition h-full w-full"
                        />       
                    </div>
                </div>
                
                <div className="col-span-1 md:col-span-3 space-y-2">
                    <h2 className="mb-4 text-xl">
                        Yacht Name
                    </h2>
                    <p><strong>Check in date : </strong>30/09/2025</p>
                    <p><strong>Check out date : </strong>02/10/2025</p>
                    <p><strong>Number of days </strong>3</p>
                    <p><strong>Total Price </strong>$1200</p>

                    <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-opalyachts text-white rounded-xl hover:bg-opalyachts-dark">
                        Go to Yacht
                    </div>
                </div>
            </div>
            
        </div>

    </main>

)
}
export default MyReservationsPage;