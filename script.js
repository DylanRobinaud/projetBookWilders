const data = [
  {
    id: 0,
    photo: "./assets/photo_carte/photo_bastien.png",
    name: "Bastien Domer",
    softskills: ["Esprit d'équipe", "Détermination"],
    github: "https://github.com/BastienDmr",
    linkedin: "https://www.linkedin.com/in/bastien-domer-755045155/",
  },
  {
    id: 1,
    photo: "./assets/photo_carte/photo_anndo.png",
    name: "Ann Dominique Thuillier",
    softskills: ["Adaptabilité", "Responsable"],
    github: "https://github.com/AnnDo33",
    linkedin: "https://www.linkedin.com/in/ann-dominique-t-694a7625/",
  },
  {
    id: 2,
    photo: "./assets/photo_carte/photo_dylan.png",
    name: "Dylan Robinaud",
    softskills: ["Sens des responsabilités", "Aisance relationnelle"],
    github: "https://github.com/DylanRobinaud",
    linkedin: "https://www.linkedin.com/in/dylan-robinaud-648a03280/",
  },
  {
    id: 3,
    photo: "./assets/photo_carte/photo_kathalina.png",
    name: "Kathalina Sanchez",
    softskills: ["Souci du détail", "Travail d'équipe"],
    github: "https://github.com/MariaKSanz",
    linkedin: "",
  },
  {
    id: 4,
    photo: "./assets/photo_carte/photo_imanol.png",
    name: "Imanol Deleporte",
    softskills: ["Ecoute active", "Esprit d'analyse"],
    github: "https://github.com/ITrogg",
    linkedin: "https://www.linkedin.com/in/imanol-deleporte-b2b28b304/",
  },
  {
    id: 5,
    photo: "./assets/photo_carte/photo_nicolas.png",
    name: "Nicolas Follain",
    softskills: ["Maturité professionnel", "Désir d'apprendre"],
    github: "https://github.com/NicolasFollain",
    linkedin: "https://www.linkedin.com/in/nicolas-follain-076932304/",
  },
  {
    id: 6,
    photo: "./assets/photo_carte/photo_jo.png",
    name: "Johnny Domingues",
    softskills: ["Créatif", "Curieux"],
    github: "https://github.com/JohnnyDomingues",
    linkedin: "https://www.linkedin.com/in/johnny-domingues-8a4327186/",
  },
  {
    id: 7,
    photo: "./assets/photo_carte/photo_vanessa.png",
    name: "Vanessa Girondin",
    softskills: ["Adaptabilité professionnelle", "Esprit d'équipe"],
    github: "https://github.com/NessaGi",
    linkedin: "https://www.linkedin.com/in/vanessa-girondin-958a93114/",
  },
  {
    id: 8,
    photo: "./assets/photo_carte/photo_bertrand.png",
    name: "Bertrand Larroche",
    softskills: ["Leadership naturel", "Grande humilité"],
    github: "https://github.com/BertrandLrc",
    linkedin: "https://www.linkedin.com/in/bertrand-larroche-a20942300/",
  },
  {
    id: 9,
    photo: "./assets/photo_carte/photo_oresti.png",
    name: "Oresti Hoxhallari",
    softskills: ["Esprit critique", "La créativité"],
    github: "https://github.com/OrestiHoxhallari",
    linkedin: "",
  },
  {
    id: 10,
    photo: "./assets/photo_carte/photo_lubin.png",
    name: "Lubin Chauvreau",
    softskills: ["Jonglage", "Organisation d'évenements"],
    github: "https://github.com/lub04",
    linkedin: "https://www.linkedin.com/in/lubin-chauvreau-2235102b9/",
  },
  {
    id: 11,
    photo: "./assets/photo_carte/photo_megane.png",
    name: "Megane Loisele",
    softskills: ["Minutieuse", "Motivée"],
    github: "https://github.com/Megane45",
    linkedin: "https://www.linkedin.com/in/mégane-loisele-176845303/",
  },
];

// Récuperation des tokens avec les avatars dans le deck
const cardDeck = document.getElementById("img_deck");

// Creation de la Carte du wilder en fonction des données de la data
const createCard = (id) => {
  const wilder = data.find((el) => el.id === id);

  const container = document.getElementById("container_card");
  container.innerHTML = "";

  const section = document.createElement("section");
  section.classList.add("card");
  section.setAttribute("id", "card");

  const templateSection = `<article class="avatar">
      <img
        src="${wilder.photo}"
        alt="Photo du wilder"
      />
    </article>
    <article class="rightcard">
      <h2>${wilder.name}</h2>
      <p>
        Softskill : ${wilder.softskills.join(", ")}
      </p>
      <div class="social">
        <a href="${
          wilder.github
        }" target="_blank"><img src="/assets/catalogue/github.svg" /></a>
        <a href="${wilder.linkedin}" target="_blank"
          ><img src="/assets/catalogue/LinkedIn_Logo.svg.png"
        /></a>
      </div>
    </article>`;

  section.innerHTML = templateSection;
  container.appendChild(section);
};

const createDeck = (cardInfo) => {
  const div = document.createElement("div");
  div.classList.add("img_wrap");
  // Template du token
  // au clic, on appelle une fonction avec l'index de la personne en param
  const templateDeck = `
      <button onclick="createCard(${cardInfo.id})">
        <img src=${cardInfo.photo} />
      </button>
    `;
  div.innerHTML = templateDeck;

  return div;
};

// Creation de token pour le deck
for (let i = 0; i < data.length; i += 2) {
  const newCardDeck = createDeck(data[i]);
  cardDeck.appendChild(newCardDeck);
}

// Bouton droite qui change les données du deck
const turnRight = document.getElementById("button_right");

turnRight.addEventListener("click", () => {
  cardDeck.innerHTML = "";
  for (let i = 1; i < data.length; i += 2) {
    const newCardDeck = createDeck(data[i]);
    cardDeck.appendChild(newCardDeck);
  }
});

// Bouton gauche qui change les données du deck
const turnLeft = document.getElementById("button_left");

turnLeft.addEventListener("click", () => {
  cardDeck.innerHTML = "";
  for (let i = 0; i < data.length; i += 2) {
    const newCardDeck = createDeck(data[i]);
    cardDeck.appendChild(newCardDeck);
  }
});

const leftArrow = document.getElementById("button_left");
leftArrow.addEventListener("mouseover", () => {
  leftArrow.style.height = "5rem";
  leftArrow.style.width = "5rem";
});
leftArrow.addEventListener("mouseleave", () => {
  leftArrow.style.height = "3.1rem";
  leftArrow.style.width = "3.1rem";
});

const rightArrow = document.getElementById("button_right");
rightArrow.addEventListener("mouseover", () => {
  rightArrow.style.height = "5rem";
  rightArrow.style.width = "5rem";
});
rightArrow.addEventListener("mouseleave", () => {
  rightArrow.style.height = "3.1rem";
  rightArrow.style.width = "3.1rem";
});
