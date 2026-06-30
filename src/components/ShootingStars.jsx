const stars = [
  { left: '8%',  duration: '3.2s', delay: '0s',    height: 90 },
  { left: '22%', duration: '4.1s', delay: '1.4s',  height: 70 },
  { left: '37%', duration: '3.6s', delay: '2.6s',  height: 110 },
  { left: '54%', duration: '4.6s', delay: '.6s',   height: 80 },
  { left: '68%', duration: '3.4s', delay: '3.2s',  height: 95 },
  { left: '81%', duration: '4.2s', delay: '1.9s',  height: 65 },
  { left: '93%', duration: '3.8s', delay: '2.2s',  height: 100 },
];

const ShootingStars = () => (
  <div className="shooting-stars" aria-hidden="true">
    {stars.map((s, i) => (
      <span
        key={i}
        className="shooting-star"
        style={{
          left: s.left,
          height: `${s.height}px`,
          animationDuration: s.duration,
          animationDelay: s.delay,
        }}
      />
    ))}
  </div>
);

export default ShootingStars;
