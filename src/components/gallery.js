import pexels from '../helpers/pexels'
import React, { useState, useEffect } from 'react';
import Header from './header'
import Header2 from './header-transp';
import Courses from './courses'


const Gallery = () => {

    const [photos, setphotos] = useState({ photos: [] });

    useEffect(async () => {
        const response = await pexels.get("/videos/videos/1448735")
        setphotos(response.data)
    }, []);
    
    return (
        <div className="items-center justify-center overflow-hidden h-2/3 w-screen">
            <Header2 className=" z-50 absolute"/>
            <div className="mt-48 md:mt-28 flex flex-col text-center p-1">
                <div className=" z-30 p-2 text-lg md:text-4xl   text-white text-opacity-100 opacity-0 rounded-xl animate-ani  font-poppins tracking-wide">
                    Construções de bamboo, projetos & produtos
                </div>
                <div className=" z-30 p-5 text-xl md:text-3xl font-mono uppercase text-opacity-80 text-white bg-opacity-90 opacity-0 rounded-xl animate-ani2 drop-shadow-xl tracking-widest">
                    designed in brazil
                </div>
            </div>
            {console.log(photos)}
            <div className="absolute h-5/6 z-10 top-0 left-0 w-full p-0 m-0" >
                <video autoPlay loop muted preload playsInline className="object-cover h-full w-full" poster="https://images.pexels.com/videos/1448735/pictures/preview-0.jpg">
                    <source
                    src="https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=170&oauth2_token_id=57447761"
                    type="video/mp4"
                    />
                        Your browser does not support the video tag.
                </video>

            <div className="z-20 absolute -top-0 -left-0 h-full w-full bg-black opacity-40"> 
            </div>
            </div>
        </div>
    )
}

export default Gallery