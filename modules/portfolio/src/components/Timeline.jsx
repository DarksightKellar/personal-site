const experience = [
    {
        id: 'decent',
        role: 'Senior Software & Contracts Engineer',
        company: 'Decent Labs (Decent DAO)',
        date: 'Jan 2021 – Dec 2025',
        details: [
            'Developed and maintained smart contracts for the Sarcophagus Protocol',
            'Built production Web3 applications including gasless voting interface',
            'Designed encryption flows using Ethereum and Arweave',
            'Led frontend architecture using React, Next.js, and modern state management'
        ]
    },
    {
        id: 'frostbyte',
        role: 'Lead Mobile Engineer',
        company: 'Frostbyte',
        date: 'Jan 2021 – Dec 2022',
        details: [
            'Led cross-platform mobile app development (iOS & Android) using Flutter/Dart',
            'Implemented secret sharding, offline-first storage, and secure data distribution',
            'Shipped to production with thousands of active users',
            'Owned architecture decisions, CI/CD, and release pipelines'
        ]
    },
    {
        id: 'mudupay',
        role: 'Software Engineer',
        company: 'Mudupay / Delivast',
        date: '2021',
        details: [
            'Contributed to fintech and logistics platforms',
            'Worked across frontend and backend with emphasis on robustness and UX'
        ]
    },
    {
        id: 'postagraph',
        role: 'Lead Software Engineer',
        company: 'Postagraph',
        date: '2020',
        details: [
            'Led development of core product features and frontend systems',
            'Delivered scalable, user-focused solutions under tight timelines'
        ]
    },
    {
        id: 'geocems',
        role: 'Co-Founder & Senior Software Engineer',
        company: 'GeoCEMSLab Inc.',
        date: '2018 – 2021',
        details: [
            'Co-founded and built systems spanning web, mobile, and backend infrastructure',
            'Led engineering across multiple client-facing products',
            'Focused on reliability, performance, and long-term maintainability'
        ]
    },
    {
        id: 'gta',
        role: 'Graduate Teaching Assistant',
        company: 'Computer Graphics',
        date: '2018 – 2020',
        details: [
            'Assisted with undergraduate teaching in Computer Graphics',
            'Supported coursework, labs, and student mentoring'
        ]
    }
];

export default function Timeline() {
    return (
        <section className="timeline">
            <h2 className="section-title">Experience</h2>
            <div className="timeline-list">
                {experience.map(exp => (
                    <div key={exp.id} className="timeline-item">
                        <span className="date">{exp.date}</span>
                        <h3>{exp.role}</h3>
                        <p className="company">{exp.company}</p>
                        <ul className="details">
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
