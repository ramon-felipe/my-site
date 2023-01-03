import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import workingExperienceData from '../../data/work-experience-data'
import IWorkExperienceModel from "../../models/work-experience-model";
import { WorkExperience } from './work-experience';

const WorkExperienceSection = (): JSX.Element => {
    const workingExperiences: IWorkExperienceModel[] = workingExperienceData;

    return (
        <div className={styles.section} >
            <div className={styles.center}>
                <h2 className={styles.center}>WORK EXPERIENCE</h2>
            </div>
            {
                workingExperiences.map((w, index) =>                    
                    (
                        <div key={index}>
                            <WorkExperience {...w}/>
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

export default WorkExperienceSection;