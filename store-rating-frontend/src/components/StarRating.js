export default function StarRating({ value, onChange }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          style={{
            fontSize: "22px",
            cursor: "pointer",
            color: star <= value ? "#facc15" : "#d1d5db",
          }}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
