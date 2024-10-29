import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCart from '../utils/CartContext';
import { ToastContainer } from 'react-toastify';

const Products = ({ category }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_approved_products`)
        .then((res)=> res.json())
        .then((res)=>{
            setProducts(res);
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
            setLoading(false);
            setError(true)
        })
    },[])

    const filteredData = products.reverse().filter((item)=>{
        if(category === '' || category === null){
            return item;
        }else if(
            item.type.toLowerCase().includes(category.toLowerCase())
        ){
            return item;
        }
    })

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (data) => {
        addToCart({ ...data, quantity: Number(quantity) });
    }
    
    return ( 
        <div className='mt-2 lg:mt-5 mx-2 lg:mx-5'>
            <ToastContainer />
            {loading && <div className="text-center text-slate-500 text-md mb-5">Loading...</div>}
            <div className="text-center font-bold text-slate-500 text-md mb-1 capitalize">
                {category == null ?  (<div>All Furniture</div>) : category}
            </div>
            <div className="text-center text-slate-500 text-md mb-5 text-sm">({!loading && filteredData.length} items)</div>

            <div className='flex gap-4 lg:gap-5 flex-wrap font-montserrat justify-center'>
                {!loading && filteredData.map(item => (
                    <Link 
                        to={"/preview"} 
                        className='w-full md:w-1/5 h-96' 
                        key={item.productName} 
                        state={{ data: item }}
                    >
                        <div className='group relative bg-white p-2 rounded-lg lg:transform lg:transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 w-full h-full'>
                            {/* Image container with consistent size */}
                            <div className='flex justify-center items-center h-2/3 overflow-hidden'>
                                <img 
                                    src={`${process.env.REACT_APP_API_URL}/uploads/${item.image[0]}`} 
                                    alt={item.productName} 
                                    className='transition-all duration-300 object-cover w-full h-full rounded-md' 
                                />
                            </div>

                            {/* Product name */}
                            <div className='text-center font-bold mt-2 truncate'>{item.productName}</div>                    

                            {/* Price */}
                            <div className='text-center font-montserrat text-sm'>Ksh {item.price}</div>

                            {/* Collapsible description */}
                            <div className='text-center text-sm lg:max-h-10 lg:overflow-hidden group-hover:max-h-20 transition-all duration-300 text-gray-700 overflow-hidden text-ellipsis'>
                                {item.description}
                            </div>

                            {/* Add to Cart button */}
                            <div className='flex justify-center  transition-all duration-300'>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(item);
                                    }}
                                    className='bg-black hover:bg-gray-600 text-white p-2 text-sm uppercase rounded-lg mt-2'
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Products;
