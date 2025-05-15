const Contact=()=>{
    return(
        <>
        <section id="contact" className="bg-white dark:bg-gray-900 py-12 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-8">
      Feel free to reach out if you want to collaborate or just have a chat. I'm open to internships, freelance work, or tech discussions.
    </p>

    <form action="#" className="space-y-6">
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required/>
      </div>
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="you@example.com" required/>
      </div>
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <textarea id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="Your message here..." required></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-[8rem] rounded-lg dark:bg-green-300">Send </button>
    </form>
  </div>
</section>

        </>
    )
}
export default Contact