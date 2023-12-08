import React from 'react';
import {Card, CardContent, Grid, Typography, Avatar} from "@mui/material";
import VisaLogo from '../../assets/visa-black.svg';
import TymeBank from '../../assets/tyme-bank-black.svg';
import Distell from '../../assets/distell-black.svg';
import Spotify from '../../assets/spotify-black.svg';
import MicroSoft from '../../assets/microsoft-black.svg';
import Engen from '../../assets/engen-black.svg';
import Nike from '../../assets/nike-black.svg';
import Wesgro from '../../assets/wesgrow-black.svg';
import Multichoice from '../../assets/multichoice-black.svg';
import Pnp from '../../assets/pnp-black.svg'
import Liquid from '../../assets/liquid-black.svg';
import Tfg from '../../assets/tfg-black.svg'
import Sanlam from '../../assets/sanlam-black.svg';
import Santam from '../../assets/santam-black.svg'
import BBC from '../../assets/bbc-black.svg';


const cardData = [
    { id: 1, image: VisaLogo,  },
    { id: 2, image: TymeBank,  },
    { id: 3, image: Distell,  },
    { id: 4, image: Spotify,  },
    { id: 5, image: MicroSoft,  },
    { id: 6, image: Engen,  },
    { id: 7, image: Nike,  },
    { id: 8, image: Wesgro,  },
    { id: 9, image: Multichoice,  },
    { id: 10, image: Pnp,  },
    { id: 11, image: Liquid,  },
    { id: 12, image: Tfg,  },
    { id: 13, image: Sanlam,  },
    { id: 14, image: Santam,  },
    { id: 15, image: BBC,  },
];
const Brands = () => {
    return(
        <div>
            <div style={{marginTop:'2em', marginBottom:'2em'}}>
                <div className={'title-container'}>
                    <div className={'title-divider'}/>
                    <Typography variant="h5" p={2}>
                        You'll be in good company.
                    </Typography>
                </div>
                <Typography variant="h2" p={2}>
                    Trusted by leading brands
                </Typography>
            </div>

            <Grid container spacing={1}>
                {cardData.map((card) => (
                    <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
                        <img style={{width:'20em', height:"2em", margin:"2em"}} src={card.image}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Brands;