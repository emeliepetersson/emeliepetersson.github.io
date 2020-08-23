let scroll = window.requestAnimationFrame;

const elementsToShow = document.querySelectorAll(".project-wrapper");

const isElementInViewport = (element) => {
  let rect = element.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

const loop = () => {
  elementsToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    }
  });
  scroll(loop);
};

loop();
