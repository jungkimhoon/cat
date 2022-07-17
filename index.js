setInterval(() => {    
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i) => {
        a.src = 'https://www.offidocs.com/images/catfacepetcats.jpg'
    });
}, 500)
