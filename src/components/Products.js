import { Link, useFetcher } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCart from '../utils/CartContext';
import { ToastContainer } from 'react-toastify';
import SellIcon from '@mui/icons-material/Sell';

const Products = ({ category }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    //const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/get_approved_products`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setError(true);
            });
    }, []);

    const filteredData = products.filter((item) => {
        if (category === '' || category === null) {
          return item;
        } else if (item.type && item.type.includes(category)) {
          return item;
        }
      });

    // Filtering products based on category
    // useEffect(() => {
    //     let filteredResult = 
    //     setFilteredData(filteredResult);
    // }, [category, products]); // Added products to the dependency array

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (data) => {
        addToCart({ ...data, quantity: Number(quantity) });
    };

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
                        className='w-full md:w-1/4 p-2' 
                        key={item._id } 
                        state={{ data: item }}
                    >
                        <div className='group relative bg-white p-2 rounded-lg lg:transform lg:transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 w-full h-full'>
                            <div className='flex justify-center items-center h-2/3 overflow-hidden'>
                                <img 
                                    src={`${process.env.REACT_APP_API_URL}/uploads/${item.image[0]}`} 
                                    alt={item.productName} 
                                    className='transition-all duration-300 object-contain w-full h-56 rounded-md' 
                                />
                            </div>

                            <div className='h-1/3'>
                                <div className='text-center font-bold mt-1 truncate'>{item.productName}</div>
                                <div className='text-center font-montserrat text-xs flex justify-center gap-2'>
                                    <div>Was</div> <div className='line-through'>Ksh {Number(item.beforePrice).toLocaleString()}</div>
                                </div>
                                <div className='text-center font-montserrat text-sm flex justify-center gap-2 font-bold'>
                                    <div>Now</div> <div className=''>Ksh {item.price.toLocaleString()}</div>
                                </div>
                                <div className='flex justify-center items-center gap-1 text-xs text-red-500'>
                                    <SellIcon sx={{fontSize: 14}} /> Save { Number(item.beforePrice - item.price).toLocaleString()}/=
                                </div>
                                <div className='flex justify-center transition-all duration-300 mb-5'>
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleAddToCart(item);
                                        }}
                                        className='bg-black hover:bg-gray-600 text-white p-1 px-2 text-sm uppercase rounded-lg mt-2'
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Products;
