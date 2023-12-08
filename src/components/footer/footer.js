import React from 'react';
import { Grid, Typography } from '@mui/material';
import './footer.css';

const cardData = [
    { id: 1, title: 'Terms of service' },
    { id: 2, title: 'Facebook' },
    { id: 3, title: 'Github' },
    { id: 4, title: 'Youtube' },
    { id: 5, title: 'Privacy policy' },
    { id: 6, title: 'Instagram' },
    { id: 7, title: 'Linkedin' },
    { id: 8, title: 'Behance' },
    { id: 9, title: 'Impressum' },
    { id: 10, title: 'Twitter' },
    { id: 11, title: 'Teams' },
    { id: 12, title: 'Dribbble' },
];

const extraData = [
    { id: 13, title: 'Explore open jobs' },
    { id: 15, title: '©2000—2023 Company Name' },
    // Add more extra data as needed
];

const Footer = () => {
    return (
        <div className={'footer-container'}>
            <div className={'title-container'}>
                <div className={'title-divider'} />
                <Typography variant="h5">Contact us</Typography>
            </div>

            <Grid container spacing={2} className={'footer-section'}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" p={2} className="slogan-text">
                        Have a project in mind? <br />
                        Let's make it happen
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} className={'contact-info'}>
                    <Typography variant="body1" p={2}>
                        22 Street Name, Suburb, 8000, <br />
                        Cape Town, South Africa <br />
                        +27 21 431 0001 <br />
                        enquirie@website.co.za
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} className={'array-data'}>
                {/* Left column (cardData) */}
                <Grid container spacing={2} className={'card-data-container'}>
                    {cardData.map((card) => (
                        <Grid key={card.id} item xs={4} sm={4} md={3} lg={2}>
                            <div className={'footer-item'}>
                                <Typography variant="h6" component="div">
                                    {card.title}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>

                {/* Right column (extraData) */}
                <Grid item container xs={12} sm={6} md={4} lg={3} spacing={2} className={'extra-data-container'}>
                    {extraData.map((extra) => (
                        <Grid key={extra.id} item xs={12}>
                            <div className={'footer-item'}>
                                <Typography variant="h6" component="div">
                                    {extra.title}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
