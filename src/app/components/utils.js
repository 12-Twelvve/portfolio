import { git_images } from "../../data/images";

export async function GenerateStaticParams() {
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * git_images.length);
        return git_images[randomIndex];
      };
    const octokit = new Octokit({
      auth:process.env.TOKEN
    })
    let repos =[]
    await octokit.request("GET https://api.github.com/users/12-Twelvve/repos",{
        per_page:100,
        headers: {
          "content-type": "text/plain",
        }
      }).then(res=>{
        res.data.forEach(repo => {
          let tempRepo = {}
          tempRepo.name = repo.name
          tempRepo.id = repo.id
          tempRepo.language = repo.language
          tempRepo.description = repo.description
          tempRepo.html_url = repo.html_url
          tempRepo.image_url = getRandomImage()
          repos.push(tempRepo)
        });
      })
    // console.log(repos)
    return repos.map((d)=>({slug: d}))
  }