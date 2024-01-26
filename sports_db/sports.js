const searchAllData = ()=>{
    const inputElement = document.getElementById("searchValue");
    const inputValue = inputElement.value;
    inputValue.innerText ="";
   const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDataPlayers(data.player))
};

const showDataPlayers=(players)=>{
    const container = document.getElementById("player-info");
    container.innerHTML = "";
    
    players.forEach(player => {
        console.log(player);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
        <div class="card">
          <img src="${player.strThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        `;
        container.appendChild(div);

    });
    
 
};

searchAllData();


