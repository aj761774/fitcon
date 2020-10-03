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
const searchMember = document.getElementById('searchpaidMemberName');
const memberIds = document.querySelectorAll('.MemberId');
searchMember.addEventListener('input',()=>{
    let searchValue = searchMember.value;
    const searchBy = document.getElementById('paidMembersearchByNameOrId').value;
   
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