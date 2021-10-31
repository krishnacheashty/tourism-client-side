import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const ManageAllSerVice = () => {
    const{user}=useAuth()
    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Event Name</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td></td>
                    <td><button>Delete</button></td>
                    </tr>
                </tbody>
                </Table>
        </Container>
    );
};

export default ManageAllSerVice;