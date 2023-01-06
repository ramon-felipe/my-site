import Image from 'react-bootstrap/Image'
import React, { useRef } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const PersonalSection = (): JSX.Element => {
    const imageRef = useRef(null);

    return (
        <>
            <div className={styles.center}>
                    <Image 
                        src="/images/Ramon_no_background_.png" 
                        alt="me"
                        width="150"
                        height="auto"
                        className="py-2 img-thumbnail"
                        roundedCircle
                        fluid
                        ref={imageRef}
                    />
            </div>
            <div className={styles.center}>
                <h1 className="d-none d-md-block d-lg-none">RAMON FELIPE ALVES DE ARRUDA</h1>
                <h1 className="d-none d-sm-block d-md-none">RAMON FELIPE DE ARRUDA</h1>
                <h1 className="d-block d-sm-none">RAMON FELIPE</h1>
            </div>
            <Row className={styles.center}>
                <Col className={styles.center} sm={12} md={4} xl={3}>              
                    <span><b>GENDER: </b>Male</span>
                </Col>
                <Col className={styles.center} sm={12} md={4} xl={3}>
                    <span><b>NATIONALITY: </b>Brazilian</span>
                </Col>
            </Row>
            <Row className={styles.center}>
                <Col xs={1} className="w-auto p-0">
                    <i className="bi bi-envelope-at-fill" style={{fontSize: '2rem', color: 'cornflowerblue'}}></i>
                </Col>
                <Col xs={3}>
                    <a href="mailto:ramon.felipe@hotmail.com?subject=Contato">
                        <b>EMAIL: </b>
                        <span>ramon.felipe@hotmail.com</span>
                    </a>
                </Col>
            </Row>
            <div>
                <hr/>
            </div>
        </>
    )
}

export default PersonalSection;