

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: 'Simon Says Game',
            image: '/simon.png',
            description:
                'A classic memory and coordination game built using HTML, CSS, and JavaScript. It demonstrates DOM manipulation, event handling, and interactive UI logic.',
            link: 'https://github.com/k-kiran2003/SIMON-SAYS-Game.git',
        },
        {
            id: 2,
            title: 'TODO',
            image: '/react.png',
            description: 'A simple TODO application built with React. It allows users to add, edit, and delete tasks, showcasing state management and component-based architecture.',   
            link:"https://github.com/k-kiran2003/Todo-using-React-state.git",
        },
        {
            id: 3,
            title: 'Wanderlust',
            image: '/wanderlust.png',
            description: 'A travel  website that provides information about various travel destinations. It includes features like user authentication, post creation,deleting,updating and commenting.',
            link: 'https://github.com/k-kiran2003/wanderlust.git',
        },
    ];

    return (
        <main className="container py-5">
            <section id="projects">
                <h2 className="text-center mb-5">My Projects</h2>
                <div className="row g-4">
                    {projectList.map((project) => (
                        <div className="col-md-4" key={project.id}>
                            <div className="card h-100 shadow-sm">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="card-img-top w-100 "
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-text">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary mt-auto"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;
