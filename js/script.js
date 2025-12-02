// Validação do Formulário de Reserva
function validarFormulario() {
    const form = document.querySelector('.reserveForm');
    
    const nomeInput = document.getElementById('nome-reserva');
    const emailInput = document.getElementById('email-reserva');
    const dataEntradaInput = document.getElementById('data-entrada');

    form.addEventListener('submit', (event) => {
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const dataEntrada = dataEntradaInput.value.trim();
        
        if (nome === '' || email === '' || dataEntrada === '') {
            event.preventDefault(); 
            alert('Por favor, preencha seu Nome Completo, E-mail e Data de Entrada para prosseguir com a reserva.');
        } else {
            event.preventDefault(); 
            alert(`Reserva de ${nome} enviada com sucesso! Entraremos em contato no e-mail ${email}.`);
            form.reset(); 
        }
    });
}
validarFormulario();

// Máscara de Telefone Automática
function phoneMask() {
    const inputTel = document.getElementById('telefone-reserva');
    if (!inputTel) return;

    inputTel.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.substring(0, 11);
        }

        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');

        e.target.value = value;
    });
}
phoneMask();

// Desabilitar o Envio de Formulário ao Pressionar Enter
function disableEnterSubmit() {
    const form = document.querySelector('.reserveForm');
    if (!form) return;

    form.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
}
disableEnterSubmit();

// Aviso de Cookies Simples
function cookieConsent() {
    const banner = document.getElementById('cookie-banner');
    const button = document.getElementById('aceitar-cookies');

    if (localStorage.getItem('cookieAccepted') === 'true') {
        if(banner) banner.style.display = 'none';
        return;
    }
    
    if (banner) banner.style.display = 'flex';

    if (button) {
        button.addEventListener('click', () => {
            banner.style.display = 'none';
            localStorage.setItem('cookieAccepted', 'true'); // Salva a preferência
        });
    }
}
cookieConsent();

// Rolagem Suave
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' 
                    });
                }
            }
        });
    });
}
smoothScroll();