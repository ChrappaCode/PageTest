function mailFunction() {
    if(global%2 === 0 && global2%2 !== 1){
        document.getElementById('mail').style.display='block';
        global++;
    }
    else if (global2%2 !== 1){
        document.getElementById('mail').style.display='none';
        global++;
    }
}

function phoneFunction() {
    if(global2%2 === 0 && global%2 !== 1){
        document.getElementById('phone').style.display='block';
        global2++;
    }
    else if (global%2 !== 1){
        document.getElementById('phone').style.display='none';
        global2++;
    }
}