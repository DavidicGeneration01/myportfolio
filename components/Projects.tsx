import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        // Fetch projects sorted by recently pushed
        const response = await fetch('https://api.github.com/users/davidicgeneration01/repos?sort=pushed&per_page=100');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        
        const newProjects: Project[] = data
          .filter((repo: any) => !repo.fork) // Optionally filter out forks
          .map((repo: any) => ({
            id: String(repo.id),
            title: repo.name,
            description: repo.description || 'No description provided.',
            tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean),
            liveLink: repo.homepage || undefined,
            repoLink: repo.html_url
          }));

        setProjects(newProjects);
      } catch (error) {
        console.error('Error loading GitHub projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); // Load 6 more on click
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const showButton = visibleCount < projects.length;

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <p className="text-slate-600 text-lg">Featured web applications showcasing my skills</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 truncate" title={project.title}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  
                  {/* Links */}
                  <div className="flex space-x-6 mb-6">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center"
                      >
                        View Live Preview <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                    {/* Handle initial placeholder links if they exist, though fetch usually returns null or string */}
                    {(!project.liveLink) && (
                       <span className="text-slate-400 font-medium text-sm flex items-center cursor-not-allowed">
                        No Live Preview
                       </span>
                    )}

                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-500 hover:text-slate-700 font-medium text-sm flex items-center"
                    >
                      View Repository <Github className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag, idx) => (
                      <span key={idx} className="text-xs font-medium text-slate-500 bg-slate-200/50 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && projects.length === 0 && (
            <div className="text-center text-slate-500 py-10">
                No projects found.
            </div>
        )}

        {!isLoading && showButton && (
          <div className="text-center mt-12">
              <button 
                onClick={handleViewMore}
                className="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
              >
                View More
              </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;