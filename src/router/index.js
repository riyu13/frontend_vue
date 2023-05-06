import { createRouter, createWebHistory } from 'vue-router'
import Yukimaga from '../views/Yukimaga.vue'
import Login from '../views/Login.vue'
import LoginSensei from '../views/LoginSensei.vue'
import LoginUser from '../views/LoginUser.vue'
import Homea from '../views/admin/BerandaAdmin.vue'
import Homeu from '../views/user/BerandaUser.vue'
import Homes from '../views/sensei/BerandaSensei.vue'
import Tabel from '../views/admin/TabelPeserta.vue'
import TabelPeserta from '../views/sensei/menu/TabelPeserta.vue'
import Pembayaran from '../views/admin/Pembayaran.vue'
import Sensei from '../views/admin/TabelSensei.vue'
import MateriN5 from '../views/user/materi/ketiga/materin5.vue'
import Gaarimasu from '../views/user/materi/ketiga/componenside/isi/gaarimasu.vue'
import Gaimasu from '../views/user/materi/ketiga/componenside/isi/gaimasu.vue'
import Materi21 from '../views/user/materi/ketiga/componenside/isi/materi21.vue'
import Materi22 from '../views/user/materi/ketiga/componenside/isi/materi22.vue'
import Materi23 from '../views/user/materi/ketiga/componenside/isi/Materi23.vue'
import Materi31 from '../views/user/materi/ketiga/componenside/isi/Materi31.vue'
import Materi32 from '../views/user/materi/ketiga/componenside/isi/Materi32.vue'
import Materi41 from '../views/user/materi/ketiga/componenside/isi/Materi41.vue'
import Materi51 from '../views/user/materi/ketiga/componenside/isi/Materi51.vue'
import Materi52 from '../views/user/materi/ketiga/componenside/isi/Materi52.vue'
import Materi53 from '../views/user/materi/ketiga/componenside/isi/Materi53.vue'
import Materi54 from '../views/user/materi/ketiga/componenside/isi/materi54.vue'
import Materi55 from '../views/user/materi/ketiga/componenside/isi/materi55.vue'

