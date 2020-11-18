
const subscribe = () => {

    var subscribeForm = document.querySelector('#subForm');
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        db.collection('subscribes').add({

            email: subscribeForm['email'].value

        });

        subscribeForm.reset();

        document.querySelector('#success').style.display = 'block';

        setTimeout(() => {
            document.querySelector('#success').style.display = 'none';
        }, 3000);

    })

}

subscribe();



 var replyForm = document.querySelector('#replyForm');


 replyForm.addEventListener('submit', (e) => {
     e.preventDefault();

     db.collection('reply').add({
         name: replyForm['nameAuth'].value,
         email: replyForm['emailAuth'].value,
         subject: replyForm['subAuth'].value,
         reply: replyForm['replyAuth'].value

     });

     replyForm.reset();

     document.querySelector('#success').style.display = 'block';

     setTimeout(() => {
         document.querySelector('#success').style.display = 'none';
     }, 3000);

 });
