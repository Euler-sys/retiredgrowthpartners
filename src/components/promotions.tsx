import hero from "../assets/heroooo.png";
import { motion } from "framer-motion";

const Promotions = () => {
  return (
   <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="lg:w-1/2"
><img src={hero} alt="" className="w-[300px] m-auto mb-5"/>


<hr /> <hr /> <hr />




  <h2 className="text-2xl mt-8 text-center lg:text-5xl font-extrabold text-blue-700 mb-6">
    Who We Are
  </h2>

  

  <p className="text-gray-800 text-lg leading-relaxed p-6">
    <strong>Elite Alpha Capital</strong> is a global financial technology firm
    dedicated to transforming the way individuals and institutions invest.
    Founded in 2018, we combine advanced artificial intelligence, quantitative
    research, and real-time market intelligence to identify opportunities
    across multiple asset classes.
    <br />
    <br />
    Our proprietary AI systems continuously analyze millions of market signals,
    economic indicators, historical trends, and investor sentiment to uncover
    opportunities in stocks, cryptocurrencies, commodities, forex markets, and
    global indices. This allows us to adapt quickly to changing market
    conditions and deliver intelligent investment strategies.
    <br />
    <br />
    Through automation, predictive analytics, and data-driven decision making,
    we help investors access sophisticated trading solutions that were once
    available only to major financial institutions. Whether you're building
    long-term wealth or seeking active market exposure, our platform provides
    the tools and insights needed to navigate today's financial landscape.
    <br />
    <br />
    At Elite Alpha Capital, we're not just investing in markets—we're shaping
    the future of AI-powered finance.
  </p>
</motion.div>
  );
};

export default Promotions;
