import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button, Collapse, Overlay } from "react-bootstrap";
import TriggerTooltip from "./overlay-trigger";
import { useTranslation } from "react-i18next";

export interface ICollapsableButtonProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const CollapsableButton = (props: ICollapsableButtonProps): JSX.Element => {
    const { open, setOpen } = props;    
    const target = useRef(null);
    const { t } = useTranslation();

    const handleOpen = () => {
        setOpen(!open)
    }
    
    const button = (): JSX.Element => {
        return (
            <Button
                variant="link"
                onClick={handleOpen}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                ref={target}
                className="p-0"
            >
                <i className={`bi bi-caret-${open ? 'down' : 'right'}-fill`}></i>
            </Button>
        )
    }

    return (
        <TriggerTooltip                         
            text={open ? `${t('hide')} ${t('details')}` : `${t('show')} ${t('details')}`} 
        >
            {button()}
        </TriggerTooltip>
    )
}

export default CollapsableButton;