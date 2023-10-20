import { signOut } from "firebase/auth"
import { toast } from "react-toastify"

export const onLogout = () => {
    try{
        signOut(auth)
        alert("logoutt")
        toast.success("logout")
    }
    catch(err){
      console.log("error".err)
    }
}