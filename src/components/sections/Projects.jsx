import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow">
                            <h3 className="text-xl font-bold mb-2">Recipe App</h3>
                            <p className="text-gray-400 mb-4">
                                A simple and intuitive recipe app that lets users browse, search, and save their favorite recipes.
                                Designed for a smooth user experience, it makes cooking easier with clear instructions and ingredient lists.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "API", "TailwindCSS"].map((tech, key) => {
                                    return (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8_rgba(59,130,246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/seroking/Recipe-App" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow">
                            <h3 className="text-xl font-bold mb-2">React Calendar</h3>
                            <p className="text-gray-400 mb-4">
                                A React-based calendar app designed for organizing events and tasks.
                                It currently lacks a backend and some APIs to be fully functional, but I’m actively learning the required technologies.
                                I also worked with various libraries to enhance its functionality and UI.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS"].map((tech, key) => {
                                    return (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8_rgba(59,130,246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/seroking/react-Calendar" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow">
                            <h3 className="text-xl font-bold mb-2">Ecommerce Website</h3>
                            <p className="text-gray-400 mb-4">
                                A basic eCommerce website built with HTML, CSS, and Bootstrap, one of my first projects to learn web development fundamentals.  
                                It features a responsive design and a simple product listing layout.  
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "Bootstrap"].map((tech, key) => {
                                    return (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8_rgba(59,130,246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}