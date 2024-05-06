import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { LuLibrary, LuPlus } from "react-icons/lu";
import TagsNav from "./TagsNav";
import FilterNav from "./FilterNav";
import { items } from "../../Utils/LibraryItems";
import LibraryItem from "./LibraryItem";
import { AnimatePresence } from "framer-motion";

function LeftSidebar() {
  return (
    <>
      <ul className="bg-[#121212] p-4 rounded-lg text-gray-400 font-sans font-semibold gap-y-4 flex flex-col">
        <li className="flex flex-row items-center gap-5 hover:text-white transition duration-500 ease-in-out">
          <GoHome size="1.8em" /> Inicio
        </li>
        <li className="flex flex-row items-center gap-5">
          <IoSearchOutline size="1.8em" />
          Buscar
        </li>
      </ul>
      <section className="flex-1 bg-[#121212] p-4 rounded-lg text-gray-400 font-sans font-semibold gap-y-4 flex flex-col overflow-y-auto">
        <header className="flex flex-row justify-between items-center">
          <button className="flex flex-row items-center gap-1 hover:text-white transition duration-500 ease-in-out">
            <LuLibrary size="1.8em" />
            Tu biblioteca
          </button>
          <button className="rounded-full hover:bg-[#1f1e1e] p-1">
            <LuPlus size="1.2em" />
          </button>
        </header>
        <TagsNav />
        <main
          className="size-full overflow-y-auto max-h-full"
          style={{
            scrollbarColor: "#666666 transparent",
            msOverflowStyle: "none",
          }}
        >
          <FilterNav />
          <AnimatePresence>
            {items.map((item) => (
              <LibraryItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </main>
      </section>
    </>
  );
}

export default LeftSidebar;
