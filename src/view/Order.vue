<template>
  <div class="container">
    <div>
      <h1 class="text-[35px] mb-10 text-white font-bold mt-10">Тапсырыстар</h1>
      <div class="flex gap-[15px] flex-wrap">
        <div
          class="rounded-[15px] bg-[#cbb3ee] w-[270px] h-[100%] p-[20px]"
          v-for="i in item"
        >
          <img :src="i.img" alt="" class="rounded-[35px] mb-[15px]" />
          <p>Аты: {{ i.userName }}</p>
          <p>Email:{{ i.email }}</p>
          <p>Номерi: {{ i.phone }}</p>
          <p>Бағасы:{{ i.price }}</p>
          <p>Бит: {{ i.name }}</p>
          <a :href="i.qr">
            <button
              type="button"
              class="mt-[15px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-[100%]"
            >
              QR
            </button>
          </a>
          <button
            @click="deleteItem(i.email, i.name)"
            type="button"
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-[100%]"
          >
            Жасалды
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  deleteDoc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { storage, db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      item: [],
    };
  },
  methods: {
    async deleteItem(itemEmail, itemName) {
      const querySnapshot = await getDocs(
        query(collection(db, "orders"), where("email", "==", itemEmail))
      );

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        window.location.reload();
      });

      const q = await getDocs(
        query(collection(db, "tracks"), where("name", "==", itemName))
      );
      q.forEach(async (doc) => {
        let num = doc.data().count;
        await updateDoc(doc.ref, {
          count: num - 1,
        });
      });
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "orders"));
    querySnapshot.forEach((doc) => {
      this.item.push(doc.data());
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
}
</style>
