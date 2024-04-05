import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import AddTaskIcon from '@mui/icons-material/AddTask';
export default function Section() {
    return (
        <section className='bg-color my-5'>
            <Container>
                <Row lg={3} md={1}>
                    <Col>
                        <div className='d-flex justify-content-center flex-column p-5 text-white text-center'>
                            <div>
                                <PeopleIcon fontSize='large' style={{ fontSize: "7rem" }} />
                            </div>
                            <h2>100+</h2>
                            <p>Daily Active User</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex justify-content-center flex-column p-5 text-white text-center'>
                            <div>
                                <AddTaskIcon fontSize='large' style={{ fontSize: "7rem" }} />
                            </div>
                            <h2>100 +</h2>
                            <p>Company Projects</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex justify-content-center flex-column p-5 text-white text-center'>
                            <div>
                                <GroupsIcon fontSize='large' style={{ fontSize: "7rem" }} />
                            </div>
                            <h2>500 +</h2>
                            <p>Happy Student Earn</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
