import React from 'react';
import { Row, Col } from 'react-bootstrap'
import styles from '../../../styles/Home.module.css'
import languageData from '../../data/language-skills-data'
import ILanguageSkillsModel from '../../models/language-skills-models';
import LanguageSkills from './language-skills';

const LanguageSkillsSection = (): JSX.Element => {
    const data: ILanguageSkillsModel[] = languageData;

    return (
        <div>
            <div>
                <h2 className={styles.center}>LANGUAGE SKILLS</h2>
            </div>
            {
                data.map((d, index) =>                    
                    (
                        <div key={index} className='p-2 mb-2 w-80 border border-2'>
                            <LanguageSkills {...d}/>
                        </div>
                    )
                )
            }
            <div className={styles.center}>
                <hr/>
            </div>
        </div>
    )
}

export default LanguageSkillsSection;