import { FaWhatsapp } from "react-icons/fa";

const SupportBot = () => {
  const whatsappNumber = "+19012648778"; // Replace with your WhatsApp number

  const message = encodeURIComponent(
    "Hello, I need assistance."
  );

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-center">
      <button
        onClick={() =>
          window.open(
            `https://wa.me/${whatsappNumber}?text=${message}`,
            "_blank"
          )
        }
        aria-label="WhatsApp Support"
        className="p-4 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white transition"
      >
        <FaWhatsapp size={30} />
      </button>

      <span className="text-sm text-black font-bold mb-8">
        WhatsApp Us
      </span>
    </div>
  );
};

export default SupportBot;