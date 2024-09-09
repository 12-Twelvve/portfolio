'use client'

import ArchiveCard from "../components/ArchiveCard"
import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../context"
import { Octokit } from 'octokit'


const git_images = [
  "https://pics.craiyon.com/2023-11-06/02e483d55bd34963ba09b29e5d582a6f.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjRoZG0tHHwZpn9eErycHD_aFYn5dOk6ehN_9L8MRLy7i7VOPGLDF3tn3LJyGxO6zepM&usqp=CAU",
  "https://mediaproxy.tvtropes.org/width/1000/https://static.tvtropes.org/pmwiki/pub/images/damndaniel1.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxRvgAbUOqu2rmudKVllWF-FnrmofvEvdrbmeu--czYSKk1VuBIdBz7FXhlrlWjg3PNk&usqp=CAU",
  "https://wallpapers.com/images/hd/one-piece-pictures-1s22yzh31ithr08w.jpg",
  "https://i.pinimg.com/originals/88/d2/74/88d274342f8855acc06767fa093514e6.jpg",
  "https://i.pinimg.com/474x/23/3f/b4/233fb4925b58f06119e715e9bb6cb7f3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH1dT7vxVtQNTtQYe_bQix-bz9MjaFjFLc-DEgAfZLzKfrg4mt4GlosGinm70XUJRC6c&usqp=CAU",
    "https://i.pinimg.com/originals/a0/56/06/a056063c87de020d286a45de80855aad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SbwWuM4R5zZrs9PJ6Pk8pRAPKdA3plfLQg&usqp=CAU",
    "https://i.pinimg.com/736x/b2/43/3d/b2433d0a7e2d371adf7a7a4f23443d21.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxw3c0H50vcSBa_TaFJwJANoeEYJ0967aQ6dYeNLoP_5zSUghP3WlHOF0pxsFjmqb5WD8&usqp=CAU",
    "https://w0.peakpx.com/wallpaper/216/742/HD-wallpaper-roronoa-zoro-one-piece-art-resolution-anime-and-background-zoro-smile.jpg",
    "https://e0.pxfuel.com/wallpapers/562/75/desktop-wallpaper-brooks-of-one-piece-one-piece-brook.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/1016/537/desktop-wallpaper-one-piece-favourites-by-steamgamercarrimad3-brook-one-piece.jpg",
    "https://rare-gallery.com/thumbs/323427-Trafalgar-Law-One-Piece-4K-iphone-wallpaper.jpg",
    "https://babybloomberg.com/wp-content/uploads/2023/10/sanji-one-piece.webp",
    "https://i.pinimg.com/736x/d1/b5/99/d1b5991b0beaba6de6af67de231cd1b9.jpg",
    "https://i.pinimg.com/originals/35/9f/cb/359fcbaae2c37c7f947963983d53bc60.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYfiIHX2KS71qlEZhgVsExekjDT16rw9M08MLBHQCUTzmxBdrqwXCNtTuOw7-i406QQg&usqp=CAU",
    "https://i.redd.it/latkv53p37qb1.jpg",
    "https://w0.peakpx.com/wallpaper/357/716/HD-wallpaper-nico-robin-demon-child-one-piece.jpg",
    "https://img.wattpad.com/cover/184949732-288-k577960.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVvOcu8xsjf97lapOeeGRCYbcdF8ys4qtCA&usqp=CAU",
    "https://images.everyeye.it/img-notizie/one-piece-torna-dressrosa-figure-doflamingo-v4-635619-1280x960.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOvKrGTym6M2ojxcCV3G8Y-4ROsoYCn_x6t1iOzoe3DRU0oqBoMm3YzPfCD5ptjHvts0&usqp=CAU",
    "https://staticg.sportskeeda.com/editor/2023/09/5d3e0-16938274128966-1920.jpg",
    "https://static.fandomspot.com/images/01/25839/00-featured-one-piece-marshall-d-teach-screenshot.jpg",
    "https://2.bp.blogspot.com/-VsntXNEg8iU/WYI9dWR5MTI/AAAAAAAAHQY/5qAE2NeBdFwlBAPBC1y0zy6ieQHyEWW-wCLcBGAs/s1600/Thinks%2BHe%2527s%2BPeople.jpg",



   ]

export default function Archive() {
    const {cardData, setcardData} = useContext(StoreContext)
    
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * git_images.length);
      return git_images[randomIndex];
    };
    const octokit = new Octokit({
        auth:process.env.TOKEN
      })
    const fetchRepo= async()=>{
        await octokit.request("GET https://api.github.com/users/12-Twelvve/repos",{
          per_page:100,
          headers: {
            "content-type": "text/plain",
          }
        }).then(res=>{
          let repos =[]
          res.data.forEach(repo => {
            let tempRepo = {}
            tempRepo.id = repo.id
            tempRepo.name = repo.name
            tempRepo.language = repo.language
            tempRepo.description = repo.description
            tempRepo.html_url = repo.html_url
            tempRepo.image_url = getRandomImage()
            repos.push(tempRepo)
          });
          setcardData(repos);
        })
    }
    useEffect(()=>{
      const fetchData = async() => {
        await fetchRepo();
      };
      fetchData();
    },[])
    return (
        <div className="bg-bggrayarc overflow-auto py-1 mt-5 max-md:mt-10 h-[80vh] w-[90%] m-auto custom-scrollbar">
        <div className="columns-1 gap-4 space-y-4 p-4 sm:columns-2 md:columns-4 lg:columns-4">
            {cardData.map((a, index)=>(
                <ArchiveCard key={index} archive={a}/>
            ))}
        </div>
        </div>
      )
}