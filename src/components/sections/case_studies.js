import React from 'react';
import {Avatar, Button, Card, CardContent, Grid, Typography} from "@mui/material";
import CaseStudiesService from  '../../services/case_study_service';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './case_study.css'
const CaseStudies = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides shown as needed
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '60px', // Adjust the padding value as needed
    };

    const CaseStudies = new CaseStudiesService();
    const [caseStudies, setCaseStudies] = React.useState([]);

    React.useEffect(() => {
        getCaseStudies();
    }, []);

    const getCaseStudies = async () => {
        try {
            const caseStudyData = await CaseStudies.getCaseStudies();
            setCaseStudies(caseStudyData);
        } catch (error) {
            return error
        }
    };
    return(
        <div>
            <div className={'csTitle-container'}>
                <div className={'cs-Title-divider'} />
                <Typography variant="h5" p={2}>
                    Case Studies
                </Typography>
            </div>

            <Slider {...settings}>
                {caseStudies.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                            <Avatar
                                src={card.imageUrl}
                                alt="Banner"
                                variant="square"
                                style={{ width: '100%', height: 'auto', display: 'block', padding:"5px" }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    padding: '16px',
                                    color: 'white',
                                }}
                            >
                                <Typography variant={'h5'}>{card.title}</Typography>
                                <div style={{ marginTop: '1em' }}>
                                    <Typography variant={'h8'}>{card.description}</Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Slider>
        </div>
    )
}

export default CaseStudies;