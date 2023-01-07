import Image from 'react-bootstrap/Image'
import React, { useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
import useIconsSvg, { IiconSvgProps } from '../hooks/useIconsSVG'

const PersonalSection = (): JSX.Element => {
    const imageRef = useRef(null);
    const svgIcons = useIconsSvg();

    const mailIconStyle: IiconSvgProps = {
        style: {color: 'cornflowerblue', width: '40', height: '40'}
    }

    const wppIconStyle: IiconSvgProps = {
        style: {color: 'green', width: '35', height: '35'}
    }

    const gender = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={4} xl={3}>              
                <span><b>GENDER: </b>Male</span>
            </Col>
        )
    }

    const nationality = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={4} xl={3}>
                <span><b>NATIONALITY: </b>Brazilian</span>
            </Col>
        )
    }

    const email = (): JSX.Element => {
        return (
            <Col className={styles.center}  sm={12} md={5} xl={3}>
                <a href="mailto:ramon.felipe@hotmail.com?subject=Contato">
                    { svgIcons.mailAtIcon(mailIconStyle) }
                    <span className='ps-2'>ramon.felipe@hotmail.com</span>
                </a>
            </Col>
        )
    }

    const wpp = (): JSX.Element => {
        return (
            <Col className={styles.center}  sm={12} md={5} xl={3}>
                <a href="https://api.whatsapp.com/send?phone=5511934204993" target='_blank' rel="noreferrer">
                    { svgIcons.wppIcon(wppIconStyle) }
                    <span className='ps-2'>+55 11 93420 4993</span>
                </a>
            </Col>
        )
    }

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
                { gender() }
                { nationality() }
                { email() }
                { wpp() }
            </Row>

            <div>
                <hr/>
            </div>
        </>
    )
}

export default PersonalSection;