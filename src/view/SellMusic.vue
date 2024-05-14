<template>
  <div class="container">
    <div class="b h-[700px] object-scale-down rounded-[20px] text-[white]">
      <div class="pt-[100px] px-[200px]">
        <h1 class="font-bold text-[35px] text-center pt-[30px]">
          Музыкалық идеяларыңызды жүзеге асырыңыз! Жобаңыз үшін тамаша дыбыс іздеп жүрсіз бе? Бізде сізге қажет нәрсе бар. Дәл қазір біздің биттерімізді тыңдап, таңғажайып нәрсе жасаңыз!
        </h1>
      </div>
    </div>

    <div class="bg-black text-white mt-[30px] rounded-[20px]">
      <h1 class="font-bold text-[35px] text-center py-[30px]">Музыка сатып ал</h1>
      <div class="flex justify-evenly pt-[25px]">
        <div class="w-[500px]">
          <div class="1 bg-[#6900FF] text-white rounded-t-[15px]">
            <p class="text-center text-[35px] p-5 font-bold">Premium</p>
          </div>
          <div class="2 bg-[#0D041F] text-[17px] pb-[30px] rounded-b-[15px]">
            <div class="flex px-[30px] mt-[25px]" v-for="i in data">
              <p class="text-[#6900FF] mr-[15px]">✔</p>
              <p>{{ i }}</p>
            </div>
          </div>
        </div>
        <div class="w-[500px]">
          <div class="1 bg-[#201B21] text-white p-5 rounded-t-[15px]">
            <p class="text-center text-[35px] font-bold">Basic</p>
          </div>
          <div class="2 bg-[#0D0D0D] text-[17px] pb-[30px] rounded-b-[15px]">
            <div class="flex px-[30px] mt-[25px]" v-for="i in data1">
              <p class="text-[#6900FF] mr-[15px]">✔</p>
              <p>{{ i }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-around pt-[30px] pb-[30px]">
        <div
          class="bg-[#6900FF] w-[250px] flex items-center rounded-[10px] p-[15px]"
        >
          <div>
            <h1 class="text-[30px] font-bold">1000+</h1>
            <p class="text-yellow-400 font-bold">Жасалған проекттер</p>
          </div>
          <img class="w-[60px] h-[60px]" src="../assets/money.png" alt="" />
        </div>
        <div
          class="bg-[#6900FF] w-[250px] flex items-center rounded-[10px] p-[15px]"
        >
          <div>
            <h1 class="text-[35px] font-bold">2000+</h1>
            <p class="text-yellow-400 font-bold">Пайдаланушылар</p>
          </div>
          <img class="w-[60px] h-[60px]" src="../assets/user.png" alt="" />
        </div>
        <div
          class="bg-[#6900FF] w-[250px] flex items-center rounded-[10px] p-[15px]"
        >
          <div>
            <h1 class="text-[35px] font-bold">5000+</h1>
            <p class="text-yellow-400 font-bold">Биттер Сатылды</p>
          </div>
          <img class="w-[60px] h-[60px]" src="../assets/bit.png" alt="" />
        </div>
        <div
          class="bg-[#6900FF] w-[250px] flex justify-between items-center rounded-[10px] p-[15px]"
        >
          <div>
            <h1 class="text-[35px] font-bold">1000+</h1>
            <p class="text-yellow-400 font-bold">Музыкалар</p>
          </div>
          <img class="w-[60px] h-[60px]" src="../assets/count.png" alt="" />
        </div>
      </div>
      <h1 class="text-[60px] font-bold text-center py-[30px]">
        Жоғары Ерекшеліктері
      </h1>
      <div class="">
        <div class="bg-[#201B21] h-[20px] w-[100%] rounded-t-[25px]"></div>
        <div class="bg-[#130F14] h-[500px] flex justify-between">
          <div class="w-[450px] p-[30px] mt-[50px]">
            <img src="../assets/h.png" alt="" />
            <p class="text-[#C636AF] font-bold text-[25px]">
              Бірлескен Продюсерлер
            </p>
            <p>
              Музыканы жасауға біздің көзқарасымыз әр клиентке жеке көзқарасқа негізделген. Біз сіздің идеяларыңызды тыңдаймыз, сіздің идеяларыңыздан шабыт аламыз және сіздің тұлғаңыз бен стиліңізді көрсететін ерекше дыбыс жасау үшін сізбен бірлесіп жұмыс жасаймыз.
            </p>
          </div>

          <div class="w-[450px] p-[30px] mt-[50px]">
            <img src="../assets/m.png" alt="" />
            <p class="text-[#C636AF] font-bold text-[25px]">
              Музыкалды студия
            </p>
            <p>
              Біздің студияда біз шығармашылық пен шабыттың ерекше атмосферасын сақтаймыз. Мұнда сіз тек кәсіби музыкалық продюсерлік қызметтерді ғана емес, сонымен қатар шығармашылығыңыз барынша өркендей алатын жайлы кеңістікті таба аласыз.
            </p>
          </div>

          <div class="w-[450px] p-[30px] mt-[50px]">
            <img src="../assets/i.png" alt="" />
            <p class="text-[#C636AF] font-bold text-[25px]">Интеграциялар</p>
            <p>
              Студиямызда біз инновацияны бағалаймыз және дыбыс пен музыка әлемінде үнемі жақсылыққа ұмтыламыз. Біз стандартты тәсілдермен шектелмей, клиенттерімізге ең озық және жоғары сапалы шешімдерді ұсыну үшін үнемі жаңа технологиялар мен әдістерді зерттейміз.
            </p>
          </div>
        </div>
      </div>

      <h1 class="text-[60px] font-bold text-center py-[30px]">Пікірлер</h1>
      <div class="flex justify-evenly pb-[50px]">
        <div class="w-[350px] bg-[#098C8C] p-[30px] h-[350px] rounded-[20px]">
          <img
            src="../assets/default@300x.jpg"
            class="w-[60px] h-[60px] rounded-full"
            alt=""
          />
          <p class="my-[10px]">Killa Music</p>
          <p>
            "YourBeat-ең жақсы 💯. Продюсерлер керемет”
          </p>
        </div>
        <div class="w-[350px] bg-[#4D2386] p-[30px] h-[350px] rounded-[20px]">
          <img
            src="../assets/tx.jpg"
            class="w-[60px] h-[60px] rounded-full"
            alt=""
          />
          <p>TnTXD</p>
          <p class="my-[10px]">
            "Мен YourBeat-Ті 4-5 жылдан бері қолданып келемін. Продюсерлер өте сапалы әуендер жасайды"
          </p>
        </div>
        <div class="w-[350px] bg-[#831D47] p-[30px] h-[350px] rounded-[20px]">
          <img
            src="../assets/1520580300589ad7f31d05dea77c943f@100x.jpg"
            class="w-[60px] h-[60px] rounded-full"
            alt=""
          />
          <p class="my-[10px]">ToneJonez</p>
          <p>
            "Мен YourBeat-ті қолдана бастағанда, мен жылына 5 цифр жасай бастадым.
            YourBeat-ті біраз уақыт пайдаланғаннан кейін, ол мені 6 фигураны
            жасайтын жерге жеткізді.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-[#131313] mt-[30px] rounded-[30px]">
      <h1 class="text-[60px] font-bold text-center py-[30px] text-white">
        Жиі Қойылатын Сұрақтар
      </h1>

      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion"
        :class="{ active: item.active }"
      >
        <div
          class="accordion-header rounded-[15px]"
          @click="toggleAccordion(index)"
        >
          {{ item.title }}
        </div>
        <div class="accordion-body rounded-b-[15px]">{{ item.content }}</div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-20 py-4">
    <div class="flex gap-[50px]">
        <!-- Форма для связи с нами -->
        <div class="w-1/2 p-4 h-[200px] bg-[#6900FF] rounded-3xl">
            <h2 class="text-3xl text-white font-semibold mb-4">Бізбен байланысу</h2>
            <div class="mb-4 text-white text-xl">
                <p>Орал қаласы, Пушкин көшесі, 14</p>
                <p>Телефон: +7 (123) 456-7890</p>
                <p>Email: info@example.com</p>
            </div>
        </div>

        <!-- Форма обратной связи -->
        <div class="w-1/2 p-8 bg-[#6900FF] rounded-3xl">
            <h2 class="text-3xl mt-4 font-semibold mb-4  text-white">Кері байланыс</h2>
            <form action="#" method="POST">
                <div class="mb-4">
                    <label class="block text-lg font-medium mb-2 text-white" for="name">Аты-жөні</label>
                    <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="name" name="name" required>
                </div>
                <div class="mb-4">
                    <label class="block text-lg font-medium mb-2 text-white" for="email">Email</label>
                    <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="email" id="email" name="email" required>
                </div>
                <div class="mb-4">
                    <label class="block text-lg font-medium mb-2 text-white" for="phone">Телефон</label>
                    <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="tel" id="phone" name="phone" required>
                </div>
                <div class="mb-4">
                    <label class="block text-lg font-medium mb-2 text-white" for="message">Хабарлама</label>
                    <textarea class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" id="message" name="message" rows="4" required></textarea>
                </div>
                <button class="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800" type="submit">Жіберу</button>
            </form>
        </div>
    </div>
</div>


</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Студияңыз тек ритм(бит) жасаумен айналысады ма, әлде вокал жазып, толыққанды музыкалық шығармалар жасайсыз ба?",
          content:
            "Иә, біздің студия тек ритм(бит) жасап қана қоймайды, сонымен қатар вокал жазу және толыққанды музыка жасау қызметтерін ұсынады. Шығармашылығыңызды жүзеге асыруға көмектесу үшін дарынды музыканттар мен продюсерлер бар.",
          active: false,
        },
        {
          title: "Студияңызда музыканың қандай жанрларын қолдайсыз?",
          content:
            "Біз хип-хоп, R&B, поп, электронды музыка, рок және т.б. қоса алғанда, жанрлардың кең ауқымына маманданамыз. Біздің команда сіздің қажеттіліктеріңізге сай әртүрлі музыкалық стильдермен жұмыс істеуге дайын.",
          active: false,
        },
        {
          title: "Тәжірибесіз немесе кәсіби жабдықсыз студияңызға келіп жұмыс істей аламын ба?",
          content:
            "Әрине! Біздің студия тәжірибе деңгейіне қарамастан барлығына ашық. Біз сіздің идеяларыңызды музыкаға айналдыруға көмектесу үшін кәсіби жабдық пен тәжірибелі дыбыс инженерлерін ұсынамыз.",
          active: false,
        },
        {
          title:
            "Жұмыс уақытыңыз қандай және алдын ала жазылу қажет пе?",
          content:
            "Біздің студия күн сайын таңғы 8-ден кешкі 22-ге дейін жұмыс істейді. Студия сізге қолайлы уақытта қолжетімді болуы үшін алдын ала кездесуді белгілеуді ұсынамыз, дегенмен біз бос орындарға қарай келушілерді де қабылдаймыз.",
          active: false,
        },
        {
          title:
            "Студияңыз қай жерде орналасқан?",
          content:
            "Орналасқан жеріміз: Орал қаласы, Пушкин көшесі, 14. Біздің орналасқан жеріміз қол жетімді және табу оңай. Көлік байланыстары бойынша қосымша нұсқаулық немесе кеңес қажет болса, бізге хабарласыңыз +77777777777.",
          active: false,
        },
      ],
      data: [
        "Бастапқы файлдарға толық қол жеткізу: Ableton Live, FL Studio, Logic Pro және т.б. сияқты DAW (Digital Audio Workstation) пішіміндегі барлық жоба файлдарын, сондай-ақ барлық аудио үлгілері мен пайдаланылатын құрал параметрлерін қамтиды.",
        "Жоғары сапалы аудио файлдар: қысылған пішімдердің (мысалы, MP3) орнына WAV немесе FLAC файлдары сапасы жоғалтпай беріледі.",
        "Бірегей альбом өнері: Премиум тұтынушылар альбом мұқабасының дизайнының фотошоп файлдарын және әлеуметтік медиа мұқабалары, жұмыс үстелінің тұсқағаздары және т.б. сияқты басқа дизайн элементтерін ала алады.",
        "Эксклюзивті бонустар: тұрақты тыңдаушыларға қолжетімді емес тректің қосымша нұсқаларын (мысалы, акустикалық нұсқа, ремикс) алу мүмкіндігі.",
      ],
      data1: [
        "WAV және MP3 файлдары: Тұтынушылар тректі студияда пайдалану үшін жоғары сапалы WAV пішімінде және портативті құрылғыларда жалпы тыңдау үшін MP3 сатып ала алады.",
        "Тұтынушы жоғары сападағы суретті алады"
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.items.forEach((item, i) => {
        if (index === i) {
          item.active = !item.active;
        } else {
          item.active = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.b {
  background-image: url("https://airbit.com/nuxt/img/landing-pages/sell-beats/cover.jpg");
  width: 100%;
}
.accordion {
  font-size: 25px;
  padding: 15px;
  margin-bottom: 10px;
}
.accordion-header {
  font-weight: bold;
  color: white;
  background-color: #000000;
  padding: 10px;
  cursor: pointer;
}
.accordion-body {
  font-size: 20px;
  color: white;
  background-color: #130f14;
  padding: 10px;
  display: none;
}
.accordion.active .accordion-body {
  display: block;
}
.container {
  margin: 0 auto;
  max-width: 1280px;
}
</style>
