import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from '../../../styles/Home.module.css';
import { writeRate } from "../../utils/rate-utils";
import { LanguageSkillRateProps } from "./language-skills";

export const LanguageSkillRate = (props: LanguageSkillRateProps) => {
    const { skillName, rate } = props;

    return (
        <Col>
            <div className={styles.center}>
                {skillName}<span>: { writeRate(rate) }</span>
            </div>
        </Col>
    );
};
