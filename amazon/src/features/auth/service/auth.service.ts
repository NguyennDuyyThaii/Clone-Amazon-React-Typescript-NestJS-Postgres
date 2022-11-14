import { DisplayUser } from "../models/DisplayUser.interface"
import { Newuser } from "../models/NewUser"
import axios from 'axios'
const register = async (newUser: Newuser):Promise<DisplayUser | null> => {
    const response = await axios.post('http://localhost:3000/auth/register', newUser)

    return response.data
}

const authService = {
     register: register
    // login,
    // logout,
    // verifyJwt
}

export default authService