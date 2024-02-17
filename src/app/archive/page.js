'use client'

import ArchiveCard from "../components/ArchiveCard"
import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../context"
import LoadingText from "../components/LoadingText"
import { Octokit } from 'octokit'


const archives_file = [
    {"id":1,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/8n7ipHhI8CI"},
    {"id":2,"project_title":"The Deadpoollverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/1FOeHGCkTfQ"},
    {"id":3,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/ZXKL4mwbSRA"},
    {"id":4,"project_title":"The Deadpool anlverine","projdesc":"This i abc ldkjfl klsk dfjk ak;d k kadflk s cool we are legion","imageurl":"https://source.unsplash.com/8n7ipHhI8CI"},
    {"id":5,"project_title":"The ool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/1FOeHGCkTfQ"},
    {"id":6,"project_title":"The ool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/1FOeHGCkTfQ"},
    {"id":7,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/ZXKL4mwbSRA"},
    {"id":8,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/ZXKL4mwbSRA"},
    {"id":9,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/ZXKL4mwbSRA"},
    {"id":10,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/kfesSq6u8-0"},
    {"id":11,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/ZXKL4mwbSRA"},
    {"id":12,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/kfesSq6u8-0"},    
    {"id":13,"project_title":"The Deadpool and Wolverine","projdesc":"This is cool we are legion","imageurl":"https://source.unsplash.com/kfesSq6u8-0"}
]

export default function Archive() {
    const {cardData, setcardData} = useContext(StoreContext)
    const [archives_data, setArchives_data] = useState([])
    const [gitRepo, setgitRepo] = useState([])
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
          console.log(res)
          let repos =[]
          res.data.forEach(repo => {
            let tempRepo = {}
            tempRepo.name = repo.name
            tempRepo.language = repo.language
            tempRepo.description = repo.description
            tempRepo.url = repo.html_url
            repos.push(tempRepo)
          });
          setgitRepo(repos)
        })
    }    
    useEffect(()=>{
        setcardData(archives_file)
        fetchRepo()
    },[])
    return (
        <div className="bg-bggrayarc overflow-auto py-1 mt-5 max-md:mt-10 h-[80vh] w-[90%] m-auto custom-scrollbar">
        <div class="columns-1 gap-4 space-y-4 p-4 sm:columns-2 md:columns-4 lg:columns-4">
            {archives_file?archives_file.map((a, index)=>(
                <ArchiveCard key={index} archive={a}/>
            )):<LoadingText/>}
        </div>
        </div>
      )
}