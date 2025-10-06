'use client';

import apiService from "../services/apiService";

interface FavoriteButtonProps{
    id:string;
    is_favorite: boolean;
    markFavorite:(is_favorite:boolean)=>void;
}

const FavoriteButton: React.FC<FavoriteButtonProps>=({
    id,
    is_favorite,
    markFavorite

}) => {
    const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();

        const response = await apiService.post(`/api/properties/${id}/toggle_favorite/`,{})
        markFavorite(response.is_favorite)
        
    }

    return (
        <div 
            onClick={toggleFavorite}
            className={`absolute top-2 right-2 ${is_favorite ? 'text-opalyachts' : 'text-white' } hover:text-opalyachts`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>

        </div>
    )
}

export default FavoriteButton;