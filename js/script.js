////////////////////////////////////////////////////////////////////////////////////////////////

// FOGUETE EM JAVASCRIPT

function stars() {
  let count = 150;
  let foguete__acao = document.querySelector('.foguete__acao');
  let i = 0;
  while (i < count) {
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = 1 + 'px';
    star.style.height = 60 + 'px';
    star.style.animationDuration = duration + 's';

    foguete__acao.appendChild(star);
    i++;
  }
}
stars();

// FOGUETE EM JAVASCRIPT

////////////////////////////////////////////////////////////////////////////////////////////////

// SKILLS EM JAVASCRIPT 

document.addEventListener('DOMContentLoaded', function () {
  const skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach(skillBar => {
    const percent = skillBar.dataset.percent;
    skillBar.style.width = percent + '%';
  });
});

// SKILLS EM JAVASCRIPT 

////////////////////////////////////////////////////////////////////////////////////////////////

// TIMELINE EM JAVASCRIPT 

const timelineData = [
  { date: "2023", description: "Senior Analyst | Business Intelligence and Commercial", url: "#" },
  { date: "2022", description: "Analista Sênior | Dados e Growth Marketing", url: "#" },
  { date: "2021", description: "Analista Pleno | Inteligência de Mercado", url: "#" },
  { date: "2020", description: "Analista Pleno | Desenvolvedor Front-End", url: "#" }
];

const timelineElement = document.getElementById("timeline");

const timelineLine = document.createElement("div");
timelineLine.classList.add("timeline-line");
timelineElement.appendChild(timelineLine);

timelineData.forEach((item, index) => {
  const timelinePoint = document.createElement("a");
  timelinePoint.href = item.url;
  timelinePoint.classList.add("timeline-point");
  timelinePoint.style.top = `${(index / (timelineData.length - 1)) * 100}%`;

  const date = document.createElement("a");
  date.href = item.url;
  date.classList.add("timeline-item-date");
  date.textContent = item.date;
  date.style.top = `${(index / (timelineData.length - 1)) * 100}%`;

  const description = document.createElement("a");
  description.href = item.url;
  description.classList.add("timeline-item-description");
  description.textContent = item.description;
  description.style.top = `${(index / (timelineData.length - 1)) * 100}%`;

  timelineElement.appendChild(timelinePoint);
  timelineElement.appendChild(date);
  timelineElement.appendChild(description);
});

// TIMELINE EM JAVASCRIPT 

////////////////////////////////////////////////////////////////////////////////////////////////