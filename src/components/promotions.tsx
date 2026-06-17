import hero from "../assets/heroooo.png";
import { motion } from "framer-motion";

const Promotions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="lg:w-1/2"
    >
      <img src={hero} alt="" className="w-[300px] m-auto mb-5" />
      <hr /> <hr /> <hr />
      <h2 className="text-2xl mt-8 text-center lg:text-5xl font-extrabold text-blue-700 mb-6">
        Who We Are
      </h2>
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            {/* Heading */}
            <div className="mb-8">
              <span className="text-blue-600 uppercase tracking-widest font-semibold text-sm">
                Who We Are
              </span>

              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3">
                Empowering Long-Term Financial Growth
              </h2>

              <div className="w-24 h-1 bg-blue-600 rounded-full mt-4"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong className="text-blue-700">
                  Retirement Growth Partners
                </strong>{" "}
                is committed to helping individuals and families build a
                stronger financial future through strategic retirement planning
                and investment solutions. Our mission is centered on providing
                access to retirement savings programs, diversified investment
                opportunities, and wealth-building strategies designed for
                long-term success.
              </p>

              <p>
                We specialize in retirement-focused financial solutions,
                including 401(k) plans, 403(b) programs, Individual Retirement
                Accounts (IRAs), and professionally managed portfolios. Our
                investment approach is built on careful market analysis,
                diversification, and disciplined portfolio management to help
                clients pursue their financial goals.
              </p>

              <p>
                Whether you are planning for retirement, seeking passive income
                opportunities, or looking to grow your savings, our platform
                provides the resources, tools, and support needed to make
                informed financial decisions with confidence.
              </p>

              <p>
                Through innovation, transparency, and a commitment to client
                success, we strive to create investment experiences that empower
                individuals and families to achieve financial independence and
                long-term prosperity.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {[
                  "Retirement Savings Plans",
                  "401(k) Investment Solutions",
                  "403(b) Retirement Programs",
                  "Individual Retirement Accounts",
                  "Wealth Management Services",
                  "Passive Income Opportunities",
                  "Portfolio Diversification",
                  "Long-Term Financial Planning",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 border-l-4 border-blue-600 pl-6 py-2">
                <p className="text-xl font-semibold text-gray-900 italic">
                  Building wealth today. Securing your future tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Promotions;
