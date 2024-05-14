<template>
  <div class="container">
    <button
      @click="openModal"
      type="button"
      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Қосу
    </button>

    <router-link to="/order">
      <button
        @click="openModal"
        type="button"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Музыкага тапсырыс
      </button>
    </router-link>
    <div class="flex flex-wrap gap-[25px]">
      <div
        class="w-[200px] p-[10px] m-[15px] bg-[#9347ff] rounded-[15px]"
        v-for="i in tracks"
        :key="i"
      >
        <div class="image-wrapper">
          <img
            class="rounded-[10px] image w-full h-[150px] object-cover"
            :src="i.cover"
            alt=""
          />
        </div>
        <p class="text-white text-[15px]">
          {{ i.name }} <span>{{ i.fullPrice }}тг</span>
        </p>
        <button
          @click="deleteItem(i.artist)"
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 w-[100%] focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Жою
        </button>
      </div>
    </div>
  </div>
  <div class="modal" v-if="modalOpen === true">
    <div
      class="text-[30px] bg-white w-[500px] h-[800px] rounded-[15px] p-[35px]"
    >
      <div class="flex justify-between">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Аты</label
          >
          <input
            v-model="newItem.name"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Аты"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Автор</label
          >
          <input
            v-model="newItem.artist"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Автор"
            required
          />
        </div>
      </div>

      <img
        v-if="!newItem.cover"
        src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
        class="w-[270px] h-[200px] object-fill rounded-[25px] border-[1px] mt-[15px] ml-[105px]"
        alt=""
        srcset=""
      />
      <img
        v-else
        :src="newItem.cover"
        class="w-[270px] h-[200px] object-fill rounded-[25px] border-[1px] mt-[15px] ml-[105px]"
        alt=""
        srcset=""
      />
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input"
        >Сурет</label
      >
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        @change="onFileChange"
      />
      <button
        @click="uploadImage()"
        v-if="file"
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Қосу
      </button>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input"
        >Бит/Музыка</label
      >
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        @change="onFileChangeMusic"
      />
      <button
        @click="uploadMusic()"
        v-if="mus"
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Қосу
      </button>
      <div class="flex justify-between">

        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Әдепкі баға</label
          >
          <input
            v-model="newItem.defPrice"
            type="number"
            min="0"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Аты"
            required
          />
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Wav</label
          >
          <input
            v-model="newItem.soPrice"
            type="number"
            min="0"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Wav"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Премиум</label
          >
          <input
            v-model="newItem.fullPrice"
            type="number"
            min="0"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Wav"
            required
          />
        </div>
      </div>
      <div class="input-container mt-[15px]">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Жанр</label
        >
        <div class="flex flex-wrap gap-[5px]">
          <div class="flex items-center mb-4" v-for="i of genre">
            <input
              @click="toggleCategory(i)"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{ i }}</label
            >
          </div>
        </div>
      </div>
      <button
        @click="save"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Қосу
      </button>
      <button
        @click="modalOpen = false"
        type="button"
        class="text-white bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Kepi
      </button>
    </div>
  </div>
</template>

<script>
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  onSnapshot,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
export default {
  data() {
    return {
      modalOpen: false,
      tracks: [],
      img: "null",
      file: null,
      mus: null,
      genre: [
        "RAP",
        "ROCK",
        "HIP HOP",
        "FOLK",
        "DANCE",
        "TECHNO",
        "RUS",
        "ENG",
        "KZ",
      ],
      imageUrls: [],
      musUrls: [],
      newItem: {
        artist: "",
        name: "",
        cover: "",
        defPrice: 0,
        fullPrice: 0,
        soPrice: 0,
        count: 0,
        genre: [],
        like: 0,
        favorited: false,
        url: "",
        source: "",
      },
    };
  },
  methods: {
    async deleteItem(itemName) {
      const querySnapshot = await getDocs(
        query(collection(db, "tracks"), where("artist", "==", itemName))
      );

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        window.location.reload();
      });
    },
    toggleCategory(category) {
      const index = this.newItem.genre.indexOf(category);
      if (index === -1) {
        this.newItem.genre.push(category);
      } else {
        this.newItem.genre.splice(index, 1);
      }
    },
    onFileChange(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },
    onFileChangeMusic(e) {
      this.mus = e.target.files[0];
      console.log(this.mus);
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    async uploadImage() {
      const storageRef = ref(
        storage,
        `images/${this.newItem.name}/${this.file.name}`
      );
      await uploadBytes(storageRef, this.file);
      const downloadUrl = await getDownloadURL(storageRef);

      this.imageUrls.push(downloadUrl);
      this.newItem.cover = this.imageUrls[0];
      this.file = null;

      console.log(`images/${this.newItem.name}/${this.file.name}`);
    },
    async uploadMusic() {
      const storageRef = ref(
        storage,
        `music/${this.newItem.name}/${this.mus.name}`
      );
      await uploadBytes(storageRef, this.mus);
      const downloadUrl = await getDownloadURL(storageRef);

      this.musUrls.push(downloadUrl);
      this.newItem.source = this.musUrls[0];
      this.mus = null;

      console.log(`music/${this.newItem.name}/${this.mus.name}`);
    },
    async save() {
      const docRef = await addDoc(collection(db, "tracks"), this.newItem);
      this.modalOpen = !this.modalOpen;
      console.log("Document written with ID: ", docRef.id);
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "tracks"));
    querySnapshot.forEach((doc) => {
      this.tracks.push(doc.data());
    });
    this.filteredTracks = this.tracks;
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
