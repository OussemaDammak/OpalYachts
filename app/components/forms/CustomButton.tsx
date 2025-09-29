interface CustomButtonProps{
    label:string;
    className:string;
    onClick:()=>void;
    
}
const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick,
    className
}) =>{

return(

    <div 
        onClick={onClick}
        className={` ${className} py-4 text-center bg-opalyachts hover:bg-opalyachts-dark text-white rounded-xl transition cursor-pointer`}
        >    
        {label}
    </div>

)

}
export default CustomButton;