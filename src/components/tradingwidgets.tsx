
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const TradingWidgets = () => {
  const benefits = [
    "Diversified Investment Strategies",
    "Retirement Savings Solutions",
    "Professional Portfolio Management",
    "Transparent Account Monitoring",
    "Long-Term Wealth Building",
    "Dedicated Client Support",
  ];

  return (
    <>
      {/* Market Overview */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-extrabold text-blue-800 text-center mb-4"
          >
            Market Overview
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-center text-gray-600 mb-12"
          >
            Stay informed with real-time market insights and global financial
            trends that influence investment opportunities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* S&P 500 */}
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22SP%3ASPX%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22height%22%3A126%7D"
                title="S&P 500"
                height="126"
                width="100%"
                frameBorder="0"
              />
            </div>

            {/* Dow Jones */}
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22DJ%3ADJI%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22height%22%3A126%7D"
                title="Dow Jones"
                height="126"
                width="100%"
                frameBorder="0"
              />
            </div>

            {/* NASDAQ */}
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AIXIC%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22height%22%3A126%7D"
                title="NASDAQ"
                height="126"
                width="100%"
                frameBorder="0"
              />
            </div>

            {/* Gold */}
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22TVC%3AGOLD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22height%22%3A126%7D"
                title="Gold"
                height="126"
                width="100%"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="Retirement Planning"
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Retirement Solutions
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold text-blue-900 mt-3 mb-6">
              Building Wealth For Your Future
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our retirement-focused investment solutions are designed to help
              individuals and families grow, preserve, and manage wealth with
              confidence. Through disciplined portfolio management and
              diversified investment strategies, we help investors pursue their
              long-term financial goals.
            </p>

            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={22}
                  />
                  <p className="text-gray-700 font-medium">{item}</p>
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition">
              Start Planning Today
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TradingWidgets;
