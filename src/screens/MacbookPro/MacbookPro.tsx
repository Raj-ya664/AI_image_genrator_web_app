import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MacbookPro = (): JSX.Element => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login initiated!");
    setShowLoginForm(false);
  };

  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Pricing", href: "/pricing" },
    { label: "contact us", href: "#" },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Raj Yadav",
      role: "Mern stack Devloper + ML Ops +UI /UX",
    },
    {
      name: "Soumya Pandey",
      role: "Excel Expert + System design",
    },
    {
      name: "Ritik kumar",
      role: "DevOps Engineer + Full stack web devloper",
    },
    {
      name: "Srajan Rai",
      role: "Geme Devloper  + backend dev + GOdot expert",
    },
    {
      name: "Ronak Rai",
      role: "Excel Expert + System design",
    },
  ];

  // Footer API features
  const apiFeatures = [
    "Gemini APIs",
    "text-to- image",
    "text-to-changes",
    "text-to-genrate image",
    "text-to-remove",
  ];

  return (
    <div className="bg-[#313131] flex flex-row justify-center w-full">
      <div className="bg-[#313131] overflow-hidden w-full max-w-[1512px] relative">
        {/* Hero Section */}
        <section className="relative h-[926px]">
          {/* Navigation Bar */}
          <header className="absolute w-full h-[93px] top-0 left-0 bg-[#996356] flex items-center justify-between px-6 z-10">
            <div className="flex-1"></div>
            <nav className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-[45px] bg-[#d9d9d9] rounded-[20px] text-black hover:bg-[#c0c0c0]"
                  onClick={() => item.href !== "#" && navigate(item.href)}
                >
                  <span className="[font-family:'Inder',Helvetica] font-normal text-2xl">
                    {item.label}
                  </span>
                </Button>
              ))}
            </nav>
            <div className="flex-1 flex justify-end">
              <Button 
                className="h-[55px] bg-[#170f0f] rounded-[30px] hover:bg-[#2a1a1a]"
                onClick={() => setShowLoginForm(true)}
              >
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[32px]">
                  Sign Up
                </span>
              </Button>
            </div>
          </header>

          {/* Login Form Popup */}
          {showLoginForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <Card className="w-[400px] p-6 bg-white">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      onClick={() => setShowLoginForm(false)}
                      className="bg-gray-500 hover:bg-gray-600"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#11a4ff] hover:bg-[#0d8ad8]"
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          )}

          {/* Hero Content */}
          <div className="absolute w-full top-[70px] left-2.5 [font-family:'Koulen',Helvetica] font-normal text-white text-9xl tracking-[0] leading-[normal]">
            software engineering
            <br />
            project
          </div>

          <div className="absolute top-[522px] left-2.5 [font-family:'Inria_Serif',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            Project&nbsp;&nbsp;Teacher : Juhi&nbsp;&nbsp;Jain mam
            <br />
            Subject Code :CD-403
          </div>

          {/* Hero Images */}
          <div className="absolute flex gap-[22px] top-[267px] left-[680px]">
            <img
              className="w-[260px] h-[659px] object-cover"
              alt="Cat"
              src="/rectangle-8.svg"
            />
            <img
              className="w-[258px] h-[659px] object-cover"
              alt="Dog"
              src="/rectangle-10.svg"
            />
            <img
              className="w-[251px] h-[659px] object-cover"
              alt="Deer"
              src="/rectangle.png"
            />
          </div>
        </section>

        {/* Get Started Button */}
        <div className="flex justify-center mt-[138px]">
          <Button 
            className="w-[486px] h-[124px] bg-[#11a4ff] rounded-[50px] hover:bg-[#0d8ad8]"
            onClick={() => navigate('/generate')}
          >
            <span className="[font-family:'Inder',Helvetica] font-normal text-white text-5xl">
              Get Started
            </span>
          </Button>
        </div>

        {/* Gallery Section */}
        <section className="mt-[196px] w-full h-[3114px] bg-[#ef8585] relative">
          {/* First Row of Images */}
          <div className="flex justify-between px-[17px] pt-[17px]">
            <img
              className="w-[460px] h-[695px] object-cover"
              alt="Gallery Image 1"
              src="/rectangle-14.png"
            />
            <img
              className="w-[460px] h-[695px] object-cover"
              alt="Gallery Image 2"
              src="/rectangle-15.png"
            />
            <img
              className="w-[460px] h-[695px] object-cover"
              alt="Gallery Image 3"
              src="/rectangle-16.png"
            />
          </div>

          {/* Second Row of Images */}
          <div className="flex justify-center gap-[45px] mt-[70px]">
            <img
              className="w-[465px] h-[736px] object-cover"
              alt="Gallery Image 4"
              src="/rectangle-17.png"
            />
            <img
              className="w-[464px] h-[736px] object-cover"
              alt="Gallery Image 5"
              src="/rectangle-18.png"
            />
          </div>

          {/* Third Row of Images */}
          <div className="flex justify-between px-[17px] mt-[105px]">
            <img
              className="w-[716px] h-[401px] object-cover"
              alt="Gallery Image 6"
              src="/rectangle-19.png"
            />
            <img
              className="w-[716px] h-[401px] object-cover"
              alt="Gallery Image 7"
              src="/rectangle-20.png"
            />
          </div>

          {/* Style Labels */}
          <div className="absolute w-[664px] top-[2076px] left-[37px] [font-family:'Lobster',Helvetica] font-normal text-black text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
            ghibli Art style
          </div>

          <div className="absolute top-[2095px] left-[797px] [font-family:'Lisu_Bosa',Helvetica] font-normal text-black text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
            PIXAR style art
            
          </div>

          <div className="absolute w-[829px] top-[2537px] left-[-243px] rotate-[-90.03deg] [font-family:'Lisu_Bosa',Helvetica] font-bold text-black text-9xl tracking-[0] leading-[normal]">
            minecraft style image
          </div>

          <div className="absolute top-[2296px] left-[247px] [font-family:'Lugrasimo',Helvetica] font-normal text-black text-8xl tracking-[0] leading-[normal]">
            Text to image
          </div>

          <div className="absolute w-[634px] top-[2499px] left-[319px] rotate-[-0.41deg] [font-family:'Luxurious_Script',Helvetica] font-normal text-black text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
            film poster style
          </div>

          <div className="absolute w-[1153px] top-[2777px] left-[376px] [font-family:'Luxurious_Roman',Helvetica] font-normal text-black text-8xl tracking-[0] leading-[normal]">
            prompt to change pose and outfit
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full h-[627px] bg-[#651c1c] px-[62px] py-[55px]">
          <div className="grid grid-cols-2 gap-x-[75px] gap-y-[51px]">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-[#d9d9d9] rounded-[30px] h-[129px] flex items-center"
              >
                <CardContent className="p-0 flex items-center w-full">
                  <div className="w-24 h-[87px] bg-[#312222] rounded-[48px/43.5px] ml-2" />
                  <div className="ml-[30px]">
                    <h3 className="[font-family:'Inria_Serif',Helvetica] font-normal text-black text-4xl">
                      {member.name === "Raj Yadav" ? (
                        <a 
                          href="https://github.com/Raj-ya664" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {member.name}
                        </a>
                      ) : (
                        member.name
                      )}
                    </h3>
                    <p className="[font-family:'Inria_Serif',Helvetica] font-normal text-[#938a8a] text-xl mt-2">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full h-[723px] bg-black px-[98px] pt-[40px]">
          <h2 className="[font-family:'Inria_Serif',Helvetica] font-normal text-white text-8xl text-center mb-[163px]">
            Flux .1.1 + LORA
          </h2>

          <div className="grid grid-cols-3 gap-[100px]">
            {/* API Features Column 1 */}
            <div>
              <div className="[font-family:'Inria_Serif',Helvetica] font-normal text-white text-2xl">
                {apiFeatures.map((feature, index) => (
                  <div key={index}>{feature}</div>
                ))}
              </div>
              <div className="mt-[80px] [font-family:'Inria_Serif',Helvetica] font-normal text-white text-2xl">
                Upload image to change <br />
                outfit <br />
                and many more
              </div>
            </div>

            {/* API Features Column 2 */}
            <div className="[font-family:'Inria_Serif',Helvetica] font-normal text-white text-2xl">
              {apiFeatures.map((feature, index) => (
                <div key={index}>{feature}</div>
              ))}
            </div>

            {/* API Features Column 3 */}
            <div className="[font-family:'Inria_Serif',Helvetica] font-normal text-white text-2xl">
              {apiFeatures.map((feature, index) => (
                <div key={index}>{feature}</div>
              ))}
            </div>
          </div>

          <div className="mt-[60px] [font-family:'Inria_Serif',Helvetica] font-normal text-white text-2xl text-center">
            Contact us : 1800 999 32
            <br />
            Email : ralph@gmail.com
            <br />
            <br />
            address: staten island manhattern NEW YORK (USA)
          </div>
        </footer>
      </div>
    </div>
  );
};
