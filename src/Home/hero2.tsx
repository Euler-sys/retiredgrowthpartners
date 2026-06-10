import { Link } from "react-router-dom";
import cardImg from "../assets/pngtree.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <><section className="relative bg-white overflow-hidden w-full">
  <div className="flex flex-col lg:flex-row items-center">
    {/* Left Side: Animated Text */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full lg:w-1/2 px-6 lg:px-16 py-16"
    >
      <h1 className="text-3xl uppercase lg:text-5xl font-extrabold text-blue-500 mb-6 mt-[100px] leading-tight">
        AI-Powered Trading & Investment Solutions
      </h1>

      <p className="text-gray-700 mb-6 text-base lg:text-lg leading-relaxed">
        Elite Alpha Capital combines advanced artificial intelligence with
        market expertise to identify high-potential opportunities across
        multiple financial markets. Our proprietary AI continuously analyzes
        thousands of data points in real time, helping investors discover
        opportunities in stocks, cryptocurrencies, forex, commodities, ETFs,
        and major global indices.
      </p>

      <p className="text-gray-700 mb-6 text-base lg:text-lg leading-relaxed">
        Through machine learning, predictive analytics, and automated market
        monitoring, our platform helps optimize trading decisions, manage risk,
        and react quickly to changing market conditions. Whether you're looking
        for long-term portfolio growth or active market participation, our
        technology is designed to provide intelligent insights and streamlined
        investment experiences.
      </p>

      <p className="text-gray-700 mb-8 text-base lg:text-lg leading-relaxed">
        Join a growing community of investors leveraging AI-driven strategies,
        transparent performance tracking, diversified investment opportunities,
        and cutting-edge financial technology to pursue their financial goals.
      </p>

      <Link to="/signup">
        <button className="bg-blue-800 text-white px-8 py-3 font-semibold rounded-lg hover:bg-black transition duration-300">
          START INVESTING TODAY
        </button>
      </Link>
    </motion.div>

    {/* Right Side: Floating Image */}
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full lg:w-1/2"
    >
      <img
        src={cardImg}
        alt="AI-powered trading dashboard"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
</section>
    </>
  );
};

export default HeroSection;
