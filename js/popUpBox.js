const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const popUpBox = document.getElementById('pop-up-box');

openButton.addEventListener('click',function(){
    popUpBox.style.display = 'block';
})

closeButton.addEventListener('click',function(){
    popUpBox.style.display = 'none';
})