import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import statistics from '../Image/statistics.png'

const GithubCalendar = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <>
            <h1 className='name'>Github Stats</h1>
            <p style={{ color : 'white' }} >An overview of my GitHub statistics showcasing collaboration within the development community.</p>
            <div className='container'>
                <div className='row'>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000" className='col-12 my-5'>
                        <img className='w-100 w-sm-75' id="github-streak-stats" src="https://ghchart.rshah.org/nishantkr163" alt="Github calendar" />
                    </div>
                </div>
                {/* <img src='https://github-readme-stats.vercel.app/api/pin/?username=nishantkr163&repo=github-readme-stats' alt='pin bar' /> */}
                <div data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000" className='row d-flex justify-content-around align-items-center' >
                    <div style={{ textAlign: 'center' }} className='col-lg-4 col-md-8 d-flex flex-column justify-content-around' >
                        <img className='my-3' id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=nishantkr163&theme=transparent&bg_color=00000000" alt='Git stats' />
                        <img className='my-3'  id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com/?user=nishantkr163&theme=blue-navy&theme=transparent' alt='Streak Stats' />
                    </div>
                    <div className='col-lg-4 my-3 col-md-8' >
                        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=nishantkr163&layout=pie&show_icons=true&theme=transparent&bg_color=00000000" alt='most language used' />
                    </div>
                    <div className='col-lg-4 d-none d-xl-flex' >
                        <img className='contact_image' width={"100%"} src={statistics} alt='statistics' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default GithubCalendar