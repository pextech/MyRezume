
        const loginForm = document.querySelector('#loginForm');
        const  email = document.querySelector('#emailAuth');
        const password = document.querySelector('#passAuth');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            auth.signInWithEmailAndPassword(loginForm['emailAuth'].value, loginForm['passAuth'].value).then((cred)=>{


                if(cred){
                    
            window.location ='admin/admin-dashboard.html';
            
                }
                
            }).catch(err=> {
                
                alert(err.message);
                
            });

             loginForm.reset();

        });
