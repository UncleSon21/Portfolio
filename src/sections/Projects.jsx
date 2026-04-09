import { myProjects } from "../constants"
import TitleHeader from "../components/TitleHeader"

const Projects = () => (
  <section id="projects" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-5">
      <TitleHeader
        title="Things I Have Built"
        sub="Projects"
      />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16">
        {myProjects.map((project, index) => (
          <div key={index} className="card-border rounded-xl overflow-hidden flex flex-col">
            <div className="h-56 overflow-hidden">
              <img
                src={project.imgPath}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-white/10 text-white-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-white-50 text-sm mt-1">{project.subtitle}</p>
              </div>

              <p className="text-white-50 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {project.link ? (
                
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white underline underline-offset-4 hover:opacity-70 transition-opacity w-fit"
                >
                  {project.link.includes("github.com") ? "View on GitHub" : `Visit ${project.title}`}
                </a>
              ) : (
                <span className="text-sm text-white-50 italic">Coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects