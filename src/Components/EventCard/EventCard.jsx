import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { CalendarMonth, Groups, LocationOn } from '@mui/icons-material'

import imageUrl from "../../assets/FiestadeBurbujas.webp"
import { Link } from 'react-router-dom'

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour:"2-digit", minute:"2-digit"}
    console.log(date)
    const fecha = new Date(date)
    return fecha.toLocaleString('es-ES',options) + 'h'
}


const EventCard = (
    { event: { title, dateStart, dateEnd, addressTitle, addressUrl, participants } }
) => {

    return (

        <Box className={'cardHover'} sx={{ display: 'flex', justifyContent: 'center', /* flexWrap: 'wrap', */  padding: '30px' }}>
            <Card sx={{ maxwidth: '100%', width: '400px' }} elevation={4}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent sx={{ padding: '20px', paddingBottom: '0' }}>

                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight:'bold', textAlign: 'center', paddingBottom: '20px' }}>
                        {title}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <CalendarMonth />

                            <Typography variant="body1" color="text.main">
                                <strong>Inicio:</strong> {formatDate(dateStart)}
                            </Typography>

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <CalendarMonth />
                            <Typography variant="body1" color="text.main"> {/* Date end */}
                                <strong>Fin:</strong> {formatDate(dateEnd)}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <LocationOn />
                                <Link
                                    to={addressUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    style={{ color: '#FF8000', textDecoration: 'underline' }}
                                >
                                    <Typography variant="body2" color='text.main' >
                                        {addressTitle}
                                    </Typography>
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Groups />
                                <Typography variant="body2" color="text.main">
                                <strong>Participantes:</strong>{participants}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>

                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                        <Button variant="contained" color="success">
                            Info
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>


    )
}

export default EventCard