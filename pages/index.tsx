import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import Header from '../src/components/header'
import PersonalSection from '../src/components/personal-section'
import WorkExperienceSection from '../src/components/work/work-experience-section'
import EducationSection from '../src/components/education/education-section'
import LanguageSection from '../src/components/language-section'
import SkillsSection from '../src/components/skills-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Header />
      <Container className='py-4'>
        <main className={styles.main}>

          <PersonalSection />

          <WorkExperienceSection />

          <EducationSection />

          <LanguageSection />

          <SkillsSection />

        </main>
      </Container>
    </>
  )
}
