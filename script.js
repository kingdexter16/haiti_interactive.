// Department data
const departments = [
    {
      id: "artibonite",
      name: "Artibonite",
      Chef_lieu: "Gonaïves",
      description: "L'Artibonite est un département central d'Haïti, traversé par le plus long fleuve du pays et réputé pour sa production agricole.",
      image: "W.JPEG" // Vallée de l'Artibonite
    },
    {
      id: "sud",
      name: "Sud",
      Chef_lieu: "Les Cayes",
      description: "Le Sud est célèbre pour ses plages magnifiques, notamment Port-Salut, et ses sites naturels comme la grotte Marie-Jeanne.",
      image: "E.JPEG" // Port-Salut
    },
    {
      id: "nord",
      name: "Nord",
      Chef_lieu: "Cap-Haïtien",
      description: "Le Nord abrite la Citadelle Laferrière et le Palais Sans-Souci, symboles du patrimoine haïtien.",
      image: "cat.JPEG" // Citadelle Laferrière
    },
    {
      id: "ouest",
      name: "Ouest",
      Chef_lieu: "Port-au-Prince",
      description: "L'Ouest comprend la capitale Port-au-Prince et des sites côtiers comme Wahoo Bay et la plage de Montrouis.",
      image: "S.JPEG" // Wahoo Bay
    },
    {
      id: "grande-anse",
      name: "Grande-Anse",
      Chef_lieu: "Jérémie",
      description: "La Grande-Anse est connue pour ses paysages montagneux, ses rivières et ses plages isolées.",
      image: "Q.JPEG" // Jérémie
    },
    {
      id: "nippes",
      name: "Nippes",
      Chef_lieu: "Miragoâne",
      description: "Les Nippes offrent des paysages verdoyants, des plages tranquilles et une riche tradition agricole.",
      image: "M.JPEG" // Miragoâne
    },
    {
      id: "nord-est",
      name: "Nord-Est",
      Chef_lieu: "Fort-Liberté",
      description: "Le Nord-Est est frontalier de la République Dominicaine et abrite des sites historiques comme le Fort-Liberté.",
      image: "T.JPEG" // Fort-Liberté
    },
    {
      id: "nord-ouest",
      name: "Nord-Ouest",
      Chef_lieu: "Port-de-Paix",
      description: "Le Nord-Ouest est une région montagneuse avec des plages sauvages et des sites historiques.",
      image: "n.JPEG" // Port-de-Paix
    },
    {
      id: "centre",
      name: "Centre",
      Chef_lieu: "Hinche",
      description: "Le Centre est réputé pour ses rivières, ses cascades comme Bassin Zim, et ses pratiques agricoles durables.",
      image: "P.JPEG" // Bassin Zim
    },
    {
      id: "sud-est",
      name: "Sud-Est",
      Chef_lieu: "Jacmel",
      description: "Le Sud-Est est célèbre pour son carnaval, ses artistes et ses plages pittoresques comme Ti Mouillage.",
      image: "G.JPEG" // Jacmel / Ti Mouillage
    }
  ];

dev: "rtr"
// Function to create department cards
function createDepartmentCards() {
    const departmentList = document.getElementById('department-list');
    
    departments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'department-card fade-in';
        card.innerHTML = `
            <img src="${dept.image}" alt="${dept.name}" class="department-image">
            <div class="department-content">
                <h3>${dept.name}</h3>
                <p><strong>Chef_lieu:</strong> ${dept.Chef_lieu}</p>
                <p>${dept.description}</p>
            </div>
        `;
        
        card.addEventListener('click', () => showDepartmentInfo(dept));
        departmentList.appendChild(card);
    });
}

// Fonction pour afficher les infos du département
function showDepartmentInfo(department) {
    const infoPanel = document.getElementById('info-panel');
    infoPanel.innerHTML = `
        <h3>${department.name}</h3>
        <p><strong>Chef_lieu:</strong> ${department.Chef_lieu}</p>
        <p>${department.description}</p>
    `;
    infoPanel.classList.add('fade-in');

    // 🔽 Scroller vers le panneau d'information
    infoPanel.scrollIntoView({ behavior: 'smooth' });

    // (optionnel) Effacer le contenu après 5 secondes
    setTimeout(() => {
        infoPanel.innerHTML = `
            <h3>Sélectionnez un département</h3>
            <p>Cliquez sur un département pour voir plus d'informations.</p>
        `;
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    createDepartmentCards();
});
