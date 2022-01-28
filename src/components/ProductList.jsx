import React, {useState, useEffect} from 'react';

const ProductList = () => {
  const [item, setItem] =  useState();
  const [loading, setLoading] = useState(false);
  const [currencyItem, setCurrecyitem] = useState();
  const [currentCurr, setCurrentcurr] = useState('USD');
  
  const getData = async () =>{

    const reponse = await fetch('https://fakestoreapi.com/products');
    const data = await reponse.json();
        if(reponse.status === 200){
            setItem([...data]);
            setLoading({loading:true});
        }
    }

    const getCurrency = async () =>{
        const responseCurrency = await fetch(`https://v6.exchangerate-api.com/v6/2aa018ab00f80f3574ec72c3/latest/${currentCurr}`);
        const currencyData = await responseCurrency.json();
        setCurrecyitem(currencyData.conversion_rates)

    }
    useEffect(() => {
        getData();
    }, []);

    useEffect(()=>{
        getCurrency();
    },[currentCurr])

  return (
       <>
        <div className="container">
            <div className="product_top_head d-flex justify-content-between">
                <div className="Product_title">
                    <h3 className="text-danger">Product List</h3>
                </div>
                <div className="product_filter ">  
                <select className="form-select" value={currentCurr} onChange={(e)=> setCurrentcurr(e.target.value)}>
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>  
                </select>
                 </div>
            </div>
            { !loading ? 
            
            <div className="spinner-border text-danger" role="status">
                 <span className="visually-hidden"></span> 
            </div>
            :  
            <div className="row">
                    {item && item.map((element, idx)=>{
                        return(
                         <div className="col-12 col-lg-4 col-md-4 col-sm-6 mb-4" key={idx}>    
                            <div className="card" >
                                <img src={element.image}  alt="..." className="mt-2" height="200" width="200" style={{margin: "auto"}} />
                                <div className="card-body">
                                    <h6 className="card-title">{element.title}</h6>
                                    <p className="card-text">{element.category}</p>
                                    <p className="card-price fw-bold text-danger">
                                        {(element.price * [currentCurr === 'USD' ? currencyItem.INR : 1]).toFixed(2)}
                                    </p>
                                </div>
                            </div>  
                        </div>     
                        )  
                    })}               
            </div>
           }
        </div>
       </>
  );
};

export default ProductList;
