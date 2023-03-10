import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../../styles/Home.module.css'
import languageData from '../../data/language-skills-data'
import ILanguageSkillsModel from '../../models/language-skills-models';
import LanguageSkills from './language-skills';
import MotherTongue from './mother-tongue';
import '../../extensions/string-extensions'

const LanguageSkillsSection = (): JSX.Element => {
    const { t } = useTranslation();
    const data: ILanguageSkillsModel[] = languageData;

    const writeMotherTongue = (languages: ILanguageSkillsModel[]): JSX.Element => {
        let motherTongue: ILanguageSkillsModel = languages.filter(l => l.motherTongue)[0];

        if (!motherTongue)
            return <></>

        return (
            <div className={styles.center}>
                <div className='p-2 mb-2 w-75 border border-2'>
                    <MotherTongue languageName={motherTongue.languageName}/>
                </div>
            </div>
        )
    }

    const writeOtherLanguages = (languages: ILanguageSkillsModel[]): JSX.Element => {
        let otherLanguages: ILanguageSkillsModel[] = languages.filter(l => !l.motherTongue);

        if (!otherLanguages)
            return <></>

        let result = 
        <div className={styles.center}>
            <div className='p-2 mb-2 w-75 border border-2'>
                {t('other-languages').UpperCaseFirstLetter(true)}:
                {
                    otherLanguages.map((d, index) =>                    
                    {
                        return (
                            <div key={index}>
                                <LanguageSkills {...d} />
                            </div>
                        );
                    })
            }
            </div>
        </div>

        return result;
    }

    return (
        <div>
            <div>
                <h2 className={styles.center}>{t('language-skills').UpperCaseFirstLetter()}</h2>
            </div>            
            { writeMotherTongue(data) }
            { writeOtherLanguages(data) }
            
            <hr/>
        </div>
    )
}

export default LanguageSkillsSection;