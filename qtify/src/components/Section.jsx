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

    // const { enqueueSnackbar } = useSnackbar();



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
        //    enqueueSnackbar(error.response.data.message, {variant: "error"});
        console.error('There was an error making the POST request!', error);
         }else{
        //    enqueueSnackbar("Something went wrong. Check that the backend is running, reachable, and returns valid JSON.", {
        //      variant: "error",
        //      anchorOrigin: {
        //        vertical: "bottom",
        //        horizontal: "center"
        //      }
        //    });  
        console.error('There was an error making the POST request!', error);
         }
         return null;
        }
      
       };
    return(
        <div>
        <span className={styles.title}>Top Album</span>
        <Button label={"show all"}/>
        <div className={styles.gridContainer}>
        { filteredSongs.length ? (
                  filteredSongs.map((album) => (
                    <div class="grid-item">
                        <SongCard image={album.image} follows={album.follows} albumName={album.title}/>
                    </div>
                    // <Grid item xs={6} md={3} key={product._id}>
                    //   <SongCard product={product} handleAddToCart={async () => {
                    //     console.log(items);
                    //     await addToCart(
                    //       token,
                    //       items,
                    //       products,
                    //       product._id,
                    //       1,
                    //       {
                    //         preventDuplicate: true,
                    //       }
                    //     )
                    //   }}/>
                    // </Grid>  
                  ))
                )
                :(<div className="loading">
                  {/* <SentimentDissatisfied color = "action" />
                  <h4 style={{color:"#63636"}}>No products found</h4> */}
                  console.log(Naachoo!);
                  </div>)}
        </div>

        </div>
    );
}

