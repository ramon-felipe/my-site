import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Container } from 'react-bootstrap'
import React from 'react'
import Header from '../src/components/header'
import PersonalSection from '../src/components/personal-section'
import WorkExperienceSection from '../src/components/work/work-experience-section'
import EducationSection from '../src/components/education/education-section'
import LanguageSkillsSection from '../src/components/language/language-skills-section'
import DigitalSkillsSection from '../src/components/digital-skills-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container className='py-4' style={{backgroundColor: 'whitesmoke'}}>
            <PersonalSection />

            <WorkExperienceSection />

            <EducationSection />

            <LanguageSkillsSection />

            <DigitalSkillsSection />
        </Container>
      </main>
    </>
  )
}
