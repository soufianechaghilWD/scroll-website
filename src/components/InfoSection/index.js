import React from 'react'
import { Button } from '../ButtonElement'
import { Column2, Img, ImgWrap, InfoContainer, InfoWraper, InfoRow, Column1, TextWraper, TopLine, Heading, Subtitle, BtnWrap,  } from './InfoElements'

const InfoSection = ({ id, lightBg, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWraper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWraper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText} >{headline}</Heading>
                                <Subtitle darkText={darkText} >{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWraper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWraper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
