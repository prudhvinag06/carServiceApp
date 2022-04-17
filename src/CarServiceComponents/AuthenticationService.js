class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log('reached authentication service class')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
}

export default new AuthenticationService();