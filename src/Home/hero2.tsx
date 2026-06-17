import { Link } from "react-router-dom";
import cardImg from "../assets/pngtree.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-white overflow-hidden w-full">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side: Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 px-6 lg:px-16d mt-[100px]  py-16"
          >
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              About Us
            </span>

            <h1 className="text-3xl uppercase lg:text-5xl font-extrabold text-blue-500 mb-6 mt-4 leading-tight">
              Building Wealth for a Secure Retirement
            </h1>

            <p className="text-gray-700 mb-6 text-base lg:text-lg leading-relaxed">
              At Retirement Growth Partners, we help individuals and families
              build long-term financial security through strategic retirement
              planning and investment opportunities. Our platform is designed to
              support sustainable wealth growth through retirement accounts,
              including 401(k), 403(b), IRA plans, and other investment
              solutions.
            </p>

            <p className="text-gray-700 mb-6 text-base lg:text-lg leading-relaxed">
              Our investment strategies focus on delivering consistent growth
              opportunities through diversified portfolio management and
              market-driven investment approaches. We provide investors with
              access to professionally managed solutions designed to maximize
              long-term financial potential while maintaining a balanced
              approach to risk management.
            </p>

            <p className="text-gray-700 mb-8 text-base lg:text-lg leading-relaxed">
              Whether you're planning for retirement, seeking passive income
              opportunities, or looking to grow your savings, our team provides
              the resources, tools, and guidance needed to help you achieve your
              financial goals with confidence.
            </p>

            {/* What We Offer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Retirement Savings Plans",
                "401(k) Investment Solutions",
                "403(b) Retirement Programs",
                "Individual Retirement Accounts (IRAs)",
                "Wealth Management Services",
                "Passive Income Opportunities",
                "Long-Term Portfolio Growth",
                "Professional Financial Guidance",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/signup">
              <button className="bg-blue-800 text-white px-8 py-3 font-semibold rounded-lg hover:bg-black transition duration-300">
                START PLANNING TODAY
              </button>
            </Link>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full lg:w-1/2 p-6"
          >
            <img
              src={cardImg}
              alt="Retirement Investment Planning"
              className="w-full rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
