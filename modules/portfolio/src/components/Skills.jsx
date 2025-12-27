const skillCategories = [
    {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
    },
    {
        category: 'Mobile',
        skills: ['Flutter', 'Dart', 'iOS', 'Android']
    },
    {
        category: 'Web3',
        skills: ['Solidity', 'Ethereum', 'Arweave', 'ethers.js']
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Python', 'Flask']
    },
    {
        category: 'Security',
        skills: ['Cryptography', 'Secret Management', 'Encryption']
    },
    {
        category: 'Practices',
        skills: ['System Architecture', 'TDD', 'CI/CD', 'Offline-First']
    }
];

export default function Skills() {
    return (
        <section className="skills">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="skills-grid">
                {skillCategories.map(cat => (
                    <div key={cat.category} className="skill-category">
                        <h3>{cat.category}</h3>
                        <div className="skill-list">
                            {cat.skills.map(skill => (
                                <span key={skill} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
