const baseUrl = 'https://raw.githubusercontent.com/LuizCasagrande/fotografie-assets/refs/heads/main';

export const APP_CONSTANTS = {
  NAME: 'Luiz Casagrande',
  IMAGE_URL: `${baseUrl}/profile.jpg`,
  DESCRIPTION: 'Fotógrafo(a) apaixonado(a) por capturar momentos especiais e transformar sentimentos em imagens.',
  BIO: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare volutpat facilisis. Aliquam erat volutpat.
    Vestibulum eget porta felis. Etiam non est maximus, imperdiet velit et, dignissim sem.
    Maecenas lobortis ante non neque imperdiet, sit amet aliquet nisl finibus. Nam at maximus dui.
    Aliquam erat volutpat. Curabitur ullamcorper consectetur rhoncus.
    Quisque augue dolor, vulputate vel tincidunt vel, sagittis aliquet purus.
    Integer porttitor aliquam odio, et ornare ligula congue ut.
  `,

  EMAIL: 'luiz@gmail.com',
  INSTAGRAM_LINK: 'https://www.instagram.com/INSTAGRAM_ID',
  FACEBOOK_LINK: 'https://www.facebook.com/share/FACEBOOK_ID',
  WHATSAPP_LINK: 'https://api.whatsapp.com/send?phone=PHONE_NUMBER',

  META_TAGS: [
    'Portfólio',
    'Portfólio de fotografia',
    'Ensaios',
    'Ensaios femininos',
    'Ensaios fotográficos',
    'Fotografia',
    'Fotografia profissional',
    'Fotografia criativa',
    'Fotografia artística',
    'Fotografia documental',
    'Fotografia lifestyle',
    'Fotografia editorial',
    'Fotografia de gestantes',
    'Fotografia de casamento',
    'Fotografia de noivado',
    'Fotografia de eventos',
    'Fotografia de moda',
    'Fotografia de família',
    'Sessão de fotos personalizadas',
    'Fotografia para empresas',
    'Fotografia para publicidade',
    'Fotografia profissional no Brasil',
  ],

  CATEGORIES: [{
    name: 'Ensaios Femininos',
    images: [{
      src: `${baseUrl}/category1/image1.jpg`,
      alt: 'image1',
      featured: true,
    }, {
      src: `${baseUrl}/category1/image2.jpg`,
      alt: 'image2',
      featured: true,
    }, {
      src: `${baseUrl}/category1/image3.jpg`,
      alt: 'image3',
      featured: true,
    }, {
      src: `${baseUrl}/category1/image4.jpg`,
      alt: 'image4',
      featured: true,
    }, {
      src: `${baseUrl}/category1/image5.jpg`,
      alt: 'image5',
    }],
  }, {
    name: 'Gestantes',
    images: [{
      src: `${baseUrl}/category2/image6.jpg`,
      alt: 'image6',
      featured: true,
    }, {
      src: `${baseUrl}/category2/image7.jpg`,
      alt: 'image7',
      featured: true,
    }, {
      src: `${baseUrl}/category2/image8.jpg`,
      alt: 'image8',
      featured: true,
    }, {
      src: `${baseUrl}/category2/image9.jpg`,
      alt: 'image9',
      featured: true,
    }, {
      src: `${baseUrl}/category2/image10.jpg`,
      alt: 'image10',
    }],
  }, {
    name: 'Casamentos',
    images: [{
      src: `${baseUrl}/category3/image11.jpg`,
      alt: 'image11',
      featured: true,
    }, {
      src: `${baseUrl}/category3/image12.jpg`,
      alt: 'image12',
      featured: true,
    }, {
      src: `${baseUrl}/category3/image13.jpg`,
      alt: 'image13',
      featured: true,
    }, {
      src: `${baseUrl}/category3/image14.jpg`,
      alt: 'image14',
      featured: true,
    }],
  }, {
    name: 'Famílias',
    images: [{
      src: `${baseUrl}/category4/image15.jpg`,
      alt: 'image15',
      featured: true,
    }],
  }],
}
