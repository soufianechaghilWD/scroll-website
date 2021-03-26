import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWraper, ArrowForward, ArrowRight } from "./HeroElements"
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

const Hero  = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for new account today and receive 250$ in credit towards your next payment. 
                </HeroP>
                <HeroBtnWraper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWraper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero 
