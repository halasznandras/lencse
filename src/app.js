/*
Fájlnév: app.js
    2022.04.10
    Halász András
    Szoft I E 1/1
*/

var szamitKaloria = (suly, tzsir) => {
    return 370 + (21.6 * (1 - tzsir) * suly);
}

$('#szamitGomb').on('click', ()=>{
    let suly=Number($('#suly').val());
    let tzsir=Number($('#tzsir').val());

    let kaloria = szamitKaloria(suly, tzsir)

    console.log(kaloria)
    $('#kaloria_doboz').fadeIn(400);
    $('#kaloria').val(kaloria.toFixed(2));
});