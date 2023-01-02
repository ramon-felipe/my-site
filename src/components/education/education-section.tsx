import React from 'react';
import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import educationExperienceData from '../../data/education-experience-data';
import IEducationExperienceModel from '../../models/education-experience-model';
import { EducationExperience } from './education-experience';

const EducationSection = (): JSX.Element => {
    const educationExperiences: IEducationExperienceModel[] = educationExperienceData;

    return (
        <Row className={styles.section} >
            <Col className={styles.center}>
                <h2>EDUCATION AND TRAINING</h2>
            </Col>            
            {
                educationExperiences.map((e, index) =>                    
                    (
                        <Row key={index}>
                            <EducationExperience {...e}/>
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

export default EducationSection;