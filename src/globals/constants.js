//Scroll to top
export function ScrollToTop(scrollPosition = 0, isSamePage = false) {
  window.scrollTo({
    top: scrollPosition,
    behavior: isSamePage ? "smooth" : "auto",
  });
}

  //iniciar idioma segun sistema
export const systemLanguage = () => {
    const languageSystem =
     navigator.language.split("-")[0] || navigator.userLanguage[0].split("-")[0];
    if (languageSystem === "es" || languageSystem === "ca") {
      return languageSystem;
    }
    return "es";
  };