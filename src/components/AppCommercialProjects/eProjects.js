import ezdun from '../../images/ezdun.jpg'
import ezdunOLD from '../../images/ezdunOLD.jpg'
import vies from '../../images/vies.jpg'
import sms from '../../images/sms.jpg'
import tclub from '../../images/tclub.jpg'
import bushe from '../../images/bushe.jpg'

import vue from '../../svg/vue.svg';
import nuxt from '../../svg/nuxt.svg';
import laravel from '../../svg/laravel.svg';
import webasyst from '../../svg/webasyst.png'

export default [
  {
    title: "Новый сайт грузоперевозок 'Ездун'",
    para: "Разработка нового портала для перевозчиков, спецтехники и для тех кому нужно быстро арендовать транспорт",
    aditionalInfo: 'В данный момент сайт находиться в разработке. Портал создан с использованием Nuxt.js, админ-панель создается с использованием шаблона Vuexy полностью написанной на Vue.js',
    imageSrc: ezdun,
    moreInfoUrl: '',
    visiteSite: 'http://ezdun2.good-fellazz.ru/',
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
    para: "Внедрение нового функционала (транспорт на карте и тд) и поддержка сайта",
    aditionalInfo: 'Cайт больше не поддерживается компанией, было решено создать новый с нуля. Задачи по разработке: внедренния нового функционала на Vue.js',
    imageSrc: ezdunOLD,
    moreInfoUrl: '',
    visiteSite: 'http://ezdun.good-fellazz.ru/',
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
    aditionalInfo: 'Создание сайта и админ-панели на php-фреймворке Laravel + внедренния нового функционала на Vue.js',
    imageSrc: vies,
    moreInfoUrl: 'https://goodfellazz.ru/cases/viessmann',
    visiteSite: 'https://viessmann.good-fellazz.ru/',
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
    aditionalInfo: 'Создание сайта и админ-панели на php-фреймворке Laravel. Сайт участвовал в конкурсе "Рейтинг Рунета" в номинация "Промышленность и оборудование"',
    imageSrc: sms,
    moreInfoUrl: 'https://goodfellazz.ru/cases/hydrocylinders',
    visiteSite: 'https://hydrocylinders.ru/',
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
    aditionalInfo: 'Создание интернет–магазина на современной платформе Webasyst + интеграция с 1С',
    imageSrc: tclub,
    moreInfoUrl: 'https://goodfellazz.ru/cases/tclub',
    visiteSite: 'https://mytclub.ru/',
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
    aditionalInfo: 'Создание интернет–магазина на современной платформе Webasyst + интеграция с 1С',
    imageSrc: bushe,
    moreInfoUrl: 'https://goodfellazz.ru/cases/bushe',
    visiteSite: 'https://kolas.org/',
    technologyStack: [
      {
        name: 'Webasyst',
        icon: webasyst
      },
    ]
  },
]