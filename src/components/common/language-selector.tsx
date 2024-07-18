import React from "react";
import Flags from 'country-flag-icons/react/3x2'
import { useTranslation } from "react-i18next";
import moment from "moment";
import '../../../public/locales/pt/pt'
import { Col, Row } from "react-bootstrap";

const LanguageSelector = (): JSX.Element => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (l: string): void => {
        i18n.changeLanguage(l)
        moment.locale(l)
    }

    return (
        <Row>
            <Col>
                <a 
                    className="btn" 
                    role="button" 
                    onClick={() => handleLanguageChange('en')}
                >
                    <Flags.US style={{width:'2rem', height:'2rem'}} />
                </a>
                <a 
                    className="btn" 
                    role="button" 
                    onClick={() => handleLanguageChange('pt')}
                >
                    <Flags.BR style={{width:'2rem', height:'2rem'}} />
                </a>
            </Col>
        </Row>
    )
}

export default LanguageSelector;