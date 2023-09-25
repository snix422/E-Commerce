const useAccount = () => {
    const LogInUser = (user) => {
        localStorage.removeItem('loggedUser');
        localStorage.setItem('loggedUser', JSON.stringify(user));
    }

    const LogOutUser = () => {
        localStorage.removeItem('loggedUser');
    }

    return { LogInUser, LogOutUser }
}

export default useAccount