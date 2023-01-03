import { Col, Row } from 'react-bootstrap';
import IWorkExperienceModel from "../../models/work-experience-model";
import styles from '../../../styles/Home.module.css'

export const WorkExperience = (props: IWorkExperienceModel) => {
    const { role, company, from, to, city, country, description } = props;

    return (
        <Row>
            <Col xs={1}>
                <div className={styles.right}>
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            </Col>
            <Col>
                <div className="pt-2">
                    <h3>role: {role}</h3>
                </div>
                <div>
                    <h4>company: {company}</h4>
                </div>
                <div>
                    <h5>from: {from} to: {to}</h5>
                </div>
                <div>
                    <i className="bi bi-geo-alt-fill"></i> City: {city}, Country: {country}
                </div>
                
                <hr className="mt-3" />
    
                <div className="pb-2">
                    <span>Description</span>
                    <p>{description}</p>
                </div>
            </Col>
        </Row>
    );
};
