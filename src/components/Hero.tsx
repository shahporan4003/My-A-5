import banner from "../assets/banner-stack.png"
const Hero = () => {
    return (<section className="container mx-auto flex justify-between">
        ...
        <div>
            <h1 className="text-6xl font-bold mt-24">Build Your Ideal </h1>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-900 bg-clip-text text-5xl font-bold text-transparent ">Development Stack</h1>
            <p className="mt-6 whitespace-nowrap text-2xl">Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your <br />
            next project.
            </p>
            <div className="flex gap-3 mt-8">
  <button
    className="
      rounded-lg
      bg-gradient-to-r from-orange-500 to-pink-500
      px-4 py-3
      font-semibold text-white
      hover:opacity-90
      transition
    "
  >
    Explore Technologies
  </button>

  {/* Learn More */}
  <button
    className="
      rounded-lg
      border border-gray-300
      bg-white
      px-8 py-3
      font-medium text-gray-700
      hover:bg-gray-50
      transition
    "
  >
    Learn More
  </button>
</div>
        </div>
        <div className="shrink-0">
            <img className="container mx-auto flex justify-between" src={banner} alt="" />
        </div>
        </section>
        
      
    );
};

export default Hero;