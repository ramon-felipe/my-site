import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const LanguageSection = (): JSX.Element => {
    return (
        <Row >
            <Col className={styles.center}>
                <h2>LANGUAGE SKILLS</h2>
            </Col>
            <hr/>
        </Row>
    )
}

export default LanguageSection;