import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Pricing() {

    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";

    const [isMonthlyBilling, setIsMonthlyBilling] = useState(true);
    const prices = isMonthlyBilling
    ? ["$19", "$99", "$399"]
    : ["$190", "$990", "$3990"];
    const handleToggle = () => {
      setIsMonthlyBilling(!isMonthlyBilling);
    };
  return (
    <div>
      <main id="skip">
        <section className="bg-white">
          <div className=" max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="text-4xl font-extrabold text-black sm:text-center sm:text-6xl">
                {t("Pricing Plans")}
              </h1>
              <p className="mt-6 text-center">
                {t("Get 2 months for free by subscribing yearly!")}
              </p>
              <div className="relative self-center mt-2 bg-zinc-100 rounded-lg p-0.5 flex sm:mt-4 border border-zinc-200">
              <button
          type="button"
          className={`relative w-1/2 ${
            isMonthlyBilling
              ? "bg-zinc-300 border-zinc-200"
              : "border border-transparent"
          } shadow-sm text-black rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          onClick={handleToggle}
        >
          {t("Monthly billing")}
        </button>
        <button
          type="button"
          className={`relative w-1/2 ${
            isMonthlyBilling
              ? "border border-transparent"
              : "bg-zinc-300 border-zinc-200"
          } text-zinc-600 rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          onClick={handleToggle}
        >
          {t("Yearly billing")}
        </button>
              </div>
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      {t("Free")}
                    </h2>
                    <div className="py-4">
                      <li   style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("30 message credits/month")}
                        </span>
                      </li>
                      <li style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("1 chatbot")}
                        </span>
                      </li>
                      <li style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("400,000 characters/chatbot")}
                        </span>
                      </li>
                      <li style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("Embed on unlimited websites")}
                        </span>
                      </li>
                      <li style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("Upload multiple files")}
                        </span>
                      </li>
                      <li style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("View conversation history")}
                        </span>
                      </li>
                      <li style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("Capture leads")}
                        </span>
                      </li>
                      <li style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span  className="text-sm font-semibold  text-zinc-700">
                          {t("Chatbots get deleted after 7 days of inactivity")}
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">$0</span>
                    </p>
                    <a href="/signin">
                      <button
                        data-variant="flat"
                        className="Button_root__G_l9X Button_disabled__Ksgjy opacity-70 cursor-not-allowed block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-10"
                        disabled
                        type="button"
                      >
                        Signed in
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      Hobby
                    </h2>
                    <div className="py-4">
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          2,000 message credits/month
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          2 chatbots
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          11,000,000 characters/chatbot
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Embed on unlimited websites
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Upload multiple files
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          View conversation history
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Capture leads
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          API access
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Zapier integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Slack integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Wordpress integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Messenger integration (coming soon)
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          WhatsApp integration (coming soon)
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">{prices[0]}</span>
                      <span className="text-base font-medium text-zinc-900">
                        / month
                      </span>
                    </p>
                    <button
                      data-variant="flat"
                      className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-30"
                      disabled=""
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      Standard
                    </h2>
                    <div className="py-4">
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          10,000 message credits/month
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          5 chatbots
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          11,000,000 characters/chatbot
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Embed on unlimited websites
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Upload multiple files
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          View conversation history
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Capture leads
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          API access
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Zapier integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Slack integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Wordpress integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Messenger integration (coming soon)
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          WhatsApp integration (coming soon)
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Option to Choose GPT-4
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">{prices[1]}</span>
                      <span className="text-base font-medium text-zinc-900">
                        / month
                      </span>
                    </p>
                    <button
                      data-variant="flat"
                      className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                      disabled=""
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      Unlimited
                    </h2>
                    <div className="py-4">
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          40,000 message credits/month included (Messages over
                          the limit will use your OpenAI API Key)
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          10 chatbots
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          11,000,000 characters/chatbot
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Embed on unlimited websites
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Upload multiple files
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          View conversation history
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Capture leads
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          API access
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Zapier integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Slack integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Wordpress integration
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Messenger integration (coming soon)
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          WhatsApp integration (coming soon)
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Option to Choose GPT-4
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          Remove &#x27;Powered by ALAMEEN &#x27;
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">{prices[2]}</span>
                      <span className="text-base font-medium text-zinc-900">
                        / month
                      </span>
                    </p>
                    <button
                      data-variant="flat"
                      className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                      disabled=""
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="py-16">
                <h4 className="text-3xl font-extrabold text-black ">Add-ons</h4>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 "
                >
                  <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 min-h-[15rem]">
                    <div className="p-4 flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-2xl leading-6 font-semibold text-black">
                          Extra message credits
                        </h2>
                      </div>
                      <p className=" my-5">
                        <span className=" font-semibold ">
                          $7 per 1000 msg credit s
                        </span>
                        <span className="text-base font-medium text-zinc-900">
                          /month
                        </span>
                      </p>
                      <div className="flex">
                        I want
                        <input
                          type="number"
                          step="1000"
                          min="1000"
                          className="min-w-0 p-1 mx-1 px-1 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                          value="1000"
                        />
                        extra msg credit s every month
                      </div>
                      <p className="my-5 text-lg font-bold">
                        Your Total: $7 / month
                      </p>
                      <div className="">
                        <button
                          data-variant="flat"
                          className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                          disabled=""
                          type="button"
                        >
                          Get Add-on
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 min-h-[15rem]">
                    <div className="p-4 flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-2xl leading-6 font-semibold text-black">
                          Extra chatbots
                        </h2>
                      </div>
                      <p className=" my-5">
                        <span className=" font-semibold ">
                          $7 per 1 chatbot s
                        </span>
                        <span className="text-base font-medium text-zinc-900">
                          /month
                        </span>
                      </p>
                      <div className="flex">
                        I want
                        <input
                          type="number"
                          step="1"
                          min="1"
                          className="min-w-0 p-1 mx-1 px-1 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                          value="1"
                        />
                        extra chatbot
                      </div>
                      <p className="my-5 text-lg font-bold">
                        Your Total: $7 / month
                      </p>
                      <div className="">
                        <button
                          data-variant="flat"
                          className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                          disabled=""
                          type="button"
                        >
                          Get Add-on
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 min-h-[15rem]">
                    <div className="p-4 flex flex-col justify-between h-full">
                      <h2 className="text-2xl leading-6 font-semibold text-black">
                        Remove &#x27;Powered By ALAMEEN &#x27;
                      </h2>
                      <p>
                        Remove the ALAMEEN branding from the iframe and widget
                      </p>
                      <p className=" text-3xl">
                        <span className=" font-semibold ">$39</span>
                        <span className="text-base font-medium text-zinc-900">
                          /month
                        </span>
                      </p>
                      <div className="">
                        <button
                          data-variant="flat"
                          className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                          disabled=""
                          type="button"
                        >
                          Get Add-on
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="py-16">
              <h4 className="text-3xl font-extrabold text-black ">
                Pricing FAQs
              </h4>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
              >
                <li>
                  <ul role="list" className="flex flex-col gap-y-8">
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        Is there a free plan?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        Yes, just by signing up you get 30 message credits and 1
                        chatbot (400k characters). You can use these to test out
                        ALAMEEN and see if it works for you.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        How do message credits work?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        One AI response with gpt-3.5-turbo (the default) costs 1
                        message credit. One AI response with gpt-4 costs 20
                        message credits. You can change which model your chatbot
                        uses in the chatbot settings. The difference is because
                        gpt-4 costs 15x (prompt tokens) and 30x (completion
                        tokens) what gpt-3.5-turbo costs on OpenAI.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        What counts as one chatbot?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        One chatbot means a chatbot that contains specific data
                        and can answer any question about this data. Even if it
                        was created using multiple documents.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        How many users can use my chatbot?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        If your chatbot is private, only you have access to it.
                        If you decide to make it public, anyone with the link
                        will be able to interact with it.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        When are my message credits renewed?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        Your message credits are renewed at the start of every
                        calendar month regardless of when you subscribed. So if
                        you subscribe on the 15th of March, your credits will be
                        renewed on the 1st of April.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="flex flex-col gap-y-8">
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        How do I know how many characters are in my document?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        Once you attach your document(s) for upload, ALAMEEN
                        will show you the character count of all the attached
                        documents.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        Can I upload multiple files to one chatbot?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        Yes, if you have a paid plan you can upload multiple
                        files to one chatbot. Just click ctrl (windows) or cmd
                        (mac) and select as many files as you want.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        How much data can I give one chatbot?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        Free plan: 400K Characters (~5MB) |
                        Hobby/Standard/Unlimited: 11M Characters (~140MB)
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        How does the unlimited plan work?
                      </h3>
                      <p className="mt-4 text-slate-700">
                        You get 40,000 message credits included in the plan when
                        you subscribe. Every message after that will use your
                        OpenAI API key that you can add in your account page. So
                        you get the cheapest possible price per message after
                        you hit the limit.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
