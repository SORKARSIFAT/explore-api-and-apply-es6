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

         const {strThumb,strPlayer,strNationality,strSport,
          strStatus } = player ;
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
        <div class="card">
          <img src="${strThumb ? strThumb : "https://picsum.photos/200"}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strPlayer}</h5>
            <p>${strNationality}</p>
          </div>
          <div class ="my-4">
    
         <button type="button" class="btn btn-info ms-2">Details</button>
         <button " type="button" class="btn btn-danger ms-2">Delete</button>
          </div>
        </div>
        `;
        container.appendChild(div);

    });
    
 
};

searchAllData();


