import Link from "next/link";
import cn from "classnames";

export default function WritingHighlightCard({ title, slug, gradient }: any) {
  return (
    <Link href={`/writing/${encodeURIComponent(slug)}`}>
      <a
        className={cn(
          "transform hover:scale-[1.01] transition-all",
          "rounded-md w-full md:w-1/3 bg-gradient-to-r p-1",
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full bg-space-light rounded-md p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-white tracking-tight">
              {title}
            </h4>
          </div>
        </div>
      </a>
    </Link>
  );
}
