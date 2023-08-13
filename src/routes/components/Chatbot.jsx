import React from "react";
import { useTranslation } from "react-i18next";
export default function Chatbot() {
  const chatbots = [
    { name: "Chatbot 1" },

    // Add more chatbots here
  ];

  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  return (
    <div>
      <main id="skip">
        <section className="bg-white">
          <div className=" max-w-7xl mx-auto py-10 sm:py-24 px-4 sm:px-6 lg:px-8">
            <main className="isolate">
              <div className="relative px-6 lg:px-8 py-16 sm:py-8">
                <div className="pb-72">
                  <div className="max-w-3xl w-full m-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h1
                          style={{ direction: isRTL ? "rtl" : "ltr" }}
                          className="text-2xl md:text-3xl font-extrabold text-black"
                        >
                          {t("My Chatbots")}
                        </h1>
                        <p
                          style={{ direction: isRTL ? "rtl" : "ltr" }}
                          className="text-sm font-normal"
                        >
                          {t("(1 chatbot limit)")}
                        </p>
                      </div>

                      {chatbots.length !== 0 && ( // Only show the button if chatbots array is not empty
                        <div className="flex justify-center">
                          <a
                            style={{ backgroundColor: "black" }}
                            className="rounded-md px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                            href="/create-new-chatbot"
                          >
                            {t("New Chatbot")}
                          </a>
                        </div>
                      )}
                    </div>
                    {chatbots.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-4">
                        {chatbots.map((chatbot, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center"
                          >
                            <a href="/open-chatbot">
                              <div className="flex flex-col justify-between w-40 border rounded relative overflow-hidden">
                                <img
                                  srcSet="https://backend.chatbase.co/storage/v1/object/public/chatbase/chatbot-placeholder.png?width=256&quality=50 1x, https://backend.chatbase.co/storage/v1/object/public/chatbase/chatbot-placeholder.png?width=640&quality=50 2x"
                                  src="https://backend.chatbase.co/storage/v1/object/public/chatbase/chatbot-placeholder.png?width=640&quality=50"
                                  width="200"
                                  height="200"
                                  className="border-none h-40 w-40 object-cover"
                                  style={{ color: "transparent" }}
                                  alt="Picture"
                                />
                                <div className="px-1 flex justify-center items-center h-14">
                                  <h3 className="text-xs md:text-sm font-semibold text-center overflow-hidden m-auto">
                                    {chatbot.name}
                                  </h3>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-center py-8">
                        <a
                          style={{ backgroundColor: "black" }}
                          className="rounded-md px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                          href="/create-new-chatbot"
                        >
                          New Chatbot
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </main>
    </div>
  );
}
