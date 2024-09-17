$(".play").on("mouseover",(event)=>{
    let tigger =`#${event.target.id}`;
    console.log(event);

$(`${tigger} .p-button`).addClass("pl-but");
});

$(".play").on("mouseout",(event)=>{
    let tigger =`#${event.target.id}`;
    $(`${tigger} .p-button`).removeClass("pl-but");
})