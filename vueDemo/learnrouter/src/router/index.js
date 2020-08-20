//配置·路由·相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';

// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

//懒加载写法
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessages = () => import('../components/HomeMessages.vue')
const Profile = () => import('../components/Profile.vue')

//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path: '/',
    //重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component: HomeMessages
      }
    ],
    meta:{
      title:'首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:abc',
    component: User,
    meta:{
      title:'用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'档案'
    }
  }
]

//User.vue里面用到的$router就是下面的router
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history'
})

router.beforeEach((to,from,next) => {
  //从from挑转到to
  document.title = to.matched[0].meta.title
  next()
})

//3.将router对象传到Vue实例中
export default router
