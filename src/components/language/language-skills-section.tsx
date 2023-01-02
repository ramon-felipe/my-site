import React from 'react';
import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import languageData from '../../data/language-skills-data'
import ILanguageSkillsModel from '../../models/language-skills-models';
import LanguageSkills from './language-skills';

const LanguageSkillsSection = (): JSX.Element => {
    const data: ILanguageSkillsModel[] = languageData;

    return (
        <Row className={styles.section} >
            <Col className={styles.center}>
                <h2>LANGUAGE SKILLS</h2>
            </Col>
            {
                data.map((d, index) =>                    
                    (
                        <Row key={index} className='p-2 mb-2 w-80 border border-2'>
                            <LanguageSkills {...d}/>
                        </Row>
                    )
                )
            }
            <Row className='mt-4'>
                <hr/>
            </Row>
        </Row>
    )
}

export default LanguageSkillsSection;