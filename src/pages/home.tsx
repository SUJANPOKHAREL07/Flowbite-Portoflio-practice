
import { Foter } from "./footer";

const Home = () => {
  return (
    <>
      <div className=" pl-[2rem] h-[35rem] dark:bg-gray-800 w-fit  ">
        <div className="text-2xl font-bold text-white pt-[7rem] ">
          <h5 className="text-green-300">Hello ! I'm Sujan Pokharel</h5>
        </div>
        <div className="flex  ">
          <p className=" pt-3  mr-[7rem]  text-white">
            Hi, I'm Sujan Pokharel, a 6th semester BCA student at Crimson
            College of Technology, affiliated with Pokhara University. I'm
            currently a MERN stack development intern, where I’m gaining
            practical experience in building full-stack web applications using
            MongoDB, Express.js, React, and Node.js. I'm passionate about
            coding, problem-solving, and creating user-friendly digital
            solutions. I enjoy learning new technologies and working on
            real-world projects that challenge me to grow as a developer.
          </p>
          <div className="">
            <img
              className="w-[80rem] h-[20rem] mt-[-5rem] mr-9 p-4 rounded-b-full rounded-t-full"
              src="src\assets\profile.png"
              alt="bg-img"
            />
          </div>
        </div>
        
      </div>
      <Foter/>
    </>
  );
};
export default Home;
