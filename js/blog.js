const subscribe = () => {

    const subscription = document.querySelector('#subForm');
    subscription.addEventListener('submit', (e) => {
        e.preventDefault();

        db.collection('subscribes').add({

            email: subscription['email'].value

        });

        subscription.reset();

        document.querySelector('#success').style.display = 'block';

        setTimeout(() => {
            document.querySelector('#success').style.display = 'none';
        }, 3000);

    })

}

subscribe();
