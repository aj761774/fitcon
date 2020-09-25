
document.getElementById('edit').addEventListener('click',()=>{
  
    document.getElementById('editModal').style.display='flex';
    document.querySelector('body').style.overflowY = 'hidden';
  })

document.getElementById('editClose').addEventListener('click',()=>{
   
    document.getElementById('editModal').style.display='none';
    document.querySelector('body').style.overflowY = 'scroll';
});

$('#changeIcon').click(()=>{
   $('#editPhoto').click();
});