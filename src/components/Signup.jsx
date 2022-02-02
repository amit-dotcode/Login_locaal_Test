import React, {useState, useEffect} from 'react';
import Login from './Login';

const Signup = ({auth}) => {

const [state, setState] = useState({  
    email:"",
    password:"",
    Confirmpassword:"",
});
const [flag, setflag] = useState(true);
const [error, setError] = useState("");
const [user, setUser] = useState(false);


const handleChange = (e)=>{
    const {name , value} = e.target ;

    setState({
        ...state,
        [name]:value
    });
 

}

useEffect(()=>{
    if(auth){
        setUser(true)
    } else{
        setUser(false);
    }
   }, [])

const formSubmit = (e)=>{
    e.preventDefault();
    if(email !== "" && email !== undefined 
       && password !== "" && password !== undefined && 
       password === Confirmpassword){
       localStorage.setItem("login", JSON.stringify(state));
       setflag(false);
       setUser(true)

    }else{
        setflag(true);
        setError("Somthing wrong please check... password or somthing")
        setTimeout(()=>{
            setError("")
        }, 4000)
    }


}
  const{email, password, Confirmpassword} = state 
  return (
      <>
        <section className="login_sing_wrapper">
      

            <div className="d-flex">
                <div className="col-lg-8 col-md-6 bg_wrapper">
                
                </div>
                {user === true ? 
                <Login auth={auth}/>
                :
               <div className="col-lg-4 col-md-6 login_form">
                    {flag === false ? 
                    <></>
                    :
                    <div className="alert alert-danger" role="alert">
                    please fill up all field
                    </div>
                    }
                <form onSubmit={formSubmit}>
                        <h2 className="mb-4">Sign up !</h2>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" name="email" value={email} onChange={handleChange} className="form-control" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={handleChange} className="form-control" name="password" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
                        <input type="password" value={Confirmpassword} onChange={handleChange} className="form-control" name="Confirmpassword" placeholder="name@example.com"/>
                        <span className="text-danger d-block mb-2">{error}</span>
                        </div>
                        <button className="btn custom_btn" type="submit" >Sign up</button>
                </form>

                </div>
                }
            

             </div>   

        </section>
      </>
  );
};

export default Signup;
