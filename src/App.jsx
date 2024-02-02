import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";

const SignUp = lazy(()=> import("./pages/SignUp")); 
const SignIn = lazy(()=> import("./pages/SignIn")); 
const Dashboard = lazy(()=> import("./pages/Dashboard")); 
const SendMoney = lazy(()=> import("./pages/SendMoney")); 

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Suspense fallback="Loading">test here</Suspense> }  />
          <Route path="/signup" element={ <Suspense fallback="Loading"><SignUp /></Suspense> }  />
          <Route path="/signin" element={ <Suspense fallback="Loading"><SignIn /></Suspense> } />
          <Route path="/dashboard" element={ <Suspense fallback="Loading"><Dashboard /></Suspense> } />
          <Route path="/send" element={ <Suspense fallback="Loading"><SendMoney /></Suspense> } />
        </Routes>
       </BrowserRouter>
    </>
  )
}



export default App

// https://paymentwallet.onrender.com/api/v1/

// https://paymentwallet.onrender.com/api/v1/user/bulk?filter=Bin