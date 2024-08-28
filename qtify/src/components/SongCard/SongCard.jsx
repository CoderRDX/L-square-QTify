import React from "react";
import styles from "./SongCard.module.css"
import Chip from '@mui/material/Chip';
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material"; 


export default function SongCard({image, follows, albumName}){
    return(
        <Card className ={styles.card}>
            <CardActionArea className={styles.outer}>
                <div className={styles.inside}>
                <CardMedia 
                component="img"
                height="170"
                width="159"
                
                image={image}
                alt=""/>
                <Chip className={styles.chip}  label={`${follows} follows`}  sx={{backgroundColor: 'black', color: 'white',fontSize:'10px' }}/>
                </div>
             
                <Typography className={styles.tname}>
                    {albumName}
                </Typography>
                
            </CardActionArea>
        </Card>
    );

}