import React from "react";

export default function Chatbot() {
  return (
    <div>
      <main id="skip">
        <section className="bg-white">
          <div className=" max-w-7xl mx-auto py-10 sm:py-24 px-4 sm:px-6 lg:px-8">
            <main className="isolate">
              <div className="relative px-6 lg:px-8 py-16 sm:py-8">
                <div className="pb-72">
                  <div className="max-w-3xl w-full m-auto flex justify-between items-center">
                    <div>
                      <h1 className=" text-2xl md:text-3xl font-extrabold text-black">
                        My Chatbots
                      </h1>
                      <p className="text-sm font-normal">(1 chatbots limit)</p>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="py-16">
                      <div className="flex justify-center">
                        <a
                          style={{ backgroundColor: "black" }}
                          className="rounded-md px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                          href="/create-new-chatbot"
                        >
                          New Chatbot
                        </a>
                      </div>
                    </div>
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
