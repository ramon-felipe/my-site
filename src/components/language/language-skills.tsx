import React from "react";
import { Row, Col } from "react-bootstrap";
import ILanguageSkillRateModel from "../../models/language-skill-rate-model";
import ILanguageSkillsModel from "../../models/language-skills-models";
import { nameof } from "../../utils/utils-common";
import styles from '../../../styles/Home.module.css'

interface LanguageSkillRateProps {
    skillName: string,
    rate: number
}

const LanguageSkillRate = (props: LanguageSkillRateProps) => {
    const { skillName, rate } = props

    const writeRate = (rateValue: number) => {
        const rateIconFull: JSX.Element = <i className="bi bi-circle-fill"></i>;
        const rateIconEmpty: JSX.Element = <i className="bi bi-circle"></i>;

        let rate: JSX.Element[] = [rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty];

        for (let i = 0; i < rateValue; i++) {
            rate[i] = rateIconFull;
        }

        return rate;
    }

    return (
        <>            
            <Col >
                <div  className={styles.center}>
                    {skillName}<span>:  {  writeRate(rate)}</span>
                </div>
            </Col>
        </>
    )
}

const LanguageSkills = (props: ILanguageSkillsModel) => {
    const { languageName, motherTongue } = props; 
    const skillsRate: ILanguageSkillRateModel = props;

    const getSkillName = (skillName: keyof ILanguageSkillRateModel): string => 
        nameof<ILanguageSkillRateModel>(skillName).replace('Rate', '')

    return (
        <Row>
            {
                motherTongue && 
                <Row className='py-2'>
                    Mother Tongue:
                    <Row>
                        <h3>{languageName}</h3>
                    </Row>
                </Row>
            }
            {
                !motherTongue &&
                <Row className='py-2'>
                    Other Languages:
                    <Row>
                        <h3>{languageName}</h3>
                        <LanguageSkillRate skillName={ getSkillName('listeningRate') } rate={skillsRate.listeningRate} />
                        <LanguageSkillRate skillName={ getSkillName('speakingRate') } rate={skillsRate.speakingRate} />
                        <LanguageSkillRate skillName={ getSkillName('readingRate') } rate={skillsRate.readingRate} />
                        <LanguageSkillRate skillName={ getSkillName('writingRate') } rate={skillsRate.writingRate} />
                    </Row>
                </Row>
            }
        </ Row>
    )
}

export default LanguageSkills;