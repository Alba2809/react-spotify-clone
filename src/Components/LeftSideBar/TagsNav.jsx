import { useState } from "react";
import { playlist_tag, album_tag } from "../../Utils/SearchTags";
import { AnimatePresence, motion } from "framer-motion";

function TagsNav() {
  const [tagSelected, setTagSelected] = useState(null);
  const [subTagSelected, setSubTagSelected] = useState(null);

  const changeTag = (tag) => {
    if (tagSelected === tag) {
      setTagSelected(null);
      setSubTagSelected(null);
    } else {
      if (tag === null) setSubTagSelected(null);
      setTagSelected(tag);
    }
  };

  const changeSubTag = (subtag) => {
    if (subTagSelected === subtag) {
      setSubTagSelected(null);
    } else {
      setSubTagSelected(subtag);
    }
  };

  return (
    <div className="flex flex-row gap-3 max-h-[28px]">
      <AnimatePresence mode="popLayout">
        {tagSelected !== null && (
          <motion.button
            className="rounded-full size-[28px] text-sm text-gray-400 transition duration-200 ease-in-out bg-[#222121] hover:bg-[#2a2929] font-sans font"
            onClick={() => changeTag(null)}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            key="close"
            layout
          >
            X
          </motion.button>
        )}
        {(tagSelected === "Playlists" || tagSelected === null) && (
          <motion.button
            className={`rounded-2xl px-2 py-1 text-sm transition duration-200 ease-in-out ${
              tagSelected === "Playlists"
                ? "bg-white text-black"
                : "bg-[#222121] hover:bg-[#2a2929] text-white"
            }`}
            onClick={() => changeTag("Playlists")}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            key="playlists"
            layout
          >
            Playlists
          </motion.button>
        )}
        {(tagSelected === "Álbumes" || tagSelected === null) && (
          <motion.button
            className={`rounded-2xl px-2 py-1 text-sm transition duration-200 ease-in-out ${
              tagSelected === "Álbumes"
                ? "bg-white text-black"
                : "bg-[#222121] hover:bg-[#2a2929] text-white"
            }`}
            onClick={() => changeTag("Álbumes")}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            key="albums"
            layout
          >
            Álbumes
          </motion.button>
        )}
      </AnimatePresence>
      <div
        className="flex-1 flex flex-row gap-3 overflow-x-auto overflow-y-hidden"
        style={{
          scrollbarWidth: "none",
        }}
      >
        {tagSelected === "Playlists" &&
          playlist_tag.subtags.map((tag) => (
            <button
              className={`rounded-2xl text-nowrap px-2 py-1 text-sm transition duration-200 ease-in-out ${
                subTagSelected === tag
                  ? "bg-white text-black"
                  : "bg-[#222121] hover:bg-[#2a2929] text-white"
              }`}
              onClick={() => changeSubTag(tag)}
              key={tag}
            >
              {tag}
            </button>
          ))}
        {tagSelected === "Álbumes" &&
          album_tag.subtags.map((tag) => (
            <button
              className={`rounded-2xl text-nowrap px-2 py-1 text-sm transition duration-200 ease-in-out ${
                subTagSelected === tag
                  ? "bg-white text-black"
                  : "bg-[#222121] hover:bg-[#2a2929] text-white"
              }`}
              onClick={() => changeSubTag(tag)}
              key={tag}
            >
              {tag}
            </button>
          ))}
      </div>
    </div>
  );
}

export default TagsNav;
