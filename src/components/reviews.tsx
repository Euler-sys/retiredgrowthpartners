import { useMemo } from "react";

const reviews = [
  {
    name: "Michael Johnson",
    image: "https://i.pravatar.cc/150?img=1",
    review: "The AI trading signals have been incredibly useful. The platform is easy to navigate and packed with insights.",
  },
  {
    name: "Sarah Williams",
    image: "https://i.pravatar.cc/150?img=2",
    review: "I love how everything is automated. The market analysis tools save me hours every week.",
  },
  {
    name: "David Anderson",
    image: "https://i.pravatar.cc/150?img=3",
    review: "Professional platform with excellent market coverage across stocks and digital assets.",
  },
  {
    name: "Emma Thompson",
    image: "https://i.pravatar.cc/150?img=4",
    review: "Clean interface, smart analytics, and helpful insights. Highly impressed.",
  },
  {
    name: "James Wilson",
    image: "https://i.pravatar.cc/150?img=5",
    review: "One of the most advanced AI investment platforms I've come across.",
  },
  {
    name: "Olivia Martinez",
    image: "https://i.pravatar.cc/150?img=6",
    review: "The diversification opportunities are fantastic. Everything is presented clearly.",
  },
  {
    name: "Daniel Brown",
    image: "https://i.pravatar.cc/150?img=7",
    review: "Excellent performance tracking and portfolio management features.",
  },
  {
    name: "Sophia Davis",
    image: "https://i.pravatar.cc/150?img=8",
    review: "The AI recommendations are detailed and easy to understand.",
  },
  {
    name: "Matthew Taylor",
    image: "https://i.pravatar.cc/150?img=9",
    review: "I've learned a lot from the analytics provided by the platform.",
  },
  {
    name: "Isabella Moore",
    image: "https://i.pravatar.cc/150?img=10",
    review: "Great user experience and responsive dashboard.",
  },
  {
    name: "Andrew White",
    image: "https://i.pravatar.cc/150?img=11",
    review: "The platform combines innovation and simplicity perfectly.",
  },
  {
    name: "Mia Harris",
    image: "https://i.pravatar.cc/150?img=12",
    review: "Real-time updates help me stay informed throughout the day.",
  },
  {
    name: "Ethan Clark",
    image: "https://i.pravatar.cc/150?img=13",
    review: "Very impressed with the market research and AI insights.",
  },
  {
    name: "Charlotte Lewis",
    image: "https://i.pravatar.cc/150?img=14",
    review: "Excellent investment tools and intuitive design.",
  },
  {
    name: "Benjamin Walker",
    image: "https://i.pravatar.cc/150?img=15",
    review: "The automated analysis is a game changer.",
  },
  {
    name: "Amelia Hall",
    image: "https://i.pravatar.cc/150?img=16",
    review: "Everything feels professional and well thought out.",
  },
  {
    name: "Lucas Young",
    image: "https://i.pravatar.cc/150?img=17",
    review: "Powerful AI features with a straightforward interface.",
  },
  {
    name: "Harper King",
    image: "https://i.pravatar.cc/150?img=18",
    review: "A great platform for monitoring multiple markets.",
  },
  {
    name: "Henry Wright",
    image: "https://i.pravatar.cc/150?img=19",
    review: "The predictive analytics are impressive.",
  },
  {
    name: "Evelyn Scott",
    image: "https://i.pravatar.cc/150?img=20",
    review: "I appreciate the transparency and detailed reports.",
  },
  {
    name: "Alexander Green",
    image: "https://i.pravatar.cc/150?img=21",
    review: "The AI tools help simplify complex market information.",
  },
  {
    name: "Abigail Adams",
    image: "https://i.pravatar.cc/150?img=22",
    review: "Fantastic platform with a modern approach to investing.",
  },
  {
    name: "Sebastian Baker",
    image: "https://i.pravatar.cc/150?img=23",
    review: "Very informative and easy to use.",
  },
  {
    name: "Emily Nelson",
    image: "https://i.pravatar.cc/150?img=24",
    review: "The dashboard provides all the information I need in one place.",
  },
  {
    name: "Jack Carter",
    image: "https://i.pravatar.cc/150?img=25",
    review: "Excellent market insights and educational resources.",
  },
  {
    name: "Avery Mitchell",
    image: "https://i.pravatar.cc/150?img=26",
    review: "One of the best financial platforms I've explored.",
  },
  {
    name: "Samuel Perez",
    image: "https://i.pravatar.cc/150?img=27",
    review: "Great attention to detail and strong analytical tools.",
  },
  {
    name: "Ella Roberts",
    image: "https://i.pravatar.cc/150?img=28",
    review: "The AI-driven approach feels very innovative.",
  },
  {
    name: "Joseph Turner",
    image: "https://i.pravatar.cc/150?img=29",
    review: "Helpful insights across stocks, crypto, and global markets.",
  },
  {
    name: "Scarlett Phillips",
    image: "https://i.pravatar.cc/150?img=30",
    review: "The platform keeps improving and adding useful features.",
  },
  {
    name: "Gabriel Campbell",
    image: "https://i.pravatar.cc/150?img=31",
    review: "Very satisfied with the overall experience.",
  },
  {
    name: "Victoria Parker",
    image: "https://i.pravatar.cc/150?img=32",
    review: "Easy to understand, even for newer investors.",
  },
  {
    name: "Carter Evans",
    image: "https://i.pravatar.cc/150?img=33",
    review: "The AI analysis is comprehensive and insightful.",
  },
  {
    name: "Grace Edwards",
    image: "https://i.pravatar.cc/150?img=34",
    review: "A modern platform that makes investing more accessible.",
  },
  {
    name: "Owen Collins",
    image: "https://i.pravatar.cc/150?img=35",
    review: "I enjoy the real-time monitoring and reporting tools.",
  },
  {
    name: "Lily Stewart",
    image: "https://i.pravatar.cc/150?img=36",
    review: "The user interface is sleek and responsive.",
  },
  {
    name: "Wyatt Morris",
    image: "https://i.pravatar.cc/150?img=37",
    review: "Excellent data visualization and AI-powered analytics.",
  },
  {
    name: "Zoey Rogers",
    image: "https://i.pravatar.cc/150?img=38",
    review: "One of the most user-friendly investment platforms available.",
  },
  {
    name: "Nathan Reed",
    image: "https://i.pravatar.cc/150?img=39",
    review: "The market intelligence features are outstanding.",
  },
  {
    name: "Hannah Cook",
    image: "https://i.pravatar.cc/150?img=40",
    review: "Everything is organized and easy to access.",
  },
  {
    name: "Aaron Morgan",
    image: "https://i.pravatar.cc/150?img=41",
    review: "The platform delivers a premium experience.",
  },
  {
    name: "Leah Bell",
    image: "https://i.pravatar.cc/150?img=42",
    review: "I've recommended it to several colleagues.",
  },
  {
    name: "Christopher Murphy",
    image: "https://i.pravatar.cc/150?img=43",
    review: "Reliable, informative, and beautifully designed.",
  },
  {
    name: "Natalie Bailey",
    image: "https://i.pravatar.cc/150?img=44",
    review: "A fantastic blend of technology and finance.",
  },
  {
    name: "Jonathan Rivera",
    image: "https://i.pravatar.cc/150?img=45",
    review: "The insights provided are both practical and informative.",
  },
  {
    name: "Stella Cooper",
    image: "https://i.pravatar.cc/150?img=46",
    review: "The best thing about it is how easy it is to get started.",
  },
  {
    name: "Isaac Richardson",
    image: "https://i.pravatar.cc/150?img=47",
    review: "Strong AI capabilities backed by useful market data.",
  },
  {
    name: "Lucy Cox",
    image: "https://i.pravatar.cc/150?img=48",
    review: "A valuable platform for investors of all experience levels.",
  },
  {
    name: "Ryan Howard",
    image: "https://i.pravatar.cc/150?img=49",
    review: "Excellent functionality and impressive market coverage.",
  },
  {
    name: "Aria Ward",
    image: "https://i.pravatar.cc/150?img=50",
    review: "The platform continues to exceed my expectations.",
  },
];

export default function Reviews() {
  const randomReviews = useMemo(() => {
    return [...reviews]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          User Testimonials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {randomReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm">{review.name}</h3>
                  <p className="text-yellow-500 text-xs">★★★★★</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}