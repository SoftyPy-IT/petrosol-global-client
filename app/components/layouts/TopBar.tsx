export default function TopBar() {
  return (
    <div className="w-full bg-(--primary) text-(--text-light) text-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">

        {/* Left Info */}
        <div className="hidden md:flex gap-6 text-[rgba(255,255,255,0.9)]">
          <span>📧 info@petrosolglobal.com</span>
          <span>📞 +880 1XXX-XXXXXX</span>
        </div>

        {/* Right Info */}
        <div className="font-medium">
          Energy • Infrastructure • Global Projects
        </div>

      </div>
    </div>
  );
}
