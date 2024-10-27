import React, { useState } from 'react'
import CarouselSection from './CarouselSection'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {

    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8173187770335!2d36.971052947174755!3d-1.283475340688941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6cbd139bdde1%3A0x699e5db139f1c28f!2sUtawala%20Crecent%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1730018859576!5m2!1sen!2ske";

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = () => {

        if(name ==  null || email == null || message == null){
            toast.error("All fields must be filled");
            return;
        }

        fetch(`${process.env.REACT_APP_API_URL}/send_message`,{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        })
        .then((res)=>{
            if(res.ok){
                toast.success("Message Sent Succesfully. We will get back to you in a moment");
                setTimeout(()=>{
                    window.location.reload()
                },700);
            }else{
                toast.error("Message Not Sent! Retry");
            }
        })
        .catch(errr=> {
            toast.error("Message Not Sent! Retry");
        })

    }
  return (
    <div>
        <ToastContainer />
        <div className="relative w-full h-56 lg:h-60">
          <img
            src={require('../images/carousel/pexels-fotoaibe-1571460.jpg')}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-xl lg:text-2xl font-bold text-white">Contact Us</h1>
          </div>
        </div>

        <div className='w-full lg:w-3/4 lg:mx-auto mt-5 text-sm font-montserrat mb-10 p-2 block lg:flex gap-5'>

        <div className='w-full lg:w-1/2 mx-1'>
            <div className='mb-2 text-xl font-bold tracking-wide'>Get in touch</div>
            <div className='mb-10 text-sm underline decoration-4 underline-offset-8 font-sans'>Reach Out – We're Here to Help!</div>
            <div className='flex gap-2 items-center mb-5'>
                <PhoneIcon sx={{fontSize:16}}/>
                <div>+254 792 228 028</div>
            </div>
            <div className='flex gap-2 items-center mb-5'>
                <EmailIcon sx={{fontSize: 16}} />
                <div>craftedfurniturecollectionke@gmail.com</div>
            </div>

            <iframe src={location} className='w-full h-56 border border-gray-300' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='bg-gray-300 p-4 w-full lg:w-1/2 rounded-lg text-sm mt-10 lg:mt-0'>
            <div className='mb-2 text-lg font-bold text-center'>Shoot us a message!</div>
            <div className='mt-2 text-sm font-bold'>Name</div>
            <input onChange={e => {
                setName(e.target.value);
            }} type="text" className='w-full rounded-md p-2 bg-white mt-2 text-sm' />
            <div className='mt-2 text-sm font-bold'>Email</div>
            <input type="email" onChange={e => {
                setEmail(e.target.value);
            }} className='w-full rounded-md p-2 bg-white mt-2 text-sm' />
            <div className='mt-2 text-sm font-bold'>Message</div>
            <textarea rows={5} onChange={e => {
                setMessage(e.target.value);
            }} className='w-full rounded-md p-2 bg-white mt-2 text-sm'></textarea>
            <button onClick={e => {
                e.preventDefault();
                handleSubmit();
            }} className='mt-5 flex justify-center gap-2 items-center bg-black hover:bg-gray-600 text-white p-2 mx-auto rounded-lg w-1/2'>
                <div>Send</div>
            </button>

        </div>
        </div>
    </div>
  )
}

export default ContactUs