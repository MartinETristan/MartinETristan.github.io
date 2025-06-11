import { useEffect, useState } from "react";
import { FaCode, FaTools, FaDatabase } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNpm,
  SiNodemon,
  SiMysql,
  SiReact,
  SiTypescript,
  SiExpress,
  SiVite,
  SiPython,
  SiPhp,
  SiGithub,
  SiAntdesign,
  SiTailwindcss,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import img_me from "/images/misc/me.png";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation("home");

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const interval = setInterval(() => {
      setIsVisible(false); // Oculta el texto antes de cambiarlo
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true); // Vuelve a mostrar el nuevo texto con transición
      }, 500); // Espera 500ms para la transición
    }, 5000); // Cambio cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const programmingSkills = [
    {
      title: `${t("tecnologies.languajes")}`,
      icon: <FaCode />,
      techs: [SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiPhp],
    },
    {
      title: `${t("tecnologies.backend")}`,
      icon: <FaDatabase />,
      techs: [SiExpress, SiMysql, SiNodemon],
    },
    {
      title: `${t("tecnologies.frontend")}`,
      icon: <FaTools />,
      techs: [SiReact, SiVite, SiNpm, SiGithub, SiAntdesign, SiTailwindcss],
    },
  ];

  const vfx_software = [
    {
      title: "Adobe Premiere Pro",
      color: "pr",
      from: "from-pr",
      to: "to-pr",
    },
    {
      title: "Adobe After Effects",
      color: "ae",
      from: "from-ae",
      to: "to-ae",
    },
    {
      title: "DaVinci Resolve",
      color: "davinci",
      from: "from-davinci",
      to: "to-davinci",
    },
    {
      title: "Cinema 4D",
      color: "c4d",
      from: "from-c4d",
      to: "to-c4d",
    },
    {
      title: "Blender",
      color: "blender",
      from: "from-blender",
      to: "to-blender",
    },
    {
      title: "Adobe Photoshop",
      color: "ps",
      from: "from-ps",
      to: "to-ps",
    },
  ];

  const roles = [`${t("welcome.quote_code")}`, `${t("welcome.quote_vfx")}`];

  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-1000 pb-20">
      <main className="min-h-screen font-sans transition-colors duration-1000 mx-auto ">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-44 overflow-hidden"
          data-aos="fade-up"
        >
          {/* Fondo de degradado en los bordes */}
          <div
            className="absolute inset-0 -z-10 bg-white dark:bg-black before:content-[''] 
              before:absolute before:inset-0 
              before:bg-gradient-to-r before:from-purple-500 before:via-blue-500 before:to-green-500 
              dark:before:bg-gradient-to-r dark:before:from-purple-900 dark:before:via-blue-900 dark:before:to-green-800 
              before:opacity-50 before:bg-[length:300%_300%] before:animate-gradientFlow 
              before:mask-[radial-gradient(circle,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] 
              before:-webkit-mask-[radial-gradient(circle,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] duration-1000"
            style={{
              WebkitMaskImage: `
              linear-gradient(to bottom, transparent 80%, white 100%),
              linear-gradient(to right, white 0%, transparent 0%, transparent 100%, white 100%)
            `,
            }}
          ></div>

          {/* Contenido */}
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:gap-10">
            <div className="text-center md:text-left">
              <h1
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
            bg-[length:300%_300%] animate-gradientFlowFast"
              >
                {t("welcome.title")}
              </h1>
              <div className="h-16 max-w-96">
                <p
                  className={`mt-4 text-xl max-w-xl text-gray-600 dark:text-gray-300 transition-opacity duration-500 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {roles[index]}
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-6 shrink-0">
              <div className="relative w-48 h-24 md:w-72 md:h-30 rotate-3 z-10 translate-x-3 -translate-y-8">
                <img
                  src={img_me}
                  alt="me.png"
                  className="absolute top-0 left-0 w-full h-auto object-cover object-top"
                  style={{ clipPath: "inset(0 0 50% 0)" }}
                />
              </div>
              <div className="w-48 h-48 md:w-72 md:h-72 overflow-hidden bg-green-950 dark:bg-slate-900 rounded-full rotate-3 transition duration-300">
                <img
                  src={img_me}
                  alt="me.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <a
            href={t("welcome.url")}
            target="blank"
            className="mt-8 px-6 py-3 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 rounded-full text-white dark:text-gray-900 text-lg transition duration-300 transform hover:scale-105"
          >
            {t("welcome.watch_button")}
          </a>
        </section>

        <hr className="mb-16" data-aos="fade-up" />
        {/* Programación Section */}
        <section id="programacion" data-aos="fade-up">
          {/* <h2 className="text-3xl font-semibold text-center mb-10">
            Programación
          </h2> */}
          <div className="max-w-5xl mx-auto space-y-12">
            <section className="text-center">
              <h1 className="text-4xl font-bold mb-6">
                {t("tecnologies.title")}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("tecnologies.subtitle")}
              </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {programmingSkills.map(({ title, icon, techs }, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="bg-zinc-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                    {icon} {title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {techs.map((TechIcon, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <TechIcon className="text-lg text-blue-500 dark:text-blue-300" />{" "}
                        {TechIcon.name.replace("Si", "")}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
            <div className="left-1/2 flex items-center justify-center">
              <a
                href="#programacion"
                className="mt-8 px-6 py-3 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 rounded-full text-white dark:text-gray-900 text-lg transition duration-300 transform hover:scale-105"
              >
                <Link to="/about">{t("tecnologies.watch_button")}</Link>
              </a>
            </div>
          </div>
        </section>
        <hr className="mt-16 " data-aos="fade-up" />
        {/* Edición y VFX Section */}
        <section
          className="py-16 bg-gray-50 dark:bg-gray-800"
          id="edicion-vfx"
          data-aos="fade-up"
        >
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-6">{t("vfx.title")}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t("vfx.subtitle")}
            </p>
          </section>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center m-10">
            {vfx_software.map(({ title, color, from, to }) => (
              <div
                key={title}
                className={`bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center`}
                style={{
                  boxShadow: `0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 15px var(--tw-color-${color})`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 transparent`;
                }}
              >
                <span
                  className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${from} ${to}`}
                >
                  {title}
                </span>
              </div>
            ))}
          </div>
          <div className="left-1/2 flex items-center justify-center">
            <a
              href="#programacion"
              className="mt-8 px-6 py-3 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 rounded-full text-white dark:text-gray-900 text-lg transition duration-300 transform hover:scale-105"
            >
              <Link to="/portfolio">{t("vfx.watch_button")}</Link>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
