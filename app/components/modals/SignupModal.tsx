'use client';
import Modal from "./Modal";
import { useState } from "react";

import { useRouter } from "next/navigation";

import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () =>{

    const router=useRouter();

    const SignupModal=useSignupModal();

    const [name,setname] = useState('');
    const [email,setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    
    //submit function
    const submitSignup= async ()=>{
        const formData = {
            name:name,
            email:email,
            password1:password1,
            password2:password2
        }

        const response = await apiService.postWithoutToken('/api/auth/register/', JSON.stringify(formData));
        if (response.access){

            // handleLogin , we need to store this info in a cookie and not in browser
            handleLogin(response.user.pk, response.access, response.refresh);


            SignupModal.close();
            router.push('/')
        } else{
            const tmpErrors: string[] = Object.values(response).map((error:any)=>{
                return error;
            })

            setErrors(tmpErrors);
        }
    }

    const content=(
        <>                
        <form 
            action={submitSignup}
            className="space-y-4"
        >
            <input onChange={(e)=> setname(e.target.value)} placeholder="Name" type="text" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />

            <input onChange={(e)=> setEmail(e.target.value)} placeholder="Email Adress" type="email" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />
            <input onChange={(e)=> setPassword1(e.target.value)} placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />
            <input onChange={(e)=> setPassword2(e.target.value)} placeholder="Repeat Password" type="password" className="w-full h-[54px] px-4 border border-gray-400 rounded-xl" />


            {errors.map((error, index)=>{
                return (
                    <div 
                        key={`error_${index}`}
                        className="p-5 bg-red-500 text-white rounded-xl opacity-80"
                    >
                        {error}
                    </div>
                )
            })}
            


            <CustomButton
            label="Submit"
            onClick={submitSignup}
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