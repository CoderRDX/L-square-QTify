import React from "react";
import styles from "./Section.module.css" 
import { useEffect, useState } from "react";
// import { useSnackbar } from "notistack";
import axios from "axios";
import SongCard from "./SongCard/SongCard";
// import { Button } from "@mui/material";
import Button from "./Button/Button";




export default function Section(){

    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
        const onLoadHandler= async ()=>{
          const songsdata = await performAPICall(); 
        }
        onLoadHandler();
       }, []);


    const performAPICall = async () => {
        try{
         const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
         setSongs(res.data);
         setFilteredSongs(res.data);
         setIsLoading(false);
         console.log(res.data);
         return res.data;
        }catch(error){
         setIsLoading(false);
         if(error.response && error.response === 500){
     
        console.error('There was an error making the POST request!', error);
         }else{
     
        console.error('There was an error making the POST request!', error);
         }
         return null;
        }
      
       };
    return(
        <div className={styles.section}>
        <span className={styles.title}>Top Album</span>
        <Button className={styles.btn2} label={"Show all"}/>
        <div className={styles.gridContainer}>
        { filteredSongs.length ? (
                  filteredSongs.map((album) => (
                    <div class="grid-item">
                        <SongCard image={album.image} follows={album.follows} albumName={album.title}/>
                    </div>
        
                  ))
                )
                :(<div className="loading">
                  console.log("check the code!");
                  </div>)}
        </div>

        </div>
    );
}

