export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      
      {/* ICONO (tipo cubo tech) */}
      <svg
        viewBox="0 0 50 50"
        className="w-10 h-10"
        fill="none"
      >
        <path
          d="M25 5 L40 15 L40 35 L25 45 L10 35 L10 15 Z"
          stroke="#4F39F6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M25 5 L25 25 L10 35"
          stroke="#4F39F6"
          strokeWidth="2"
        />
        <path
          d="M25 25 L40 15"
          stroke="#4F39F6"
          strokeWidth="2"
        />
      </svg>

      {/* TEXTO */}
      <h1 className="text-2xl font-semibold tracking-tight">
        <span className="text-gray-900">Delvin</span>
        <span className="text-indigo-600">Dev</span>
      </h1>

    </div>
  );
}