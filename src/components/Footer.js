import React, { useEffect, useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    const [year, setYear] = useState(null);

    useEffect(()=>{
        const date =  new Date();

        setYear(date.getFullYear());
    },[]);

    const navigate = useNavigate();

    const [eventsLoading, setEventsLoading] = useState(true);
    const [events, setEvents] = useState([]);

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [eventsError, setEventsError] = useState(false);

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
    <div className='w-full font-montserrat bg-black p-2 mt-5'>
        <div className='block lg:flex gap-4 w-full justify-evenly mb-2 mt-4'>
            <div className='mb-4'>
                <div className='flex gap-2 items-center'>
                    <img src={require("../images/logo.jpeg")} className='w-10 lg:w-20 p-2 rounded-lg' />
                    <span className='text-white font-bold text-base lg:text-lg'>Crafted Furniture Collection</span>
                </div>
                <div className='flex items-center mt-4 gap-2'>
                    <LocationOnIcon sx={{color: 'white', fontSize: 20}}/>
                    <button className='block text-gray-400 hover:text-gray-600 uppercase text-xs'>Bakhita - Crescent Road, Utawala Nairobi.</button>
                </div>
                <div className='flex items-center mt-2 gap-2'>
                    <CallIcon sx={{color: 'white', fontSize: 20}} />
                    <button className='block text-gray-400 hover:text-gray-600 uppercase text-xs'>+254 792 228 028</button>
                </div>
                <div className='flex items-center mt-2 gap-2'>
                    <MailIcon sx={{color: 'white', fontSize: 20}} />
                    <button className='block text-gray-400 hover:text-gray-600 uppercase text-xs'>craftedfurniturecollectionke@gmail.com</button>
                </div>
                
                <div className='flex my-5 gap-4 items-center text-white'>
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
                        <img src={require('../images/twitter (2).png')} className='w-4'/>
                    </Link>
                    <Link to={"https://www.threads.net/@craftedfurniturecollectionke?invite=0"} target='_blank'>
                        <img src={require('../images/threads (1).png')} className='w-5'/>
                    </Link>
                    <Link to={"https://www.tiktok.com/@craftedfurniturekenya?_t=8qtdZmsanFW&_r=1"} target='_blank'>
                        <img src={require('../images/tik-tok.png')} className='w-5'/>
                    </Link>                                
                </div>

            </div>

            <div className='mb-0 lg:mb-4 mt-10 lg:mt-0'>
                <div className='font-bold text-white'>OUR COMPANY</div>

                <Link onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
                to={"/about_us"} className='block text-gray-400 hover:text-gray-600 mt-2 uppercase text-xs'>About Us</Link>

                <Link 
                onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
                to={"/contact_us"} className='block text-gray-400 hover:text-gray-600 mt-2 uppercase text-xs'>Contact Us</Link>

                <Link onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
                to={"/howitworks"} className='block text-gray-400 hover:text-gray-600 mt-2 uppercase text-xs'>How it Works</Link>

                <Link 
                onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
                to={"/faq"} className='block text-gray-400 hover:text-gray-600 mt-2 uppercase text-xs'>FAQ</Link>

                <Link 
                onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
                to={"/terms"} className='block text-gray-400 hover:text-gray-600 mt-2 uppercase text-xs'>Terms & Conditions</Link>

                <Link onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
                to={"/return"} className='block text-gray-400 hover:text-gray-600 mt-2 uppercase text-xs'>Return Policy</Link>
            </div>

            <div className='mb-0 lg:mb-4 h-0 lg:h-max hidden lg:block'>
                <div className='h-0 lg:h-max collapse lg:visible font-bold text-white mb-2 block'>SHOP</div>
                {
                    !loading && !error && categories.length > 0 && categories.slice(0,6).map(category => 
                        <div>
                        <Link to={"/categoryproducts"} state={{ category }} className='h-0 lg:h-max collapse lg:visible text-gray-400 hover:text-gray-600 mt-2 uppercase text-xs cursor-pointer '>
                            {category.category}
                        </Link>
                        </div>
                    )
                }
            </div>

            </div>
      <div className='text-center p-2 text-xs mt-3 font-bold text-white'>
        Crafted Furniture Collections &copy; {year}
      </div>
    </div>
  )
}

export default Footer
