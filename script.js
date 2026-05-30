const crow = document.getElementById('crowtainer')
const caw0 = new Audio('./resources/crow_call.mp3')
const caw1 = new Audio('./resources/caw1.mp3')
const caw2 = new Audio('./resources/caw2.mp3')
const caw3 = new Audio('./resources/caw3.mp3')
const caws = [caw0, caw1, caw2, caw3]


crow.addEventListener('click', () => {
    const cawNo = Math.floor(Math.random() * caws.length);
    caws[cawNo].play();
    console.log('caw');
});