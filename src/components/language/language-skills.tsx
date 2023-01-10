import React from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ILanguageSkillRateModel from "../../models/language-skill-rate-model";
import ILanguageSkillsModel from "../../models/language-skills-models";
import { nameof } from "../../utils/utils-common";
import { LanguageSkillRate } from "./language-skill-rate";

export interface LanguageSkillRateProps {
    skillName: string,
    rate: number
}

const LanguageSkills = (props: ILanguageSkillsModel) => {
    const { t } = useTranslation();
    const { languageName } = props; 
    const skillsRate: ILanguageSkillRateModel = props;

    const getSkillName = (skillName: keyof ILanguageSkillRateModel): string => 
        nameof<ILanguageSkillRateModel>(skillName).replace('Rate', '')

    return (
        <div className='py-2'>
            <div>
                <h3>{t(languageName)}</h3>
                <Row>
                    <LanguageSkillRate skillName={ t(`english-fluency.${getSkillName('listeningRate')}`) } rate={skillsRate.listeningRate} />
                    <LanguageSkillRate skillName={ t(`english-fluency.${getSkillName('speakingRate')}`) } rate={skillsRate.speakingRate} />
                    <LanguageSkillRate skillName={ t(`english-fluency.${getSkillName('readingRate')}`) } rate={skillsRate.readingRate} />
                    <LanguageSkillRate skillName={ t(`english-fluency.${getSkillName('writingRate')}`) } rate={skillsRate.writingRate} />
                </Row>
            </div>
        </div>
    )
}

export default LanguageSkills;