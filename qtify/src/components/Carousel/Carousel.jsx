import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import styles from './Carousel.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "../SongCard/SongCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({album}) => {
 
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
       const res = await axios.get(album);
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

  return (
    <div className={styles.carouselcontainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        // slidesPerView={7}
        navigation
        loop
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide on small screens
          },
          480: {
            slidesPerView: 2, // 2 slides on slightly larger screens
          },
          640: {
            slidesPerView: 3, // 3 slides on tablets
          },
          768: {
            slidesPerView: 4, // 4 slides on small laptops
          },
          1024: {
            slidesPerView: 5, // 5 slides on medium screens
          },
          1200: {
            slidesPerView: 6, // 6 slides on larger screens
          },
          1400: {
            slidesPerView: 7, // 7 slides on large screens
          },
        }}
      >
        {filteredSongs.map((album) => (
          <SwiperSlide >
             <SongCard image={album.image} follows={album.follows} albumName={album.title}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;