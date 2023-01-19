import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button, Collapse, Overlay } from "react-bootstrap";
import TriggerTooltip from "./overlay-trigger";

export interface ICollapsableButtonProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const CollapsableButton = (props: ICollapsableButtonProps): JSX.Element => {
    const { open, setOpen } = props;    
    const target = useRef(null);

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
            children={button()} 
            text={open ? 'Hide details' : 'Show details'} 
        />
    )
}

export default CollapsableButton;