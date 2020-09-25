const buttons = document.getElementById('user-trainer').getElementsByTagName('button');
buttons[0].addEventListener('click',()=>{
    buttons[0].classList.add("active")
    buttons[1].classList.remove("active")
    document.getElementById("userLeaderboard").style.display = 'table';
    document.getElementById("trainerLeaderboard").style.display = 'none';
})
buttons[1].addEventListener('click',()=>{
    buttons[1].classList.add("active");

        buttons[0].classList.remove("active");
        document.getElementById("trainerLeaderboard").style.display = 'table';
        document.getElementById("userLeaderboard").style.display = 'none';
});
const Trainers = document.getElementById('trainerLeaderboard').getElementsByTagName('tr');
const Users = document.getElementById('userLeaderboard').getElementsByTagName('tr');
document.getElementById('searchUserTrainer').addEventListener('input',()=>{
     const name = document.getElementById('searchUserTrainer').value;
     if(name){
     if(buttons[0].classList.contains('active')){
           for(let i=1;i<Users.length;i++){
               if(!Users[i].innerHTML.includes(name)){
                  Users[i].style.display = 'none'
               }
           }
     }
     else{
        for(let i=1;i<Trainers.length;i++){
            if(!Trainers[i].innerHTML.includes(name)){
               Trainers[i].style.display = 'none'
            }
        }
     }
    }
    else{
        if(buttons[0].classList.contains('active')){
            for(let i=1;i<Users.length;i++){
              
                   Users[i].style.display = 'table-row'
                
            }
      }
      else{
         for(let i=1;i<Trainers.length;i++){
       
                Trainers[i].style.display = 'table-row'
             
         }
      }
}

})


