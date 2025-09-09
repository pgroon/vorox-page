// data/themeMap.js
module.exports = () => {
  const themes = [
    "theme-modern-neutral",
    "theme-amber-contrast",
    "theme-nord-soft",
    "theme-industrial-frost",
    "theme-soft-volt",
    "theme-graphite-ice",
    "theme-warm-concrete",
    "theme-sonic-plum",
    "theme-oxide-red",
    "theme-neo-teal",
    "theme-arc-green",
    "theme-ice-signal"
  ];

  const pages = [
    "index.md",
    "about.md",
    "imprint.md",
    "license.md",
    "soundpacks.md"
  ];

  // Shuffle themes randomly
  for (let i = themes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [themes[i], themes[j]] = [themes[j], themes[i]];
  }

  const map = {};
  pages.forEach((page, idx) => {
    map[page] = themes[idx % themes.length];
  });

  return map;
};
