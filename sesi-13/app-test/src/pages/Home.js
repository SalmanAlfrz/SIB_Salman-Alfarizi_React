import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'

const Home = () => {
    return (
        <div className='container' style={{
            justifyContent: 'center',
            paddingTop: '50px',
            width: '40rem'
        }}>
            <div className='row'>
                <div className='col-md-12'>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1 className='display-5 fw-bold'>Why do we need Test ?</h1></Card.Title>
                            <Card.Text>
                                To quarantee our code quality. And to show the people that we also care about it and wish to give something that already prove, at least by ourself
                            </Card.Text>
                            <Link
                                className='btn btn-primary'
                                to='/users'
                                role='button'
                            >
                                Users List
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default Home;