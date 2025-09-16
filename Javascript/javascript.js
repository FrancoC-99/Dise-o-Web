const botonLuna = document.getElementById('caja-modo-nocturno');
const iconoLuna = document.getElementById('luna-bootstrap');
const iconoLunaFill = document.getElementById('luna-bootstrap-rellena');
const cuerpo = document.getElementById('cuerpo');
const bannerDiurno = document.getElementById('banner-modo-diurno');
const bannerNocturno = document.getElementById('banner-modo-nocturno');

botonLuna.addEventListener('click', () => {
    cuerpo.classList.toggle('modo-nocturno');
    if (cuerpo.classList.contains('modo-nocturno')) {
        bannerDiurno.style.display = 'none';
        bannerNocturno.style.display = 'inline-block';
    }
    else{
        bannerNocturno.style.display = 'none';
        bannerDiurno.style.display = 'inline-block';
    }
});