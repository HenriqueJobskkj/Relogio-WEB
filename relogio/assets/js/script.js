
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const data = document.getElementById('data');
const periodo = document.getElementById('periodo');
const botaoTema = document.getElementById('tema');

// Atualiza o relógio
function atualizarRelogio() {

    const agora = new Date();

    const hr = agora.getHours();
    const min = agora.getMinutes();
    const seg = agora.getSeconds();

    // Adiciona zero antes dos números menores que 10
    horas.textContent = String(hr).padStart(2, '0');
    minutos.textContent = String(min).padStart(2, '0');
    segundos.textContent = String(seg).padStart(2, '0');

    // Define o período do dia
    if (hr >= 5 && hr < 12) {
        periodo.textContent = '☀ Bom dia';
    } else if (hr >= 12 && hr < 18) {
        periodo.textContent = '🌤 Boa tarde';
    } else {
        periodo.textContent = '🌙 Boa noite';
    }

    // Formata a data em português
    data.textContent = agora.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

// Atualiza imediatamente e depois a cada segundo
atualizarRelogio();

setInterval(atualizarRelogio, 1000);

// Alternar tema
botaoTema.addEventListener('click', function() {

    document.body.classList.toggle('claro');

    if (document.body.classList.contains('claro')) {
        botaoTema.textContent = '☾';
    } else {
        botaoTema.textContent = '☀';
    }

});
