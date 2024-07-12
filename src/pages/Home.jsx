import React, { useEffect } from 'react'
import './Home.css'
import MyPic from '../assets/me.png'
import Logo from '/sitelogo.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const goto = (e) => {
    const value = e.target.value;
    sessionStorage.removeItem('setPageName');
    sessionStorage.setItem('setPageName', value);
    console.log(value);
    window.location.href = (value);

  }

  return (
    <>
      <section className='lg:flex justify-center items-center w-100 lg:h-lvh bg-[#eb5e28]  text-[#fffcf2] lg:text-justify'>


        <div className='animate-fade-left animate-once lg:p-10'>

          <div className=' lg:max-w-4xl  lg:mx-auto  '>

            <img src={Logo} alt="logo" className='lg:hidden w-100 h-40 block ml-auto mr-auto mt-10' />
            <h1 className='text-9xl text-center lg:text-left  lg:mt-0 '>Hello,</h1>

            <p className='mt-12  lg:mt-12 p-12 lg:p-0  '>I am a freelance Software Developer with a passion for creating robust IT solutions and ensuring cybersecurity. I specialize in designing, implementing, and maintaining IT systems for various clients, along with providing ethical hacking and cybersecurity services to safeguard data and networks.
            </p>

          </div>

          <div className='mt-12 lg:flex lg:gap-5 hidden'>
            <Link to='https://github.com/revanthshiva'
              className=" group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
            >
              <svg
                className="w-6 h-6 fill-neutral-50"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <path
                  className="svg-fill-primary"
                  d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                ></path>
              </svg>
              Github
            </Link>
            <Link
              to='/RevanthShiva.pdf'
              target='_blank'
              className=" cursor-pointer group flex justify-center items-center gap-2 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden duration-500 hover:border-neutral-900 hover:underline hover:underline-offset-4 hover:text-neutral-300 hover:decoration-2">
              <svg className="w-6 h-6 fill-neutral-50"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512"
                width="100"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <path
                  className="svg-fill-primary" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
              Download CV
            </Link>





          </div>

        </div>


        <div className="h-2/3 w-50 rounded-full overflow-hidden animate-fade animate-once hidden lg:block">
          <img
            src={MyPic}
            alt="myPic"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 origin-center"
          />
        </div>


        <div className='lg:hidden  z-50 p-5 mt-[-50px]'>
          <img src={MyPic} alt="" className='  w-full h- rounded-full' />
          <div className='mt-5 flex flex-col justify-center items-center  gap-5'>

            <button
              className=" group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
            >
              <svg
                className="w-6 h-6 fill-neutral-50"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <path
                  className="svg-fill-primary"
                  d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                ></path>
              </svg>
              Github
            </button>
            <a
              href='/RevanthShiva.pdf'
              //  target='resume'
              className="group flex justify-center items-center gap-2 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden duration-500 hover:border-neutral-900 hover:underline hover:underline-offset-4 hover:text-neutral-300 hover:decoration-2">
              <svg className="w-6 h-6 fill-neutral-50"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512"
                width="100"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <path
                  className="svg-fill-primary" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
              Download CV
            </a>


          </div>

        </div>



      </section>




      <div className='hidden lg:block'>
        <div className='absolute top-0 flex h-lvh justify-end items-center right-20  '>
          <button className="button" onClick={goto} value="projects" >
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

export default Home