const routes= [
    {
      path: '/',
      name: 'Yukimaga',
      component: Yukimaga,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }, 
    {
      path: '/loginsensei',
      name: 'LoginSensei',
      component: LoginSensei,
    },
    {
      path: '/loginuser',
      name: 'LoginUser',
      component: LoginUser,
    },
    {
      path: '/homea',
      name: 'Homea',
      component: Homea,
    },
    {
      path: '/homeu',
      name: 'Homeu',
      component: Homeu,
    },
    {
      path: '/homes',
      name: 'Homes',
      component: Homes,
    },
    {
      path: '/tabel',
      name: 'Tabel',
      component: Tabel
    },
    {
      path: '/tabelpeserta',
      name: 'TabelPeserta',
      component: TabelPeserta
    },
    {
      path: '/pembayaran',
      name: 'Pembayaran',
      component: Pembayaran
    },
    {
      path: '/sensei',
      name: 'Sensei',
      component: Sensei
    },
    {
      path: '/materiadmin',
      name: 'Materi Admin',
      component: () => import('../views/admin/HalamanMateri.vue')
    },
    {
      path: '/materin5admin',
      name: 'Materi Admin',
      component: () => import('../views/admin/menu/MateriBelajar3/materin5.vue')
    },
    {
      path: '/tabelhirakata',
      name: 'Hirakata',
      component: () => import('../views/admin/menu/MateriBelajar/tabelhirakata.vue')
    },
    {
      path: '/kanjiadmin',
      name: 'kanjiadmin',
      component: () => import('../views/admin/menu/MateriBelajar/KanjiDasarAdmin.vue')
    },
    {
      path: '/tabelhirakata2',
      name: 'Hirakata2',
      component: () => import('../views/sensei/menu/MateriBelajar/tabelhirakata.vue')
    },
    {
      path: '/kanjiadmin2',
      name: 'kanjiadmin2',
      component: () => import('../views/sensei/menu/MateriBelajar/KanjiDasarAdmin.vue')
    },
    {
      path: '/hiragana',
      name: 'Hiragana',
      component: () => import('../views/user/materi/pertama/Hiragana.vue')
    },
    {
      path: '/katakana',
      name: 'Katakana',
      component: () => import('../views/user/materi/pertama/Katakana.vue')
    },
    {
      path: '/kanji',
      name: 'Kanji',
      component: () => import('../views/user/materi/pertama/KanjiDasar.vue')
    },
    {
      path: '/latihan1',
      name: 'Latihan1',
      component: () => import('../views/user/materi/pertama/Latihan1.vue')
    },
    {
      path: '/katakerjaadmin',
      name: 'katakerjaadmin',
      component: () => import('../views/admin/menu/MateriBelajar2/katakerjaadmin.vue')
    },
    {
      path: '/katabendaadmin',
      name: 'katabendaadmin',
      component: () => import('../views/admin/menu/MateriBelajar2/katabendaadmin.vue')
    },
    {
      path: '/katasifatadmin',
      name: 'katasifatadmin',
      component: () => import('../views/admin/menu/MateriBelajar2/katasifatadmin.vue')
    },
    {
      path: '/katasifat2admin',
      name: 'katasifat2admin',
      component: () => import('../views/admin/menu/MateriBelajar2/katasifat2admin.vue')
    },
    {
      path: '/katakerja',
      name: 'Katakerja',
      component: () => import('../views/user/materi/kedua/KataKerja.vue')
    },
    {
      path: '/katabenda',
      name: 'Katabenda',
      component: () => import('../views/user/materi/kedua/KataBenda.vue')
    },
    {
      path: '/katasifat',
      name: 'Katasifat',
      component: () => import('../views/user/materi/kedua/KataSifat.vue')
    },
    {
      path: '/katakerjaadmin2',
      name: 'katakerjaadmin2',
      component: () => import('../views/sensei/menu/MateriBelajar2/katakerjaadmin.vue')
    },
    {
      path: '/katabendaadmin2',
      name: 'katabendaadmin2',
      component: () => import('../views/sensei/menu/MateriBelajar2/katabendaadmin.vue')
    },
    {
      path: '/katasifatadmin2',
      name: 'katasifatadmin2',
      component: () => import('../views/sensei/menu/MateriBelajar2/katasifatadmin.vue')
    },
    {
      path: '/katasifat2admin2',
      name: 'katasifat2admin2',
      component: () => import('../views/sensei/menu/MateriBelajar2/katasifat2admin.vue')
    },
    {
      path: '/materin5',
      component: MateriN5,
      children: [{
        path: 'gaarimasu',
        component: Gaarimasu,
        },
        {
          path: 'gaimasu',
          component: Gaimasu,
        },
        {
          path: 'materi21',
          component: Materi21,
        },
        {
          path: 'materi22',
          component: Materi22,
        },
        {
          path: 'materi23',
          component: Materi23,
        },
        {
          path: 'materi31',
          component: Materi31,
        },
        {
          path: 'materi32',
          component: Materi32,
        },
        {
          path: 'materi41',
          component: Materi41,
        },
        {
          path: 'materi51',
          component: Materi51,
        },
        {
          path: 'materi52',
          component: Materi52,
        },
        {
          path: 'materi53',
          component: Materi53,
        },
        {
          path: 'materi54',
          component: Materi54,
        },
        {
          path: 'materi55',
          component: Materi55,
        }
    ]
    },   
  ]
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));

//   if(to.name !== 'Login' && !isAuthenticated) next({ name: 'Yukimaga'});
//   if(to.name == 'Login' && isAuthenticated) next({ name: 'Homea'});
//   else next();
// });

export default router
