import { Link,useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        sessionStorage.setItem("setPageName", '/about');
    }, [])

    const navigate = useNavigate();
    const goto = (e) => {
        const value = e.target.value;
        sessionStorage.removeItem('setPageName');
        sessionStorage.setItem('setPageName', value);
        console.log(value);
        navigate('/' + value);
    }
    return (
        <>
            <section className='lg:flex  justify-center items-center w-100 h-lvh bg-[#eb5e28]  text-[#fffcf2] lg:p-20 p-10 mt-20 lg:mt-0  mb-96'>


            

                <div className="lg:text-justify lg:w-[1000px]  " >
                    
                    <div className=''>
                        <p>
                            I am a freelance Software Developer with a passion for creating robust IT solutions and ensuring cybersecurity. I specialize in designing, implementing, and maintaining IT systems for various clients, along with providing ethical hacking and cybersecurity services to safeguard data and networks. My certifications include Python, Network Virtualization, and Cybersecurity Essentials from reputable organizations. <br /> <br /> <br />

                            In addition to freelance software development, I have extensive experience in Full Stack Development, specializing in Website Development and Troubleshooting. I have crafted and managed multiple websites for diverse businesses and organizations, utilizing technologies like HTML, CSS, JavaScript, WordPress, and Bootstrap. I also offer tutoring and coaching services in ethical hacking, social media management, digital marketing, and search engine optimization. <br /> <br /> <br />


                            I hold a Bachelor of Engineering in Mechatronics Engineering from Hindusthan College of Engineering and Technology, where I integrated mechanical, electrical, and computer engineering principles to devise innovative solutions. I am committed to continuous learning, exploring new domains, and collaborating with clients to achieve their goals. <br /> <br /> <br />

                        </p>

                        <div>
                            <h1 className='text-xl font-bold text-[#252422]'>Revanth Shiva P S</h1>
                            <p className='text-gray-900'>Software Engineer</p>
                        </div>
                    </div>
                </div>




            </section>


            {/* <div className='hidden lg:block'>
                <div className='absolute top-0 flex  h-lvh justify-end items-center right-20  '>           
                        <button className="button" onClick={goto} value="contact" >
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
            </div> */}
        </>
    )
}

export default About