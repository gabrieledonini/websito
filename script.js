var body = document.querySelector('body')
var griglia = document.querySelector('.griglia')
var poster = document.querySelector('.poster')
var endpoint = 'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json';
var movies = [];
var r = document.querySelector(':root');


fetch(endpoint)
  .then(blob => blob.json())
  .then(data => movies.push(...data));

setTimeout(print, 2000)

function print() {
    console.log(movies)
    for (let index = 0; index < movies.length; index++) {
        var movie = document.createElement('div')
        movie.innerHTML = '<div>' + movies[index].title + '</div><div>' + movies[index].year + '</div>'
        griglia.appendChild(movie)   
             
        movie.addEventListener('mouseenter', function() {
            if (movies[index].genres.length != 0) {
                poster.innerHTML = '<div class="posterino"><div>' + movies[index].title + '</div><div>' + movies[index].genres[0] + '<br>' + movies[index].year + '</div></div>'                
                
            } else {
                poster.innerHTML = '<div class="posterino"><div>' + movies[index].title + '</div><div>' + movies[index].year + '</div></div>'                
            }
        })
    }
}




var xTxt, yTxt
window.addEventListener('mousemove', function(e) {
    if (e.clientY >= window.innerHeight/2) {
        yTxt = Math.floor((e.clientY/(window.innerHeight/2) - 1) * 100)
    } else {
        yTxt = 100 + Math.floor((e.clientY/(window.innerHeight/2) - 1) * 100)
    }
    if (e.clientX >= window.innerWidth/2) {
        xTxt = Math.floor((e.clientX/(window.innerWidth/2) - 1) * 360)            
    } else {
        xTxt = 360 + Math.floor((e.clientX/(window.innerWidth/2) - 1) * 360)            
    }
    r.style.setProperty('--bg', tinycolor('hsl('+ xTxt +',80%,'+ 50 +'%)'));
    r.style.setProperty('--color', tinycolor('hsl('+ xTxt +',80%,'+ 50 +'%)').complement());
})



// window.addEventListener("mousemove", function(data) {
//     var nuovo = document.createElement('div')
//     nuovo.innerHTML = 'moussse'
//     nuovo.style.top = data.clientY + 'px'
//     nuovo.style.left = data.clientX + 'px'
//     body.appendChild(nuovo)        
// })




