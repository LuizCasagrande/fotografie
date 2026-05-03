const baseUrl =
  'https://raw.githubusercontent.com/LuizCasagrande/assets/refs/heads/main/fotografie';

export const CONSTANTS = {
  NAME: 'Luiz Casagrande',
  IMAGE_URL: `${baseUrl}/profile.jpg`,
  DESCRIPTION:
    'Fotógrafo apaixonado por capturar momentos especiais e transformar sentimentos em imagens.',
  BIO: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et est neque. Mauris rutrum,
    felis et fermentum fringilla, magna tortor semper ante, sed feugiat quam massa eu mauris.
    Nullam ullamcorper consectetur tempus. Nullam ut augue sapien. Donec bibendum sapien vitae
    finibus imperdiet. Cras at porttitor nulla, et lacinia libero. Nunc posuere nec ante vitae
    imperdiet. Sed in lacus nunc. Orci varius natoque penatibus et magnis dis parturient montes,
    nascetur ridiculus mus. Etiam tincidunt risus ac.
  `,
  EMAIL: 'luiz@gmail.com',
  INSTAGRAM_LINK: 'https://www.instagram.com/INSTAGRAM_ID',
  FACEBOOK_LINK: 'https://www.facebook.com/share/FACEBOOK_ID',
  WHATSAPP_LINK: 'https://api.whatsapp.com/send?phone=PHONE_NUMBER',

  CATEGORIES: [
    {
      name: 'Natureza',
      images: [
        { src: `${baseUrl}/category1/image5.jpg`, alt: 'image5', starred: true },
        { src: `${baseUrl}/category1/image4.jpg`, alt: 'image4', starred: true },
        { src: `${baseUrl}/category1/image3.jpg`, alt: 'image3', starred: true },
        { src: `${baseUrl}/category1/image2.jpg`, alt: 'image2', starred: true },
        { src: `${baseUrl}/category1/image1.jpg`, alt: 'image1' },
      ],
    },
    {
      name: 'Arquitetura',
      images: [
        { src: `${baseUrl}/category2/image6.jpg`, alt: 'image6', starred: true },
        { src: `${baseUrl}/category2/image7.jpg`, alt: 'image7', starred: true },
        { src: `${baseUrl}/category2/image8.jpg`, alt: 'image8', starred: true },
        { src: `${baseUrl}/category2/image9.jpg`, alt: 'image9' },
        { src: `${baseUrl}/category2/image10.jpg`, alt: 'image10' },
      ],
    },
    {
      name: 'Viagem',
      images: [
        { src: `${baseUrl}/category3/image11.jpg`, alt: 'image11', starred: true },
        { src: `${baseUrl}/category3/image12.jpg`, alt: 'image12', starred: true },
        { src: `${baseUrl}/category3/image13.jpg`, alt: 'image13' },
        { src: `${baseUrl}/category3/image14.jpg`, alt: 'image14' },
      ],
    },
    {
      name: 'Experimental',
      images: [{ src: `${baseUrl}/category4/image15.jpg`, alt: 'image15', starred: true }],
    },
  ],
  META_TAGS: [
    'Portfólio',
    'Portfólio de fotografia',
    'Ensaios fotográficos',
    'Fotografia',
    'Fotografia profissional',
    'Fotografia criativa',
    'Fotografia artística',
    'Sessão de fotos personalizadas',
    'Fotografia para empresas',
    'Fotografia para publicidade',
  ],
};
