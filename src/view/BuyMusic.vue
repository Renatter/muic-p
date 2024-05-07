<template>
  <div class="container">
    <h1 class="text-center text-[30px] font-bold">Продюсерлер</h1>
    <div class="flex justify-between flex-wrap gap-[20px]">
      <div
        v-for="(producer, index) in producers"
        :key="index"
        class="border-[1px] w-[300px] border-[#F96C4B] p-[10px] rounded-[15px] cursor-pointer hover:bg-[#F96C4B] hover:text-[white] relative"
        @click="toggleInfo(index)"
        :class="{ 'full-width': producer.isExpanded }"
      >
        <div v-show="!producer.isExpanded">
          <img
            :src="producer.image"
            alt=""
            class="rounded-full ml-[30px] w-[200px] h-[200px] object-cover"
          />
          <h1 class="font-bold text-center text-[25px]">{{ producer.name }}</h1>
          <p class="text-center font-bold">{{ producer.position }}</p>
        </div>
        <p class="inf" v-show="producer.isExpanded">
          {{ producer.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producers: [
        {
          name: "Wasim Khamlichi",
          position: "Founder, CEO",
          image:
            "https://airbit.com/nuxt/img/landing-pages/about/staff/wasim1.jpg",
          description:
            "Airbit компаниясының негізін қалаушы және БАС ДИРЕКТОРЫ, әлемдегі 1-ші онлайн beat лицензиялау құралы. Музыканы әділ ету миссиясын басшылыққа ала отырып, Васим тәуелсіз музыканттарға музыканы мансапқа айналдыруға көмектесу үшін Air bit платформасын жасады. Васим Лондондағы SAE-де жоғары сыныпты бітірді, қазіргі Уақытта Лос-Анджелесте тұрады және 7 континенттің 6-сында шытырман оқиғаларға құмар саяхатшы.",
          isExpanded: false,
        },
        {
          name: "Judah Wiedre",
          position: "Chief Operating Officer",
          image:
            "https://airbit.com/nuxt/img/landing-pages/about/staff/judah1.jpg",
          description:
            "Бұрынғы Fender және mashable компаниясының атқарушы директоры, ол кірісті арттыруға көп көңіл бөлді. Ұрыстарды жаргонмен айтпаған Кезде, Яһуда әйелі мен балаларымен қыдырады, серфинг жасайды немесе футбол ойнайды.",
          isExpanded: false,
        },
        {
          name: "Ellis Houslini",
          position: "Community Support Manager",
          image:
            "https://st4.depositphotos.com/5989284/20550/i/450/depositphotos_205505676-stock-photo-portrait-uncertain-young-stylish-stubble.jpg",
          description: "Ақымақ нәрселерді ұнататын ақымақ. Және көгалдандыру.",
          isExpanded: false,
        },
        {
          name: "Sara Laamarti B.",
          position: "Community Support",
          image:
            "https://img.freepik.com/free-photo/portrait-of-young-woman-with-natural-make-up_23-2149084942.jpg",
          description:
            "Бұрынғы маркетолог және қазіргі қоғамдастық жаңа дағдыларды үйренуге құмар кәсіпқойларды қолдайды. Жаңа шытырман оқиғалар мен оқуды жақсы көреді.",
          isExpanded: false,
        },
        {
          name: "Said Ourhou",
          position: "Junior Product Designer",
          image:
            "https://st4.depositphotos.com/1010710/39512/i/450/depositphotos_395122194-stock-photo-arab-businessman-looking-away-white.jpg",
          description:
            "Интернеттегі маркетинг пен дизайн туралы кең білімі бар өршіл және ынталы әзірлеуші. Веб-қосымшалар адамдардың өміріне жағымды әсер етеді және жаяу серуендеу жанға жақсылық әкеледі деп санайды.",
          isExpanded: false,
        },
        {
          name: "Houssain Amrani",
          position: "Technical Lead",
          image:
            "https://img.freepik.com/free-photo/displeased-upset-man-over-beige-wall_176420-6693.jpg",
          description:
            "Техникалық топ Air bit, technology geek, cosmology guru және a human being компанияларын басқарады.",
          isExpanded: false,
        },
        {
          name: "Brent Borovan",
          position: "DevOps Engineer",
          image:
            "https://www.belnovosti.by/sites/default/files/2021-03/man-909078_960_720.jpg",
          description:
            "DevOps-тің барлық мүмкіндіктерін жақсы көретін Brent Airbit инфрақұрылымын автоматтандыруды ұнатады және 1999 жылдан бастап бағдарламалық жасақтама индустриясымен белсенді айналысады. Жұмыс істемеген Кезде Брент велосипедпен жүруді, сноуборд тебуді, шаңғы тебуді, тіпті ашық ауада болуды және әйелі мен отбасымен уақыт өткізуді ұнатады.",
          isExpanded: false,
        },
        {
          name: "Mohammed Assassi",
          position: "Engineer",
          image:
            "https://media.licdn.com/dms/image/D4D03AQEg81Eq2J_1BA/profile-displayphoto-shrink_800_800/0/1680588961017?e=2147483647&v=beta&t=YrD2gvF5CuL_IYE-QUuukh8-P8yJqRUg7fJhqWlE55E",
          description:
            "Уақыттың көп бөлігін бөлшектерді жасауға және жаңа үлгілерді іздеуге жұмсайтын алдыңғы қатарлы әзірлеуші. Кондитерлік өнімдердің үлкен әуесқойы, әлі күнге дейін тамаша француз макаронын іздеуде.",
          isExpanded: false,
        },
        {
          name: "Sergiu Ravliuc",
          position: "Engineer",
          image:
            "https://ss.sport-express.ru/userfiles/press/imagesinsidetext/46/46082/11.jpg",
          description:
            "Javascript Әзірлеушісі, Vue көмегімен қосымшалар құруды ұнатады.js, әсіресе олар әдемі жасалған кезде. Идеалист, кодекс өнер болуы мүмкін және әрқашан жақсартуға мүмкіндік бар деп санайды. Әлеуметтік бағыттағы хакатондарға қатысуды ұнатады.",
          isExpanded: false,
        },
      ],
    };
  },
  methods: {
    toggleInfo(index) {
      this.producers.forEach((producer, i) => {
        if (i !== index) {
          producer.isExpanded = false;
        }
      });
      this.producers[index].isExpanded = !this.producers[index].isExpanded;
    },
  },
};
</script>

<style scoped>
.full-width {
  transition: width 0.3s ease;
}
</style>
