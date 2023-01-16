import { Col, Collapse, Row } from 'react-bootstrap';
import IWorkExperienceModel from "../../models/work-experience-model";
import styles from '../../../styles/Home.module.css'
import React, { useState } from 'react';
import CollapsableButton, { ICollapsableButtonProps } from '../common/collapsable-button';
import { useTranslation } from 'react-i18next'
import '../../extensions/string-extensions'
import moment from 'moment';

export const WorkExperience = (props: IWorkExperienceModel) => {
    const { t, i18n } = useTranslation();
    const { role, company, from, to, city, country, job_description_i18n: job_description, webpage } = props;
    const [open, setOpen] = useState(true);

    const collapsableButtonProps: ICollapsableButtonProps = {
        open: open,
        setOpen: setOpen
    }

    const companyDetails = (): JSX.Element => {
        return (
            <>
                {t('company').UpperCaseFirstLetter()}
                : 
                {
                    open ?
                    <a href={webpage} target="_blank" rel="noreferrer">
                        <h4 className='d-inline'> {t(company)} </h4>
                        <i className="bi bi-box-arrow-up-right ps-2" style={{width:'1rem', height:'1rem'}}></i>
                    </a>
                    :
                    <h5 className='d-inline'> {t(company)} </h5> 
                }
            </>
        )
    }

    const fromToDetails = (): JSX.Element => {
        return (
            <>
                {t('from').UpperCaseFirstLetter()}
                : <h6 className='d-inline'>
                    { moment(from).format('DD/MMMM/YYYY') }  
                </h6> {t('to').UpperCaseFirstLetter()}

                <h6 className='d-inline'>
                    : { !to ? t('current').UpperCaseFirstLetter() : moment(to).format('DD/MMMM/YYYY') }
                </h6>
            </>
        )
    }

    const addressDetail = (): JSX.Element => {
        return (
            <>
                <i className="bi bi-geo-alt-fill me-2"></i> 
                {t('city').UpperCaseFirstLetter()}
                : <b>{city.UpperCaseFirstLetter()}</b>, {t('country').UpperCaseFirstLetter()}: <b>{country.UpperCaseFirstLetter()}</b>
            </>
        )
    }

    const showCollapsedDetails = (): JSX.Element => {
        return (
            <div>
                <div className="d-inline d-sm-none d-md-none ms-2" style={{fontSize:'1rem'}}>
                    ({ companyDetails() })
                </div>
                <div className="d-none d-sm-inline d-lg-none ms-2" style={{fontSize:'1rem'}}>
                    ({ companyDetails() } | { fromToDetails() })
                </div>
                <div className="d-none d-lg-inline ms-2" style={{fontSize:'1rem'}}>
                    ({ companyDetails() } | { fromToDetails() } | { addressDetail() })
                </div>
            </div>
        )
    }

    const experienceDetails = (): JSX.Element => {
        return (
            <div className="pb-2">                
                <div className="mb-2">
                    { companyDetails() }
                </div>
                <div className="mb-2">
                    { fromToDetails() }
                </div>
                <div className="mb-2">
                    { addressDetail() }
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
        <Row className='pe-3 pe-sm-5'>
            <Col className='pt-3 px-2' xs={1} >
                <div className={styles.right}>
                    <CollapsableButton {...collapsableButtonProps} />
                </div>
            </Col>
            <Col>
                <div className="pt-2 mb-2" style={{fontSize:'2rem'}}>                    
                    { t('role').UpperCaseFirstLetter()}: <h3 className='d-inline'>{t(role).UpperCaseFirstLetter() }</h3>
                </div>
                <Collapse in={(!open)}>
                        {showCollapsedDetails()}
                </Collapse>
                <Collapse in={open}>
                    { experienceDetails() }
                </Collapse>
                
                <hr className={open ? 'd-none' : 'd-block'} />
            </Col>
        </Row>
    );
};
