import React from "react";
import useIconsSvg from "../../hooks/useIconsSVG";
import { Button, Col, Row } from "react-bootstrap";
import TriggerTooltip from "../common/overlay-trigger";
import { useTranslation } from "react-i18next";

const CvDownload = (): JSX.Element => {
    let arrowDown = {...useIconsSvg()}.boxArrowDown;
    const { t } = useTranslation();

    return(
        <Row className="justify-content-md-end">
            <Col md="auto">
                <TriggerTooltip                         
                    text={t('download-cv')} 
                    placement="bottom"
                >
                    <a className="btn btn-secondary" href='https://drive.google.com/file/d/130_L9kRY_2qCicI8ZAmi2x10G6wmpS3c/view?usp=sharing' target="_blank">
                        CV as PDF
                        <span className="ps-2">{arrowDown()}</span>
                    </a>
                </TriggerTooltip>
            </Col>
        </Row>
    )
}

export default CvDownload;