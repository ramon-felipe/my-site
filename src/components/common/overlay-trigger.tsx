import Button from 'react-bootstrap/Button';
import { Placement } from 'react-bootstrap/esm/types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip, { TooltipProps } from 'react-bootstrap/Tooltip';

interface ITriggerExampleProps {
    element: JSX.Element
    text: string
    placement?: Placement    
}

function TriggerTooltip(props: ITriggerExampleProps) {
    const { element, placement, text } = props;

    const renderTooltip = (props: TooltipProps) => (
        <Tooltip id="element-tooltip" {...props}>
            { text }
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement={placement}
            delay={{ show: 250, hide: 400 }}      
            overlay={renderTooltip}
        >
            { element }
        </OverlayTrigger>
    );
}

export default TriggerTooltip;