import React from 'react';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import GppGoodIcon from '@mui/icons-material/GppGood';
import UpdateIcon from '@mui/icons-material/Update';
import { Row, Col, Container } from 'react-bootstrap';

export default function Slide2() {
    const data = [
        {
            icon: <SubscriptionsIcon className='bg-color text-white rounded' />,
            title: "8,000+ Courses",
            description: "Explore a wide range of skills."
        },
        {
            icon: <GppGoodIcon className='bg-color text-white rounded' />,
            title: "By Industry Experts",
            description: "Professional development from the best people."
        },
        {
            icon: <UpdateIcon className='bg-color text-white rounded' />,
            title: "Unlimited Access",
            description: "Unlock Library and learn any topic with one subscription."
        }
    ];

    return (
        <section className='py-5  border-bottom border-3'>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col key={index} className="d-flex align-items-center my-3" lg={4}>
                            <div className='bg-color rounded-circle d-flex align-items-center justify-content-center icon-container me-1' style={{ width: "64px", height: "64px" }}>
                                {item.icon}
                            </div>
                            <div className="ms-2">
                                <div className="fw-bold">{item.title}</div>
                                <div style={{ fontSize: "14px" }}>{item.description}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
