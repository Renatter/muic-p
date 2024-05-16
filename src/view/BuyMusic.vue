<template>
  <div class="container">
    <h1 class="text-center text-[30px] text-white font-bold mt-10 mb-10">
      Біздің ұжым
    </h1>
    <div class="flex justify-between flex-wrap gap-[20px]">
      <div
        v-for="(producer, index) in producers"
        :key="index"
        class="border-[1px] w-[300px] border-[#c13592] p-[10px] rounded-[15px] cursor-pointer hover:bg-[#c13592] hover:text-[white] relative"
        @click="toggleInfo(index)"
        :class="{ 'full-width': producer.isExpanded }"
      >
        <div v-show="!producer.isExpanded">
          <img
            :src="producer.image"
            alt=""
            class="rounded-full ml-[30px] w-[200px] h-[200px] object-cover mb-3"
          />
          <h1 class="font-bold text-center text-white text-[25px]">
            {{ producer.name }}
          </h1>
          <p class="text-center text-[20px] text-white font-bold">
            {{ producer.position }}
          </p>
        </div>
        <p class="inf text-white" v-show="producer.isExpanded">
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
          name: "Артур Айдарханов",
          position: "Менеджер",
          image:
            "https://www.allkpop.com/upload/2021/07/content/161603/1626465825-image.png",
          description:
            "Музыкалық студияда басқару және өндіру ісінен жауапты. Өзінің тараптарын жинау, қоғамдық медианы өзінің дайындығымен алмасу, музыкалық қоғамнан қолдау алу, музыкалық қалыптасу кезінде көмек көрсету.",
          isExpanded: false,
        },
        {
          name: "Алия Сарсенбаева",
          position: "Артист",
          image:
            "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5d7898b578125e00ad8d2380_5d791f659515ee00ae412174/scale_1200",
          description:
            "Музыкалық студияда музыка жасау және исполнительдік істерін атқару. Өзге жағдайларда Алия арт-директор ретінде жұмыс істеді және бизнес дамуына арналған өзінің көмегін ұсынады.",
          isExpanded: false,
        },
        {
          name: "Нурлан Темирбек",
          position: "Дыбыстық инженер",
          image:
            "https://ottoke.io/images/upload_text_photo/b63b29e6700b037653cf8c92aa8f439d_1646742868.jpg",
          description:
            "Музыкалық студияда техникалық қызметтерді басқару. Музыкалық жұмыс істегендерге кеңес беру, техникалық мәселелерде көмек көрсету.",
          isExpanded: false,
        },
        {
          name: "Динара Бекбаева",
          position: "Ұйымдастырушы",
          image:
            "https://ottoke.io/images/upload_text_photo/Screenshot_2021-03-18-08-15-07-82_copy_1080x720_1646922095.jpg",
          description:
            "Музыкалық студияда ұйымдастыру және бағдарламалау ісінен жауапты. Бастапқы жолмен, ол маркетинг және қоғамдық кеңес беру істерінің бірі болып табылады.",
          isExpanded: false,
        },
        {
          name: "Айдар Сапаров",
          position: "Дизайнер",
          image:
            "https://sun9-37.userapi.com/impf/c855628/v855628475/133bb3/PNKVyk5Y8aE.jpg?size=768x512&quality=96&sign=e5a73e76269534193d190c6fec4bca26&type=album",
          description:
            "Музыкалық студияда креативті дизайнер. Интернет-маркетинг және дизайн саласында қасиетті біліммен өнімдерді жасайды.",
          isExpanded: false,
        },
        {
          name: "Марат Аскаров",
          position: "Директор",
          image:
            "https://www.yesasia.ru/wp-content/uploads/2023/02/Namjoohyuk_picture_.png",
          description:
            "Музыкалық студияның директоры. Компанияның техникалық жағдайлары мен мәдени іс-шараларды басқару.",
          isExpanded: false,
        },
        {
          name: "Айгерим Айшова",
          position: "Продюсер",
          image:
            "https://ottoke.io/images/upload_text_photo/563595127_1646918575.jpg",
          description: "Музыкалық студияда продюсерлік ісімен атқарады",
          isExpanded: false,
        },
        {
          name: "Аяжан Каримова",
          position: "Продюсер",
          image:
            "https://media.krasota.ru/filer_public/8b/62/8b62bbe0-a3cc-4ec7-9794-cc3c7b57ca4d/4_res750.jpg",
          description: "Музыкалық студияда продюсерлік ісін атқарады",
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
