<template>
  <div class="mt">
    <h1 class="text-[50px] font-bold h-[70vh]">Музыканы Әділ Етіңіз</h1>
  </div>
  <div class="h-[60vh] flex bg-[#14002E]">
    <div class="flex items-center i">
      <img
        class="rounded-[20px]"
        width="500px"
        height="400px"
        src="https://airbit.com/nuxt/img/landing-pages/about/who-we-are.jpg"
        alt=""
      />
      <div class="text-white ml-[20px]">
        <h1 class="text-[#F236AF] fond-bold text-[30px]">Біз кімбіз</h1>
        <p>
          Airbit-тің жаһандық музыкалық технологиялар платформасы жаңа
          технологияларды енгізу, қауымдастықты дамыту және музыканы
          монетизациялаудың бірегей құралдарын ұсыну арқылы музыка
          өндірушілерінің мүмкіндіктерін кеңейтеді.
          <br class="mt-[20px]" />
          Airbit-тің global beat сату платформасының арқасында музыка
          өндірушілері өз мансаптарын өз бақылауына ала алады. Таланттар мен
          күш-жігер өздері үшін сөйлейтін әділ музыка индустриясына сенетін
          әлемдегі жетекші продюсерлер мен жасаушыларға қосылыңыз.
        </p>
      </div>
    </div>
  </div>
  <div class="h-[60vh] flex bg-[#000000]">
    <div class="flex items-center i">
      <div class="text-white">
        <h1 class="text-[#F236AF] fond-bold text-[30px]">
          Біздің Көзқарасымыз
        </h1>
        <p>
          Біз технологиялық инновациялар дәстүрлі кедергілерді бұзатын,
          біржақтылықты жоятын және музыка жасаушыларға тең мүмкіндіктер
          жасайтын музыка индустриясын елестетеміз. Біз жасаушыларға тиесілі
          музыка индустриясын көріп отырмыз, онда музыка өзі үшін сөйлейді.
        </p>
      </div>
      <img
        class="rounded-[20px] ml-[20px]"
        width="500px"
        height="400px"
        src="https://airbit.com/nuxt/img/landing-pages/about/our-vision.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="h-[60vh] flex bg-[#14002E]">
    <div class="i mb-[80px]">
      <h1 class="text-[white] font-bold text-[60px] pt-[35px] text-center">
        Біздің Құндылықтарымыз
      </h1>
      <div class="flex justify-between gap-[30px] pt-[50px]">
        <div class="w-[400px]">
          <p class="text-[25px] font-bold text-[#F236AA]">Шынайылық</p>
          <p class="text-[white] text-[20px]">
            Біз табысқа жету-бұл сіздің кім екеніңізге адал болу және сіздің
            бірегей құндылықтарыңыз бен болмысыңызды қолдайтын өзіңізге ғана тән
            жолды таңдау деп санаймыз.
          </p>
        </div>
        <div class="w-[400px]">
          <p class="text-[25px] font-bold text-[#F236AA]">Адвокаттық қызмет</p>
          <p class="text-[white]">
            Ауа биті аутсайдерді жақтайды. Біз барлық адамдар үшін ойын
            шарттарын теңестіру үшін теңсіздіктерді тікелей анықтап, оларды
            жоюды жалғастырамыз.
          </p>
        </div>
        <div class="w-[400px]">
          <p class="text-[25px] font-bold text-[#F236AA]">Инновация</p>
          <p class="text-[white]">
            Біз музыка индустриясында жаңа технологиялар мен шешімдердің пионері
            болып табыламыз. Бізді барлық істерімізде барлау мен инновацияны
            ынталандыратын кәсіпкерлік рух жетелейді.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="x h-[70vh] text-center pt-[250px]">
    <h1 class="font-bold text-[70px] text-white">Команда</h1>
    <p class="text-white text-[25px]">
      Әрбір тамаша өнімнің артында тамаша команда тұр
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mt {
  background-image: url("https://airbit.com/nuxt/img/landing-pages/about/cover.jpg");
  background-color: #0b0b0b; /* Темный цвет фона */
  color: #fff; /* Белый цвет текста для контраста */
  display: flex;
  justify-content: center; /* Центрируем контент по горизонтали */
  align-items: center; /* Центрируем контент по вертикали */
  text-align: center; /* Центрируем текст внутри элемента */
}
.i {
  max-width: 1200px;
  margin: 0 auto;
}
.x {
  background-image: url("https://airbit.com/nuxt/img/landing-pages/about/the-team.jpg");
}
</style>
