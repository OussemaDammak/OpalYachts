import Image from "next/image";
interface CategoriesProps {
    dataCategory:string;
    setCategory:(category:string) => void
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory

}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 justify-center">
                <div 
                    onClick={()=>setCategory('Gigayachts')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Gigayachts' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}
                    >
                                <Image
                                    src="/bigyacht.png"
                                    alt="Gigayachts"
                                    width={40}
                                    height={40}
                                    />
                                <span className="text-sx">Gigayachts</span> 
                            </div>
                            <div 
                                onClick={()=>setCategory('Megayachts')}
                                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Megayachts' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                                <Image
                                    src="/bigyacht.png"
                                    alt="Megayachts"
                                    width={40}
                                    height={40}
                                    />
                                <span className="text-sx">Megayachts</span> 
                            </div>
                            <div 
                                onClick={()=>setCategory('Motor Yachts')}
                                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Motor Yachts' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                                <Image
                                    src="/bigyacht.png"
                                    alt="Motor Yachts"
                                    width={40}
                                    height={40}
                                    />
                                <span className="text-sx">Motor Yachts</span> 
                            </div>
                            <div 
                                onClick={()=>setCategory('Catamaran Yachts')}
                                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Catamaran Yachts' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                                <Image
                                    src="/bigyacht.png"
                                    alt="Catamaran Yachts"
                                    width={40}
                                    height={40}
                                    />
                                <span className="text-sx">Catamaran Yachts</span> 
                            </div>
                        <div 
                            onClick={()=>setCategory('Sport Yachts')}
                            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Sport Yachts' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                                <Image
                                    src="/bigyacht.png"
                                    alt="Sport Yachts"
                                    width={40}
                                    height={40}
                                    />
                                <span className="text-sx">Sport Yachts</span> 
                            </div>
                            <div 
                                onClick={()=>setCategory('Pocket Yachts')}
                                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Pocket Yachts' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-500 hover:opacity-100`}>
                                <Image
                                    src="/bigyacht.png"
                                    alt="Pocket Yachts"
                                    width={40}
                                    height={40}
                                    />
                                <span className="text-sx">Pocket Yachts</span> 
                            </div>

            </div>
        </>
    )
}

export default Categories;