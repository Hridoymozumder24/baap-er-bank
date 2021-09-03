document.getElementById("login-submit").addEventListener('click',function(){
          
       const emailField =   document.getElementById("user-email")
       const userEmail = emailField.value;
       
      //user password
      
      const passwordlField =   document.getElementById("user-password")
       const userPassword = passwordlField.value;
       
             if(userEmail == 'sontan@gmail.com' && userPassword == 111){
          window.location.href='banking.html';
          
        
       }
       else{
          window.location.href= "another.html"
}
    
})