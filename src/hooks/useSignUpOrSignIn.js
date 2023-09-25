import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { currentUser } from "../Context/currentUser";
import { toast } from 'react-toastify'
import useAccount from "./useAccount";

const useSignUpOrSignIn = () => {

    const [formError, setFormError] = useState(null);
    const [isError, setIsError] = useState(null);
    const user = useContext(currentUser);
    const { LogInUser, LogOutUser } = useAccount();


    async function loginOrRegistration(apiUrl, username, password, response) {
        try {
            const res = await axios.post(
                apiUrl, { email: username, password: password, returnSecureToken: true }
            );
            console.log('jest okej');
            setIsError(false);
            console.log(res);
            user.auth = true;
            user.email = password;
            user.email = username;
            const newUser = {
                auth: true,
                email: username,
                password: password,
                id: res.data.localId
            }
            LogInUser(newUser);
        } catch (ex) {
            setFormError(ex.response.data.error.message);
            setIsError(true);
            console.log(ex.response.data.error.message);
            console.log(ex);
        }


    }
    return { formError, isError, loginOrRegistration }
}

export default useSignUpOrSignIn