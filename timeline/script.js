const timelineData = [
  { date: "Jan 2018", description: "Início da carreira profissional" },
  { date: "Jun 2020", description: "Trabalho como desenvolvedor web" },
  { date: "Sep 2022", description: "Conclusão do projeto X" },
  { date: "Apr 2023", description: "Promoção para cargo de liderança" }
];

const timelineElement = document.getElementById("timeline");

// Adicionando a linha vertical
const timelineLine = document.createElement("div");
timelineLine.classList.add("timeline-line");
timelineElement.appendChild(timelineLine);

timelineData.forEach((item, index) => {
  const timelinePoint = document.createElement("div");
  timelinePoint.classList.add("timeline-point");
  timelinePoint.style.top = `${(index / (timelineData.length - 1)) * 100}%`; // Distribui os pontos verticalmente na linha do tempo

  const date = document.createElement("div");
  date.classList.add("timeline-item-date");
  date.textContent = item.date;
  date.style.top = `${(index / (timelineData.length - 1)) * 100}%`; // Alinha a data verticalmente

  const description = document.createElement("div");
  description.classList.add("timeline-item-description");
  description.textContent = item.description;
  description.style.top = `${(index / (timelineData.length - 1)) * 100}%`; // Alinha a descrição verticalmente

  timelineElement.appendChild(timelinePoint);
  timelineElement.appendChild(date);
  timelineElement.appendChild(description);
});
