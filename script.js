"use strict";

const iconsWrapper = document.querySelector(".icons");
const icons = document.querySelectorAll(".icon");
const back = document.querySelector(".back");
const about = document.querySelector("#about");
const education = document.querySelector("#education");
const contact = document.querySelector("#contact");
const contents = document.querySelectorAll(".content");

const showMore = event => {
  const target = event.currentTarget;

  if (target.classList.contains("avatar")) {
    about.classList.add("show");
  } else if (target.classList.contains("education")) {
    education.classList.add("show");
  } else if (target.classList.contains("contact")) {
    contact.classList.add("show");
  }

  back.classList.add("show");
  iconsWrapper.classList.add("hide");
};

const goBack = event => {
  contents.forEach(content => {
    content.classList.remove("show");
  });

  event.currentTarget.classList.remove("show");
  iconsWrapper.classList.remove("hide");
  iconsHeading.classList.remove("hide");
};

icons.forEach(icon => {
  icon.addEventListener("click", showMore);
});

back.addEventListener("click", goBack);
