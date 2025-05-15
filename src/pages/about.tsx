import { Foter } from "./footer"

const About=()=>{
    return(
        <>
       <section className="bg-white dark:bg-gray-900 py-12 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
      I'm Sujan Pokharel, a 6th semester BCA student at Crimson College of Technology, affiliated with Pokhara University. 
      Currently working as a MERN stack development intern, I enjoy building full-stack web applications using modern tools 
      like React, Node.js, Express, and MongoDB.
    </p>
    <p className="text-gray-700 dark:text-gray-300 text-lg">
      Passionate about coding and continuous learning, I'm focused on turning ideas into interactive, user-friendly solutions. 
      I enjoy working on real-world projects that challenge me and help me grow as a developer.
    </p>
  </div>
</section>

       <Foter/>
        </>
    )
}
export default About