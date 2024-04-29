import {
    defineStore
} from "pinia";
import {
    ref
} from "vue";
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    onSnapshot,
    getDoc,
    arrayUnion,
    updateDoc,
} from "firebase/firestore";
import {
    db,
    auth
} from "./firebase/firebase"; // Предполагается, что у вас есть файл firebase.js с экспортом db и collection


export const useAnimeApi = defineStore("AnimeApi ", () => {

    const tracks = ref([])
    const track = ref([])
    const allAnime = async () => {
        try {
            const tracksCollectionRef = collection(db, "tracks"); // Ссылка на коллекцию "tracks" в Firestore
            const querySnapshot = await getDocs(tracksCollectionRef);

            const tracksData = []; // Массив для хранения данных треков
            querySnapshot.forEach((doc) => {
                // Проходим по каждому документу
                tracksData.push(doc.data()); // Добавляем данные документа в массив
            });
            tracks.value = tracksData;
            track.value = tracksData[0] // Устанавливаем значение хранилища Pinia на полученные треки
            console.log("Tracks retrieved from Firestore successfully");
        } catch (error) {
            console.error("Error retrieving tracks from Firestore: ", error);
        }
    };


    const getAnime = async (search) => {
        try {
            // Clear the existing data in the track array
            track.value.length = 0;

            // Construct the query to Firestore
            const querySnapshot = await getDocs(query(
                collection(db, "tracks"),
                where("name", "==", search)
            ));

            // Process the query results
            const tracksData = [];
            querySnapshot.forEach((doc) => {
                tracksData.push(doc.data());
            });

            // Update the track array with the new data
            track.value.push(...tracksData);

            console.log(track.value);
        } catch (error) {
            console.error("Error retrieving tracks from Firestore: ", error);
        }
    };


    return {
        getAnime,
        tracks,
        track,
        allAnime,

    }
})