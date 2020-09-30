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

searchMember.addEventListener('input',()=>{
    let searchValue = searchMember.value;
     searchValue = searchValue.toLowerCase();
    if(searchValue){
      members.forEach((member)=>{
        if(!member.textContent.toLowerCase().includes(searchValue)){
          member.parentElement.style.display = 'none';
        }
       
    })
    }
    else{
      members.forEach((member)=>{
        
          member.parentElement.style.display = 'block';
        
       
    })
    }
    
    
});



const searchMemberId = document.getElementById('searchMemberById');
const memberIds = document.querySelectorAll('.MemberId');
searchMemberId.addEventListener('input',()=>{
    let searchValue = searchMemberId.value;
    searchValue = searchValue.toLowerCase();
    if(searchValue){
      memberIds.forEach((member)=>{
        if(!member.textContent.toLowerCase().includes(searchValue)){
          member.parentElement.parentElement.style.display = 'none';
        }
       
    })
    }
    else{
      memberIds.forEach((member)=>{
        
          member.parentElement.parentElement.style.display = 'block';
        
       
    })
    }
    
    
});