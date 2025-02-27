import Eye from '../icons/Eye';

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto border-x border-[#292929] pt-20 px-8">
      <div className="max-w-[1400px]">
      <h1 className="text-[#dcdcdc] text-lg md:text-[17.3rem] font-drukCond font-bold tracking-wide leading-[15rem] flex flex-wrap gap-x-6">
        <span>WE</span>
        <span>HELP</span>
        <span className="inline-flex items-center gap-4">
          <span className="text-[#95ff00]">WEB3</span>
          <Eye w="50%" h="60%" />
        </span>
        <span>PROJECTS</span>
        <span>LAUNCH.</span>
      </h1>




{/* 
        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl">
          Our mission is to help ensure the <span className="text-white font-medium">integrity</span> of the 
          Web3 space continues to thrive by providing clients with 
          a <span className="text-white font-medium">full suite of services</span> to assist 
          them with the launch of their projects.
        </p> */}
      </div>
    </div>
  );
};

export default Hero;