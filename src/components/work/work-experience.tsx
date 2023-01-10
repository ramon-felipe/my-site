import { Col, Collapse, Row } from 'react-bootstrap';
import IWorkExperienceModel from "../../models/work-experience-model";
import styles from '../../../styles/Home.module.css'
import React, { useState } from 'react';
import CollapsableButton, { ICollapsableButtonProps } from '../common/collapsable-button';
import { useTranslation, Trans } from 'react-i18next'

export const WorkExperience = (props: IWorkExperienceModel) => {
    const { t } = useTranslation();
    const { role, company, from, to, city, country, job_description_i18n: job_description } = props;
    const [open, setOpen] = useState(true);

    const collapsableButtonProps: ICollapsableButtonProps = {
        open: open,
        setOpen: setOpen
    }

    const experienceDetails = (): JSX.Element => {
        return (
            <div className="pb-2">                
                <div>
                    <h4>{t('company')}: {t(company)}</h4>
                </div>
                <div>
                    <h5>{t('from')}: {from} {t('to')}: {to}</h5>
                </div>
                <div>
                    <i className="bi bi-geo-alt-fill"></i> {t('city')}: {city}, {t('country')}: {country}
                </div>
                
                <hr className="mt-3" />

                <div>
                    <span><b>{t('description')}</b></span>
                    <p>{t(`job_description.${job_description}`)}</p>
                </div>
            </div>
        )
    }

    return (
        <Row>
            <Col xs={1}>
                <div className={styles.right}>
                    <CollapsableButton {...collapsableButtonProps} />
                </div>
            </Col>
            <Col>
                <div className="pt-2">                    
                    <h3><b>{t('role')}</b>: {t(role)}</h3>
                </div>
                <Collapse in={open}>
                    { experienceDetails() }
                </Collapse>
                <hr className={open ? 'd-none' : 'd-block'} />
            </Col>
        </Row>
    );
};
