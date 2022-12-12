const weekdays = [
    {
        text: "mon",
        value: 16.2,
    },
    {
        text: "tue",
        value: 33,
    },
    {
        text: "wed",
        value: 52.36,
    },
    {
        text: "thu",
        value: 31.07,
    },
    {
        text: "fri",
        value: 23.56,
    },
    {
        text: "sat",
        value: 45.13,
    },
    {
        text: "sun",
        value: 26.3,
    }
]
let bars=''
weekdays.forEach(element => {
    let isCurrentDay= new Date().toLocaleDateString('en-us',{weekday:"short"}).toLocaleLowerCase()===element.text;
    bars+='<div class="bar-container">'+
            '<div class="valor" style="bottom: '+element.value+'%;">$'+element.value+'</div>'+
            '<div class="bar" style="height: '+element.value+'%;background-color:'+(isCurrentDay?"hsl(186, 34%, 60%);":"hsl(10, 79%, 65%);")+'"></div>'+
            '<span>'+element.text+'</span>'+
        '</div>'
});
document.getElementById('title').insertAdjacentHTML('afterend', bars)



const barElement = document.getElementsByClassName('bar-container');

for(let el of barElement) {
    el.addEventListener("mouseover", () =>{
        el.firstElementChild.style.display="block"
    })
    el.addEventListener("mouseout", () =>{
        el.firstElementChild.style.display="none"
    })
}
