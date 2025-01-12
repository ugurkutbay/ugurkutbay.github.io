const paneller = document.querySelectorAll('.panel');

function acilkapan(){
    this.classList.toggle('acil');
}

function acildiktansonra(e){
    
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('acil-kapan');
    }
}

paneller.forEach(panel => panel.addEventListener('click', acilkapan));


paneller.forEach(panel => panel.addEventListener('transitionend', acildiktansonra));

