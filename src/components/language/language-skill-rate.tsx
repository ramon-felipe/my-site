import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from '../../../styles/Home.module.css';
import { writeRate } from "../../utils/rate-utils";
import { LanguageSkillRateProps } from "./language-skills";

export const LanguageSkillRate = (props: LanguageSkillRateProps) => {
    const { skillName, rate } = props;

    return (
        <Col>
            <Row className={styles.center}>
                <Col className='p-2 m-2'>
                    <div className={styles.center}>{skillName}</div>
                    <div className={styles.center}>{writeRate(rate)}</div>
                </Col>
            </Row>
        </Col>
    );
};
