import styles from '../../../styles/Home.module.css'
import workingExperienceData from '../../data/work-experience-data'
import IWorkExperienceModel from "../../models/work-experience-model";
import { WorkExperience } from './work-experience';
import { useTranslation, Trans } from 'react-i18next'
import '../../extensions/string-extensions'
import useDateHelper from '../../hooks/useDateHelper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useDomainService from '../../hooks/useApiService';

const WorkExperienceSection = (): JSX.Element => {
    const { t } = useTranslation();
    const dateHelper = useDateHelper();
    const domainService = useDomainService();
    const workingExperiences: IWorkExperienceModel[] = workingExperienceData;
    const [workXps, setWorkXps] = useState<IWorkExperienceModel[]>();

    useEffect(() => {
        getWorkExperience();
    }, []);

    const getWorkExperience = async () => {
        let workExp = await domainService.getWorkExperience();

        setWorkXps(workExp)
        // axios.get('https://localhost:7254/WorkExperience').then(response => {
        //     setWorkXps(response.data);
        // })
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
                )
            )
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