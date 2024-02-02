import axios from "axios";
import { useEffect, useState } from "react";

//  https://paymentwallet.onrender.com/api/v1/user/me
export function useUser() {
    const [loading, setLoading] = useState(true);
    const [userdetiles, setUserDetiles] = useState(null);

    async function fetchUserDetiles() {
        try {
            const user = await axios.get("https://paymentwallet.onrender.com/api/v1/user/me", {
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
            })
            if(user.data) {
                setUserDetiles(user.data) 
                setLoading(false);
                console.log(user.data)
            }
        } catch (error) {
           console.log(error.message) 
        }  
    }
    useEffect(()=> {
        fetchUserDetiles()
    },[])

    return { loading, userdetiles }
}