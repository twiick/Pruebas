const API_URL_RANDOM="https://api.thecatapi.com/v1/images/search?limit=9&api_key=live_RpiWCffvHeDSrg6PjgW88Gxkq0VgXI0P0LTofgvAeH603E0jK5H8mPyRBVQJuYLV";

const API_URL_FAVORITES="https://api.thecatapi.com/v1/favourites?limit=100&api_key=live_RpiWCffvHeDSrg6PjgW88Gxkq0VgXI0P0LTofgvAeH603E0jK5H8mPyRBVQJuYLV";

const myError=document.querySelector("#error");

let catIDS=["","","","","","","","",""]

async function loadRandomMichis(){
    const res=await fetch(API_URL_RANDOM);
    const data=await res.json();

    const img0=document.querySelector("#img0");
    const img1=document.querySelector("#img1");
    const img2=document.querySelector("#img2");
    const img3=document.querySelector("#img3");
    const img4=document.querySelector("#img4");
    const img5=document.querySelector("#img5");
    const img6=document.querySelector("#img6");
    const img7=document.querySelector("#img7");
    const img8=document.querySelector("#img8");

    img0.src=data[0].url;
    img1.src=data[1].url;
    img2.src=data[2].url;
    img3.src=data[3].url;
    img4.src=data[4].url;
    img5.src=data[5].url;
    img6.src=data[6].url;
    img7.src=data[7].url;
    img8.src=data[8].url;

    catIDS[0]=data[0].id;
    catIDS[1]=data[1].id;
    catIDS[2]=data[2].id;
    catIDS[3]=data[3].id;
    catIDS[4]=data[4].id;
    catIDS[5]=data[5].id;
    catIDS[6]=data[6].id;
    catIDS[7]=data[7].id;
    catIDS[8]=data[8].id;    
}

const btn0=document.querySelector("#btn0");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const btn5=document.querySelector("#btn5");
const btn6=document.querySelector("#btn6");
const btn7=document.querySelector("#btn7");
const btn8=document.querySelector("#btn8");

btn0.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[0])
});

btn1.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[1])
});

btn2.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[2])
});

btn3.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[3])
});

btn4.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[4])
});

btn5.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[5])
});

btn6.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[6])
});

btn7.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[7])
});
btn8.addEventListener("click",()=>{
    saveFavoriteMichis(catIDS[8])
});

const myFavoritesContainer=document.querySelector("#myFavorites");

async function loadFavoriteMichis(){
    const res=await fetch(API_URL_FAVORITES);
    
    if(res.status!==200){
        myError.innerHTML="Error: "+res.status
    }else{
        const data=await res.json();
        console.log(data);
        let myFavoriteMichisList="";
        for(let i=0;i<data.length;i++){
            myFavoriteMichisList=myFavoriteMichisList+`<img src="${data[i].image.url}">`;
        }
        myFavoritesContainer.innerHTML=myFavoriteMichisList;
    }
}

async function saveFavoriteMichis(catID){
    const res=await fetch(API_URL_FAVORITES, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            image_id:catID
        })
    })
    loadFavoriteMichis();
}

loadRandomMichis();
loadFavoriteMichis();