import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUsers(data))
        }, []

    )
    return (
        <>
            <div className='p-5'>
                <Link
                    className='btn btn-primary'
                    to='/'
                    role='button'
                    style={{ marginBottom: '20px', float: 'left' }}
                >
                    Back to Home
                </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}