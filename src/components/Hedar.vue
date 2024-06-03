<template>
  <nav class="bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/main-page/catalog">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Music-Logo-Graphics-1-36-580x386.jpg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl text-white font-semibold whitespace-nowrap"
            >YourBeat
          </span>
        </a>
      </router-link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col text-white bg-gray-900 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center font-bold"
        >
          <li>
            <router-link to="/main-page/catalog">
              <a
                href="#"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md: md:p-0 dark:text-white md:text-[#c13592]"
                aria-current="page"
              >
                Каталог</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/sell">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#c13592] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Қалай сатуға болады</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/main-page/buy">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#c13592] md:p-0 dark:text-white md:dark:hover:text-[#c13592] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Біздің ұжым</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/voice">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#c13592] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Вокалды жазу</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#c13592] md:p-0 dark:text-white md:dark:hover:text-[#c13592] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Біз туралы</a
              >
            </router-link>
          </li>
          <router-link to="/login" v-if="!isAdmin">
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Кіру
            </button>
          </router-link>
          <div v-if="isAdmin">
            <button
              @click="logout"
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Шығу
            </button>
            <router-link to="/admin">
              <button
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Админ
              </button>
            </router-link>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  methods: {
    logout() {
      auth.signOut();
      this.isAdmin = false;
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const docRef = doc(db, "users", user.uid);
        const unsubscribeCart = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.isAdmin = docSnap.data().isAdmin;
            console.log(this.isAdmin);
          } else {
            console.log("No such document!");
          }
        });

        // Save the unsubscribe functions to be used when the component is destroyed
        this.unsubscribeCart = unsubscribeCart;
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
