import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Products = () => {

    const [loading, setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [filter, setFilter] = useState(data)

    useEffect(()=>{

        setLoading(true);
        
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setData(json);
            setFilter(json);
        })
        .catch((e)=>{console.log(e);})
        .finally(()=> setLoading(false));

    },[]);

    const filterProduct = (category) => {
        const updatedList = data.filter((x)=>x.category === category);
        setFilter(updatedList);
        
    }
    const ShowProducts = () => {
        return (
            <div className='buttons m-5'>
            <button className='btn btn-outline-dark me-2' onClick={() =>setFilter(data)} >All</button>
            <button className='btn btn-outline-dark me-2' onClick={() =>filterProduct("men's clothing")} >Men's Clothing</button>
            <button className='btn btn-outline-dark me-2' onClick={() =>filterProduct("women's clothing")} >Women's Clothing</button>
            <button className='btn btn-outline-dark me-2' onClick={() =>filterProduct("jewelery")} >Jewellery</button>
            <button className='btn btn-outline-dark me-2' onClick={() =>filterProduct("electronics")} >Electronics</button>
        </div>
        )
        
    }

  return (
        <div className='container'>

            <h2 className='mt-4'>Products</h2>
            {loading && <div><h3>Loading...</h3></div>}

            <ShowProducts/>
            <div className='row' >
                {filter.map((product)=>{
                return (
                    
                    <div key={product.id} className="col col-sm  border border-dark m-2 p-4" >
                        <img src={product.image} className="card-img-top"  style={{ height:'13rem' , width : "13rem"}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontSize:'20px' }}>{product.title.substring(0,12)}</h5>
                            <h5 className="card-title">${product.price}</h5>
                            <p className="card-text ">{product.category}</p>
                            
                            <div className='buttons'>
                            
                                <NavLink exact to={`/products/${product.id }`} className="btn btn-success btn-md m-2" >View</NavLink>
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
