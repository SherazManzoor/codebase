import React from "react";
import ChatbotFrame from "./components/ChatbotFrame";
import { useState } from "react";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Sources from "./components/Sources";
export default function OpenChatbot() {
  const [selectedLink, setSelectedLink] = useState("Chatbot");

  const handleLinkClick = (event) => {
    event.preventDefault();
    setSelectedLink(event.target.getAttribute("href"));
  };

  return (
    <div>
      <main id="skip">
        <section className="bg-white">
          <div className=" max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div>
              <div className=" pb-12 py-8 ">
                <h1 className=" text-2xl md:text-3xl font-bold text-black text-center mb-5">
                  blockchainguy.net
                </h1>

                <div className="no-scrollbar overflow-auto">
                  <div className=" flex md:justify-center space-x-6 whitespace-nowrap text-sm ">
                    <a
                      href="Chatbot"
                      onClick={handleLinkClick}
                      className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                        selectedLink === "Chatbot"
                          ? "border-violet-500 text-gray-900"
                          : ""
                      }`}
                    >
                      Chatbot
                    </a>
                    <a
                      href="Settings"
                      onClick={handleLinkClick}
                      className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                        selectedLink === "Settings"
                          ? "border-violet-500 text-gray-900"
                          : ""
                      }`}
                    >
                      Settings
                    </a>
                    <a
                      href="Dashboard"
                      onClick={handleLinkClick}
                      className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                        selectedLink === "Dashboard"
                          ? "border-violet-500 text-gray-900"
                          : ""
                      }`}
                    >
                      Dashboard
                    </a>
                    <a
                      href="Sources"
                      onClick={handleLinkClick}
                      className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                        selectedLink === "Sources"
                          ? "border-violet-500 text-gray-900"
                          : ""
                      }`}
                    >
                      Sources
                    </a>
                    <a
                      href="Integrations"
                      onClick={handleLinkClick}
                      className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                        selectedLink === "Integrations"
                          ? "border-violet-500 text-gray-900"
                          : ""
                      }`}
                    >
                    Integrations
                    </a>
                    <a
                      href="Share"
                      onClick={handleLinkClick}
                      className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                        selectedLink === "Share"
                          ? "border-violet-500 text-gray-900"
                          : ""
                      }`}
                    >
                      Share
                    </a>
                    <a
                      href="Delete"
                      onClick={handleLinkClick}
                      className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                        selectedLink === "Delete"
                          ? "border-violet-500 text-gray-900"
                          : ""
                      }`}
                    >
                      Delete
                    </a>
                  </div>
                </div>

                {selectedLink === "Chatbot" && (
                  <div className="max-w-4xl w-full m-auto py-12">
                    <ChatbotFrame />
                  </div>
                )}
                {selectedLink === "Settings" && (
                  <Settings/>
                )}
                 {selectedLink === "Dashboard" && (
                  <Dashboard/>
                )}
                 {selectedLink === "Sources" && (
                  <div className="max-w-4xl w-full m-auto py-12">
                  <Sources/>

                  </div>
                )}
                 {selectedLink === "Integrations" && (
                  <div className="max-w-4xl w-full m-auto py-12">
               

                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
