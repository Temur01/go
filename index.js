function givingShadow(options) {
  let images = document.querySelectorAll(".givingShadow");

  if (options.shadow_type === "hard") options.shadow_type = "0px";
  else options.shadow_type = "25px";

  images.forEach((images) => {
    images.style.boxShadow = `20px 20px ${options.shadow_type} 2px rgba(0,0,0,0.12)`;

    if (options.padding) {
      images.style.padding = "2rem";
    }
  });
}
module.exports.givingShadow = givingShadow;
