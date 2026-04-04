interface Props {
  title?: string;
  className?: string;
  isLoading?: boolean;
}

export default function LoadMore({ title = "Load More", className = "", isLoading = false }: Props) {
  return (
    <div className={`flex justify-center mt-10 ${className}`}>
      <button
        type="button"
        disabled={isLoading}
        className="btn-primary px-4 py-2 rounded-lg"
      >
        {isLoading ? "Loading..." : title}
      </button>
    </div>
  )
}
