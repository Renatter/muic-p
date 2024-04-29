<template>
  <div>
    <div class="flex ml-[105px] bg-[#EEF3F7] rounded-[25px] p-[30px]">
      <div class="font-[500] text-[45px]">
        <h1>
          Сіз керемет ән айтасыз, <br />
          бірақ тректі жазу дағдылары <br />
          мен мүмкіндіктері жоқ па?
        </h1>
        <h1 class="text-[30px] text-red-600">
          дәл қазір және осы жерде <br />
          трекіңізді жазыңыз
        </h1>
        <button @click="openModal()" class="button-50" role="button">
          тегін көріу
        </button>
      </div>
      <img class="w-[500px]" src="../assets/bg.png" alt="" />
    </div>
    <div class="mt-[55px] flex justify-evenly items-center">
      <img
        class="rounded-[15px]"
        src="https://muznavigator.com/local/templates/muznav_v3/img/online-music.png"
        alt=""
      />
      <div class="w-[450px]">
        <h1 class="text-[30px] font-bold text-red-500">СТУДИЯ ДЕГЕНІМІЗ НЕ</h1>
        <div class="text-[20px]">
          Онлайн студия-бұл вокал мен аспаптарды желіде жазуға, жасалған
          тректерді кәсіби жабдықтар мен дағдыларсыз өңдеуге болатын қызмет.
        </div>
      </div>
    </div>

    <div class="mt-[55px] flex justify-evenly items-center">
      <div class="w-[450px]">
        <h1 class="text-[30px] font-bold text-red-500">Студия не үшін қажет</h1>
        <div class="text-[20px]">
          Сіз өзіңіздің битiңізді жазғыңыз келді, бірақ мүмкіндік таппадыңыз ба?
          Қазір бұл қарапайым және бәріне қол жетімді! Ешқайда барудың қажеті
          жоқ: студияны ашыңыз, кез - келген тректі Музалар каталогынан жүктеңіз
          навигатор немесе өзіңіздің-және ән айтыңыз, жүктеңіз, бүкіл әлемге
          көрсетіңіз.
        </div>
      </div>
      <img
        class="rounded-[15px]"
        src="https://muznavigator.com/local/templates/muznav_v3/img/online-mobile.png"
        alt=""
      />
    </div>
    <div class="ml-[75px] flex bg-[#EEF3F7] rounded-[25px] mt-[45px] p-[30px]">
      <img class="w-[500px] rounded-[15px]" src="../assets/bg2.webp" alt="" />
      <div class="ml-[15px]">
        <h1 class="font-[500] text-[45px] text-red-500">
          Студия мүмкіндіктері
        </h1>
        <ol
          class="ps-5 mt-2 space-y-1 list-decimal list-inside w-[600px] text-[20px]"
        >
          <li class="mt-[15px]">
            Сіз 7 тректі жаза аласыз, олардың әрқайсысын кез келген рет өңдеуге
            / қайта жазуға болады.
          </li>
          <li class="mt-[15px]">
            Барлық тректерді бір уақытта ойнатуға болады.
          </li>
          <li class="mt-[15px]">
            Әр тректің өзіндік жеке параметрлері бар: дыбыс деңгейі, панорама,
            эффекттер және т. б.
          </li>
        </ol>
      </div>
    </div>

    <div class="w-[100%] bg-slate-100 mt-[10px] rounded-[20px]">
      <div class="">
        <div class="w-[1000px] h-[100px] ml-[30px]">
          <h1 class="text-[60px]">Бізге пошта арқылы жіберіңіз</h1>
        </div>
        <button class="ml-[60px] button-50" role="button" @click="openModal()">
          тегін көріу
        </button>
      </div>
    </div>
  </div>
  <div class="modal" v-if="modalOpen === true">
    <div
      class="text-[30px] bg-white w-[600px] h-[200px] rounded-[15px] p-[35px]"
    >
      <label
        for="input-group-1"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Сіздің Поштаңыз</label
      >
      <div class="relative mb-6">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path
              d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
            />
            <path
              d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
            />
          </svg>
        </div>
        <input
          v-model="email"
          type="text"
          id="input-group-1"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
        />
      </div>
      <button
        @click="addEmail"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Жіберу
      </button>
      <button
        @click="closeModal"
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Жабу
      </button>
    </div>
  </div>
</template>

<script>
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
export default {
  data() {
    return {
      modalOpen: false,
      email: "",
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    async addEmail() {
      try {
        await addDoc(collection(db, "record"), { email: this.email });
        console.log("Email added successfully!");
      } catch (error) {
        console.error("Error adding email: ", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* CSS */
.button-50 {
  appearance: button;
  background-color: #501acd;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 70px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 70px;
  }
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
