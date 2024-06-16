let data=[
    "https://images.wallpapersden.com/image/ws-2024-transformers-movie-poster_92824.jpg",
    "https://images.wallpapersden.com/image/ws-furiosa-cool-a-mad-max-saga-background_92827.jpg" ,
    "https://images.wallpapersden.com/image/ws-atlas-jlo-movie_92825.jpg",
    "https://images.wallpapersden.com/image/ws-if-2024-movie-hd-ryan-reynolds_92828.jpg",
    "https://images.wallpapersden.com/image/ws-poster-of-mufasa-the-lion-king_92750.jpg",
    "https://images.wallpapersden.com/image/ws-avatar_68556.jpg"  
]
let div=document.getElementById("container")
let div1=document.createElement("img")

div.append(div1)

let img=0;
function imgaeSlide(){
    div1.src=data[img]
    img++
    if(img==data.length){
        img=0;
    }
    console.log(img)
}

imgaeSlide()
let a= setInterval(imgaeSlide,2000)
// clearInterval(a)