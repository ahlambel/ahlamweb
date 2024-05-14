const api = "sk-proj-feYWXhQImvt99ZErkBHtT3BlbkFJWD8fj0IJzwuOEnGr4I7Z";
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getImage = async () => {
//make a request to openia api
const methods ={
   methods:"POST",
   headers:{
       "Content-Type":"application/json",
       "Authorization":`Bearer ${api}`
   },
   body:JSON.stringify(
      {
       "prompt":"red flower",
       "n":3,
       "size":"256x256",
      }
   )
}
 const res = await fetch("https://api.openai.com/v1/images/generations",methode)

 })
 //parse the response as json
 const data = await res.json()
 const listImages =data.data;
 images.innerHTML = ''
 listImages.map(photo => {
    const container = document.createElement("div")
    images.append(container)
    const img = document.createElement("img")
    container.append(img)
    img.src = photo.url
 })
}