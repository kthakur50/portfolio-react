// Subtle 3D tilt effect for cards — tracks cursor position and rotates
// the card slightly toward it, plus positions a soft glare via CSS vars.
// Transitions are left to CSS (same easing/timing as the original hover
// animation) so the motion feels the same as before, just with added depth.
const MAX_TILT = 4; // degrees, kept subtle

export const handleTiltMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;
  const py = (e.clientY - rect.top) / rect.height;

  const rx = (0.5 - py) * MAX_TILT;
  const ry = (px - 0.5) * MAX_TILT;

  card.style.setProperty('--rx', `${rx}deg`);
  card.style.setProperty('--ry', `${ry}deg`);
  card.style.setProperty('--mx', `${px * 100}%`);
  card.style.setProperty('--my', `${py * 100}%`);
};

export const handleTiltLeave = (e) => {
  const card = e.currentTarget;
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
};
