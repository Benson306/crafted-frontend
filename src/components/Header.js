import React, { useContext, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import useCart from '../utils/CartContext';
import { AuthContext } from '../utils/AuthContext';
import GradingIcon from '@mui/icons-material/Grading';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Header() {
    const { products } = useCart();
    const { token, logout } = useContext(AuthContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // state to toggle mobile menu
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        window.location.reload();
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get_categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data);
            setLoading(false);
        })
        .catch(()=>{
            setError(true);
            setLoading(false);
        })
    },[])

    return (
        <div className='bg-white fixed top-0 w-full z-50'>
        <div className='flex lg:hidden justify-center bg-white p-2 text-xs'>
            <div className='border-r border-gray-900 px-2'>craftedfurniturecollectionke@gmail.com</div>
            <div className='px-1'>+254 792 228 028</div>
        </div>
        <div className='flex lg:hidden justify-center gap-4 items-center'>
            <Link to={"https://www.facebook.com/craftedfurniturecollectionke?mibextid=ZbWKwL"} target='_blank'>
                <FacebookIcon />
            </Link>
            <Link to={"https://www.instagram.com/craftedfurniturecollectionke/profilecard/?igsh=MXFicnA1bnNsOGgxMQ=="} target='_blank'>
                <InstagramIcon />
            </Link>
            <Link to={"https://youtube.com/@craftedfurniturecollectionkelt?si=-pP-NM2eQJcvnrgt"} target='_blank'>
                <YouTubeIcon />
            </Link>
            <Link to={"https://x.com/craftedfurkenya?t=-RJG8Yhwvtm7_pdFe2S82A&s=08"} target='_blank'>
                <img src={require('../images/twitter (1).png')} className='w-4'/>
            </Link>
            <Link to={"https://www.threads.net/@craftedfurniturecollectionke?invite=0"} target='_blank'>
                <img src={require('../images/threads.png')} className='w-5'/>
            </Link>
            <Link to={"https://www.tiktok.com/@craftedfurniturekenya?_t=8qtdZmsanFW&_r=1"} target='_blank'>
                <img src={require('../images/tik-tok.png')} className='w-5'/>
            </Link>                                
        </div>
        <div className='flex justify-between items-center border-b border-gray-200 w-full p-2 font-montserrat z-10'>
            <div className='flex items-center ml-1 lg:ml-5' onClick={()=>{
                navigate("/")
            }}>
                <img 
                    src={require('../images/logo.jpeg')} 
                    className='w-12 max-w-full h-auto' 
                    alt="Logo"
                />
            </div>

            <div className='flex items-center'>
                {/* Desktop Menu */}
                <div className='flex items-center gap-5 justify-end'>
                    <ul className='uppercase mr-1 lg:mr-5 tracking-wider text-sm'>
                        <div className='flex gap-4 items-center lowercase'>
                            <div className='hidden lg:block border-r border-gray-900 px-2'>craftedfurniturecollectionke@gmail.com</div>
                            <div className='hidden lg:block px-2'>+254 792 228 028</div>
                            <div className='hidden lg:flex gap-4 mr-20 items-center'>
                                <Link to={"https://www.facebook.com/craftedfurniturecollectionke?mibextid=ZbWKwL"} target='_blank'>
                                    <FacebookIcon />
                                </Link>
                                <Link to={"https://www.instagram.com/craftedfurniturecollectionke/profilecard/?igsh=MXFicnA1bnNsOGgxMQ=="} target='_blank'>
                                    <InstagramIcon />
                                </Link>
                                <Link to={"https://youtube.com/@craftedfurniturecollectionkelt?si=-pP-NM2eQJcvnrgt"} target='_blank'>
                                    <YouTubeIcon />
                                </Link>
                                <Link to={"https://x.com/craftedfurkenya?t=-RJG8Yhwvtm7_pdFe2S82A&s=08"} target='_blank'>
                                    <img src={require('../images/twitter (1).png')} className='w-4'/>
                                </Link>
                                <Link to={"https://www.threads.net/@craftedfurniturecollectionke?invite=0"} target='_blank'>
                                    <img src={require('../images/threads.png')} className='w-5'/>
                                </Link>
                                <Link to={"https://www.tiktok.com/@craftedfurniturekenya?_t=8qtdZmsanFW&_r=1"} target='_blank'>
                                    <img src={require('../images/tik-tok.png')} className='w-5'/>
                                </Link>                                
                            </div>
                            
                            <Link to={'/cart'} className='hidden lg:flex items-center px-2 hover:'>
                                <ShoppingCartIcon fontSize={'small'} />
                                <sup className="text-black">{products.length}</sup>
                            </Link>

                            {token !== null ? (
                                <div className='relative'>
                                    <div className='hover:underline hover: p-1 rounded-2xl flex items-center cursor-pointer border border-gray-400 px-2 py-1' onClick={toggleDropdown}>
                                        <PersonIcon sx={{fontSize: 20}} />
                                    </div>

                                    {dropdownVisible && (
                                        <div className='fixed z-50 right-0 mt-2 w-40 bg-gray-100 shadow-lg rounded-md py-2'>
                                            <button 
                                                onClick={() => {
                                                    navigate('/profile');
                                                    toggleDropdown();
                                                }} 
                                                className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-900 flex gap-2 items-center'
                                            >
                                                <PersonIcon sx={{fontSize: 16}} />
                                                <span>My profile</span>
                                            </button>
                                            <button onClick={() => {
                                                    navigate('/orders');
                                                    toggleDropdown();
                                                }} className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-900 flex gap-2 items-center'>
                                                    <GradingIcon sx={{fontSize: 16}} />
                                                    <span>My Orders</span>
                                                </button>
                                            <button 
                                                onClick={() => {
                                                    handleLogout();
                                                    toggleDropdown();
                                                }} 
                                                className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-900 flex gap-2 items-center'
                                            >
                                                <LogoutIcon sx={{fontSize: 16}} />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>

                                <Link to={"/login"} className='hidden lg:block hover:bg-black hover:text-white hover: p-1 rounded-2xl capitalize border border-gray-400 px-2 py-1'>
                                    Login/Register
                                </Link>
                                <Link to={"/login"} className='block lg:hidden hover:bg-black hover:text-white hover: p-1 rounded-2xl capitalize border border-gray-400 px-2 py-1'>
                                    <PersonIcon sx={{fontSize: 20}} />
                                </Link>
                            </div>
                            )}
                        </div>
                    </ul>
                </div>

                {/* Mobile Menu and Icons */}
                <div className='lg:hidden flex items-center justify-end'>
                    <Link to={'/cart'} className='flex items-center px-2 hover:'>
                        <ShoppingCartIcon fontSize={'small'} />
                        <sup className="text-black">{products.length}</sup>
                    </Link>
                    <div className='ml-2 cursor-pointer' onClick={toggleMenu}>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </div>
            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className='lg:hidden absolute top-28 right-0 w-full bg-gray-100 shadow-lg rounded-md py-2 z-50'>
                    <ul className='flex flex-col items-center gap-3'>
                    <Link to={"/"} className='hover:underline hover: p-1 rounded-2xl' onClick={toggleMenu}>Home</Link>
                        {
                            categories.slice(0,11).map(category => (
                                <Link to={"/categoryproducts"} state={{ category }} className='hover:underline hover: p-1 rounded-2xl' onClick={toggleMenu}>{category.category}</Link>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
        <div className='hidden lg:flex items-center justify-between shadow-md rounded-b-sm shadow-slate-400 w-full p-2 font-montserrat z-10 text-sm font-bold uppercase py-4'>
            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center gap-10 mx-auto'>
                <div className='border border-gray-400 rounded-2xl px-2 py-1 hover:bg-black hover:text-white'>
                    <Link to={"/"} className='' onClick={toggleMenu}>Home</Link>
                </div>
                {
                    categories.slice(0,7).map(category => (
                        <Link to={"/categoryproducts"} state={{ category }} className='hover:underline'>{category.category}</Link>
                    ))
                }
                {
                categories.length > 7 && (
                    <div className="border border-gray-400 rounded-2xl px-2 py-1">
                        <select
                        className="p-2 rounded-md border-none text-black font-bold"
                        onChange={(e) => {
                            const selectedCategory = categories.find(
                            (cat) => cat.category === e.target.value
                            );
                            if (selectedCategory) {
                            // Navigate to the selected category page and close the menu
                            navigate("/categoryproducts", { state: { category: selectedCategory } });
                            toggleMenu();
                            }
                        }}
                        defaultValue=""
                        >
                        <option value="" disabled>Select More Categories</option>
                        {categories.slice(7).map((category) => (
                            <option key={category._id} value={category.category}>
                            {category.category}
                            </option>
                        ))}
                        </select>
                    </div>
                )}
            </div>
        </div>  
        </div>
    );
}

export default Header;
