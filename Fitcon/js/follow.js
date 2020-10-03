document.getElementById('followerButton').addEventListener('click',()=>{
    document.getElementById('followers').style.display = 'flex'; 
    document.getElementById('followings').style.display = 'none';
});
document.getElementById('followingButton').addEventListener('click',()=>{
    console.log('clicked');
    document.getElementById('followers').style.display = 'none'; 
    document.getElementById('followings').style.display = 'flex';
    
});