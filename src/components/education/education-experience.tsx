import React, { useState } from 'react';
import { Col, Collapse, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from '../../../styles/Home.module.css'
import IEducationExperienceModel from '../../models/education-experience-model';
import CollapsableButton, { ICollapsableButtonProps } from '../common/collapsable-button';

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
            <div>
                <div>
                    <h4>{t('course').UpperCaseFirstLetter()}: {t(course).UpperCaseFirstLetter()}</h4>
                </div>
                <div>
                    <h5>{t('from').UpperCaseFirstLetter()}: {from} {t('to').UpperCaseFirstLetter()}: {to}</h5>
                </div>
                <div>
                    <i className="bi bi-geo-alt-fill"></i> {t('address').UpperCaseFirstLetter()}: {address}
                </div>

                <hr className="mt-3" />

                <div className="pb-2">
                    <span>URI</span>
                    <p><a href={webPage} target='_blank' rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i> {webPage}</a></p>
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
                    <h3>{t('school').UpperCaseFirstLetter()}: {t(school).UpperCaseFirstLetter()}</h3>
                </div>
                <Collapse in={open}>
                    { schoolExperienceDetails() }
                </Collapse>
            </Col>
        </Row>
    );
};
