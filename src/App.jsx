import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";

const SignUp = lazy(()=> import("./components/SignUp")) 
const SignIn = lazy(()=> import("./components/SignIn")) 
const Dashboard = lazy(()=> import("./components/Dashboard")) 
const SendMoney = lazy(()=> import("./components/SendMoney")) 
// import { SignIn } from "./components/SignIn";
// import { Dashboard } from "./components/Dashboard";
// import { SendMoney } from "./components/SendMoney";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
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