let div=document.getElementById('carousel');
function carousel(){
    let images=['https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4326/1711121894326-i','https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8566/1710843248566-i','https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8730/1707996958730-i'];
    let imgElement=document.createElement('img');
    imgElement.src=images[0];
    div.append(imgElement);
    let i=1;
    setInterval(function(){
        if(i===images.length){
            i=0;
        }
        imgElement.src=images[i];
        div.append(imgElement);
        i++;

    },3000);
}
carousel();
async function searchMovies(){
    let loader_div=document.getElementById('loader_div');
    loader_div.style.display='block';
    try{
        let movie_name=document.getElementById('movie_name').value;
        let response=await fetch(`http://www.omdbapi.com/?apikey=aa6a3b1c&s=${movie_name}`);
        let data=await response.json();
        console.log(data)
        let actual_data=data.Search;
        console.log(actual_data);
        appendMovies(actual_data);
    }
    catch(err){
        console.log(err);
    }
}
function appendMovies(data){
    loader_div=document.getElementById('loader_div');
    loader_div.style.display='none';
    let movies_div=document.getElementById('movies');
    movies_div.innerHTML=null;
    data.forEach(el=> {
        let div=document.createElement('div');
        let img=document.createElement('img');
        img.src=el.Poster;
        let p_name=document.createElement('p');
        p_name.innerText=el.Title;
        div.append(img,p_name);
        movies_div.append(div);
    });
}
let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
}