import Image from 'react-bootstrap/Image'
import React, { useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const PersonalSection = (): JSX.Element => {
    const imageRef = useRef(null);

    return (
        <Row >
            <Row>
                <Col className={styles.center}>                  
                    <Image 
                        src="/images/Ramon_no_background.png" 
                        alt="me"
                        width="150"
                        height="auto"
                        className="py-2 img-thumbnail"
                        roundedCircle
                        fluid
                        ref={imageRef}
                    />
                </Col>
            </Row>
            <Row>
                <Col className={styles.center}>
                    <h1>RAMON FELIPE ALVES DE ARRUDA SILVA</h1>
                </Col>
            </Row>
            <Row>
                <Col className={styles.center}>              
                    <span><b>GENDER: </b>Male</span>
                </Col>
                <Col className={styles.center}>
                    <span><b>NATIONALITY: </b>Brazilian</span>
                </Col>
            </Row>
            <Row>
                <Col className={styles.center}>
                    <i className="bi bi-envelope-at-fill pe-2 " style={{fontSize: '2rem', color: 'cornflowerblue'}}></i><span><b>EMAIL: </b>ramon.felipe@hotmail.com</span>
                </Col>
            </Row>
            <hr/>
        </Row>
    )
}

export default PersonalSection;