export const navigateOrScrollTo = (targetPath, currentPath, navigate) => {
  if (targetPath === currentPath) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    navigate(targetPath);
  }
};
