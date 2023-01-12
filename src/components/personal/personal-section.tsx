import Image from 'react-bootstrap/Image'
import React, { useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import useIconsSvg, { IiconSvgProps } from '../../hooks/useIconsSVG'
import { useTranslation } from 'react-i18next'
import '../../extensions/string-extensions'

const PersonalSection = (): JSX.Element => {
    const { t } = useTranslation();

    const imageRef = useRef(null);
    const svgIcons = useIconsSvg();

    const mailIconStyle: IiconSvgProps = {
        style: {color: 'cornflowerblue', width: '2rem', height: '2rem'}
    }

    const wppIconStyle: IiconSvgProps = {
        style: {color: 'green', width: '2rem', height: '2rem'}
    }

    const linkedinIconStyle: IiconSvgProps = {
        style: {color: 'cornflowerblue', width: '2rem', height: '2rem'}
    }

    const gender = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={4} xl={3}>
                <span><b>{t('gender').UpperCaseFirstLetter()}: </b>{t('male').UpperCaseFirstLetter()}</span>
            </Col>
        )
    }

    const nationality = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={4} xl={3}>
                <span><b>{t('nationality').UpperCaseFirstLetter()}: </b>{t('brazilian').UpperCaseFirstLetter()}</span>
            </Col>
        )
    }

    const email = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={5} xl={3}>
                <a href="mailto:ramon.felipe@hotmail.com?subject=Contato">
                    { svgIcons.mailAtIcon(mailIconStyle) }
                    <span className='ps-2'>ramon.felipe@hotmail.com</span>
                </a>
            </Col>
        )
    }

    const wpp = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={5} xl={3}>
                <a href="https://api.whatsapp.com/send?phone=5511934204993" target='_blank' rel="noreferrer">
                    { svgIcons.wppIcon(wppIconStyle) }
                    <span className='ps-2'>+55 11 93420 4993</span>
                </a>
            </Col>
        )
    }

    const medium = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={6} xl={3}>
                <a href="https://medium.com/@ramon_arruda_it" target='_blank' rel="noreferrer">
                    { svgIcons.mediumIcon() }
                    <span className='ps-2 d-none d-sm-inline'>medium.com/@ramon_arruda_it</span>
                    <span className='ps-2 d-sm-none'>@ramon_arruda_it</span>
                </a>
            </Col>
        )
    }

    const linkedin = (): JSX.Element => {
        return (
            <Col className={styles.center} sm={12} md={6} xl={3}>
                <a href="https://www.linkedin.com/in/ramonarruda-it/" target='_blank' rel="noreferrer">
                    { svgIcons.linkedinIcon(linkedinIconStyle) }
                    <span className='ps-2 d-none d-sm-inline'>linkedin.com/in/ramonarruda-it</span>
                    <span className='ps-2 d-sm-none'>ramonarruda-it</span>
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
                <h1 className="d-none d-sm-none d-md-block">RAMON FELIPE ALVES DE ARRUDA</h1>
                <h1 className="d-none d-sm-block d-md-none">RAMON FELIPE DE ARRUDA</h1>
                <h1 className="d-block d-sm-none">RAMON FELIPE</h1>
            </div>

            <Row className={styles.center}>
                { gender() }
                { nationality() }
                <Row className={styles.center}>
                    { email() }
                    { wpp() }
                    { medium() }
                    { linkedin() }
                </Row>
            </Row>

            <div>
                <hr/>
            </div>
        </>
    )
}

export default PersonalSection;