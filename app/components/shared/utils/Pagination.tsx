"use client"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {

  const getPages = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        )
      }
    }

    return pages
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-10">

      {/* Page Info */}
      <p className="text-sm text-gray-500">
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </p>

      {/* Controls */}
      <div className="flex items-center gap-2 flex-wrap justify-center">

        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border border-theme text-sm
          hover:bg-primary transition"
        >
          Prev
        </button>

        {/* Pages */}
        {getPages().map((page, index) =>
          typeof page === "string" ? (
            <span key={index} className="px-2 text-gray-400">
              {page}
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[36px] h-9 px-3 rounded-lg text-sm transition
                ${currentPage === page
                  ? "bg-primary text-white shadow-md"
                  : "bg-white border border-theme text-gray-600 hover:border-primary hover:text-primary"
                }
              `}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border border-theme text-sm
          hover:bg-primary transition"
        >
          Next
        </button>

      </div>
    </div>
  )
}
