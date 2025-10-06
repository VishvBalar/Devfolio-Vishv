import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
     sectionRef.current
    }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'> 
            <div className='showcaselayout'>
            {/*Left : Showcase Content */}
            <div className='first-project-wrapper' ref={project1Ref}>
                <div className='image-wrapper'>
                    <img src='/images/project1.png' alt='project-1' />
                </div>
                <div className='text-content'>
                    <h2>On-Demand Rides Made Simple With A Powerful, User-Friendly App Called Ryde</h2>
                    <p className='text-white-50 md:text-xl'>An app built with React Native, & TailwindCSS for a fast, user-friendly experiance.</p>
                </div>
            </div>
            {/*Right : Showcase Content */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src='/images/project2.png' alt='project-2'/>
                    </div>
                    <h2>Library Management Platfrom</h2>
                </div>
                <div className='project' ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src='/images/project3.png' alt='project-2'/>
                    </div>
                    <h2>YC Directory - A Startup Showcase App</h2>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase