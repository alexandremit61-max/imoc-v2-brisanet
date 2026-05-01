/**
 * Função para alternar entre as abas do sistema
 * @param {string} pageId - O ID da seção que deve ser exibida
 */
function showPage(pageId) {
    // 1. Seleciona todas as seções de conteúdo e esconde-as
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Remove a classe 'active' de todos os botões do menu lateral
    const buttons = document.querySelectorAll('.nav-item');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostra a página que foi clicada adicionando a classe 'active'
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 4. Adiciona a classe 'active' ao botão que foi clicado
    // O 'event.currentTarget' identifica qual botão disparou a função
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 5. Atualiza o título na barra laranja dinamicamente
    const pageTitleElement = document.getElementById('page-title');
    
    // Mapeamento de IDs para nomes amigáveis
    const titles = {
        'dashboard': 'DASHBOARD IMOC',
        'chamados': 'FILA DE ATUAÇÃO - CHAMADOS',
        'concluidos': 'HISTÓRICO DE TRECHOS FINALIZADOS',
        'robo': 'CONSOLE DE AUTOMAÇÃO (RPA)',
        'regioes': 'REGIÕES'
    };

    if (pageTitleElement && titles[pageId]) {
        pageTitleElement.innerText = titles[pageId];
    }
}

// Log inicial para confirmar que o script carregou (opcional - veja no F12 do navegador)
console.log("Sistema IMOC V2 carregado com sucesso.");