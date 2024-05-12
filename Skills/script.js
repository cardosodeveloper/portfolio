document.addEventListener("DOMContentLoaded", function() {
  const timeline = document.getElementById('timeline');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const closeBtn = document.getElementById('close-btn');

  const timelineData = [
    { year: 2010, experience: 'Primeiro emprego' },
    { year: 2012, experience: 'Segundo emprego' },
    { year: 2015, experience: 'Terceiro emprego' },
    // Adicione mais itens conforme necessário
  ];

  // Função para abrir a lightbox com informações detalhadas
  function openLightbox(year, experience) {
    lightboxContent.innerHTML = `<h2>${year}</h2><p>${experience}</p>`;
    lightbox.style.display = 'block';
  }

  // Adiciona os itens da linha do tempo
  timelineData.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item');
    timelineItem.setAttribute('data-year', item.year);
    timelineItem.textContent = item.experience;

    timelineItem.addEventListener('click', function() {
      openLightbox(item.year, item.experience);
    });

    timeline.appendChild(timelineItem);
  });

  // Fecha a lightbox ao clicar no botão de fechar
  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });

  // Fecha a lightbox ao clicar fora dela
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
