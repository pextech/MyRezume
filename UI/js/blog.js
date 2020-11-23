
 const reviewPost = document.querySelector('.blogDetail');

db.collection('posts').onSnapshot((snapshot)=>{

    let changes = snapshot.docChanges();
 
changes.forEach(change => {
    
    if(change.type == 'added'){
        

        getPosts(change.doc);

    }
   

});



});


function getPosts(element){

    let post  = document.createElement('div');
    post.setAttribute('class','blogContainer');
    let authorDetails  = document.createElement('div');
    authorDetails.setAttribute('class','authorDetails');

    let blogStateIconAuthor  = document.createElement('div');
    blogStateIconAuthor.setAttribute('class','blogStateIcon');
    let blogStateIconViews  = document.createElement('div');
    blogStateIconViews.setAttribute('class','blogStateIcon');
    let blogStateIconDate  = document.createElement('div');
    blogStateIconDate.setAttribute('class','blogStateIcon');
    let blogStateIconComment  = document.createElement('div');
    blogStateIconComment.setAttribute('class','blogStateIcon');

    let authorIcon= document.createElement('img');
    authorIcon.src='../assets/user.png';

    let blogStateAuthor  = document.createElement('div');
    blogStateAuthor.setAttribute('class','blogState');
    let blogStateViews  = document.createElement('div');
    blogStateViews.setAttribute('class','blogState');
    let blogStateDate  = document.createElement('div');
    blogStateDate.setAttribute('class','blogState');
    let blogStateComment  = document.createElement('div');
    blogStateComment.setAttribute('class','blogState');


    let author = document.createElement('p');
    
    let dateIcon= document.createElement('img');
    dateIcon.src ='../assets/calendar.png';
    let commentIcon= document.createElement('img');
    commentIcon.src = '../assets/chat (2).png';
    let comment = document.createElement('p');
    let viewsIcon= document.createElement('img');
    viewsIcon.src = '../assets/visibility.png';
    let views = document.createElement('p');
    let date  = document.createElement('p');
    let blogPictureSection = document.createElement('div');
    blogPictureSection.setAttribute('class','blogPictureSection');
    let blogPicture = document.createElement('div');
    blogPicture.setAttribute('class','blogPicture');

    let link1 = document.createElement('a');
    link1.setAttribute('href','single-blog.html');
    let link2 = document.createElement('a');
    link2.setAttribute('href','single-blog.html');
    let link3 = document.createElement('a');
    link3.setAttribute('href','single-blog.html');
    let link4 = document.createElement('a');
    link4.setAttribute('href','single-blog.html');

    let image = document.createElement('img');
    let content = document.createElement('div');
    content.setAttribute('href','blogPictureContent');
    let blogTitle = document.createElement('h2');
    blogTitle.setAttribute('class','theColor');
    let body = document.createElement('p');
    let readMore = document.createElement('button');
    readMore.setAttribute('class','readMore');
    
    
    
    
    
   

    
    // let deleteBtn = document.createElement('div');

    post.setAttribute('data-id',element.id);
    image.setAttribute('src',element.data().image);
    views.textContent = ' Views: 1.2M';
    author.textContent = ' Author: Pextech';
    comment.textContent = ' Comments: 145K';
    blogTitle.textContent = element.data().title;
    body.textContent = element.data().body;
    date.textContent = '24 jan 2020';
    readMore.textContent = 'read more';
    

    post.appendChild(authorDetails);
    authorDetails.appendChild(blogStateIconAuthor);
    blogStateIconAuthor.appendChild(authorIcon);
    authorDetails.appendChild(blogStateAuthor);
    blogStateAuthor.appendChild(author);
    authorDetails.appendChild(blogStateIconViews);
    blogStateIconViews.appendChild(viewsIcon);
    authorDetails.appendChild(blogStateViews);
    blogStateViews.appendChild(views);
    authorDetails.appendChild(blogStateIconDate);
    blogStateIconDate.appendChild(dateIcon);
    authorDetails.appendChild(blogStateDate);
    blogStateDate.appendChild(date);
    authorDetails.appendChild(blogStateIconComment);
    blogStateIconComment.appendChild(commentIcon);
    authorDetails.appendChild(blogStateComment);
    blogStateComment.appendChild(comment);



    post.appendChild(blogPictureSection);
    blogPictureSection.appendChild(blogPicture);
    blogPicture.appendChild(link1);
    link1.appendChild(image);
    blogPictureSection.appendChild(content);
    content.appendChild(blogTitle);
    
    content.appendChild(body);
    
    content.appendChild(link4);
    link4.appendChild(readMore);
    
    

   
   
   

    reviewPost.appendChild(post);

   

}

   
    