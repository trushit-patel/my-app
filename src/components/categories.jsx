import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Products = () => {

    const [loading, setLoading] = useState(false);
    const [data,setData] = useState([]);
    

    useEffect(()=>{

        setLoading(true);
        
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>{
            setData(json);
            setData(json);
        })
        .catch((e)=>{console.log(e);})
        .finally(()=> setLoading(false));

    },[]);

  return (
        <div className='container'>

            <h2 className='mt-4'>Products</h2>
            {loading && <div><h3>Loading...</h3></div>}

            <ShowProducts/>
            <div className='row' >
                {data.map((category)=>{
                return (
                    
                    <div key={category} className="col col-sm  border border-dark m-2 p-4" >
                        <img src={category} className="card-img-top"  style={{ height:'13rem' , width : "13rem"}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontSize:'20px' }}>{category}</h5>
                            <h5 className="card-title">${category}</h5>
                            <p className="card-text ">{category}</p>
                            
                            <div className='buttons'>
                            
                                <NavLink exact to={`/products/${category }`} className="btn btn-success btn-md m-2" >View</NavLink>
                                <NavLink to="/" className="btn btn-primary btn-md m-2" >Add to Cart</NavLink>

                            </div>


                        </div>
                    </div>
                )
        })}
        </div>
    </div>
  )
}

export default Products
