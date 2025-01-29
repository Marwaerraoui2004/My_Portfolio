import '../styles/portfolio.css';

export default function Portfolio() {
    const projects = [
        { 
            title: "Application Des Notes", 
            description: "Une application web interactive utilisant React et des API.", 
            imgSrc: "Notes.png", 
            link: "https://github.com/Marwaerraoui2004/Gestion-des-notes" 
        },
        { 
            title: "Gestion De Employés Laravel", 
            description: "Développé avec Laravel et MySQL.", 
            imgSrc: "https://example.com/project2.png", 
            link: "https://github.com/Marwaerraoui2004/Gestion-des-employes.git" 
        },
        { 
            title: "Jeu JavaScript", 
            description: "Un jeu développé avec JavaScript pur et CSS.", 
            imgSrc: "Pong.png", 
            link: "https://github.com/Marwaerraoui2004/Pong-Game" 
        },
        { 
            title: "Application Du Méthéo", 
            description: "Une application météo développé avec JavaScript pur et CSS,avec des données récupérées en temps réel via une API.", 
            imgSrc: "Weather.png", 
            link: "https://github.com/Marwaerraoui2004/Projet-Metheo.git" 
        },
    ];

    return (
        <div className='bgBody'>
        <div className="portfolio-container">
            <h2 className="portfolio-title">My Portfolio</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image-wrapper">
                            <img src={project.imgSrc} alt={project.title} className="project-image" />
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Voir le projet
                        </a>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
