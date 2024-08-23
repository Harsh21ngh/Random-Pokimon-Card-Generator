let main=document.getElementById("main");
let s="";
let arr=["https://th.bing.com/th/id/OIP.GP8heMgxc5FVsDHhSa3oywHaI4?w=152&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://www.drawingnow.com/file/pic/photo/2016/08/raichu123-Raichu%20_%20Pokemon%20_)%20_%20Pinterest_1024.jpg",
    "https://i.pinimg.com/originals/48/1d/a3/481da3557c38dcffa7c75aa6e581aefb.png",
    "https://e1.pxfuel.com/desktop-wallpaper/47/610/desktop-wallpaper-moltres-pokemon-cool-pokemon-pinterest-de-pokemon-fusions.jpg",
    "https://thumbs.dreamstime.com/b/illustration-white-dove-wings-night-sky-generative-ai-illustration-white-dove-wings-night-sky-293970010.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/bd/86/45/bd864519902a1e430f4b7d13fd60ea93.jpg"
    
   
]

for(let i=1;i<=48;i++){
    let r=Math.floor(Math.random()*6)
    s+= `  <div class="card">
            <img src= ${arr[r]}>
        </div>`
}
main.innerHTML=s;