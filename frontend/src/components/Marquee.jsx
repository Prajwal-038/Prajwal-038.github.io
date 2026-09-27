// Torn-ticker strip of the tools actually touched weekly.
const ITEMS = [
  'YOLO26', 'Detectron2', 'PyTorch', 'OpenCV', 'CVAT', 'Apache Superset',
  'SQL', 'Git', 'Django', 'Tableau', 'Roboflow', 'Linux',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-inner">
        {row.map((t, i) => (
          <span key={i}>✳ {t}</span>
        ))}
      </div>
    </div>
  );
}
