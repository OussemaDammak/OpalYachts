'use server';

import { cookies } from "next/headers";

export async function handleLogin(userId:string, accessToken:string, refreshToken:string){
    
    
    (await cookies()).set('session_userid',userId, {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge:60 * 60 * 24 * 7 , // 1 week
        path:'/'
    });
    
    (await cookies()).set('session_acces_token',accessToken, {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge:60*60 , // 60 minutes
        path:'/'
    });

    (await cookies()).set('session_refresh_token',refreshToken, {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge:60 * 60 * 24 * 7 , // 1 week
        path:'/'
    });
}

export async function resetAuthCookies(){
    (await cookies()).set('session_userid','');
    (await cookies()).set('session_acces_token','');
    (await cookies()).set('session_refresh_token','');
}


//get data
export async function getUserId(){
    const userId = (await cookies()).get('session_userid')?.value
    return userId ? userId : null
}

export async function getAccessToken(){
    let accessToken = (await cookies()).get('session_acces_token')?.value;

    // i need also to refresh token if it's not there
    return accessToken
}