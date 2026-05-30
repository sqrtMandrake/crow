const crow = document.getElementById('crowtainer');
const audio = new Audio('./resources/crow_call.mp3')

crow.addEventListener('click', () => {
    audio.play();
    console.log('caw');
});