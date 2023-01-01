import React from 'react';
import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import educationExperienceData from '../../data/education-experience-data';
import IEducationExperienceModel from '../../models/education-experience-model';
import { EducationExperience } from './education-experience';

const EducationSection = (): JSX.Element => {
    const educationExperiences: IEducationExperienceModel[] = educationExperienceData;

    return (
        <Row >
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
            <hr/>
        </Row>
    )
}

export default EducationSection;