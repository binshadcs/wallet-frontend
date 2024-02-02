import axios from "axios";
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useUser } from "../hooks/useUser";

export default function Dashboard() {
    const {loading , userdetiles } = useUser();
    if(loading) {
        return <div>Loading.......</div>
    }
    if(!userdetiles) {
        return <Navigate to={"/signin"} />
    }
    return (
        <div className="prl-40">
            <Appbar username={"Binshadcs"} />
            <Balance balance={5000} />
            <Users />
        </div>
    )
} 

function Appbar({username}) {
    return (
        <div className="flex justify-between items-center p-2 bg-white border border-gray-200 shadow">
            <h1 className="font-bold">Payments App</h1>
            <div className="flex gap-4 items-center">
                <h3>Hello, {username}</h3>
                <div className="bg-gray-300 rounded-full w-10 h-10 pt-2 text-center">
                        <h3>U</h3>
                </div>
            </div>
        </div>
    )
}

// https://paymentwallet.onrender.com/api/v1/user/bulk?filter=Bin

function Users() { 
    const [input, setInput ] = useState(""); 
    const [users, setUsers] = useState([]); 
    useEffect(()=> {
        axios.get(`https://paymentwallet.onrender.com/api/v1/user/bulk?filter=${input}`, 
        {
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
         }
        ).then((res) => {
            setUsers(res.data.users)
            console.log(res.data.users)
        }).catch((error) => {
            console.log(error.message)
        })
    },[input])
    return (
        <>
            <div className="pl-5 pr-5">
                <h2 className="mt-5 font-bold">Users</h2>
                <div className="border-2 border-blue-500 p-1 rounded-md mt-1 ">
                <input onChange={(e)=> setInput(e.target.value)} className="w-full outline-none" type="text" name="" placeholder="search for users..." id="" />
                </div>
            </div>
            <div>
               {
                users ? users.map((user)=> <User user={user} /> ) : <div className="ml-5 mt-5 font-bold text-gray-600">No User found </div>
               }
            </div>
        </>
    )
}

function Balance({balance}) {
    return (
        <div className="px-5 pt-5">
            <h2 className="font-bold">Your Balance ${balance}</h2>
        </div>
    )
}

// pass user object
function User({user}) {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between m-4">
        <div className="flex items-center gap-3">
            <div className="bg-gray-300 rounded-full w-10 h-10 pt-2 text-center">
                <h3>U</h3>
            </div>
            <h3>{user.firstname} {user.lastname}</h3>
        </div>
        <div>
        <Button onClick={()=> {
            navigate(`/send?id=${user._id}&name=${user.firstname}`)
        }} label={"Send Money"}></Button>
        </div>
    </div>
    )
} 

function Button({label, onClick}) {
    return (
        <button onClick={onClick} className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{label}</button>
    )
}