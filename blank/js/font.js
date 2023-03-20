document.getElementById('btnFont').addEventListener('click',()=>{
    for (i = 1, i < 6, i++) {
        if (document.getElementById(i).src = 'img/pages/page00' + [i] + 'sans.png') {
            document.getElementById(i).src = 'img/pages/page00' + [i] + 'serif.png'
        }
        if (document.getElementById(i).src = 'img/pages/page00' + [i] + 'serif.png') {
            document.getElementById(i).src = 'img/pages/page00' + [i] + 'dys.png'
        }
        if (document.getElementById(i).src = 'img/pages/page00'+ [i] + 'dys.png') {
            document.getElementById(i).src = 'img/pages/page00' + [i] + 'sans.png'
        }
    }
})