import React from "react";

export default function Paginacion({ currentPage, totalPages, onPageChange }) {
  
 
   
  const visiblePages = 4;

  const start = Math.max(currentPage - 2, 1);
  const end = Math.min(start + visiblePages - 1, totalPages);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center  gap-2 bg-dark p-4 rounded-md mt-6 justify-center">

      {/* PREV */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="mr-2 opacity-70 disabled:opacity-30"
      >
        ◀
      </button>

      {/* Primera página + ... */}
      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-2 rounded-md bg-white border"
          >
            1
          </button>
          {start > 2 && <span>...</span>}
        </>
      )}

      {/* Páginas visibles */}
      <div className="flex gap-2 text-sm md:text-base">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center w-9 md:w-12 h-9 md:h-12 rounded-md transition
              ${
                currentPage === page
                  ? "bg-indigo-500 text-white"
                  : "bg-white border border-gray-200 hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Última página + ... */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span>...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-2 rounded-md bg-white border"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* NEXT */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="ml-2 opacity-70 disabled:opacity-30"
      >
        ▶
      </button>

    </div>
  );
}