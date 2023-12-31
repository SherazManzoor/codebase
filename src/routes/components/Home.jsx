import { React, useState, useEffect } from "react";
import ChatbotFrame from "./ChatbotFrame";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isRTL = i18n.dir() === "rtl";
  return (
    <div>
      <main id="skip">
        <section className="bg-white">
          <div className=" max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
            <main className="isolate">
              <div className="relative px-6 lg:px-8 py-16 sm:py-8">
                <div className=" pb-8 ">
                  <div className="flex space-x-8 items-center justify-center">
                    <div className="text-left w-[38rem]">
                      <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
                        {t("Custom ChatGPT for")}
                        <span className=" text-transparent text-5xl font-30 bg-clip-text bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-violet-700 to-rose-700">
                          {t("your data")}
                        </span>
                      </h1>
                      <p className="mt-8 text-lg text-center leading-8 text-gray-600">
                        {t(
                          " Just connect your data sources and get a ChatGPT-like chatbot for your data. Then add it as a widget to your website or chat with it through the API."
                        )}
                      </p>
                      <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                          style={{
                            backgroundColor: "#6f44fc",
                            direction: isRTL ? "rtl" : "ltr",
                          }}
                          className="rounded-md px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                          href="/create-new-chatbot"
                        >
                          {t("Build Your Chatbot")}
                        </a>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <img
                        alt="product hunt"
                        srcSet="https://backend.chatbase.co/storage/v1/object/public/chatbase/ProductHunt-ss.png?width=384&amp;quality=50 1x, https://backend.chatbase.co/storage/v1/object/public/chatbase/ProductHunt-ss.png?width=640&amp;quality=50 2x"
                        src="https://backend.chatbase.co/storage/v1/object/public/chatbase/ProductHunt-ss.png?width=640&amp;quality=50"
                        width="270"
                        height="500"
                        decoding="async"
                        data-nimg="1"
                        className="border rounded"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="flex justify-end py-4">
                        <div className="p-2 rounded-full bg-black">
                          <svg
                            id="closeIcon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.3"
                            stroke="white"
                            width="13"
                            height="13"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  id="video"
                  style={{ direction: isRTL ? "rtl" : "ltr" }}
                  className="py-16"
                >
                  <h4 className="text-2xl md:text-3xl font-extrabold text-black text-center py-2">
                    {t("Video Demo")}
                  </h4>
                  <p className="text-center pb-4">
                    {t("Creating a chatbot for")}
                    <span className="font-bold">{t("Product Hunt")} </span>
                    {t(
                      "by crawling the website and training the AI on its content.I can then embed the chatbot on the website!"
                    )}
                  </p>
                  <div className="py-8 mx-auto">
                    <video
                      className="rounded"
                      autoPlay=""
                      muted=""
                      loop=""
                      controls=""
                    >
                      <source src="https://backend.chatbase.co/storage/v1/object/public/chatbase/producthunt-demo.mp4" />
                    </video>
                  </div>
                </div> */}
                <div className="mx-auto max-w-4xl">
                  <div
                    id="demo"
                    style={{ direction: isRTL ? "rtl" : "ltr" }}
                    className="py-16"
                  >
                    <h4 className="text-2xl md:text-3xl font-extrabold text-black text-center py-2">
                      {t("Live Demo")}
                    </h4>
                    <p className="text-center pb-4">
                      {t("This chatbot was trained on a document explaining")}
                      <span className="font-bold">{t("Chatbase")}</span>
                    </p>
                    <p className="text-center">
                      {t(
                        "You can embed a widget like this on any page on your website!"
                      )}
                    </p>
                    <div className="my-8 rounded border">
                      <ChatbotFrame />
                    </div>
                  </div>
                </div>
                <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                      <p
                        style={{ direction: isRTL ? "rtl" : "ltr" }}
                        className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                      >
                        {t("Chatbase integrates with your favorite tools")}
                      </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-20 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                      <div className="space-y-8 xl:contents xl:space-y-0">
                        <a
                          href="https://wordpress.org/plugins/chatbase/"
                          target="_blank"
                          rel="noreferrer"
                          className=" h-full flex flex-col justify-center items-center "
                        >
                          <img
                            alt="WordPress logo"
                            src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
                            width="290"
                            height="290"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl ring-gray-900/5 mb-4"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <p
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="font-semibold text-center"
                          >
                            {t("Add an AI chatbot to your WordPress website")}
                            <span>→</span>
                          </p>
                        </a>
                      </div>
                      <div className="space-y-8 xl:contents xl:space-y-0">
                        <a
                          href="https://zapier.com/apps/chatbase/integrations"
                          target="_blank"
                          rel="noreferrer"
                          className=" h-full flex flex-col justify-center items-center "
                        >
                          <img
                            alt="Zapier logo"
                            src="https://1000logos.net/wp-content/uploads/2022/09/Zapier-Logo.png"
                            width="290"
                            height="290"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl ring-gray-900/5 mb-4"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <p
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="font-semibold text-center"
                          >
                            {t("Connect your chatbot to 5000+ apps on Zapier")}
                            <span></span>
                          </p>
                        </a>
                      </div>
                      <div className="space-y-8 xl:contents xl:space-y-0">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className=" h-full flex flex-col justify-center items-center "
                        >
                          <img
                            alt="Slack logo"
                            src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
                            width="290"
                            height="290"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl ring-gray-900/5 mb-4"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <p
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="font-semibold text-center"
                          >
                            {t(
                              "Connect your chatbot to a Slack channel and interact with it there"
                            )}
                          </p>
                        </a>
                      </div>
                      <div className="space-y-8 xl:contents xl:space-y-0">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className=" h-full flex flex-col justify-center items-center "
                        >
                          <img
                            alt="Shopify logo"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1O5kXzANNTHFp14IL1V_xX-05jk468yAZNxr9UrhysnJ7D7uHTHW_c2Irolf0iPytkQ&amp;usqp=CAU"
                            width="290"
                            height="290"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl ring-gray-900/5 mb-4"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <p
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="font-semibold text-center"
                          >
                            {t("Coming soon")}...
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <section
                  id="faqs"
                  aria-labelledby="faq-title"
                  className="relative sm:py-12"
                >
                  <div className="relative">
                    <h4
                      style={{ direction: isRTL ? "rtl" : "ltr" }}
                      className="text-2xl md:text-3xl font-extrabold text-black text-center py-2"
                    >
                      {t("Frequently Asked Questions")}
                    </h4>
                    <h6
                      style={{ direction: isRTL ? "rtl" : "ltr" }}
                      className="text-lg text-center"
                    >
                      {t("If you can &#x27;t find your question, email ")}
                      {/* <a
                        className=" font-semibold"
                        href="mailto:support@chatbase.co"
                      >
                        {t("support@chatbase.co")}
                      </a> */}
                    </h6>
                  </div>
                  <ul
                    style={{ direction: isRTL ? "rtl" : "ltr" }}
                    className="mt-16 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
                  >
                    <li>
                      <ul className="flex flex-col gap-y-8">
                        <li style={{ direction: isRTL ? "rtl" : "ltr" }}>
                          <h3 className="font-display text-lg leading-7 text-slate-900">
                            {t("Q1")}
                          </h3>
                          <p className="mt-4 text-slate-700">
                            <div dir="rtl">{t("A1")}</div>
                          </p>
                        </li>
                        <li>
                          <h3 className="font-display text-lg leading-7 text-slate-900">
                            {t("Q2")}
                          </h3>
                          <p className="mt-4 text-slate-700">
                            <div dir="rtl">{t("A2")}</div>{" "}
                          </p>
                        </li>
                        <li>
                          <h3 className="font-display text-lg leading-7 text-slate-900">
                            {t("Q3")}
                          </h3>
                          <p className="mt-4 text-slate-700">
                            <div dir="rtl">{t("A3")}</div>{" "}
                          </p>
                        </li>
                        <li>
                          <h3 className="font-display text-lg leading-7 text-slate-900">
                            {t("Q4")}
                          </h3>
                          <p className="mt-4 text-slate-700">
                            <div dir="rtl">{t("A4")}</div>
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-col gap-y-8">
                        <li>
                          <h3
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="font-display text-lg leading-7 text-slate-900"
                          >
                            {t("Q7")}
                          </h3>
                          <p
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="mt-4 text-slate-700"
                          >
                            {t("A7")}
                          </p>
                        </li>
                        <li>
                          <h3
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="font-display text-lg leading-7 text-slate-900"
                          >
                            {t("Q6")}
                          </h3>
                          <p
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="mt-4 text-slate-700"
                          >
                            {t("A6")}
                          </p>
                        </li>
                        <li>
                          <h3 className="font-display text-lg leading-7 text-slate-900">
                            <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
                              {t("Q5")}
                            </div>
                          </h3>
                          <p className="mt-4 text-slate-700">
                            <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
                              {t("A5")}
                            </div>
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>
                <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
                  <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
                    <svg
                      viewBox="0 0 1313 771"
                      aria-hidden="true"
                      className="ml-[max(50%,38rem)] w-[82.0625rem]"
                    >
                      <path
                        id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                        fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                        d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
                      ></path>
                      <defs>
                        <linearGradient
                          id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                          x1="1313.17"
                          x2="-88.881"
                          y1=".201"
                          y2="539.417"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#9089FC"></stop>
                          <stop offset="1" stopColor="#FF80B5"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
                    <svg
                      viewBox="0 0 1313 771"
                      aria-hidden="true"
                      className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    >
                      <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc"></use>
                    </svg>
                  </div>
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                      <p
                        style={{ direction: isRTL ? "rtl" : "ltr" }}
                        className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                      >
                        {t("What people say about Chatbase")}
                      </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-4 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                      <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                        <div className="flex justify-end pr-6 pt-6">
                          <a
                            aria-label="Twitter Account"
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/I4NW/status/1631353148903239680"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </a>
                        </div>
                        <blockquote className="p-10 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                          <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                            {t("testimonial1")}
                          </p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6">
                          <img
                            className="h-10 w-10 flex-none rounded-full bg-gray-50"
                            src="https://pbs.twimg.com/profile_images/1257618949665173505/izjTnliK_400x400.jpg"
                            alt=""
                          />
                          <div className="flex-auto">
                            <div className="font-semibold">
                              {t("Abdullah Abdulaziz")}
                            </div>
                            <div className="text-gray-600">
                              {t("Chief Executive Officer")}
                            </div>
                          </div>
                        </figcaption>
                      </figure>

                      {isMobile && (
                        <div className="space-y-8 xl:contents xl:space-y-0">
                          <div className="xl:row-span-2 space-y-8">
                            <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                              <div className="flex justify-end">
                                <a
                                  aria-label="Twitter Account"
                                  target="_blank"
                                  rel="noreferrer"
                                  href="https://twitter.com/I4NW/status/1631353148903239680"
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                              <blockquote className="text-gray-900">
                                <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                                  {t("testimonial1")}
                                </p>
                              </blockquote>
                              <figcaption className="mt-6 flex items-center gap-x-4">
                                <img
                                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                                  src="https://pbs.twimg.com/profile_images/1257618949665173505/izjTnliK_400x400.jpg"
                                  alt=""
                                />
                                <div>
                                  <div className="font-semibold">
                                    {t("Abdullah Abdulaziz")}
                                  </div>
                                  <div className="text-gray-600">
                                    {t("Chief Executive Officer")}
                                  </div>
                                </div>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      )}
                      <div className="space-y-8 xl:contents xl:space-y-0">
                        <div className="xl:row-span-2 space-y-8">
                          <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                            <div className="flex justify-end">
                              <a
                                aria-label="Twitter Account"
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/jacobandreou/status/1632423894832545794"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                            <blockquote className="text-gray-900">
                              <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                                {t("testimonial2")}
                              </p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src="https://pbs.twimg.com/profile_images/1642428370091925505/xknh7v7j_400x400.jpg"
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">
                                  {t("Bandar ☺︎ ☻")}
                                </div>
                                <div className="text-gray-600">
                                  {t("designer")}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="space-y-8 xl:contents xl:space-y-0">
                        <div className="xl:row-start-1  space-y-8">
                          <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                            <div className="flex justify-end">
                              <a
                                aria-label="Twitter Account"
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/OfficialLoganK/status/1632468116990054401"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                            <blockquote className="text-gray-900">
                              <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                                {t("testimonial3")}
                              </p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src="https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg"
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">
                                  {t("Muhammed Al-Harbi")}
                                </div>
                                <div className="text-gray-600">
                                  {t("Customer relations developer")}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="xl:row-span-2 space-y-8">
                          <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                            <blockquote className="text-gray-900">
                              <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                                {t("testimonial4")}
                              </p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src="https://pbs.twimg.com/profile_images/1475104326930649089/OI1bGmxG_400x400.png"
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">
                                  {t("Abdulrahman Mohammed")}
                                </div>
                                <div className="text-gray-600">
                                  {t("Web-site developer")}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
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
