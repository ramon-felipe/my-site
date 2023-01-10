import React from "react";
import Flags from 'country-flag-icons/react/3x2'
import { useTranslation } from "react-i18next";

const LanguageSelector = (): JSX.Element => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (l: string): void => {
        i18n.changeLanguage(l)
    }

    return (
        <div className='p-2'>
            <a 
                className="btn" 
                role="button" 
                onClick={() => handleLanguageChange('en')}
            >
                <Flags.US style={{width:'3rem', height:'3rem'}} />
            </a>
            <a 
                className="btn" 
                role="button" 
                onClick={() => handleLanguageChange('pt')}
            >
                <Flags.BR style={{width:'3rem', height:'3rem'}} />
            </a>
        </div>
    )
}

export default LanguageSelector;