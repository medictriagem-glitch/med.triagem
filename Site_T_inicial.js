document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano atual no rodapé
    document.getElementById('currentYear').textContent = new Date().getFullYear();
   
    // Menu móvel
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
   
    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
       
        closeMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
       
        // Fechar menu ao clicar em um link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
   
    // Tabs de primeiros socorros
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
   
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
           
            // Remover classe active de todos os botões e painéis
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
           
            // Adicionar classe active ao botão clicado e painel correspondente
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
   
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
   
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
           
            // Validação básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
           
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
           
            // Simulação de envio
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset();
        });
    }
   
    // Rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
           
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
           
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
               
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
   
    // Destacar link de navegação ativo ao rolar
    const sections = document.querySelectorAll('section[id]');
   
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('.header').offsetHeight;
       
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
           
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
   
    window.addEventListener('scroll', highlightNavLink);
   
    // Inicializar a página
    highlightNavLink();
});
 