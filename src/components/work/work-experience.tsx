import { Col, Collapse, Row } from 'react-bootstrap';
import IWorkExperienceModel from "../../models/work-experience-model";
import styles from '../../../styles/Home.module.css'
import React, { useState } from 'react';
import CollapsableButton, { ICollapsableButtonProps } from '../common/collapsable-button';

export const WorkExperience = (props: IWorkExperienceModel) => {
    const { role, company, from, to, city, country, description } = props;
    const [open, setOpen] = useState(true);

    const collapsableButtonProps: ICollapsableButtonProps = {
        open: open,
        setOpen: setOpen
    }

    const experienceDetails = (): JSX.Element => {
        return (
            <div className="pb-2">                
                <div>
                    <h4>Company: {company}</h4>
                </div>
                <div>
                    <h5>From: {from} To: {to}</h5>
                </div>
                <div>
                    <i className="bi bi-geo-alt-fill"></i> City: {city}, Country: {country}
                </div>
                
                <hr className="mt-3" />

                <div>
                    <span>Description</span>
                    <p>{description}</p>
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
                    <h3><b>Role</b>: {role}</h3>
                </div>
                <Collapse in={open}>
                    { experienceDetails() }
                </Collapse>
                <hr className={open ? 'd-none' : 'd-block'} />
            </Col>
        </Row>
    );
};
