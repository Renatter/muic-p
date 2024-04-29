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
        <button class="button-50" role="button">тегін көріу</button>
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

    <div class="w-[100%] h-[600px] bg-slate-100 mt-[30px] rounded-[20px]">
      <h1 class="text-[50px] text-center">Начало работы</h1>
      <div>
        <div class="w-[400px] h-[100px] bg-red-300 rounded-[30px]">1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
