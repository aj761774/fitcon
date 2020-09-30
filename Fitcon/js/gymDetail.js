

const stars = document.querySelectorAll('#gymReviewRating span');
for(let i=0;i<stars.length;i++){
    stars[i].addEventListener('click',()=>{
    if(stars[i].textContent == '⭐'){
        stars[i].textContent = '☆';
   
    }
    else  if(stars[i].textContent == '☆'){
          stars[i].textContent = '⭐';
      }
    });
}
$('#reviewButton').on('click',()=>{
    $('#reviewGymForm').slideToggle(); 
})
