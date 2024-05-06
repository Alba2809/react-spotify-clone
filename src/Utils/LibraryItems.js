import { CiFolderOn } from "react-icons/ci"
import AmericanTeen from "../assets/images/american-teen.webp"
import LikedSongs from "../assets/images/liked-songs.png"

export const types = [
    "Playlist", "Álbum", "Carpeta"
]

export const items = [
    {
        id: 1,
        name: 'Tus me gusta',
        image: LikedSongs,
        owner: 'Tú',
        type: "Playlist",
    },
    {
        id: 2,
        name: 'AmericanTeen',
        image: AmericanTeen,
        owner: 'Khalid',
        type: "Álbum",
    },
    {
        id: 3,
        name: 'Nueva carpeta',
        image: CiFolderOn,
        owner: 'Tú',
        type: "Carpeta",
    }
]