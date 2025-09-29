'use client';
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () =>{
    const LoginModal=useLoginModal()

    const content=(
        <>                
        <form className="space-y-4">
            <input placeholder="Email Adress" type="email" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />
            <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />

            <div className="p-5 bg-red-500 text-white rounded-xl opacity-80">
                error message

            </div>


            <CustomButton
            label="Enter"
            onClick={()=>console.log('login done')}
            />
        </form>
    
    </>

    )

return (
    <Modal
        isOpen={LoginModal.isOpen}
        close={LoginModal.close}
        label="login"
        content={content}
    />
)

}
export default LoginModal;