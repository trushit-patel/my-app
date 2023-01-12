import {useState , useEffect} from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      
    
      setLoading(true);
        
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
        .catch((e)=>{console.log(e);})
        .finally(()=> setLoading(false));
    }, []);


    const ShowProduct = () => {
        return (
            <section>
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top " style={{ height:'30rem' , width : "30rem"}} src={product.image} alt={product.title} /></div>
                    <div className="col-md-6 align-items-left text-start">
                        <div className="small mb-1 text-uppercase text-black-50">{product.category}</div>
                        <h1 className="display-5 ">{product.title}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$45.00</span>&nbsp;
                            <span className='display-6 fw-bold my-6'>${product.price}</span>  <span>Rating {product.rating && product.rating.rate} <i className="fa fa-star" aria-hidden="true"></i></span>
                        </div>
                        <p className="lead " >{product.description}</p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="number" defaultValue={1}  style={{ width: '4rem' }} />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
        
    }
    
  return (
    <div>
      {loading && <div><h3>Loading...</h3></div>}
      <ShowProduct/>
    </div>
  )
}

export default Product
