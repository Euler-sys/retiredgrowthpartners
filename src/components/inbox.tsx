import { useState } from "react";
import { CheckCircle, Info, MailWarning, ShieldAlert } from "lucide-react";
import BottomNav from "../pages/stickyNav";
import BottomNav2 from "../pages/bottomnav2";
import SupportBot from "./support";

type Message = {
  id: number;
  icon: JSX.Element;
  subject: string;
  preview: string;
  full: string;
  date: string;
  unread: boolean;
};
const messages: Message[] = [
  {
    id: 1,
    icon: <ShieldAlert className="text-blue-600" size={24} />,
    subject: "Account Security Update",
    preview:
      "Review your account security settings and make sure your information is up to date.",
    full: `🔐 Account Security Update.

We've made improvements to account security and monitoring. 
Please review your account settings regularly to keep your profile information updated and secure.

If you need assistance, contact our support team.`,
    date: "July 5, 2025",
    unread: true,
  },
  {
    id: 2,
    icon: <MailWarning className="text-yellow-500" size={24} />,
    subject: "KYC Verification Reminder",
    preview:
      "Complete your verification to access all available account features.",
    full: `📄 KYC Verification Reminder.

Your verification process is still incomplete. 
Please update your required information to ensure your account remains fully active and accessible.

Thank you for completing your verification.`,
    date: "July 3, 2025",
    unread: true,
  },
  {
    id: 3,
    icon: <CheckCircle className="text-green-500" size={24} />,
    subject: "Account Verified Successfully",
    preview: "Your account verification has been completed successfully.",
    full: `✅ Account Verification Complete.

Your account has been successfully verified.
You can now continue using all available account features and services.`,
    date: "July 1, 2025",
    unread: false,
  },
  {
    id: 4,
    icon: <Info className="text-blue-500" size={24} />,
    subject: "New Dashboard Update",
    preview:
      "A new dashboard experience is now available with improved insights.",
    full: `📊 Dashboard Update.

We've introduced improvements to your dashboard experience.
You can now view your account activity and updates more easily.`,
    date: "June 29, 2025",
    unread: false,
  },
  {
    id: 5,
    icon: <CheckCircle className="text-green-600" size={24} />,
    subject: "Welcome to RGP",
    preview: "Your account is ready. Explore available features and services.",
    full: `🎉 Welcome to RGP.

Your account setup is complete.
You can now explore the available features and manage your account from your dashboard.`,
    date: "June 25, 2025",
    unread: false,
  },
];

const InboxPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-red-800 text-center">
          {" "}
          Inbox{" "}
        </h1>

        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 bg-white ${
                msg.unread
                  ? "border-l-4 border-red-600 bg-red-50/30"
                  : "border-gray-200"
              }`}
            >
              <div className="mt-1">{msg.icon}</div>
              <div className="flex-1">
                <h3
                  className={`text-base font-semibold ${msg.unread ? "text-red-700" : "text-gray-800"}`}
                >
                  {msg.subject}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{msg.preview}</p>
              </div>
              <div className="text-sm text-gray-500 text-right">
                {/* <p>{msg.date}</p> */}
                {msg.unread && (
                  <span className="text-xs text-white bg-red-600 px-2 py-0.5 rounded-full ml-1">
                    Unread
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <div className="mb-3">{selectedMessage.icon}</div>
            <h2 className="text-xl font-bold text-red-700 mb-2">
              {selectedMessage.subject}
            </h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">
              {selectedMessage.full}
            </p>
            {/* <p className="text-xs text-gray-400 mt-4">{selectedMessage.date}</p> */}
          </div>
        </div>
      )}

      <BottomNav />
      <BottomNav2 />
      <SupportBot />
    </>
  );
};

export default InboxPage;
