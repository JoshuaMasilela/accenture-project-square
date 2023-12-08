import React from 'react';
import { Avatar, Typography, Button } from '@mui/material';
import BannerImg from '../../assets/confidence.jpeg';
import './banner.css';

const Banner = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
            <Avatar variant={'square'} alt={'Banner'} src={BannerImg} style={{ width: '100%', height: 'auto' }} />

            <div
                className="banner-text-container" // You can define this class in your CSS for styling
                style={{
                    position: 'absolute',
                    bottom: "30%",
                    left: "10%",
                    textAlign: 'left',
                    color: 'white',
                    padding: '1em', // Add padding for better readability
                }}
            >
                <Typography variant={'h2'}>Live With Confidence</Typography>

                <div style={{ marginTop: '1em' }}>
                    <Typography variant={'h5'}>
                        Jose Mourinho brings confidence to pan-African Sanlam campaign.
                    </Typography>
                </div>
                <Button className={'banner-button'}>View Project</Button>
            </div>
        </div>
    );
};

export default Banner;
