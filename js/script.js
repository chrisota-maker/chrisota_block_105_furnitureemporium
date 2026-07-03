function strobeRainbow(selector, speed = 18) {
  const els = document.querySelectorAll(selector);
  let hue = 0;

  setInterval(() => {
    hue = (hue + 10) % 360;
    els.forEach(el => el.style.color = `hsl(${hue}, 100%, 50%)`);
  }, speed);
}

strobeRainbow('.rainbowfont');