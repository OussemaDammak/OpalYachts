import { getAccessToken } from "../lib/actions";
const apiService={
    get: async function (url:string):Promise<any> {
        console.log('get',url);
        console.log("API HOST:", process.env.NEXT_PUBLIC_API_HOST);
        const token = await getAccessToken();

        return new Promise((resolve, reject)=>{
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method:'GET', 
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(async response => {
                // Check if response is ok (status 200-299)
                if (!response.ok) {
                    const text = await response.text();
                    console.error('Error response:', text);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                // Check content-type before parsing
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    const text = await response.text();
                    console.error('Non-JSON response:', text);
                    throw new Error('Server did not return JSON');
                }
                
                return response.json();
            })
            .then((json) => {
                console.log('Response:', json);
                resolve(json);
            })
            .catch((error) => {
                console.error('API Error:', error);
                reject(error);
            })
        })

        

    },

    postWithoutToken:async function (url:string, data:any):Promise<any> {
        console.log('post',url,data);

        return new Promise((resolve, reject)=>{
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method:'POST',
                body:data,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
        })
            .then(response=>response.json())
            .then((json)=> {
                console.log('Response:', json);
                resolve(json);
            })
            .catch((error =>  {
                reject(error);
            }))

    })
    },

    post:async function (url:string, data:any):Promise<any> {
        console.log('post',url,data);
        const token = await getAccessToken();

        return new Promise((resolve, reject)=>{
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method:'POST',
                body:data,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
        })
            .then(response=>response.json())
            .then((json)=> {
                console.log('Response:', json);
                resolve(json);
            })
            .catch((error =>  {
                reject(error);
            }))

    })
    }

}

export default apiService;