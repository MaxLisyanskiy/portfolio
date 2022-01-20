
import vue from '../../svg/vue.svg';
import nuxt from '../../svg/nuxt.svg';
import laravel from '../../svg/laravel.svg';
import webasyst from '../../svg/webasyst.png'

export default [
  {
    title: "Новый сайт грузоперевозок 'Ездун'",
    para: "Разработка нового портала для перевозчиков, спецтехники и для тех кому нужно быстро арендовать транспорт",
    imageSrc: ezdun,
    technologyStack: [
      {
        name: 'Nuxt.js',
        icon: nuxt
      },
      {
        name: 'Vue',
        icon: vue
      }
    ]
  },
  {
    title: "Старый сайт грузоперевозок 'Ездун'",
    para: "Внедрение нового функционала (транспорт на карте) и поддержка сайта",
    imageSrc: ezdunOLD,
    technologyStack: [
      {
        name: 'Vue',
        icon: vue
      }
    ]
  },
  {
    title: "Портал академии Viessmann Profi",
    para: "Разработка b2b портала и личного кабинета для программы лояльности немецкого бренда Viessmann в России",
    imageSrc: vies,
    technologyStack: [
      {
        name: 'Laravel',
        icon: laravel
      },
      {
        name: 'Vue',
        icon: vue
      }
    ]
  },
  {
    title: "Корпоративный сайт 'Строймашсервис'",
    para: "Разработка нового корпоративного сайта и онлайн-каталога для компании ЗАО 'Строймашсервис' к 30-ти летию компании",
    imageSrc: sms,
    technologyStack: [
      {
        name: 'Laravel',
        icon: laravel
      },
    ]
  },
  {
    title: "Интернет-магазин T-club",
    para: "Разработка интернет-магазина для федеральной сети табачных магазинов T-club",
    imageSrc: tclub,
    technologyStack: [
      {
        name: 'Webasyst',
        icon: webasyst
      },
    ]
  },
  {
    title: "Интернет-магазин Bushe",
    para: "Разработка b2b интернет-магазина ресторанного и гостиничного оборудования Bushe",
    imageSrc: bushe,
    technologyStack: [
      {
        name: 'Webasyst',
        icon: webasyst
      },
    ]
  },
]