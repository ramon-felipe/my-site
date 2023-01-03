import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const SkillsSection = (): JSX.Element => {
    return (
        <Row className={styles.section} >
            <Row className={styles.center}>
                <h2 className={styles.center}>DIGITAL SKILLS</h2>
            </Row>
            <hr/>
        </Row>
    )
}

export default SkillsSection;