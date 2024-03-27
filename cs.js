//https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4326/1711121894326-i
//https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8566/1710843248566-i
//https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8730/1707996958730-i
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