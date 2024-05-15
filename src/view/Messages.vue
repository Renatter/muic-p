<template>
  <div class="container text-white pt-[30px]">
    <h1 class="text-[30px] font-bold">Хабарламалар</h1>
    <div class="flex flex-wrap gap-[15px]">
      <div
        v-for="item in items"
        class="w-[250px] h-[200px] bg-[#9347FF] rounded-[20px] p-[30px] mt-[30px]"
      >
        <p>
          Аты: <span class="text-[black]">{{ item.name }}</span>
        </p>
        <p>
          Номер: <span class="text-[black]">{{ item.phone }}</span>
        </p>
        <p>
          Почта: <span class="text-[black]">{{ item.email }}</span>
        </p>
        <div>Хабарлама:</div>
        <p class="bg-[#C13592] h-[50px] pl-[5px] rounded-[10px] pt-[10px]">
          <span class="text-[white]">{{ item.text }}</span>
        </p>
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
import { db } from "../firebase/firebase";
export default {
  data() {
    return {
      items: [],
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
    const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      this.items.push(doc.data());
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1280px;
}
</style>
