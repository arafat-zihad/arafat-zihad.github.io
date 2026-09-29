import React, { useState } from 'react';
import data from "../assets/data.json";
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const ProjectsSection = () => {
    const { projects } = data.data || { projects: [] };

    // State for number of projects to display
    const [visibleProjects, setVisibleProjects] = useState(5);

    // Function to load more projects
    const loadMoreProjects = () => {
        setVisibleProjects((prev) => prev + 2);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <SectionHeader title={'projects'} description={'View my latest projects'} linkText={'view all'} link={'/projects'} />

                {/* Project Cards */}
                <div className="project-cards-container">
                    {
                        projects.slice(0, visibleProjects).map((project, id) => (
                            <ProjectCard project={project} id={id} key={id} />
                        ))
                    }
                </div>

                {visibleProjects < projects.length && (
                    <div>
                        <div className="projects-actions">
                            <button
                                onClick={loadMoreProjects}
                                className="projects-load-more"
                            >
                                Load More ({projects.length - visibleProjects})
                            </button>
                            <a
                                href='/projects'
                                className="projects-view-all"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
