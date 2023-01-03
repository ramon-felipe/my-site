import React from 'react';
import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import languageData from '../../data/language-skills-data'
import ILanguageSkillsModel from '../../models/language-skills-models';
import LanguageSkills from './language-skills';
import MotherTongue from './mother-tongue';

const LanguageSkillsSection = (): JSX.Element => {
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
                Other Languages:
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
                <h2 className={styles.center}>LANGUAGE SKILLS</h2>
            </div>            
            { writeMotherTongue(data) }
            { writeOtherLanguages(data) }
            <div className={styles.center}>
                <hr/>
            </div>
        </div>
    )
}

export default LanguageSkillsSection;