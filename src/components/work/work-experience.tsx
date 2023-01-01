import { Col, Row } from 'react-bootstrap';
import IWorkExperienceModel from "../../models/work-experience-model";
import styles from '../../../styles/Home.module.css'

export const WorkExperience = (props: IWorkExperienceModel) => {
    const { role, company, from, to, city, country, description } = props;

    return (
        <>
        <Col xs={1}>
            <Row>
                <div className={styles.right}>
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            </Row>
        </Col>
        <Col>
            <Row className="pt-2">
                <h3>role: {role}</h3>
            </Row>
            <Row>
                <h4>company: {company}</h4>
            </Row>
            <Row>
                <h5>from: {from} to: {to}</h5>
            </Row>
            <Row>
                <div>
                    <i className="bi bi-geo-alt-fill"></i> City: {city}, Country: {country}
                </div>
            </Row>
            
            <hr className="mt-3" />
 
            <Row className="pb-2">
                <span>Description</span>
                <p>{description}</p>
            </Row>
        </Col>
    </>
    );
};
