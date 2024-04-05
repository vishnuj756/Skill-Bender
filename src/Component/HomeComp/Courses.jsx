import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
function Courses() {
    const data = [
        {
            src: '/images/bg/figma.png',
            title: "learn figma",
            rating:4,
            teacher:"vishal Shivhare",
            lession:"9 lession",
            duration:"4 Hours"
        },
        {
            src: 'pro/flinto_430x168.png',
            title: "learn flinto ",
            rating:4,
            teacher:"Deepak Sharma",
            lession:"12 lession",
            duration:"6 Hours"
        },
        {
            src: 'pro/photoshop_430x168.png',
            title: "learn photoshop ",
            rating:5,
            teacher:"Sambhav Singh",
            lession:"8 lession",
            duration:"7 Hours"
        },
        {
            src: 'pro/sketch_430x168.png',
            title: "learn sketch ",
            rating:3,
            teacher:"Swati Ji",
            lession:"10 lession",
            duration:"12 Hours"
        }
    ];

    return (
        <section className=' py-5'>
            <Container>
                <Row lg={4} className=''>
                    {data.map((item, index) => (
                        <Col key={index} className='my-3'>
                            <Card>
                                <Card.Img variant="top" src={item.src} className="rounded" style={{ height: "150px" }} />
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <Card.Title>{item.title}</Card.Title>
                                        <FavoriteBorderIcon />
                                    </div>
                                    <h6>{item.teacher}</h6>
                                    <span>
                                        {(()=>{

                                        
                                      const star=[]
                                        for(let i=0;i< item.rating;i++){
                                            star.push(<StarIcon key={i} className="text-secondary fs-6" />)
                                        }
                                        return star
                                        })()
                                        }
                                    </span>
                                    <div className='d-flex justify-content-between border-top border-1 pt-4 '>
<span  className='d-flex text-black-50 '><AccessTimeIcon style={{fontSize:"14px"}} className='me-1'/><h6 style={{fontSize:"14px"}}>{item.duration}</h6></span>
<span  className='d-flex text-black-50 '><PlayCircleOutlineIcon style={{fontSize:"14px"}} className='me-1'/><h6 style={{fontSize:"14px"}}>{item.lession}</h6></span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Courses;
