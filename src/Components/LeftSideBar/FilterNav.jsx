import { IoSearchOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";

function FilterNav() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <button className="rounded-full hover:bg-[#1f1e1e] p-1">
        <IoSearchOutline size="1.2em" />
      </button>
      <button className="flex flex-row items-center gap-1 text-sm hover:text-white hover:scale-[1.01] transition duration-30 ease-in-out">
        <p>Recientes</p>
        <MdFormatListBulleted size="1.5em" />
      </button>
    </nav>
  );
}

export default FilterNav;
