let h1=document.getElementById('timer');
function counter(){
    let i=1;
    setInterval(function(){
        h1.innerText=i;
        i++;    
    },1000);
}
counter();