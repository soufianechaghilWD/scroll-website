import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarRoute, SideBtnWrap, SidebarLink, SidebarMenu, SidebarWraper } from "./SidebarElements"

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discovre" onClick={toggle}>Discovre</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" >Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWraper>
        </SidebarContainer>
    )
}

export default SideBar
