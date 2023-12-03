import styles from '../../../styles/Home.module.css'
import IWorkExperienceModel from "../../models/work-experience-model";
import { WorkExperience } from './work-experience';
import { useTranslation } from 'react-i18next'
import '../../extensions/string-extensions'
import useDateHelper from '../../hooks/useDateHelper';
import { useContext, useEffect, useState } from 'react';
import useDomainService from '../../hooks/useApiService';
import { LanguageContext } from '../../contexts/languageContext';

const WorkExperienceSection = (): JSX.Element => {
    const { t } = useTranslation();
    const dateHelper = useDateHelper();
    const domainService = useDomainService();
    const [workXps, setWorkXps] = useState<IWorkExperienceModel[]>();
    const { setLang, lang } = useContext(LanguageContext);

    useEffect(() => {
        getWorkExperience();
    }, [lang]);

    const getWorkExperience = async () => {
        let workExp = await domainService.getWorkExperience(lang);

        setWorkXps(workExp)
    }

    const writeWorkXps = (): JSX.Element => {
        return (
            <>
            {
                workXps?.map((w, index) =>
                (
                    <div key={index}>
                        <WorkExperience {...w}/>
                    </div>
                ))
            }
            </>
        )
    }

    return (
        <div className={styles.section} >
            <div className={styles.center}>
                <div>
                    <h2 className={styles.section_title}>
                        {t('work-experience').UpperCaseFirstLetter()}
                    </h2>                
                    <div style={{justifyContent: 'center'}} className="d-flex">
                        [ {dateHelper.writeTotalWorkExperienceTime()} total ]
                    </div>

                </div>
            </div>
            {
                writeWorkXps()
            }
            <div className='mt-4'>
                <hr/>
            </div>
        </div>
    )
}

export default WorkExperienceSection;