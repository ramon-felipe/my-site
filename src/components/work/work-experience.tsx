import { Button, Col, Collapse, Row, Tooltip } from 'react-bootstrap';
import IWorkExperienceModel from "../../models/work-experience-model";
import styles from '../../../styles/Home.module.css'
import React, { useState } from 'react';
import TriggerExample from '../common/overlay-trigger';

export const WorkExperience = (props: IWorkExperienceModel) => {
    const { role, company, from, to, city, country, description } = props;
    const [open, setOpen] = useState(true);
    
    const handleOpen = () => {
        setOpen(!open)
    }

    const el = (): JSX.Element => {
        return (
            <Button
                variant="link"
                onClick={handleOpen}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                <i className={`bi bi-caret-${open ? 'down' : 'right'}-fill`}></i>
            </Button>
        )
    }

    return (
        <Row>
            <Col xs={1}>
                <div className={styles.right}>
                    <TriggerExample element={el()} placement={'top'} text={open ? 'Hide details' : 'Show details'}/>
                </div>
            </Col>
            <Col>
                <div className="pt-2">                    
                    <h3><b>Role</b>: {role}</h3>
                </div>

                <Collapse in={open}>
                    <div id="example-collapse-text" className="pb-2">
                        
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
                </Collapse>

                <hr className={open ? 'd-none' : 'd-block'} />
            </Col>
        </Row>
    );
};
