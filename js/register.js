
        const registerForm = document.querySelector('#registerForm');
        const  email = document.querySelector('#emailAuth');
        const password = document.querySelector('#passAuth');

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            auth.createUserWithEmailAndPassword(registerForm['emailAuth'].value, registerForm['passAuth'].value).then((cred)=>{


                window.location = 'admin/admin-dashboard.html';
               

            })


            registerForm.reset();
            
           


        });
