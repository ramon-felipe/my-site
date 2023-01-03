import React from 'react';
import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import educationExperienceData from '../../data/education-experience-data';
import IEducationExperienceModel from '../../models/education-experience-model';
import { EducationExperience } from './education-experience';

const EducationSection = (): JSX.Element => {
    const educationExperiences: IEducationExperienceModel[] = educationExperienceData;

    return (
        <div className={styles.section} >
            <div>
                <h2 className={styles.center}>EDUCATION AND TRAINING</h2>
            </div>            
            {
                educationExperiences.map((e, index) =>                    
                    (
                        <div key={index}>
                            <EducationExperience {...e}/>
                        </div>
                    )
                )
            }
            <div className='mt-4'>
                <hr/>
            </div>
        </div>
    )
}

export default EducationSection;