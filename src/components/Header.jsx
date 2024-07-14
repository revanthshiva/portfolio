import React, { useEffect, useState } from 'react';

import './Header.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        
    };


    const [pageName, setPageName] = useState('Loading...');

    useEffect(() => {
        const getPageName = sessionStorage.getItem('setPageName');
        console.log(getPageName);
        switch(getPageName){
            case '/' :
                setPageName('Portfolio')
                break
            case '/projects' :
                setPageName('Spotlight')
                break
            case '/about' :
                setPageName('About')
                break
            case '/contact' :
                setPageName('Contact')
                break
            default :
                setPageName('Loading..')
               break
        }
        
    },[]);

    
    const goto = (e) => {
        setIsOpen(!isOpen);
        const value = e.target.value;
        sessionStorage.setItem('setPageName', value)
        console.log(value);
        window.location.href=(value);

    }

    return (


        <>

            <div className=" relative w-full h-24 flex items-center justify-between  text-white mb-[-50px]  p-4 ">
                <div className="text-2xl  lg:mt-28 lg:ml-32 ">
                    <button onClick={goto} value="/" >{pageName}</button>
                </div>
                <button
                    className="md:hidden p-4 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <div className="space-y-2">
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                    </div>
                </button>
                <ul className="hidden md:flex justify-center items-center gap-10 mr-32 mt-28">
                    <li>
                        <button onClick={goto} value="/" >Home</button>
                    </li>
                    <li>
                        <button onClick={goto} value="projects" >Projects</button>
                    </li>
                    <li>
                        <button onClick={goto} value="about" >About</button>
                    </li>
                    <li>
                        <button onClick={goto} value="contact" >Contact</button>
                    </li>

                    <div className="social-buttons">
                        <a href="https://github.com/revanthshiva" className="social-button github">
                            <svg className="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/revanthshiva" className="social-button linkedin">
                            <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Icons" stroke="none" strokeWidth="1">
                                    <g transform="translate(-702.000000, -265.000000)">
                                        <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="mailto:revanthshiva3@gmail.com" className="social-button mail">
                            <svg width="800px" height="800px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <linearGradient id="6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1" x1="15.072" x2="24.111" y1="13.624" y2="24.129" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e3e3e3"></stop><stop offset="1" stopColor="#e2e2e2"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1)" d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2" x1="26.453" x2="36.17" y1="25.441" y2="37.643" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f5f5f5"></stop><stop offset=".03" stopColor="#eee"></stop><stop offset="1" stopColor="#eee"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2)" d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3" x1="3" x2="45" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d74a39"></stop><stop offset="1" stopColor="#c73d28"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3)" d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8	H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4" x1="24" x2="24" y1="8" y2="38.181" gradientUnits="userSpaceOnUse"><stop offset="0" stopOpacity=".15"></stop><stop offset="1" stopOpacity=".03"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4)" d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5" x1="3" x2="45" y1="17.73" y2="17.73" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f5f5f5"></stop><stop offset="1" stopColor="#f5f5f5"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5)" d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278	C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6" x1="24" x2="24" y1="8.446" y2="27.811" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e05141"></stop><stop offset="1" stopColor="#de4735"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6)" d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278	c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/phoenix___rider/" className="social-button instagram">
                            <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth="1">
                                    <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>

                </ul>

            </div>
            {isOpen && (
                <ul className="md:hidden text-white text-center mt-10   p-4 space-y-4">
                    <li>
                        <button onClick={goto} value="/">Home</button>
                    </li>
                    <li>
                        <button onClick={goto} value="projects">Projects</button>
                    </li>
                    <li>
                        <button onClick={goto} value="about">About</button>
                    </li>
                    <li>
                        <button onClick={goto} value="contact">Contact</button>
                    </li>
                </ul>
            )}
        </>
    );
};

export default Header;
