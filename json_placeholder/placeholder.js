const  loadData = ()=>{
   
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data => disPlayData(data))
    .catch(error =>{
        console.log(error);
    })
}

const disPlayData = (data) => {
    // console.log(data.slice(0,6));
    const container = document.getElementById("postInfo");
   for(let singleData of data.slice(0,5)){
     console.log(singleData);
     
     const div = document.createElement("div");
     div.innerHTML =`
     <h1 class ="text-center text-3xl text-red-400 pt-8 font-bold">${singleData.title}</h1>
     <p class ="mx-8 font-mono">${singleData.body}</p>
     `;
     container.appendChild(div);
   }
}; 




loadData();