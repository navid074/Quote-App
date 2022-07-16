let text = document.querySelector('.text');
let writer = document.querySelector('.writer');
let read = document.querySelector('.read');
let copy = document.querySelector('.copy');
let share = document.querySelector('.share');
let newQuote = document.querySelector('.new');

fetch('https://api.quotable.io/random').then(res => res.json())
.then(data => {
    text.innerHTML = data.content
    writer.innerHTML = data.author
})

writer.addEventListener('click' , ()=> {
    window.location.href = `https://en.wikipedia.org/wiki/${writer.innerHTML}`
});

read.addEventListener('click', ()=> {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text.innerHTML));
});

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(text.innerHTML);
});

share.addEventListener('click', ()=>{
    window.location.href=`https://twitter.com/intent/tweet?text=${text.innerHTML}`
});

newQuote.addEventListener('click',(event)=>{
    fetch('https://api.quotable.io/random').then(res => res.json())
    .then(data => {
        text.innerHTML = data.content
        writer.innerHTML = data.author
    })
});
