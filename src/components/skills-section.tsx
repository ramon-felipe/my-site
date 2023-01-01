import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const SkillsSection = (): JSX.Element => {
    return (
        <Row >
            <Col className={styles.center}>
                <h2>DIGITAL SKILLS</h2>
            </Col>
            <hr/>
        </Row>
    )
}

export default SkillsSection;