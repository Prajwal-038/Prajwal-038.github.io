// Scrolling signal bus of the toolchain.
const ITEMS = [
  'YOLO26',
  'DETECTRON2',
  'PYTORCH',
  'OPENCV',
  'CVAT',
  'DJANGO REST',
  'APACHE SUPERSET',
  'SQL',
  'POSTGRESQL',
  'TABLEAU',
  'LINUX',
  'GIT',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
