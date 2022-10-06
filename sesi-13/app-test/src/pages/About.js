import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import salman from '../images/salman.jpg';

function About() {
    return (
        <div className='container' style={{
            paddingTop: '50px',
        }}>
            <div className='row'>
                <div className='col-md-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={salman} />
                        <Card.Body>
                            <Card.Title>Salman Alfarizi</Card.Title>
                            <Card.Text>
                                Mahasiwa - Programmer
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>contact: salman.alfrz0112@gmail.com</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        </div >
    );
}

export default About;