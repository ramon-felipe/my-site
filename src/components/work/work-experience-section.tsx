import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import workingExperienceData from '../../data/work-experience-data'
import IWorkExperienceModel from "../../models/work-experience-model";
import { WorkExperience } from './work-experience';

const WorkExperienceSection = (): JSX.Element => {
    const workingExperiences: IWorkExperienceModel[] = workingExperienceData;

    return (
        <Row >
            <Col className={styles.center}>
                <h2>WORK EXPERIENCE</h2>
            </Col>
            {
                workingExperiences.map((w, index) =>                    
                    (
                        <Row key={index}>
                            <WorkExperience {...w}/>
                        </Row>
                    )
                )
            }
            <hr/>
        </Row>
    )
}

export default WorkExperienceSection;