import { Col, Row } from 'react-bootstrap';
import styles from '../../../styles/Home.module.css'
import IEducationExperienceModel from '../../models/education-experience-model';

export const EducationExperience = (props: IEducationExperienceModel) => {
    const { school, course, from, to, address, webPage } = props;

    return (
        <Row>
            <Col xs={1}>
                    <div className={styles.right}>
                        <i className="bi bi-caret-right-fill"></i>
                    </div>
            </Col>
            <Col>
                <div className="pt-2">
                    <h3>school: {school}</h3>
                </div>
                <div>
                    <h4>course: {course}</h4>
                </div>
                <div>
                    <h5>from: {from} to: {to}</h5>
                </div>
                <div>
                    <i className="bi bi-geo-alt-fill"></i> Address: {address}
                </div>

                <hr className="mt-3" />

                <div className="pb-2">
                    <span>URI</span>
                    <p><a href={webPage} target='_blank' rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i> {webPage}</a></p>
                </div>
            </Col>
        </Row>
    );
};
