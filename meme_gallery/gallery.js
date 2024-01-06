const loadMeme = ()=>{
    const URL = 'https://meme-api.com/gimme/50';
    fetch(URL)
    .then(res => res.json())
    .then(data =>displayMeme(data.memes))
}

const displayMeme = (memes) => {
//    console.log(memes);
const memeContainer = document.getElementById("sectionMeme");
  memes.forEach((meme) => {
    console.log(meme.url);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-96 glass">
  <figure><img class=" lg:w-full h-64" src="${meme.url}" alt="car!"/></figure>
 

</div>
     
    `
    memeContainer.appendChild(div);


    
  });

};

loadMeme();