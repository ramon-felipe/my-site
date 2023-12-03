import styles from '../../styles/Home.module.css'
import { Container } from 'react-bootstrap'
import React, { useState } from 'react'
import Header from './header'
import DynamicPersonalSection from './personal/dynamic-personal-section'
import DynamicWorkExperienceSection from './work/dynamic-work-experience-section'
import DynamicEducationSection from './education/dynamic-education-section'
import DynamicLanguageSection from './language/dynamic-personal-section'
import DynamicDigitalSkillsSection from './digital-skills/dynamic-digital-skills-section'
import MenuNav from './menu-nav'
import { LanguageContext } from '../contexts/languageContext'

const App = (): JSX.Element => {
    const [lang, setLang] = useState('en');
    
    return (
        <LanguageContext.Provider value={ { lang: lang, setLang: setLang } }>
            <Header />
            
            <main className={styles.main}>
                <MenuNav />
                <Container fluid style={{backgroundColor: 'whitesmoke'}}>
                    <DynamicPersonalSection />
        
                    <DynamicWorkExperienceSection />
        
                    <DynamicEducationSection />
        
                    <DynamicLanguageSection />
        
                    <DynamicDigitalSkillsSection />
                </Container>
            </main>
      </LanguageContext.Provider>
    )
}

export default App;