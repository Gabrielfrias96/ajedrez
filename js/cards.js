const btnIndividual = document.getElementById('abrirIndividuales');
const btnGrupal = document.getElementById('abrirGrupales');
const popIndividual = document.getElementById('individuales');
const popGrupal = document.getElementById('grupales');
const closeIndividual = document.getElementById('cerrarDiv');
const closeGrupal = document.getElementById('cerrarDiv2');

btnIndividual.onclick = (e) => {
    e.preventDefault();
    popIndividual.style.display = 'block';
}

btnGrupal.onclick = (e) => {
    e.preventDefault();
    popGrupal.style.display = 'block';
}

closeIndividual.onclick = (e) => {
    e.preventDefault();
    popIndividual.style.display = 'none';
}

closeGrupal.onclick = (e) => {
    e.preventDefault();
    popGrupal.style.display = 'none';
}