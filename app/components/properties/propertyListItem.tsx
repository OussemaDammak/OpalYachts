import Image from "next/image";

const PropertyListItem = () => {
    return(
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src="/GigaY1.jpg"
                    sizes="(max-width:768px) 768px, (max-width:1200px) 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="First Item"
                    />
            </div>

        <div className="mt-2">
            <p className="text-lg font-bold">
                Yacht Name
            </p>
        </div>

        <div className="mt-2">
            <p className="text-sm text-gray-600"><strong>$200</strong> per day</p>
        </div>

        </div>
    )
}
export default PropertyListItem;