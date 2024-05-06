import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";

function FilterNav() {
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="mb-2 flex flex-row justify-between items-center gap-3">
      <div className="flex-1 flex flex-row gap-1 relative items-center">
        <button
          className={`rounded-full hover:bg-[#1f1e1e] p-1 z-20 disabled:cursor-text`}
          onClick={() => setShowSearch((prev) => !prev)}
          disabled={showSearch}
        >
          <IoSearchOutline size="1.2em" />
        </button>
        <AnimatePresence>
          {showSearch && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-[#1f1e1e] rounded-sm pr-7 pl-7 z-10"
              ref={searchRef}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ width: "60%", opacity: 0 }}
            >
              <input
                type="text"
                className="text-sm bg-transparent w-full h-full outline-none font-medium placeholder:text-gray-400 placeholder:text-xs"
                placeholder="Buscar en Playlist"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
              />
              {inputValue !== "" && (
                <button
                  className="absolute -top-[6px] -right-[6px] w-10 h-10 bg-transparent text-base cursor-default"
                  onClick={() => setInputValue("")}
                >
                  X
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button className="flex flex-row items-center gap-1 text-sm hover:text-white hover:scale-[1.01] transition duration-30 ease-in-out">
        <p>Recientes</p>
        <MdFormatListBulleted size="1.5em" />
      </button>
    </nav>
  );
}

export default FilterNav;
