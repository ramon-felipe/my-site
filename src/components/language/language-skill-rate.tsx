import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from '../../../styles/Home.module.css';
import { getRateText, writeRateWithIcons } from "../../utils/rate-utils";
import TriggerTooltip from "../common/overlay-trigger";
import { LanguageSkillRateProps } from "./language-skills";
import { useTranslation } from 'react-i18next';
import '../../extensions/string-extensions'
import useIconsSvg from "../../hooks/useIconsSVG";

export const LanguageSkillRate = (props: LanguageSkillRateProps) => {
    const { t } = useTranslation();
    const { circleIcon, circleFillIcon } = useIconsSvg();
    const { skillName, rate } = props;

    return (
        <Col>
            <Row className={styles.center}>
                <Col className='p-2 m-2'>
                    <div className={styles.center}>{skillName}</div>

                    <TriggerTooltip text={t(getRateText(rate)).UpperCaseFirstLetter()}>
                        <div className={styles.center}>{writeRateWithIcons(rate, circleIcon(), circleFillIcon())}</div>
                    </TriggerTooltip>
                </Col>
            </Row>
        </Col>
    );
};
