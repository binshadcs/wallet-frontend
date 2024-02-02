import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SendMoney() {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate()
  let [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

    return (
        <div className="flex justify-center items-center h-screen w-screen z-50 overflow-y-auto overflow-x-hidden">
         <div className="bg-white border border-gray-200 rounded-lg shadow py-10 px-20 w-[450px] relative">
          <div className="absolute top-2 right-2">
            <button onClick={()=> {
                navigate("/dashboard")
            }} className="bg-gray-100 border border-gray-200 h-6 w-6 rounded-full hover:bg-gray-200">X</button>
          </div>
          <div className="flex justify-center mb-10 mt-10">
          <h2 className="font-bold text-2xl">Send Money</h2>
          </div>
          <div className="flex items-center mt-5">
            <div className="bg-green-500 rounded-full w-10 h-10 pt-2 text-center text-white">
              <h3>{name[0].toUpperCase()}</h3>
            </div>
            <h2 className="ml-3 font-bold">{name} </h2>
          </div>
         <h3 className="mt-5 font-bold"> Amount (in Rs)</h3>
          <div className="border p-1 rounded-md mt-1">
                  <input onChange={(e)=> setAmount(e.target.value)} className="w-full outline-none" type="number" placeholder="Enter Amount here. . ." />
          </div>
         <div className="flex justify-center mt-5">
          <button onClick={()=> {
            axios.post("https://paymentwallet.onrender.com/api/v1/account/transfer", {
              to : id,
              amount,
            }, {
              headers : {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
            })
            .then((res) => {
              navigate("/dashboard")
            }).catch((error) => {
              console.log(error.message)
            })
          }} className="bg-green-500 py-2 w-full rounded shadow-lg mt-3 text-white font-bold hover:bg-green-400">Initiate Transfer</button>
         </div>
        </div>
      </div>
    )
  }
