import { Col, Collapse, Row } from 'react-bootstrap';
import IWorkExperienceModel from "../../models/work-experience-model";
import styles from '../../../styles/Home.module.css'
import React, { useState } from 'react';
import CollapsableButton, { ICollapsableButtonProps } from '../common/collapsable-button';
import { useTranslation, Trans } from 'react-i18next'

export const WorkExperience = (props: IWorkExperienceModel) => {
    const { t } = useTranslation();
    const { role, company, from, to, city, country, job_description_i18n: job_description, webpage } = props;
    const [open, setOpen] = useState(true);

    const collapsableButtonProps: ICollapsableButtonProps = {
        open: open,
        setOpen: setOpen
    }

    const experienceDetails = (): JSX.Element => {
        return (
            <div className="pb-2">                
                <div className="mb-2">
                    {t('company').UpperCaseFirstLetter()}
                    : <a href={webpage} target="_blank" rel="noreferrer">
                        <h4 className='pe-2 d-inline'>
                            {t(company)}                            
                        </h4>
                        <i className="bi bi-box-arrow-up-right" style={{width:'1rem', height:'1rem'}}></i>
                    </a>
                </div>
                <div className="mb-2">
                    {t('from').UpperCaseFirstLetter()}
                    : <h6 className='d-inline'>{from} </h6> 
                    {t('to').UpperCaseFirstLetter()}  
                    <h6 className='d-inline'>
                        : { to === 'current' ? t('current').UpperCaseFirstLetter() : to }
                    </h6>
                </div>
                <div className="mb-2">
                    <i className="bi bi-geo-alt-fill me-2"></i> 
                    {t('city').UpperCaseFirstLetter()}
                    : {city.UpperCaseFirstLetter()}, {t('country').UpperCaseFirstLetter()}: {country.UpperCaseFirstLetter()}
                </div>
                
                <hr className="mt-3" />

                <div>
                    <span><b>{t('description').UpperCaseFirstLetter()}</b></span>
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
                <div className="pt-2 mb-2" style={{fontSize:'2rem'}}>                    
                    {t('role').UpperCaseFirstLetter()}: <h3 className='d-inline'>{t(role).UpperCaseFirstLetter()}</h3>
                </div>
                <Collapse in={open}>
                    { experienceDetails() }
                </Collapse>
                <hr className={open ? 'd-none' : 'd-block'} />
            </Col>
        </Row>
    );
};
