import { Foter } from "./footer"

const Projects=()=>{
    return(
        <>
       <section className="bg-gray-50 dark:bg-gray-800 py-12 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Projects</h2>
    
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      
      {/* <!-- Project Card 1 --> */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Todo App</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A simple full-stack Todo application using React, Node.js, and MongoDB with user authentication.
        </p>
        <a href="#" className="text-blue-600 hover:underline">View Project →</a>
      </div>

      {/* <!-- Project Card 2 --> */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Portfolio Website</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A personal portfolio site built with Tailwind CSS and Flowbite to showcase my projects and skills.
        </p>
        <a href="#" className="text-blue-600 hover:underline">View Project →</a>
      </div>

      {/* <!-- Project Card 3 --> */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Blog Platform</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A MERN-based blog system with post creation, editing, and rich text support using Quill.js.
        </p>
        <a href="#" className="text-blue-600 hover:underline">View Project →</a>
      </div>

    </div>
  </div>
  <Foter/>
</section>

        </>
    )
}
export default Projects