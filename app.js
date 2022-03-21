/*
Fájlnév: app.js
    2022.03.21
    Halász András
*/
var szamitTerfogat = (a, b)=> {
    return ((4 * Math.PI) / 3) * Math.pow(a, 2) * b;
}

$('#szamitGomb').on('click', ()=>{
    let a=Number($('#tengelya').val());
    let b=Number($('#tengelyb').val());

    let terfogat = szamitTerfogat(a, b)

    console.log(terfogat)
    $('#terfogat_doboz').fadeIn(400);
    $('#terfogat').val(terfogat.toFixed(2));
});