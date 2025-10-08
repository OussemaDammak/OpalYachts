'use server';

import { cookies } from "next/headers";

//refresh token
export async function handleRefresh() {
    console.log('refresh hh');

    try {
        const refreshToken = await getRefreshToken();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/token/refresh/`, {
            method: 'POST',
            body: JSON.stringify({ refresh: refreshToken }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        console.log('Response- Refresh:', json);

        if (json.access) {
            const cookieStore = await cookies(); // synchronous
            cookieStore.set('session_access_token', json.access, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60, // 60 minutes
                path: '/'
            });
            return json.access;
        } else {
            resetAuthCookies();
            return null;
        }

    } catch (error) {
        console.log('error', error);
        resetAuthCookies();
        return null;
    }
}

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

    if (!accessToken){
        accessToken= await handleRefresh();
    }

    // i need also to refresh token if it's not there
    return accessToken
}

export async function getRefreshToken(){
    const refreshToken = (await cookies()).get('session_refresh_token')?.value
    return refreshToken
}