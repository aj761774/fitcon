const Customers = document.getElementById('customers').getElementsByTagName('tr');
document.getElementById('searchCustomer').addEventListener('input',()=>{
  const name = document.getElementById('searchCustomer').value;
  if(name){
        for(let i=1;i<Customers.length;i++){
            if(Customers[i].innerHTML.includes(name)){
              Customers[i].style.display = 'table-row'
            }
            else{
              Customers[i].style.display = 'none'
            }
        }
  }
  else{
    for(let i=1;i<Customers.length;i++){
        if(Customers[i].innerHTML.includes(name)){
          Customers[i].style.display = 'table-row'
        }
      }
}

 })
 
