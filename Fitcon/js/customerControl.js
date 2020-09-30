const moreButtons = document.querySelectorAll('.moreButton');
const moreInfos = document.querySelectorAll('.moreInfo');

for(let i = 0;i<moreButtons.length;i++){
  moreButtons[i].addEventListener('click',()=>{
   if(moreInfos[i].classList.contains('activeMoreInfo')){
    moreInfos[i].classList.remove('activeMoreInfo');
   
   }
   else{
    moreInfos[i].classList.add('activeMoreInfo');

   }

})
}

const members = document.querySelectorAll('.MemberName');
const searchMember = document.getElementById('searchMemberName');
const memberIds = document.querySelectorAll('.MemberId');
searchMember.addEventListener('input',()=>{
    let searchValue = searchMember.value;
    const searchBy = document.getElementById('searchByNameOrId').value;
   
     searchValue = searchValue.toLowerCase();
     if(searchBy == 'membername'){
    if(searchValue){
      members.forEach((member)=>{
        if(!member.textContent.toLowerCase().includes(searchValue)){
          member.parentElement.style.display = 'none';
        }
       
    });
    }
    else{
      members.forEach((member)=>{
        
          member.parentElement.style.display = 'block';
        
       
    })
    }
  }
  else{
    if(searchValue){
      memberIds.forEach((member)=>{
        if(!member.textContent.toLowerCase().includes(searchValue)){
          member.parentElement.parentElement.style.display = 'none';
        }
       
    });
    }
    else{
      memberIds.forEach((member)=>{
        
          member.parentElement.parentElement.style.display = 'block';
        
       
    })
    }
  }  
    
});
const customerReviewButtons = document.querySelectorAll('.customerReviwButton');
customerReviewButtons.forEach((customerReviewButton)=>{
  customerReviewButton.addEventListener('click',()=>{
    console.log('clicked');
      $('#customerReviwModal').fadeIn();
      $('#customerReviwTopContainer').fadeIn();
      $('body').css('overflowY','hidden');
  })
})

$('#customerReviwModal .close').on('click',()=>{
  $('customerReviwModal').fadeOut();
  $('#customerReviwTopContainer').fadeOut();
  $('body').css('overflowY','visible');
})


const stars = document.querySelectorAll('#userReviewRating span');
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