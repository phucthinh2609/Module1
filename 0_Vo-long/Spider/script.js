function noname() {
    const key_left =  37;
    const key_right =  38; 
    const key_up = 39; 
    const key_down =  40;
    document.addEventListener("keyDown",control )
}

function control(e) {
    alert(e.keyCode)
}

control()