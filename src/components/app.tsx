import styles from '../../styles/Home.module.css'
import { Container } from 'react-bootstrap'
import React from 'react'
import Header from './header'
import LanguageSelector from './common/language-selector'
import DynamicPersonalSection from './personal/dynamic-personal-section'
import DynamicWorkExperienceSection from './work/dynamic-work-experience-section'
import DynamicEducationSection from './education/dynamic-personal-section'
import DynamicLanguageSection from './language/dynamic-personal-section'
import DynamicDigitalSkillsSection from './digital-skills/dynamic-digital-skills-section'

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <LanguageSelector />
            <main className={styles.main}>
                <Container className='py-4' style={{backgroundColor: 'whitesmoke'}}>
                    <DynamicPersonalSection />
        
                    <DynamicWorkExperienceSection />
        
                    <DynamicEducationSection />
        
                    <DynamicLanguageSection />
        
                    <DynamicDigitalSkillsSection />
                </Container>
            </main>
      </>
    )
}

export default App;