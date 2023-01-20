import styles from '../../../styles/Home.module.css'
import workingExperienceData from '../../data/work-experience-data'
import IWorkExperienceModel from "../../models/work-experience-model";
import { WorkExperience } from './work-experience';
import { useTranslation, Trans } from 'react-i18next'
import '../../extensions/string-extensions'
import useDateHelper from '../../hooks/useDateHelper';

const WorkExperienceSection = (): JSX.Element => {
    const { t } = useTranslation();
    const dateHelper = useDateHelper();
    const workingExperiences: IWorkExperienceModel[] = workingExperienceData;

    return (
        <div className={styles.section} >
            <div className={styles.center}>
                <div>
                    <h2 className="mb-0">
                        {t('work-experience').UpperCaseFirstLetter()}
                    </h2>                
                    <div style={{justifyContent: 'center'}} className="d-flex">
                        [ {dateHelper.writeTotalWorkExperienceTime()} total ]
                    </div>

                </div>
            </div>
            {
                workingExperiences.map((w, index) =>                    
                    (
                        <div key={index}>
                            <WorkExperience {...w}/>
                        </div>
                    )
                )
            }
            <div className='mt-4'>
                <hr/>
            </div>
        </div>
    )
}

export default WorkExperienceSection;