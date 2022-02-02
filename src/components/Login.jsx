import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
const Login = ({auth}) => {
const Navigate = useNavigate(); 
const [state, setState] = useState({  
    email:"",
    password:"",
});
const [flag, setflag] = useState(true);
const [error, setError] = useState("");

const handleChange = (e)=>{
    const {name , value} = e.target;
    setState({
        ...state,
        [name]:value
    });
 

}
const formSubmit = (e)=>{
    e.preventDefault();
    let auth = JSON.parse(localStorage.getItem("login"));
    if(email !== "" && email !== undefined && password !== "" && password !== undefined
      && auth.email === email && auth.password === password) {
       setflag(false);
       Navigate('./Home');
    }else{
        setflag(true);
        setError("paasword not match please try again")
        Navigate('/');
    }
}
  const{email, password} = state 
  return (
      <>
         <div className="col-lg-4 col-md-6 login_form">
                    {flag === true ? 
                    <></>
                    :
                    <div className="alert alert-danger" role="alert">
                    please fill up all field
                    </div>
                    }
                   <form onSubmit={formSubmit}>
                        <h2 className="mb-4">Login</h2>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" name="email" value={email} onChange={handleChange} className="form-control" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={handleChange} className="form-control" name="password" placeholder="name@example.com"/>
                        </div>
                        <span className="text-danger d-block mb-2">{error}</span>
                        <button className="btn custom_btn" type="submit" >Login</button>
                   </form>

        </div>
      </>
  );
};

export default Login;
