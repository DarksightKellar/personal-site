const projects = [
    {
        id: 'sarcophagus',
        title: 'Sarcophagus Protocol',
        description: 'A decentralized dead man\'s switch built on Ethereum and Arweave. Developed smart contracts for digital asset security and inheritance workflows, with encryption flows for decentralized secret management.',
        tech: ['Solidity', 'Ethereum', 'Arweave', 'React', 'ethers.js'],
        icon: '🏛️',
        featured: true,
        links: {
            website: 'https://sarcophagus.io',
            github: 'https://github.com/sarcophagus-org'
        }
    },
    {
        id: 'frostbyte',
        title: 'Frostbyte',
        description: 'Cross-platform mobile app for secure secret management. Implemented secret sharding, offline-first storage, and secure data distribution. Shipped to production with thousands of active users.',
        tech: ['Flutter', 'Dart', 'iOS', 'Android', 'Cryptography'],
        icon: '❄️',
        featured: true,
        links: {
            // Placeholder - update with actual link
            github: '#'
        }
    },
    {
        id: 'decent',
        title: 'Decent DAO App',
        description: 'Production Web3 applications including a gasless voting interface that significantly increased DAO participation. Led frontend architecture using React, Next.js, and modern state management.',
        tech: ['React', 'Next.js', 'TypeScript', 'Web3', 'Tailwind CSS'],
        icon: '🗳️',
        featured: true,
        links: {
            website: 'https://app.decentdao.org',
            github: 'https://github.com/decentdao'
        }
    }
];

export default function FeaturedProjects() {
    return (
        <section className="featured-projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                        <div className="project-image">
                            {project.icon}
                        </div>
                        <h3>{project.title}</h3>
                        <p className="description">{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.links.website && (
                                <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                                    Visit Site →
                                </a>
                            )}
                            {project.links.github && project.links.github !== '#' && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    GitHub →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
