const loadData = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showData(data.slice(0,6)))
}

const showData =  (countries)=>{
  
    const container = document.getElementById("country");
    container.innerHTML = "";

    countries.forEach((country) => {
        console.log(country );
    const div = document.createElement("div");
    div.innerHTML=`
    <div class="card w-full h-96   shadow-2xl ">
  <figure class="px-10 pt-10">
    <img   src="${country.flags.png}" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p class="text-xl font-medium">Population:${country.population}</p>

    <div class="card-actions">
      <button onclick="modalOpen()" class="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 font-bold">Details</button>
    </div>
  </div>
</div>
      `

container.appendChild(div);   
    });

}

const modalOpen = ()=>{
  console.log("modal");

}



loadData();

const showAllData = ()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => showData(data))

};

