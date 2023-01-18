import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Placement } from 'react-bootstrap/esm/types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip, { TooltipProps } from 'react-bootstrap/Tooltip';

interface ITriggerExampleProps {
    children: JSX.Element
    text: string
    placement?: Placement    
}

function TriggerTooltip(props: ITriggerExampleProps) {
    const { children, placement, text } = props;
    const [showTooltip, setShowTooltip] = useState(window.matchMedia("(min-width: 1024px)").matches)

    useEffect(() => {
        window
        .matchMedia("(min-width: 1024px)")
        .addEventListener('change', e => setShowTooltip( e.matches ));
      }, [])

    const renderTooltip = (props: TooltipProps) => (
        <Tooltip id="element-tooltip" {...props}>
            { text }
        </Tooltip>
    );

    if(!showTooltip) 
        return children

    return (
        <OverlayTrigger
            placement={placement}
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            { children }
        </OverlayTrigger>
    );
}

export default TriggerTooltip;