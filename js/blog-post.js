
const postForm = document.querySelector('#postForm');
const editPostForm = document.querySelector('#postForm');



postForm.addEventListener("submit",(e)=>{



   e.preventDefault();
   let title = document.querySelector('#postTitle');
   let body = document.querySelector('#postBody');
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

        savePost(downloadURL);

    })
   })

    function savePost(url){
      db.collection('posts').add({

        title: title.value,
        body: body.value,
        image: url
    

       });

     postForm.reset();
    

     $(document).ready(function(){

       
            $("#addPage").hide();
        
        
        
      });
    }
 })

 const reviewPost = document.querySelector('.blogContainer');

db.collection('posts').onSnapshot((snapshot)=>{

    let changes = snapshot.docChanges();
 
changes.forEach(change => {
    
    if(change.type == 'added'){
        

        getPosts(change.doc);

    }
    else if(change.type == 'removed' ){
        let post = reviewPost.querySelector('[data-id='+ change.doc.id + ']');
        reviewPost.removeChild(post);
    }

});
});







    postForm.addEventListener("submit",(e)=>{



    e.preventDefault();
    let title = document.querySelector('#postTitleN');
    let body = document.querySelector('#postBodyN');
    let image = document.querySelector('#imageN').files[0];
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
 
         editPost(downloadURL);
 
     })
    })
 
 function editPost(url){

    editBtn.addEventListener('click',(e)=>{

        e.preventDefault();

        let id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
        
        

       

    })


    editPostForm.addEventListener('submit',(e)=>{
     e.preventDefault();

     db.collection('posts').doc(id).update({


        title: title.value,
        body: body.value,
        image: url

    });


    })


    
      editPostForm.reset();
     
 
      $(document).ready(function(){
 
        
             $("#editPost").hide();
         
         
         
       });
     }
  })
 
  
 















function getPosts(element){

    let post  = document.createElement('div');
    post.setAttribute('class','blog');
    let pictureDiv  = document.createElement('div');
    pictureDiv.setAttribute('class','blogPicture');
    let image= document.createElement('img');
    
    let blogTitle  = document.createElement('div');
    blogTitle.setAttribute('class','blogTitle');
    let blogDescription  = document.createElement('div');
    blogDescription.setAttribute('class','blogDescription');
    let body  = document.createElement('p');
    let blogTime  = document.createElement('div');
    blogTime.setAttribute('class','blogTime');
    let date  = document.createElement('p');
   
    let blogAction  = document.createElement('div');
    blogAction.setAttribute('class','blogAction');
    let actionContainer  = document.createElement('div');
    actionContainer.setAttribute('class','actionContainer');

    let view  = document.createElement('div');
    view.setAttribute('class','view');
    let viewBtn  = document.createElement('button');
    viewBtn.setAttribute('class','viewBtn');
    let edit  = document.createElement('div');
    edit.setAttribute('class','edit');
    let editBtn  = document.createElement('button');
    editBtn.setAttribute('class','editBtn');
    let delet = document.createElement('div');
    delet.setAttribute('class','delete');
    let deleteBtn  = document.createElement('button');
    deleteBtn.setAttribute('class','deleteBtn');
   
    viewBtn.textContent = 'view';
    deleteBtn.textContent = 'delete';
    editBtn.textContent = " edit";

    
    

    post.setAttribute('data-id',element.id);
    image.setAttribute('src',element.data().image);
   
    blogTitle.textContent = element.data().title;
    body.textContent = element.data().body;
    date.textContent = '24 jan 2020';
    
    

    post.appendChild(pictureDiv);
    pictureDiv.appendChild(image);
    post.appendChild(blogTitle);
    post.appendChild(blogDescription);
    blogDescription.appendChild(body);
    post.appendChild(blogTime);
    blogTime.appendChild(date);
    post.appendChild(blogAction);
    blogAction.appendChild(actionContainer);
    actionContainer.appendChild(view);
    view.appendChild(viewBtn);
    actionContainer.appendChild(edit);
    edit.appendChild(editBtn);
    actionContainer.appendChild(delet);
    delet.appendChild(deleteBtn);

   
   

    reviewPost.appendChild(post);


    deleteBtn.addEventListener('click',(e)=>{

        e.preventDefault();

        let id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
        db.collection('posts').doc(id).delete();


    })

















   

    

  
   
$(document).ready(function(){

    $('.editBtn').click(function(){
        $("#editPost").show();
    });
    $("#closeN").click(function(){
        $("#editPost").hide();
    });
    $("#closeModalN").click(function(){
        $("#editPost").hide();
    });

    
});


}

   



       




