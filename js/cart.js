import { getProfile } from "./profile";

const API_URL = 'https://fakestoreapi.com/'

async function cart(){
    try{
        const userId = await getProfile()
        const res = await fetch(`${API_URL}carts/user/${userId}`)
        const data = await res.json()
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

cart()