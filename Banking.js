class bank{
    constructor(){
      this.accounts={}
     const currentDate = new Date();
    const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit', timeZone: 'UTC' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
      
      this.date = currentDate.toLocaleDateString('en-GB', dateOptions); 
      this.time = currentDate.toLocaleTimeString('en-GB', timeOptions); 
    }
    
    createAccount(accountNumber,name,initialBalance=0){
    //   const currentDate = new Date();
    //   const date = currentDate.toLocaleDateString(); 
    //   const time = currentDate.toLocaleTimeString(); 
  
      this.accounts[accountNumber]={name:name,balance:initialBalance,transcation:[`account name ${name} account created at ${this.date} ${this.time} and initial balace ${initialBalance}`]}
    }
    
    balanceCheck(accountNumber){
     if(this.accounts[`${accountNumber}`]!=undefined){
       console.log(`account balance is ${this.accounts[`${accountNumber}`].balance}`)
     }else{
       console.log("account not fount")
     }
    }
    
    deposit(accountNumber,money){
        if(this.accounts[`${accountNumber}`]!=undefined){// check whether accountnum is there or not
          this.accounts[`${accountNumber}`].balance=this.accounts[`${accountNumber}`].balance+money;//this line adds the money to existing balance
          console.log(`Rs ${money} credited in your bank accountNumber ${accountNumber} current balance ${this.accounts[`${accountNumber}`].balance}`)//it prrints the current operation
          this.accounts[`${accountNumber}`].transcation.push(`${this.date} ${this.time} Rs ${money} credited current balance ${this.accounts[`${accountNumber}`].balance}`)// this stores transaction history 
     }else{
       console.log("account not fount")
     }
    }
    
    withdraw(accountNumber,money){
        if(this.accounts[`${accountNumber}`]!=undefined){
          if(this.accounts[`${accountNumber}`].balance >=money){
                    this.accounts[`${accountNumber}`].balance=this.accounts[`${accountNumber}`].balance-money;
          console.log(`Rs ${money} debited in your bank accountNumber ${accountNumber} current balance ${this.accounts[`${accountNumber}`].balance}`)
                this.accounts[`${accountNumber}`].transcation.push(`${this.date} ${this.time} Rs ${money} debited current balance ${this.accounts[`${accountNumber}`].balance}`)
          }else{
            console.log("no enough money")
          }
     }else{
       console.log("account not fount")
     }
    }
    
    transferMoney(sender,receiver,money){
        if(this.accounts[`${sender}`]!=undefined){
          
          if(this.accounts[`${receiver}`]!=undefined){
              if(this.accounts[`${sender}`].balance >=money){
                    this.accounts[`${sender}`].balance=this.accounts[`${sender}`].balance-money;
               console.log(`Rs ${money} debited in your bank accountNumber ${sender} current balance ${this.accounts[`${sender}`].balance}`);
                   this.accounts[`${receiver}`].balance=this.accounts[`${receiver}`].balance+money;
                         this.accounts[`${sender}`].transcation.push(`${this.date} ${this.time} Rs ${money} debited current balance ${this.accounts[`${sender}`].balance}`)
                         this.accounts[`${receiver}`].transcation.push(`${this.date} ${this.time} Rs ${money} credited current balance ${this.accounts[`${receiver}`].balance}`)
          }else{
            console.log("no enough money")
          }
          }else{
            console.log("receiver act Number not found")
          }
          
        }else{
          console.log("sender act Number not found")
        }
    }
    
    printStateMent(accountNumber){
        if(this.accounts[`${accountNumber}`]!=undefined){ // account check
        
          for(let i=0;i<this.accounts[`${accountNumber}`].transcation.length;i++){ 
            console.log(this.accounts[`${accountNumber}`].transcation[i])
          }
          
        }else{
          console.log("account not found")
        }
    }
  
    
    
  }

  
  let sbi= new bank();
 sbi.createAccount(123,"john",500) // create
 sbi.createAccount(1234,"smit",15000) //create
sbi.deposit("123",500);
//   //sbi.balanceCheck("123");
 sbi.withdraw("123",100);
sbi.transferMoney("1234","123",10000);
//   // sbi.balanceCheck("123");
//   // sbi.balanceCheck("1234");
 console.log("print state------------------------------------")
 sbi.printStateMent("123")
 console.log("statement of 1234")
 sbi.printStateMent("1234")