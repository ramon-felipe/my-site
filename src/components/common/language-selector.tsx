import React from "react";
import Flags from 'country-flag-icons/react/3x2'
import { useTranslation } from "react-i18next";
import moment from "moment";
import '../../../public/locales/pt/pt'

const LanguageSelector = (): JSX.Element => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (l: string): void => {
        i18n.changeLanguage(l)
        moment.locale(l)
    }

    return (
        <div className='p-2'>
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
        </div>
    )
}

export default LanguageSelector;