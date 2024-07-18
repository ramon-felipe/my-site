import React, { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import LanguageSelector from "./common/language-selector";
import CvDownload from "./cv-download/cv-download";

const MenuNav = (): JSX.Element => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar 
            onBlur={() => setExpanded(false)} 
            collapseOnSelect 
            expanded={expanded} 
            expand="md" 
            variant="light" 
            bg="light" 
            sticky="top"
            className="shadow"
        >            
            <Container fluid  className="justify-content-end">
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav"/>                
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                    <Nav className="justify-content-xs-end">
                            <CvDownload />
                            <LanguageSelector />
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuNav;