import React from 'react';
import {Grid, Card, CardContent, Typography, Avatar} from '@mui/material';
import WebDevIcon from '../../assets/Web-dev-icon.svg';
import AppDevIcon from '../../assets/app-dev-icon.svg';
import UXIcon from '../../assets/ux-icon.svg';
import BlockChainIcon from '../../assets/icon.svg';
import './services.css';

const cardData = [
    { id: 1, title: 'Web development', content: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.', image: WebDevIcon },
    { id: 2, title: 'User experience & design', content: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.', image: UXIcon },
    { id: 3, title: 'Mobile app development', content: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.', image: AppDevIcon },
    { id: 4, title: 'Blockchain solutions', content: 'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.', image: BlockChainIcon },
    // Add more card data as needed
];
const Services = () => {
    return(
        <div>
            <div className={'title-container'}>
                <div className={'title-divider'}/>
                <Typography variant="h5">
                    What we do.
                </Typography>
            </div>

            <Grid container spacing={1}>
                {cardData.map((card) => (
                    <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent>
                                <div className={'service-icon'}>
                                <Avatar
                                    src={card.image}
                                    alt="Banner"
                                    variant="square"
                                    style={{width: "20%",
                                        height: "auto",
                                        display: "block",
                                        padding:"5px"}}
                                />
                                </div>
                                <Typography >
                                   <div className={'service-title'}>{card.title}</div>
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <div className={'service-desc'}> {card.content}</div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Services;
