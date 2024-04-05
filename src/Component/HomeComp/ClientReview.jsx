import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function ClientReview() {
    const data = [
        {
            name: "Figma",
            review:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facere reiciendis esse deleniti consequatur consequuntur sint eius itaque nobis harum!"
        },
        {
            name: "Flinto",
            review:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facere reiciendis esse deleniti consequatur consequuntur sint eius itaque nobis harum!"
        },
        {
            name: "Photoshop",
            review:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facere reiciendis esse deleniti consequatur consequuntur sint eius itaque nobis harum!"
        },
        {
            name: "Sketch",
            review:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facere reiciendis esse deleniti consequatur consequuntur sint eius itaque nobis harum!"
        },
       
    ]
    return (

        <Container fluid className='py-5'>
            <h4 className='text-color text-center pb-2'>Lorem, ipsum dolor.</h4>
            <h3 className='text-center pb-2'>Our Clients Says</h3>
            <Row lg={2} md={1}>
{
    data.map((item)=>{
        return(<Col>
          <div className='shadow p-3 my-3 rounded-2'>
          <h4 className='ps-3 py-2 '>{item.name}</h4>
            <div className='d-flex'>
                <h1 className='text-color me-2' style={{fontSize:"rem"}}>&ldquo;</h1>
                <h6>{item.review}</h6>
            </div>
          </div>
        </Col>)
    })
}
            </Row>
        </Container>

    )
}
