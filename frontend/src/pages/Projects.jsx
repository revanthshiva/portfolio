import React from 'react'
import raeImg from '../assets/rae.png'
import ecarImg from '../assets/ecar.png'
import hospitalImg from '../assets/hospital.png'
import { Link } from 'react-router-dom'
import './Projects.css'
const Projects = () => {
  const goto = (e) => {
    const value = e.target.value;
    sessionStorage.removeItem('setPageName');
    sessionStorage.setItem('setPageName', value);
    console.log(value);
    window.location.href = (value);

  }
  return (
    <>



      <section className='lg:flex  justify-center items-center w-100 h-lvh bg-[#eb5e28]  text-[#fffcf2] lg:mt-0  mt-20 mb-96  '>


        
        <div className='lg:gap-5 lg:flex-row animate-fade-left animate-once  lg:h-auto flex  flex-col justify-center items-center gap-12'>
          <div className="relative  flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img src={raeImg} alt="rae" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                RAE Enterprise resource planning Software
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Client : Composite Structures Australia
              </p>
            </div>
            <div className="p-6 pt-0">
              <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
              </button>
            </div>
          </div>
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img src={ecarImg} alt="ecar" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                ECAR Enterprise resource planning Software
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Client : Euro Float Australia
              </p>
            </div>
            <div className="p-6 pt-0">
              <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
              </button>
            </div>
          </div>
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img src={hospitalImg} alt="hospital" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Business Website
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                (Freelancing)
                Client : SAVAIKAR HOSPITAL is a Multispeciality hospital
              </p>
            </div>
            <div className="p-6 pt-0">
              <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
              </button>
            </div>
          </div>
        </div>
       
       





      </section>

      <div className='hidden lg:block'>
        <div className='absolute top-0 flex  h-lvh justify-end items-center right-20  '>
          <button className="button" onClick={goto} value="about" >
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

export default Projects