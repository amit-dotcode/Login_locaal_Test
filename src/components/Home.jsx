import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
   const [user, setUser] = useState();
   
    const getData = async () =>{

        const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const data =  await reponse.json();
        setUser(data)

    }

   useEffect(() =>{
    getData();
   }, [])

  return (
      <>
        <div className="container">
            <div className="col col-lg-12">
                <h2 className="mt-4 mb-4"> User List - </h2>
                <div className="data_list">
                <table className="table table-striped ">
                <thead>
                    <tr>
                    <th scope="col">SR/No.</th>
                    <th scope="col">name</th>
                    <th scope="col">phone</th>
                    <th scope="col">username</th>
                    <th scope="col">website</th>
                    <th scope="col">company</th>
                    <th scope="col">address</th>
                    </tr>
                </thead>
                <tbody>
                    {user && user && user.length >1 && user.map((element, idx)=>{
                        return(
                            <>
                             <tr key={idx}>
                                <th scope="row">{idx +1}</th>
                                <td>{element.name}</td>
                                <td>{element.phone}</td>
                                <td>{element.username}</td>
                                <td>{element.website}</td>
                                <td>{element.company.name}</td>
                                <td>{element.address.city}</td>
                              
                             </tr>
                            </>
                        )
                    }) 

                    }
                </tbody>
                </table>
                </div>    
            </div>
        </div>
      </>
  );
};

export default Home;
