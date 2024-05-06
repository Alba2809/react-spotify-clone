import { motion } from "framer-motion";

function LibraryItem({ item }) {
  return (
    <motion.article className="flex flex-row items-center gap-2 p-2 rounded-lg hover:bg-[#1f1e1e] transition duration-200 ease-in-out cursor-pointer">
      {
        typeof item.image === "string" ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-[50px] rounded-[4px]"
          />
        ) : (
          <item.image size="2em" />
        )
      }
      <div className="flex-1">
        <h1 className="text-white font-normal">{item.name}</h1>
        <p className="flex flex-row gap-1 text-gray-400 text-sm">
          <span>{item.type}</span>•<span>{item.owner}</span>
        </p>
      </div>
    </motion.article>
  );
}

export default LibraryItem;
