export default function hide_watermark() {
  const div = document.querySelectorAll("div");

  setTimeout(() => {
    div.forEach((d) => {
      if (d.className.includes("css-")) {
        d.style.display = "none";
      }
    });

    document.querySelectorAll("a").forEach((a) => {
      // @ts-ignore
      if (a.attributes.color) {
        a.style.display = "none";
      }
    });
  }, 5);

  setTimeout(() => {
    div.forEach((d) => {
      if (d.className.includes("css-")) {
        d.style.display = "none";
      }
    });

    document.querySelectorAll("a").forEach((a) => {
      // @ts-ignore
      if (a.attributes.color) {
        a.style.display = "none";
      }
    });
  }, 10);
}
