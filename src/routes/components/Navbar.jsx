import { React, useEffect } from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie"; // Import the js-cookie library
import logoen from "../../images/logo-en.png";
import logoar from "../../images/logo-ar.png";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // document.body.dir = i18n.dir();
  const [activeLanguage, setActiveLanguage] = useState("English");
  const languages = ["English", "عربي"];
  const storedLanguage = Cookies.get("selectedLanguage");
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    Cookies.set("selectedLanguage", language); // Set the correct key for the cookie
    setActiveLanguage(language);

    setDropdownOpen(false); // Close the dropdown after selecting a language
    // window.location.reload();
  };
  useEffect(() => {
    // Retrieve and set the language from localStorage when the component mounts

    if (storedLanguage === "English") {
      i18n.changeLanguage("en");
      setActiveLanguage(storedLanguage);
    } else if (storedLanguage === "عربي") {
      i18n.changeLanguage("ar");
      setActiveLanguage(storedLanguage);
    }
    console.log(activeLanguage);
  }, [activeLanguage]);
  const navigation = [
    { name: t("demo"), href: "/#demo" },
    { name: t("affiliate"), href: "#" },
    { name: t("pricing"), href: "/pricing" },
    { name: t("api"), href: "#" },
    { name: t("guide"), href: "#" },
    { name: t("mychatbots"), href: "/chatbot" },
  ];

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className={`flex items-center justify-between p-4 lg:px-8 ${
            isScrolled ? "shadow-md bg-white" : "bg-transparent" // Add shadow class when scrolled
          }`}
          aria-label="Global"
          style={{
            position: "fixed",
            width: "100%",
          }}
        >
          {" "}
          <div className="flex lg:flex-1">
            <a href="/" className="">
              <span className="sr-only">Your Company</span>
              {activeLanguage === "English" ? (
                <img className="h-10 w-auto" src={logoen} alt="" />
              ) : (
                <img className="h-10 w-auto" src={logoar} alt="" />
              )}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a
                key={item.name}
                onClick={() => {
                  navigate(item.href);
                }}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="relative px-12 inline-block text-left">
              <button
                type="button"
                className="inline-flex justify-center w-100 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="language-menu"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen ? "true" : "false"}
              >
                {activeLanguage}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM6 14a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {dropdownOpen && (
              <div
                className="origin-top-right absolute right-4 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="language-menu"
              >
                <div className="py-1" role="none">
                  {languages.map((language) => (
                    <a
                      key={language}
                      href="#"
                      onClick={() => handleLanguageChange(language)}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                        language === activeLanguage
                          ? "bg-gray-100 text-gray-900"
                          : ""
                      }`}
                      role="menuitem"
                    >
                      {language}
                    </a>
                  ))}
                </div>
              </div>
            )}
            <a
              href="#"
              className="text-sm font-semibold mt-1 leading-6 text-gray-900"
            >
              {t("Account")} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {activeLanguage === "English" ? (
                  <img className="h-10 w-auto" src={logoen} alt="" />
                ) : (
                  <img className="h-10 w-auto" src={logoar} alt="" />
                )}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="relative px-0 inline-block text-left">
                    <button
                      type="button"
                      className="inline-flex justify-center w-100 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="language-menu"
                      onClick={toggleDropdown}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen ? "true" : "false"}
                    >
                      {activeLanguage}
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM6 14a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {dropdownOpen && (
                    <div
                      className="origin-top-right absolute left-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="language-menu"
                    >
                      <div className="py-1" role="none">
                        {languages.map((language) => (
                          <a
                            key={language}
                            href="#"
                            onClick={() => handleLanguageChange(language)}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                              language === activeLanguage
                                ? "bg-gray-100 text-gray-900"
                                : ""
                            }`}
                            role="menuitem"
                          >
                            {language}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {t("Account")}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
