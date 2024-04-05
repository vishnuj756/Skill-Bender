import React from 'react';
import Container from 'react-bootstrap/esm/Container';

export default function Slide() {
    return (
        <div className='bg-img  d-flex align-items-center '  style={{ opacity: "0.7", backgroundImage: "url(/images/bg/Home.png)",minHeight:"500px" }}>
            <div className=''>
                <Container className='text-white pt-5'>
                    <div className=''>
                        <h1 className='fw-bolder w-50'> New Era of learning and Earning</h1>
                        <h4 className='pt-2 fs-5 '>Unlock Your Potential with Skill Bender: Where Learning meets Earning</h4>
                    </div>
                </Container>
            </div>
        </div>
    );
}
