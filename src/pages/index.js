import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Hero from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar toggle={toggle} isOpen={isOpen} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo} /> 
            <Services />           
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
