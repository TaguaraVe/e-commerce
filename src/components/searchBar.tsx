import { Search } from "lucide-react";

export default function searchBar() {
  return (
    <div className="hidden items-center gap-2 rounded-md px-2 py-1 shadow-md ring ring-gray-400 sm:flex">
      <Search className="h-4 w-4 text-gray-400" />
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="text-sm outline-0"
      />
    </div>
  );
}
