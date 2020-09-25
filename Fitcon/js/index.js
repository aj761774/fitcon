document.getElementById('Mobilemenu').addEventListener('click',()=>{
   rightPartMobile.style.left='0';
});
document.getElementById('close').addEventListener('click',()=>{
    rightPartMobile.style.left='-20rem';
 });
window.addEventListener('resize',()=>{
    if(rightPartMobile.style.left == '0px'){
        rightPartMobile.style.left = '-20rem';
    }
});
window.addEventListener('scroll',()=>{
    if(rightPartMobile.style.left == '0px'){
        rightPartMobile.style.left = '-20rem';
    }
});


