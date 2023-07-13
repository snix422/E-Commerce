import { useState } from "react";
import axios from "axios";

const useSignUpOrSignIn = () => {

    const [formError, setFormError] = useState('');

    async function loginOrRegistration (apiUrl,username,password){
        try {
            const res = await axios.post(
              apiUrl,
              { email: username, password: password, returnSecureToken: true }
            );
            console.log('jest okej')
          } catch (ex) {
            setFormError(ex.response.data.error.message);
            console.log('error');
          }
    }
    return {formError, loginOrRegistration}

}

export default useSignUpOrSignIn