import { Col, Row } from 'react-bootstrap';
import styles from '../../../styles/Home.module.css'
import IEducationExperienceModel from '../../models/education-experience-model';

export const EducationExperience = (props: IEducationExperienceModel) => {
    const { school, course, from, to, address, webPage } = props;

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
                <h3>school: {school}</h3>
            </Row>
            <Row>
                <h4>course: {course}</h4>
            </Row>
            <Row>
                <h5>from: {from} to: {to}</h5>
            </Row>
            <Row>
                <div>
                    <i className="bi bi-geo-alt-fill"></i> Address: {address}
                </div>
            </Row>
            <hr className="mt-3" />

            <Row className="pb-2">
                <span>URI</span>
                <p><a href={webPage} target='_blank'><i className="bi bi-box-arrow-up-right"></i> {webPage}</a></p>
            </Row>
        </Col>
    </>
    );
};
