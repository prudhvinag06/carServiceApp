class AuthenticationService{
    registerSuccessfulLogin(username, password, choice){
        if(choice == 0){
            console.log('reached authentication service class')
            sessionStorage.setItem('authenticatedUser', username);
        }
        else{
            console.log('reached authentication service admin class')
            sessionStorage.setItem('authenticatedAdmin', username);
        }
       
    }

    registerSuccessfulLogin_id(user_id){
        sessionStorage.setItem('authenticatedUser_id', user_id);
    }

    logout(choice){
        if(choice == 0){
            sessionStorage.removeItem('authenticatedUser')
            sessionStorage.removeItem('authenticatedUser_id')
        }
        else sessionStorage.removeItem('authenticatedAdmin')
    }
}

export default new AuthenticationService();