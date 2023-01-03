import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from '../../../styles/Home.module.css';
import { LanguageSkillRateProps } from "./language-skills";

export const LanguageSkillRate = (props: LanguageSkillRateProps) => {
    const { skillName, rate } = props;

    const writeRate = (rateValue: number) => {
        const rateIconFull: JSX.Element = <i className="bi bi-circle-fill"></i>;
        const rateIconEmpty: JSX.Element = <i className="bi bi-circle"></i>;

        let rate: JSX.Element[] = [rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty];

        for (let i = 0; i < rateValue; i++) {
            rate[i] = rateIconFull;
        }

        return rate;
    };

    return (
        <Col>
            <div className={styles.center}>
                {skillName}<span>:  {writeRate(rate)}</span>
            </div>
        </Col>
    );
};
