import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import styles from '../../../styles/Home.module.css'
import digitalSkillsData from '../../data/digital-skills-data'
import IDigitalSkillModel from '../../models/digital-skills-model';
import { writeRate } from '../../utils/rate-utils';

const DigitalSkillsSection = (): JSX.Element => {
    const { t } = useTranslation();
    const data: Set<IDigitalSkillModel> = digitalSkillsData;

    const write = (data: Set<IDigitalSkillModel>): JSX.Element => {
        let dataArr = Array.from(data);

        if (dataArr.length === 0)
            return <></>

        let result = 
            <Row className={styles.center}>
                {
                    dataArr.map((d, i) => {
                        return (
                            <Col sm={4} md={3} key={i} className='p-2 m-2 border border-2'>
                                <div className={styles.center}>{t(d.skillName).UpperCaseFirstLetter()}</div>
                                <div className={styles.center}>{writeRate(d.rate)}</div>
                            </Col>
                        )
                    })
                }
            </Row>

        return result;
    }

    return (
        <div className={styles.section} >
            <div className={styles.center}>
                <h2 className={styles.center}>{t('digital-skills').UpperCaseFirstLetter()}</h2>
            </div>
            <div className='px-5'>
                { write(data) }
            </div>
            <hr/>
        </div>
    )
}

export default DigitalSkillsSection;