

const editForm = document.querySelector('#editForm');


editForm.addEventListener("submit",(e)=>{



   e.preventDefault();
   let name = document.querySelector('#name');
   let email = document.querySelector('#email');
   let phone = document.querySelector('#phone');
   let description = document.querySelector('#email');
   let address = document.querySelector('#address');
 
   let image = document.querySelector('#image').files[0];
   let imageName = image.name;
   

   

   const storageRef = storage.ref(imageName);
   const uploadTask = storageRef.put(image);

   uploadTask.on('state_changed',(snapshot)=>{

    var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

    console.log('upload is' + progress + "done");

   },(error)=>{

    console.log(error.message);

   },()=>{

    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{

        updateProfile(downloadURL);

    })
   })

    function updateProfile(url){
    db.collection('profile').doc('aP0LMwJzwrd30zdq8i6f').update({

        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        description: description.value,
        image: url
    

    });

    editForm.reset();
    

    $(document).ready(function(){

       
            $("#editProfile").hide();
        
        
        
    });
}

   })





 const details = document.querySelector('.details');

db.collection('profile').onSnapshot((snapshot)=>{

    let changes = snapshot.docChanges();
 
changes.forEach(change => {
    
    if(change.type == 'added'){
        

        getProfile(change.doc);

    }
    
});



});


function getProfile(element){

   
    let image= document.createElement('img');
    

    let description  = document.createElement('div');
    description.setAttribute('class','description');

    let name  = document.createElement('div');
    name.setAttribute('class','name');
    let fullName  = document.createElement('h4');

    let email  = document.createElement('div');
    email.setAttribute('class','email');
    let emailAddress  = document.createElement('p');


    let address  = document.createElement('div');
    address.setAttribute('class','address');
    let addressLocation  = document.createElement('p');

    let phone  = document.createElement('div');
    phone.setAttribute('class','phone');
    let phoneNumber  = document.createElement('p');

    let descr  = document.createElement('div');
    descr.setAttribute('class','aboutMe');
    let aboutMe  = document.createElement('p');
   
    
    // let deleteBtn = document.createElement('div');

    details.setAttribute('data-id',element.id);
    image.setAttribute('src',element.data().image);
   
    fullName.textContent = element.data().name;
    emailAddress.textContent = element.data().email;
    addressLocation.textContent = element.data().address;
    phoneNumber.textContent = element.data().phone;
    aboutMe.textContent = element.data().description;
    
    details.appendChild(image);
    details.appendChild(description);
    description.appendChild(name);
    name.appendChild(fullName);
    description.appendChild(email);
    email.appendChild(emailAddress);
    description.appendChild(address);
    address.appendChild(addressLocation);
    description.appendChild(descr);
    descr.appendChild(aboutMe);
   
    


   
   
   

    


   
   

}