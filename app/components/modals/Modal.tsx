'use client';
import { useCallback, useEffect,useState } from "react";

interface ModalProps{
    label:string;
    close:()=>void;
    content:React.ReactElement;
    isOpen: boolean;
}



const Modal:React.FC<ModalProps> = ({
    label,
    content,
    isOpen,
    close
})=> {
const [showModal, setshowModal]=useState(isOpen)

useEffect(()=>{
    setshowModal(isOpen)
}, [isOpen]
)

const handleClose=useCallback(()=>{
    setshowModal(false);
    setTimeout(()=>{
        close();
    },300)
}, [close])


if(!isOpen){
    return null;
}

return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
        <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto">
            
            <div className={`translate duration-600 h-full  ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'} `}>
                <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                    
                    <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                        <div 
                            onClick={handleClose}
                            className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black" className="w-8 h-8">
                                 <path 
                                 d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z"/>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold">
                            {label}
                        </h2>

                    </header>

                    <section className="p-6">
                        {content}
                    </section>

                </div>
            </div>

        </div>
    </div>

)

}
export default Modal;