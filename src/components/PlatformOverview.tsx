
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Globe,
  Wallet,
  PiggyBank,
  Gift,
} from "lucide-react";

const features = [
  {
    title: "Safe & Secure",
    icon: ShieldCheck,
    description:
      "Your investments and personal information are protected through advanced security protocols, SSL encryption, and industry-standard safeguards.",
  },
  {
    title: "Professional Guidance",
    icon: Star,
    description:
      "Access expert insights and professionally managed investment strategies designed to support your long-term financial goals.",
  },
  {
    title: "Global Accessibility",
    icon: Globe,
    description:
      "Manage your investments from anywhere in the world through our secure and user-friendly online platform.",
  },
  {
    title: "Wealth Management",
    icon: Wallet,
    description:
      "Diversified investment solutions tailored to help grow, preserve, and manage your wealth effectively over time.",
  },
  {
    title: "Cost-Efficient Investing",
    icon: PiggyBank,
    description:
      "Transparent investment opportunities with a focus on long-term value and financial growth.",
  },
  {
    title: "Growth Opportunities",
    icon: Gift,
    description:
      "Explore retirement-focused investment programs and income-generating opportunities designed to support financial independence.",
  },
];

const PlatformOverview = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-extrabold text-blue-800 text-center mb-14"
        >
          Why Choose Retirement Growth Partners
        </motion.h2>

        {/* Features */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Icon className="text-blue-700" size={28} />
                </div>

                <h3 className="text-xl font-bold text-blue-900">
                  {title}
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Investment Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-white p-8 lg:p-12 rounded-3xl shadow-lg"
        >
          <span className="text-blue-600 uppercase tracking-widest font-semibold text-sm">
            Our Approach
          </span>

          <h3 className="text-3xl lg:text-4xl font-bold text-blue-800 mt-2 mb-6">
            Investment Philosophy
          </h3>

          <p className="text-lg text-gray-800 leading-relaxed">
            We believe successful investing requires discipline,
            diversification, and professional management. Our goal is
            to help clients maximize growth potential while managing
            risk through carefully selected investment opportunities.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mt-6">
            By combining strategic asset allocation, long-term planning,
            and market expertise, we help investors build stronger
            portfolios that support retirement readiness, financial
            independence, and sustainable wealth creation.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-700 to-blue-900 p-8 lg:p-12 rounded-3xl shadow-xl text-white"
        >
          <span className="uppercase tracking-widest text-blue-200 font-semibold text-sm">
            Our Purpose
          </span>

          <h3 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">
            Our Mission
          </h3>

          <p className="text-lg leading-relaxed text-blue-100">
            To empower individuals worldwide with innovative retirement
            and investment solutions that help create financial freedom,
            sustainable wealth, and a secure future.
          </p>

          <p className="text-lg leading-relaxed text-blue-100 mt-6">
            We are committed to providing accessible financial
            opportunities, professional guidance, and investment
            strategies that support long-term prosperity for
            individuals, families, and communities around the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformOverview;