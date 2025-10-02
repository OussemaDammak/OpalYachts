'use client';
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps {
    userId?:string | null;
}

const AddProperty: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();


    const yachtYourHome = () =>{
        if (userId){
        addPropertyModal.open()
        } else {
            loginModal.open();
        }
    }

    return (
        <div 
            onClick={yachtYourHome}
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
        >

            
                Add Yachts
            

        </div>
    )

}
export default AddProperty;