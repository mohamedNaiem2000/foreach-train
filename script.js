let cards = document.querySelectorAll('.img');

cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        cards.forEach((card)=>{
            card.classList.remove('expand');
        })
        card.classList.add('expand');
    });
});