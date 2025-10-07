
import {create} from "zustand";


export type SearchQuery = {
    country:string | undefined;
    checkIn: Date | undefined; 
    checkOut: Date | undefined;
    guests: Number;
    bathrooms:Number;
    cabins:Number;
    category:string;
}


interface SearchmodalStore{
    isOpen:boolean;
    open:(step:string)=>void;
    close:()=>void;
    //used to get infos
    query:SearchQuery;
    // used to set infos
    setQuery:(query: SearchQuery)=> void;
    
    step:string;

}
const useSearchModal = create<SearchmodalStore>((set)=> ({
    isOpen:false,
    open:(step)=> set({isOpen:true, step:step}),
    close:()=> set({isOpen:false}),
    query:{
        country:'',
        checkIn:undefined,
        checkOut:undefined,
        guests:1,
        cabins:0,
        bathrooms:0,
        category:''
    },
    setQuery:(query:SearchQuery)=> set({query:query}),
    step:'',


}));

export default useSearchModal;