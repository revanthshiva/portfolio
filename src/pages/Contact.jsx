import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
const Contact = () => {
    const goto = (e) => {
        const value = e.target.value;
        sessionStorage.removeItem('setPageName');
        sessionStorage.setItem('setPageName', value);
        console.log(value);
        window.location.href = (value);

    }
    return (
        <>
            <section className='flex  justify-center items-center w-100 h-lvh bg-[#eb5e28]  text-[#fffcf2] p-20 '>



                <div className="w-full lg:max-w-[800px] w-lvw backdrop-blur-sm bg-white/70 rounded-lg shadow-md p-6 animate-fade-left">
                    <h2 className="text-2xl font-bold text-[#eb5e28] mb-4">Contact Form</h2>

                    <form className="flex flex-col">
                        <input type="text" className="bg-[#eb5e28] text-black border-0 rounded-md p-2 mb-4 focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 placeholder:text-white" placeholder="Full Name" />
                        <input type="email" className="bg-[#eb5e28] text-black border-0 rounded-md p-2 mb-4 focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 placeholder:text-white" placeholder="Email" />



                        <textarea name="message" rows={8} className="bg-[#eb5e28] text-black border-0 rounded-md p-2 mb-4 focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 placeholder:text-white" placeholder="Message"></textarea>

                        <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#eb5e28] hover:text-black transition ease-in-out duration-150">Send Message !</button>
                    </form>

                </div>


            </section>

            <div className='hidden lg:block'>
                <div className='absolute top-0 flex  h-lvh justify-end items-center right-20  '>             
                    <button className="button" onClick={goto} value="/" >
                    <div className="line one">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>

                    </div>
                    <div className="line two">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>

                    </div>
                    <div className="line three">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>

                    </div>
                    <div className="line four">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>

                    </div>

                    <div className="line five">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>

                    </div>

                    <div className="line six">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>

                    </div>

                    <div className="line seven">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>

                    </div>
                </button>
                </div>
            </div>

        </>
    )
}

export default Contact