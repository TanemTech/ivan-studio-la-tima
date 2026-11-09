(function(global){
  'use strict';
  const t=(ru='',en='',hy='',uz='',tg='')=>({ru,en,hy,uz,tg});

  // Approved TANEM universal copy; unchanged for this client.
  const heroDescription=t(
    'Ваша красота. Ваша уверенность.',
    'Your beauty. Your confidence.',
    'Ձեր գեղեցկությունը։ Ձեր վստահությունը։'
  );
  const about=t(
    'В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.',
    'Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.',
    'Մեր աշխատանքի հիմքում մասնագիտական մոտեցումն է, ուշադրությունը մանրուքներին և հարգանքը յուրաքանչյուր հյուրի անհատականության նկատմամբ։ Մենք ստեղծում ենք հարմարավետ միջավայր, որտեղ որակն ու հոգատարությունը մնում են գլխավոր առաջնահերթությունները։'
  );

  // Only real images supplied in the client repository are used.
  const photo=(number,ru,en)=>({
    src:'gallery-'+String(number).padStart(2,'0')+'.webp',
    alt:t(ru,en)
  });
  const photos=(numbers,ru,en)=>numbers.map(number=>photo(number,ru,en));
  const manicureNumbers=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,21,22,23,24,29,31,32,33,34,35,36,37,40
  ];
  const interiorNumbers=[16,20,25,26,27,28,30,38];
  const reviewsUrl='https://yandex.ru/maps/org/studio_la_tima/215451736690/reviews/';
  const review=(id,authorRu,authorEn,textRu,textEn)=>({
    id,author:t(authorRu,authorEn),text:t(textRu,textEn),
    rating:5,source:t('Яндекс Карты','Yandex Maps'),url:reviewsUrl
  });

  const data={
    schemaVersion:1,
    mode:'production',
    country:'RU',
    locales:['ru','en'],
    defaultLocale:'ru',
    salon:{
      name:t('Studio La Tima','Studio La Tima'),
      kind:t('Салон красоты','Beauty salon'),
      city:t('г. Балашиха','Balashikha'),
      address:t('мкр. Керамик, ул. Свободы, 8, корп. 1','Keramik, 8 Svobody St, Bldg 1'),
      fullAddress:t(
        'Московская область, Балашиха, микрорайон Керамик, улица Свободы, 8, корп. 1, 143983',
        '8 Svobody Street, Building 1, Keramik Microdistrict, Balashikha, Moscow Oblast, 143983, Russia'
      ),
      heroDescription,about
    },
    schedule:{
      timezone:'Europe/Moscow',
      periods:[{days:[1,2,3,4,5,6,7],open:'10:00',close:'22:00'}],
      fallback:t('Ежедневно с 10:00 до 22:00','Daily, 10:00 AM–10:00 PM')
    },
    contacts:{
      phone:'+7 (925) 527-74-12',
      phoneLabel:t('Позвонить','Call'),
      messengerUrl:'',
      messengerLabel:t('Написать','Message'),
      messengerHandle:'',
      mapUrl:'https://yandex.ru/maps/org/studio_la_tima/215451736690/',
      mapEmbedUrl:'https://yandex.ru/map-widget/v1/?oid=215451736690',
      reviewsUrl,
      booking:[{
        type:'online',
        label:t('Онлайн-запись','Book online'),
        url:'https://dikidi.net/1892968'
      }]
    },
    rating:{value:5,count:45},
    media:{
      logo:'logo.png',
      hero:[{src:'hero.webp',alt:t('Палитра лаков в Studio La Tima','Nail polish display at Studio La Tima')}],
      about:'profile.webp',
      // Exactly seven tiles on both desktop and mobile. The full gallery below
      // contains all 40 actually uploaded gallery photographs.
      portfolio:[
        photo(1,'Бордовый маникюр','Burgundy manicure'),
        photo(3,'Розовый маникюр','Pink manicure'),
        photo(7,'Зелёный дизайн ногтей','Green nail art'),
        photo(23,'Яркий цветной маникюр','Colourful manicure'),
        photo(29,'Сиреневый маникюр','Lilac manicure'),
        photo(39,'Оформление бровей','Brow styling'),
        photo(26,'Интерьер Studio La Tima','Studio La Tima interior')
      ],
      gallery:{
        'Салон':photos(Array.from({length:40},(_,i)=>i+1),'Работы и интерьер Studio La Tima','Studio La Tima work and interior'),
        'Маникюр':photos(manicureNumbers,'Маникюр Studio La Tima','Manicure by Studio La Tima'),
        'Педикюр':photos([18],'Педикюр Studio La Tima','Pedicure by Studio La Tima'),
        'Брови':photos([39],'Оформление бровей в Studio La Tima','Brow styling at Studio La Tima'),
        'Интерьер':photos(interiorNumbers,'Интерьер Studio La Tima','Studio La Tima interior')
      },
      desktopGalleryLimits:{}
    },
    categoryLabels:{
      'Маникюр':t('Маникюр','Manicure'),
      'Педикюр':t('Педикюр','Pedicure'),
      'Брови':t('Брови','Brows')
    },
    categoryOrder:['Маникюр','Педикюр','Брови'],
    services:[
      {
        id:'manicure',category:'Маникюр',
        title:t('Маникюр','Manicure'),price:'900 ₽',duration:'',
        description:t('Классический, аппаратный или комбинированный маникюр.','Classic, e-file or combined manicure.'),
        variants:[]
      },
      {
        id:'pedicure',category:'Педикюр',
        title:t('Педикюр','Pedicure'),price:'2500 ₽',duration:'',
        description:t('Педикюр с покрытием.','Pedicure with nail polish.'),
        variants:[]
      },
      {
        id:'brow-lamination',category:'Брови',
        title:t('Ламинирование бровей','Brow lamination'),price:'2000 ₽',duration:'',
        description:t('Коррекция, окрашивание, ламинирование бровей.','Brow shaping, tinting and lamination.'),
        variants:[]
      },
      {
        id:'nail-extensions',category:'Маникюр',
        title:t('Наращивание ногтей','Nail extensions'),price:'4000 ₽',duration:'',
        description:t(),variants:[]
      },
      {
        id:'brow-tinting',category:'Брови',
        title:t('Окрашивание бровей','Brow tinting'),price:'500 ₽',duration:'',
        description:t('Коррекция и окрашивание бровей.','Brow shaping and tinting.'),
        variants:[]
      }
    ],
    // No confirmed employee profiles were supplied; the standard neutral
    // master cards remain instead of inventing biographies or headshots.
    team:[],
    reviews:[
      review('inna-vereschagina','Inna Vereschagina','Inna Vereschagina',
        'Уже не первый год делаю ноготочки у Анны. Это восторг. Быстро и при этом качество на высоте, все пожелания учитывает. Всегда приятное общение и сериальчики. Очень рекомендую вам обрести своего мастера в лице Анечки🥰🎉',
        'I have been getting my nails done by Anna for years. It is wonderful: quick work, excellent quality, and every wish is considered. The conversations are always lovely, too. I highly recommend Anna!'),
      review('tatiana-a','Tatiana A.','Tatiana A.',
        'Лучший мастер, очень рекомендую Анну как специалиста! Делаю у нее маникюр и педикюр уже 2 года. Все качественно, аккуратно. Приятная обстановка и еще более приятное общение. Мастер сразу располагает к себе. Вежливая, быстро отвечает, можно выбрать удобное время.',
        'The best specialist! I highly recommend Anna. I have been coming to her for manicures and pedicures for two years. Everything is done neatly and to a high standard. The atmosphere is pleasant and the conversation even better. She is polite, responds quickly, and makes scheduling easy.'),
      review('sofya-orlova','Софья Орлова','Sofya Orlova',
        'маникюр делаю довольно давно, остановилась на этом мастере, очень нравится. обслуживание замечательное, на месте очень стерильно, маникюр и педикюр сделан очень качественно, всем рекомендую',
        'I have been getting manicures for a long time and chose this specialist. I am very happy. The service is wonderful, everything is very clean, and both manicure and pedicure are done to a high standard. I recommend it to everyone.'),
      review('reyna-o','Reyna O.','Reyna O.',
        'Делаю ногти у Анечки давно, профессионал с огромным опытом и большим талантом. Очень круто делает форму, наращивает, умеет все, всегда посоветует, если фантазии не хватает))) Делает очень круто, всегда отличный результат👍🏼',
        'I have been getting my nails done by Anna for a long time. She is an experienced and talented professional. Her shaping and extensions are excellent, and she always gives advice when you need inspiration. The result is always great.'),
      review('anastasia-dot','Анастасия .','Anastasia',
        'Самая лучшая студия , в которой я бывала . Пользуюсь всем комплексом услуг - брови , маникюр и педикюр. Девочки - мастера своего дела. Всегда остаюсь довольной. Если вы ищите качественную услугу, то однозначно рекомендую❤️❤️❤️',
        'The best studio I have visited. I come for brows, manicures and pedicures. The specialists know their craft and I am always satisfied. If you are looking for quality service, I definitely recommend this place.'),
      review('ecaterina','Еcat’erina','Ecaterina',
        'Я очень довольна, работой Анны. Ношу длинные ногти, не все мастера справлялись с моими запросами. Так как я работаю грумером , мои ручки постоянно в воде и механические нагрузки ежедневны, НО тем не менее хожу, ношу и радуюсь больше месяца. Рекомендую однозначно!!!',
        'I am very happy with Anna’s work. I wear long nails, and not every specialist could meet my needs. I work as a groomer, so my hands are constantly in water and under daily strain, but my nails still last more than a month. I definitely recommend her!'),
      review('irina-gushan','Ирина Гушан','Irina Gushan',
        'Салон классный, приятная обстановка, хорошее отношение. А самое главное это качественно сделанный маникюр, сколько мастеров я попробовала остановилась именно на Анне, мастер своего дела!!!',
        'A lovely salon with a pleasant atmosphere and warm service. Most importantly, the manicure is excellent. I have tried many specialists and finally chose Anna. She truly knows her craft!'),
      review('nastya-saykina','Настя Сайкина','Nastya Saykina',
        'Хожу к мастеру около 8 лет, всегда идеально 🫶🏼 Качество скорость , красивый френч!! Приятная беседа и просто лучшая 🤲🏻',
        'I have been coming to this specialist for about eight years, and the result is always perfect. Great quality, speed, beautiful French nails and lovely conversations. Simply the best!'),
      review('natalya-leshchuk','Наталья Лещук','Natalya Leshchuk',
        'Я не ожидала, что мои руки будут выглядеть настолько красиво! Мастер — профессионал своего дела!Я получила массу комплиментов за мой маникюр, благодарю вас за проделанную работу!',
        'I never expected my hands to look this beautiful! The specialist is a true professional. I received so many compliments on my manicure. Thank you for the wonderful work!')
    ]
  };

  global.TANEM_SITE_DATA=data;
  const rows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
      if(value.ru)rows.push([value.ru,value.hy,value.en]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(data);
  global.TANEM_SITE_I18N_ROWS=rows;
})(window);
