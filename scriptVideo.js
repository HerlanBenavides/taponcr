document.querySelectorAll('.video-container video').forEach(vid =>{
    vid.onClick =()=>{
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
});

document.querySelector('.popup-video span').onClick = () => {
    document.querySelector('.popup-video').style.display = 'none';
}