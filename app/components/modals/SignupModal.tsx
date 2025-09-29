'use client';
import Modal from "./Modal";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () =>{
    const SignupModal=useSignupModal()

    const content=(
        <>                
        <form className="space-y-4">
            <input placeholder="Email Adress" type="email" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />
            <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />
            <input placeholder="Repeat Password" type="password" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />

            <div className="p-5 bg-red-500 text-white rounded-xl opacity-80">
                error message

            </div>


            <CustomButton
            label="Submit"
            onClick={()=>console.log('signup done')}
            />
        </form>
    
    </>

    )

return (
    <Modal
        isOpen={SignupModal.isOpen}
        close={SignupModal.close}
        label="sign up"
        content={content}
    />
)

}
export default SignupModal;