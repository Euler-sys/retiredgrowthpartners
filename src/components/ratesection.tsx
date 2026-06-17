
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const RatesSection = () => {
  const steps = [
    "Create your retirement investment account",
    "Complete your secure account verification",
    "Select an investment plan aligned with your goals",
    "Track your portfolio growth and earnings",
  ];

  return (
    <>
      {/* How It Works */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-5xl font-extrabold text-blue-800 text-center mb-12"
          >
            Your Path to Financial Growth
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                At <strong>Retirement Growth Partners</strong>, we make
                retirement investing simple, accessible, and rewarding. Our
                platform provides individuals and families with the tools needed
                to build long-term financial security through professionally
                managed investment opportunities and retirement-focused
                strategies.
                <br />
                <br />
                We offer a range of solutions including retirement savings
                plans, 401(k) programs, 403(b) plans, Individual Retirement
                Accounts (IRAs), and diversified investment portfolios designed
                to support sustainable wealth accumulation over time.
                <br />
                <br />
                Whether you're beginning your investment journey or expanding
                an existing portfolio, our goal is to help you pursue financial
                growth, preserve wealth, and prepare confidently for the
                future.
              </p>

              <ul className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl"
                  >
                    <CheckCircle
                      className="text-blue-600 mt-1 flex-shrink-0"
                      size={22}
                    />
                    <span className="text-blue-900 font-medium">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="lg:w-1/2"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">
                  Secure Retirement Planning
                </h3>

                <p className="text-blue-100 leading-relaxed mb-6">
                  Build a stronger financial future with retirement-focused
                  investment solutions designed to help you grow, protect, and
                  manage your wealth over time.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-2xl">401(k)</h4>
                    <p className="text-sm text-blue-100">
                      Retirement Solutions
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-2xl">IRA</h4>
                    <p className="text-sm text-blue-100">
                      Wealth Building
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-2xl">403(b)</h4>
                    <p className="text-sm text-blue-100">
                      Long-Term Planning
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-2xl">Growth</h4>
                    <p className="text-sm text-blue-100">
                      Investment Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-5xl font-extrabold text-blue-800 text-center mb-12"
          >
            Why Investors Choose Retirement Growth Partners
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                <strong>Retirement Growth Partners</strong> is dedicated to
                helping investors achieve their long-term financial goals
                through strategic retirement planning and professionally
                managed investment solutions.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                We provide access to retirement investment programs,
                diversified portfolios, wealth management services, and
                passive income opportunities designed to support financial
                growth throughout every stage of life.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                Through innovation, market expertise, and personalized
                support, we empower individuals and families to make informed
                financial decisions and build a stronger financial future.
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h3 className="text-3xl font-bold text-blue-800 mb-6">
                  Our Commitment
                </h3>

                <ul className="space-y-5">
                  {[
                    "Transparent Investment Solutions",
                    "Long-Term Wealth Building",
                    "Retirement Planning Expertise",
                    "Diversified Portfolio Strategies",
                    "Secure Investment Management",
                    "Professional Client Support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle
                        className="text-green-500"
                        size={22}
                      />
                      <span className="text-gray-700 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RatesSection;
