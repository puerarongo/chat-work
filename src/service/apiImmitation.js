import picturePath from "./picturePath";
import { getData } from "./localStorageFuncs";
const key = "keyStorage";


const usersCollection = [
    {
    id: 1,
    name: "Milly Cook",
    image: picturePath.pic2,
    text: getData(key, 1, "text") || "You don't have any chat history yet :(",
    time: getData(key, 1, "") || ""
    },
    {
    id: 2,
    name: "Joel Reed",
    image: picturePath.pic1,
    text: getData(key, 2, "text") || "You don't have any chat history yet :(",
    time: getData(key, 2, "") || ""
    },
    {
    id: 3,
    name: "Stephanie Crawford",
    image: picturePath.pic5,
    text: getData(key, 3, "text") || "You don't have any chat history yet :(",
    time: getData(key, 3, "") || ""
    },
    {
    id: 4,
    name: "Rowan Boyle",
    image: picturePath.pic3,
    text: getData(key, 4, "text") || "You don't have any chat history yet :(",
    time: getData(key, 4, "") || ""
    },
    {
    id: 5,
    name: "Anastasia Durham",
    image: picturePath.pic6,
    text: getData(key, 5, "text") || "You don't have any chat history yet :(",
    time: getData(key, 5, "") || ""
    },
    {
    id: 6,
    name: "Cleo Carson",
    image: picturePath.pic4,
    text: getData(key, 6, "text") || "You don't have any chat history yet :(",
    time: getData(key, 6, "") || ""
    },
    {
    id: 7,
    name: "Erman Wilson",
    image: picturePath.pic7,
    text: getData(key, 7, "text") || "You don't have any chat history yet :(",
    time: getData(key, 7, "") || ""
    },
    {
    id: 8,
    name: "Felix Mendez",
    image: picturePath.pic9,
    text: getData(key, 8, "text") || "You don't have any chat history yet :(",
    time: getData(key, 8, "") || ""
    },
    {
    id: 9,
    name: "Evangeline Blake",
    image: picturePath.pic8,
    text: getData(key, 9, "text") || "You don't have any chat history yet :(",
    time: getData(key, 9, "") || ""
    },
    {
    id: 10,
    name: "Matt Miller",
    image: picturePath.pic10,
    text: getData(key, 10, "text") || "You don't have any chat history yet :(",
    time: getData(key, 10, "") || ""
    },
];

export default usersCollection;