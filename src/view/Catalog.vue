<template>
  <div
    class="w-[100%] rounded-[15px] ml-[30px] bg-[#c13592] bor flex justify-between mt-10"
  >
    <div class="flex flex-wrap gap-[20px]">
      <div
        class="w-[250px] p-[10px] m-[15px] bg-[#14002e] rounded-[15px]"
        v-for="i in filteredTracks"
        :key="i"
      >
        <router-link :to="{ path: 'mus-page/' + i.name }">
          <div class="image-wrapper">
            <img
              class="rounded-[10px] image w-full mb-5 object-cover h-[200px]"
              :src="i.cover"
              alt=""
            />
          </div>
        </router-link>
        <p class="text-white text-xl">
          {{ i.name }} <br /><span>{{ i.fullPrice }}тг</span>
        </p>
        <router-link :to="{ path: 'mus-page/' + i.name }">
          <button
            type="button"
            class="text-white mt-[15px] bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%]"
          >
            Сатып алу
          </button>
        </router-link>
      </div>
    </div>
    <div class="w-[400px] h-[400px] bg-fuchsia-50 m-[15px] rounded-[30px]">
      <div class="flex">
        <div class="flex items-center mb-4 p-[25px]" @click="sortDescending">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Өсу бойынша</label
          >
        </div>

        <div class="flex items-center mb-4 p-[25px]" @click="sortAscending">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Кему бойынша</label
          >
        </div>
      </div>
      <h1 class="px-[25px] text-[20px] mb-[10px]">Категория</h1>
      <div class="flex flex-wrap text-center">
        <div
          class="items-center mb-4 px-[25px]"
          v-for="category in categories"
          :key="category"
        >
          <input
            :id="'category-radio-' + category"
            type="radio"
            :value="category"
            name="category"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            @change="filterByCategory(category)"
          />
          <label
            :for="'category-radio-' + category"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{{ category }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAnimeApi } from "../tracks";
export default {
  data() {
    return {
      animeStore: useAnimeApi(),
      searchQuery: "",
      tracks: [],
      filteredTracks: [],
      categories: [
        "RAP",
        "ROCK",
        "HIP HOP",
        "FOLK",
        "DANCE",
        "TECHNO",
        "Орысша",
        "Ағылшынша",
        "Қазақша",
      ],
    };
  },
  methods: {
    async searchAnime(q) {
      await this.animeStore.getAnime(q);
    },
    async allAnime() {
      await this.animeStore.allAnime();
    },
    filterByCategory(category) {
      // Фильтрация цветов по выбранной категории
      this.filteredTracks = this.tracks.filter((flower) =>
        flower.genre.includes(category)
      );
    },
    sortAscending() {
      this.filteredTracks.sort((a, b) => a.fullPrice - b.fullPrice);
    },

    sortDescending() {
      this.filteredTracks.sort((a, b) => b.fullPrice - a.fullPrice);
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
.image-wrapper {
  position: relative;
  overflow: hidden;
}

.image {
  transition: filter 0.3s ease;
}

.image:hover {
  cursor: pointer;
  filter: brightness(40%);
}
</style>
