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

read.addEventListener('click', ()=> {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text.innerHTML));
});

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(text.innerHTML);
    alert("Copied To Clipboard ! ");
});

share.addEventListener('click', ()=>{
    navigator.clipboard.writeText(text.innerHTML);
    location.replace("https://twitter.com/login")
});

newQuote.addEventListener('click',()=>{
    location.reload();
});