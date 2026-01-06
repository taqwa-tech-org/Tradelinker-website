export default function Logo() {
  return (
    <div className="flex items-center">
      <svg
        width="70"
        height="50"
        viewBox="0 0 140 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10 H90 C100 10 100 30 90 30 H50 V70 H90 C100 70 100 90 90 90 H20"
          stroke="#6FA8DC"
          strokeWidth="6"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M65 30 H85 C95 30 95 50 85 50 H65"
          stroke="#6FA8DC"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
