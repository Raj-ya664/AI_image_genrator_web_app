import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "month",
      features: [
        "Limited daily image generations (5 per day)",
        "Basic resolution images (720p)",
        "Watermarked outputs",
        "Access to standard image styles",
        "Community support"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-gray-500 hover:bg-gray-600"
    },
    {
      name: "Basic Plan",
      price: "$9.99",
      period: "month",
      features: [
        "Increased daily image generations (50 per day)",
        "HD resolution images (1080p)",
        "No watermark",
        "Access to additional styles and filters",
        "Email support"
      ],
      buttonText: "Choose Basic",
      buttonColor: "bg-[#11a4ff] hover:bg-[#0d8ad8]",
      popular: true
    },
    {
      name: "Pro Plan",
      price: "$29.99",
      period: "month",
      features: [
        "Unlimited image generations",
        "4K resolution images",
        "Commercial use license",
        "Advanced customization",
        "Priority support"
      ],
      buttonText: "Choose Pro",
      buttonColor: "bg-[#11a4ff] hover:bg-[#0d8ad8]"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#313131]">
      {/* Navigation Bar */}
      <header className="w-full h-[93px] bg-[#996356] flex items-center justify-between px-6">
        <div className="flex-1"></div>
        <nav className="flex items-center gap-6">
          <Button
            variant="outline"
            className="h-[45px] bg-[#d9d9d9] rounded-[20px] text-black hover:bg-[#c0c0c0]"
            onClick={() => navigate('/')}
          >
            <span className="[font-family:'Inder',Helvetica] font-normal text-2xl">
              Home
            </span>
          </Button>
        </nav>
        <div className="flex-1"></div>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-300">Select the perfect plan for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-2 border-[#11a4ff]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#11a4ff] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">{plan.name}</h2>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-lg text-white font-semibold ${plan.buttonColor}`}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 