import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser"

export function Index() {
    const {loading , userdetiles } = useUser();
    if(loading) {
        return <div>Loading.......</div>
    }
    if(!userdetiles) {
        return <Navigate to={"/signin"} />

    return <Navigate to={"/dashboard"} />
    }
}