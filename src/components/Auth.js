
const Auth = () => {
    let token =  localStorage.getItem('login');

    if(token){

        return true;
    }else{

        return false;
    }
};

