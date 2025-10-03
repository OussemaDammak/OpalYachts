import Image from "next/image";
const Categories = () =>{

    return(
        <div className="pt-3 cursor-pointer pb-6 justify-center flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-500 hover:opacity-100">
                <Image
                    src="/bigyacht.png"
                    alt="Gigayachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Gigayachts</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-500 hover:opacity-100">
                <Image
                    src="/bigyacht.png"
                    alt="Megayachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Megayachts</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-500 hover:opacity-100">
                <Image
                    src="/bigyacht.png"
                    alt="Motor Yachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Motor Yachts</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-500 hover:opacity-100">
                <Image
                    src="/bigyacht.png"
                    alt="Catamaran Yachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Catamaran Yachts</span> 
            </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-500 hover:opacity-100">
                <Image
                    src="/bigyacht.png"
                    alt="Sport Yachts"
                    width={40}
                    height={40}
                    />
                <span className="text-sx">Sport Yachts</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-500 hover:opacity-100">
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