import React from "react";
import { Row } from "react-bootstrap";
import ILanguageSkillRateModel from "../../models/language-skill-rate-model";
import ILanguageSkillsModel from "../../models/language-skills-models";
import { nameof } from "../../utils/utils-common";
import { LanguageSkillRate } from "./language-skill-rate";

export interface LanguageSkillRateProps {
    skillName: string,
    rate: number
}

const LanguageSkills = (props: ILanguageSkillsModel) => {
    const { languageName, motherTongue } = props; 
    const skillsRate: ILanguageSkillRateModel = props;

    const getSkillName = (skillName: keyof ILanguageSkillRateModel): string => 
        nameof<ILanguageSkillRateModel>(skillName).replace('Rate', '')

    return (
        <div className='py-2'>
            <Row>
                <h3>{languageName}</h3>
                <LanguageSkillRate skillName={ getSkillName('listeningRate') } rate={skillsRate.listeningRate} />
                <LanguageSkillRate skillName={ getSkillName('speakingRate') } rate={skillsRate.speakingRate} />
                <LanguageSkillRate skillName={ getSkillName('readingRate') } rate={skillsRate.readingRate} />
                <LanguageSkillRate skillName={ getSkillName('writingRate') } rate={skillsRate.writingRate} />
            </Row>
        </div>
    )
}

export default LanguageSkills;