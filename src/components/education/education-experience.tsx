import React, { useState } from 'react';
import { Col, Collapse, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from '../../../styles/Home.module.css'
import IEducationExperienceModel from '../../models/education-experience-model';
import CollapsableButton, { ICollapsableButtonProps } from '../common/collapsable-button';
import '../../extensions/string-extensions'
import FromToDetails from '../common/from-to';

export const EducationExperience = (props: IEducationExperienceModel) => {
    const { t } = useTranslation();
    const { school, course, from, to, address, webPage } = props;
    const [open, setOpen] = useState(true);

    const collapsableButtonProps: ICollapsableButtonProps = {
        open: open,
        setOpen: setOpen
    }
    
    const schoolExperienceDetails = (): JSX.Element => {
        return (
            <div className="pb-2">
                <div className="mb-2">
                    {t('course').UpperCaseFirstLetter()}: <h4 className='d-inline'>{t(course).UpperCaseFirstLetter()}</h4>
                </div>
                <div className="mb-2">
                    { <FromToDetails {...props} /> }
                </div>
                <div className="mb-2">
                    <i className="bi bi-geo-alt-fill"></i> {t('address').UpperCaseFirstLetter()}: {address}
                </div>

                <hr className="mt-3" />

                <div className="pb-2">
                    <span>URI</span>
                    <p><a href={webPage} target='_blank' rel="noreferrer">{webPage} <i className="bi bi-box-arrow-up-right"></i> </a></p>
                </div>
            </div>
        )
    }

    return (
        <Row className='pe-3 pe-sm-5'>
            <Col className='pt-3 px-2' xs={1}>
                <div className={styles.right}>
                    <CollapsableButton {...collapsableButtonProps} />
                </div>
            </Col>
            <Col>
                <div className="pt-2">
                    <h3>{t('school').UpperCaseFirstLetter()}: {t(school).UpperCaseFirstLetter()}</h3>
                </div>
                <Collapse in={open}>
                    { schoolExperienceDetails() }
                </Collapse>
            </Col>
        </Row>
    );
};
