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
import About from "./view/About.vue";
import Admin from "./view/Admin.vue";
import Order from "./view/Order.vue";
import Messages from "./view/Messages.vue";
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
    },
    {
        path: '/admin',
        component: Admin
    }, {
        path: '/order',
        component: Order
    }, {
        path: '/voice',
        component: VoiceRecord
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/sell',
        component: SellMusic
    },
    {
        path: '/msg',
        component: Messages
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;