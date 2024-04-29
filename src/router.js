import {
    createRouter,
    createWebHistory
} from 'vue-router';
import MainPageVue from './view/Main-page.vue';
import Catalog from './view/Catalog.vue';
import Login from './components/Login.vue';
import player from './components/player.vue';
import SellMusic from "./view/SellMusic.vue";
import BuyMusic from "./view/BuyMusic.vue";
import VoiceRecord from "./view/VoiceRecord.vue";

const routes = [{
    path: '/',
    redirect: '/main-page/catalog' // Перенаправляем корень на /main-page/catalog
}, {
    path: '/main-page',
    component: MainPageVue,
    children: [{
            path: 'catalog',
            component: Catalog
        },
        {
            path: 'sell',
            component: SellMusic
        },
        {
            path: 'voice',
            component: VoiceRecord
        },
        {
            path: 'buy',
            component: BuyMusic
        },
        {
            path: 'mus-page/:id',
            component: player
        }
    ],
}, {
    path: '/login',
    component: Login
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;