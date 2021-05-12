
let accounts='';

if(localStorage.getItem('Accounts')){
accounts=localStorage.getItem('Accounts')
}




function CreateAcount(params) {
   let AccNo= document.getElementById('no').value;
   let Name= document.getElementById('name').value;
   let fAmount= document.getElementById('dpamount').value;
let passw= document.getElementById('password').value;


if(AccNo==='' || Name==='' ||  fAmount===''  || passw==='' || fAmount<=0 ){
  
  alert("Please Fill All Items Or Check the First Amount Deposit By You Not in -ve")  
}
else{
    if(passw.length<=3){
        alert("PassWordLength must be 4 dight pin")
    }


    else{
        let Node={
            AccNo:AccNo,
            HolderName:Name,
            Amount:fAmount,
            Password:passw
        }
        // console.log(Node);
    
    accounts=[...accounts,Node]
       console.log('accounts',accounts);
    
        
        localStorage.setItem("Accounts",JSON.stringify(accounts))
    }
    
}


}









let ManageAmount=(n)=>{



if(n===1){
    
let Accounts=JSON.parse(localStorage.getItem('Accounts'))
let AccDep= document.getElementById('DepNo').value;
let AmDep=document.getElementById('AmDepo').value;
let DepPass= document.getElementById('DepPass').value;
let cond =true
let newAcc=[]
let Node;
for (let i = 0; i < Accounts.length; i++) {
    if(Accounts[i].AccNo===AccDep && DepPass=== Accounts[i].Password ){

Accounts[i].Amount=parseInt(Accounts[i].Amount)+parseInt(AmDep);
cond=false;
Node={
    AccNo:Accounts[i].AccNo,
    HolderName:Accounts[i].HolderName,
    Amount:Accounts[i].Amount,
    Password:Accounts[i].Password
}





for (let k = 0; k <Accounts.length; k++) {
if(i===k){
newAcc.push(Node)

}   
else{
    newAcc.push(Accounts[k])

} 
}
console.log(newAcc);
localStorage.setItem("Accounts",JSON.stringify(newAcc))



}
}


if(cond==true){
    alert("Invalid Details Acc no,Password")
}
else{
    alert(`New Last Updated Details Are there \n Account No:${Node.AccNo} \n Account Holder Name :${Node.HolderName}  \n Last Updated Amount:${Node.Amount}`)
}






}




else{
       
    
    let Accounts=JSON.parse(localStorage.getItem('Accounts'))
    let AccDep= document.getElementById('DepNo').value;
    let AmDep=document.getElementById('AmDepo').value;
    let DepPass= document.getElementById('DepPass').value;
    let cond =true
    let newAcc=[]
    let Node;
    for (let i = 0; i < Accounts.length; i++) {
        if(Accounts[i].AccNo===AccDep && DepPass=== Accounts[i].Password ){
    
    Accounts[i].Amount=parseInt(Accounts[i].Amount)-parseInt(AmDep);
    cond=false;
    Node={
        AccNo:Accounts[i].AccNo,
        HolderName:Accounts[i].HolderName,
        Amount:Accounts[i].Amount,
        Password:Accounts[i].Password
    }
    
    
    for (let k = 0; k <Accounts.length; k++) {
    if(i===k){
    newAcc.push(Node)
    
    }   
    else{
        newAcc.push(Accounts[k])
    
    } 
    }
    console.log(newAcc);
    localStorage.setItem("Accounts",JSON.stringify(newAcc))
    
    }
    }
    
    if(cond==true){
        alert("Invalid Details Acc no,Password")
    }
    else{
        alert(`New Last Updated Details Are there \n Account No:${Node.AccNo} \n Account Holder Name :${Node.HolderName}  \n Last Updated Amount:${Node.Amount}`)
    }
    
    
    
    
    
    
    
}


}




function CheckDetial(){

    
    let Accounts=JSON.parse(localStorage.getItem('Accounts'))
    let AccDep= document.getElementById('AccNoCheck').value;
    // let AmDep=document.getElementById('AmDepo').value;
    let DepPass= document.getElementById('AccNoPass').value;
    let cond =true
    let newAcc=[]
    let Node;
    for (let i = 0; i < Accounts.length; i++) {
        if(Accounts[i].AccNo===AccDep && DepPass=== Accounts[i].Password ){
    
 cond=false;
    
 alert(`New Last Updated Details Are there \n Account No:${Accounts[i].AccNo} \n Account Holder Name :${Accounts[i].HolderName}  \n  Amount:${Accounts[i].Amount}`)
    
    
        }
    }
 
    if(cond==true){
        alert("Invalid Details Acc no,Password")
    }
  
    
    
    
    
    


}



let LAstTransation=()=>{
    console.log("it is working finee now ");
}