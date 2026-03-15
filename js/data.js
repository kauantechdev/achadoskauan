const categories = [
    { id: 'Telefones', name: 'Telefones', icon: '📱', subcategories: ['Samsung', 'iPhone', 'Xiaomi', 'Motorola', 'Outros'] },
    { id: 'roupas', name: 'Roupas', icon: '👕', subcategories: ['Masculino', 'Feminino'] },
    { id: 'beleza', name: 'Beleza', icon: '✨', subcategories: ['Skincare', 'Perfumes', 'Cuidado Pessoal'] },
    { id: 'eletronicos', name: 'Eletrônicos', icon: '💻', subcategories: ['Mouse', 'Mousepad', 'Headset', 'Teclado', 'Microfone', 'Monitor', 'Notebook', 'TV', 'Geral'] },
    { id: 'tenis', name: 'Tênis', icon: '👟', subcategories: ['Corrida', 'Casual', 'Treino/Academia'] },
    { id: 'academia', name: 'Academia / Fitness', icon: '💪', subcategories: ['Suplementos', 'Equipamentos', 'Acessorios Fitness', 'Roupa de Academia'] },
    { id: 'casa', name: 'Casa & Decoração', icon: '🏡', subcategories: ['Quarto', 'Cozinha', 'Banheiro', 'Organização', 'Eletrodomésticos', 'Geral'] },
    { id: 'carro', name: 'Carro', icon: '🚗', subcategories: ['Acessórios Automotivos', 'Limpeza Automotiva', 'Interior do Carro', 'Itens Gerais para Carro'] }
];

// Coloque aqui os IDs dos produtos que você quer destacar como ofertas da semana:
const topOffersIds = [85, 2, 6, 17, 145, 42];

const products = [
    {
        id: 1,
        title: "Iphone 15 256gb (Mercado Livre Original, Shopee Usado)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_687325-MLA96079610055_102025-F.webp",
        price: "💰 A partir de R$ 3.608,75 à 4.589,00",
        category: "Telefones",
        subcategory: "iPhone",
        shopeeLink: "https://s.shopee.com.br/4VXd9z0tTp?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1GYotwv"
    },
    {
        id: 2,
        title: "Iphone 17/17 Pro/17 Pro Max 256/512gb (Lacrado)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_650096-MLA91747586174_092025-F.webp",
        price: "R$ 9.116,28 à 9.507,00",
        category: "Telefones",
        subcategory: "iPhone",
        shopeeLink: "https://s.shopee.com.br/1LabQWX6CH?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/28DJfoN"
    },
    {
        id: 3,
        title: "Moto G52 128gb (Apenas Shopee) (Usado)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-824i4-meygq1xtgxs826.webp",
        price: "R$ 628,41",
        category: "Telefones",
        subcategory: "Motorola",
        shopeeLink: "https://s.shopee.com.br/8V3lxAjPIl?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/8V3lxAjPIl?share_channel_code=1"
    },
    {
        id: 4,
        title: "Xiaomi Poco F7 512/256gb (Original)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_656327-MLA96381948998_102025-F.webp",
        price: "R$ 2.777,48 à 3.299,00",
        category: "Telefones",
        subcategory: "Xiaomi",
        shopeeLink: "https://s.shopee.com.br/9AJSlLNVLs?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2xqvF5e"
    },
    {
        id: 5,
        title: "Galaxy s25 256gb (Usado shopee, Mercado livre Original)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_839006-MLA100007826225_122025-F.webp",
        price: "R$ 2.052,00 à 3.898,00",
        category: "Telefones",
        subcategory: "Samsung",
        shopeeLink: "https://s.shopee.com.br/4LED0vqG2l?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1U5Hc85"
    },
    {
        id: 6,
        title: "Redmi Note 14 Pro 512/256gb (Versão Global Original)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_646188-MLA96095523067_102025-F.webp",
        price: "R$ 1.681,76 à 1.860,00",
        category: "Telefones",
        subcategory: "Xiaomi",
        shopeeLink: "https://s.shopee.com.br/7AYOOP8H5s?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1GxexAM"
    },
    {
        id: 7,
        title: "Redmi Note 14 128/256gb ( Versão Global Original)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_697084-MLA99483184544_112025-F.webp",
        price: "R$ 1.049,00 à 1.079,16",
        category: "Telefones",
        subcategory: "Xiaomi",
        shopeeLink: "https://s.shopee.com.br/8V3lz5Afss?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2L2t6Mj"
    },
    {
        id: 8,
        title: "Samsung Galaxy A07 256gb (Lojas Oficiais)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_765861-MLA95532186080_102025-F.webp",
        price: "R$ 906,22",
        category: "Telefones",
        subcategory: "Samsung",
        shopeeLink: "https://s.shopee.com.br/9003IfcZAh?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1CWyXf7"
    },
    {
        id: 9,
        title: "Samsung Galaxy A07 128gb (Lojas Oficiais)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_765861-MLA95532186080_102025-F.webp",
        price: "R$ 595,90 à 799,48",
        category: "Telefones",
        subcategory: "Samsung",
        shopeeLink: "https://s.shopee.com.br/1gDSZi0DgI?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1h3J1WJ"
    },
    {
        id: 10,
        title: "Samsung Galaxy A06 5g Dual Sim 128gb preto (Mercado Livre Apenas)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_716412-MLA99524473372_122025-F.webp",
        price: "R$ 726,53 à 1.199,00",
        category: "Telefones",
        subcategory: "Samsung",
        shopeeLink: "https://meli.la/1vSuMN8",
        mercadoLivreLink: "https://meli.la/1vSuMN8"
    },
    {
        id: 11,
        title: "Iphone 12 128gb (Branco) (Esgotado por Alta Demanda!)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_699453-MLA95935680005_102025-F.webp",
        price: "❌ Esgotado",
        category: "Telefones",
        subcategory: "iPhone",
        shopeeLink: "#",
        mercadoLivreLink: "#"
    },
    {
        id: 12,
        title: "Samsung Galaxy A16 128gb (Lojas Oficiais)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_800632-MLA96866328473_102025-F.webp",
        price: "R$ 781,54 à 1.115,00",
        category: "Telefones",
        subcategory: "Samsung",
        shopeeLink: "https://s.shopee.com.br/AAC0nLtNqq?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2EawWXi"
    },
    {
        id: 13,
        title: "Samsung Galaxy A26 256gb (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_657456-MLA100074445249_122025-F.webp",
        price: "R$ 1.563,00",
        category: "Telefones",
        subcategory: "Samsung",
        shopeeLink: "https://meli.la/2VVGCuE",
        mercadoLivreLink: "https://meli.la/2VVGCuE"
    },
    {
        id: 14,
        title: "Motorola Moto G86 256gb 5g (8gb Ram+16gb Ram Boost) (Mercado Livre Apenas)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_634166-MLA99936645603_112025-F.webp",
        price: "R$ 1.709,00",
        category: "Telefones",
        subcategory: "Motorola",
        shopeeLink: "https://meli.la/1KKvaDP",
        mercadoLivreLink: "https://meli.la/1KKvaDP"
    },
    {
        id: 15,
        title: "Xiaomi Redmi 15 8gb 256gb (Lojas Oficiais)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_743925-MLA99975530263_112025-F.webp",
        price: "R$ 1.103,08 à 1.150,00",
        category: "Telefones",
        subcategory: "Xiaomi",
        shopeeLink: "https://s.shopee.com.br/AAC0oCtyLt?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1JZGE72"
    },
    {
        id: 16,
        title: "Motorola Moto G06 256gb (4gb Ram + 8gb Ram Boost) (Mercado Livre Apenas)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_657060-MLA104761778541_012026-F.webp",
        price: "R$ 799,20",
        category: "Telefones",
        subcategory: "Motorola",
        shopeeLink: "https://meli.la/24qtipk",
        mercadoLivreLink: "https://meli.la/24qtipk"
    },
    {
        id: 17,
        title: "Mouse Gamer Redragon Cobra (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_678685-MLA95671095550_102025-F.webp",
        price: "R$ 101,65",
        category: "eletronicos",
        subcategory: "Mouse",
        shopeeLink: "https://meli.la/2yx9GJv",
        mercadoLivreLink: "https://meli.la/2yx9GJv"
    },
    {
        id: 18,
        title: "Mousepad Gamer Profissional 90x40 Cm (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_777463-MLB90032250047_082025-F-mousepad-gamer-profissional-90x40-cm-desk-pad-alta-qualidade.webp",
        price: "R$ 39,96",
        category: "eletronicos",
        subcategory: "Mousepad",
        shopeeLink: "https://meli.la/2v5SwgY",
        mercadoLivreLink: "https://meli.la/2v5SwgY"
    },
    {
        id: 19,
        title: "Teclado Gamer Mecânico Usb Switch Blue (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_691408-MLA99576697758_122025-F.webp",
        price: "R$ 109,24",
        category: "eletronicos",
        subcategory: "Teclado",
        shopeeLink: "https://meli.la/1TmYm9r",
        mercadoLivreLink: "https://meli.la/1TmYm9r"
    },
    {
        id: 20,
        title: "Teclado Gamer Semi Mecânico (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_633102-MLB98117883433_112025-F.webp",
        price: "R$ 55,99",
        category: "eletronicos",
        subcategory: "Teclado",
        shopeeLink: "https://meli.la/1GBq1LT",
        mercadoLivreLink: "https://meli.la/1GBq1LT"
    },
    {
        id: 21,
        title: "Headset Gamer Havit H2002d (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_795861-MLA99998895275_112025-F.webp",
        price: "R$ 227,00",
        category: "eletronicos",
        subcategory: "Headset",
        shopeeLink: "https://meli.la/1aZHUpE",
        mercadoLivreLink: "https://meli.la/1aZHUpE"
    },
    {
        id: 22,
        title: "Microfone USB Condensador RGB Gamer",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_674417-MLA96148761067_102025-F.webp",
        price: "R$ 121,60 à 172,90",
        category: "eletronicos",
        subcategory: "Microfone",
        shopeeLink: "https://s.shopee.com.br/9UwfYWURAd?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2bGrcHS"
    },
    {
        id: 23,
        title: "Monitor Gamer LG UltraGear 24 IPS Full HD 180Hz 1ms (Apenas Mercado Livre) (Esgotado)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_817281-MLA107167838581_022026-F.webp",
        price: "R$ 761,00 à 1.235,00",
        category: "eletronicos",
        subcategory: "Monitor",
        shopeeLink: "https://meli.la/2YmQ1pQ",
        mercadoLivreLink: "https://meli.la/2YmQ1pQ"
    },
    {
        id: 24,
        title: "Suporte North Bayou Nb F80 de Mesa Para Tv Monitor de 17 Até 30 Polegadas (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_604489-MLA82447431215_022025-F.webp",
        price: "R$ 140,99",
        category: "eletronicos",
        subcategory: "Monitor",
        shopeeLink: "https://meli.la/2h4C9dz",
        mercadoLivreLink: "https://meli.la/2h4C9dz"
    },
    {
        id: 25,
        title: "Processador AMD Ryzen 5 5500 3.6GHz 4.2GHz (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_999665-MLA99900426735_112025-F.webp",
        price: "R$ 639,00",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://meli.la/2tJRaee",
        mercadoLivreLink: "https://meli.la/2tJRaee"
    },
    {
        id: 26,
        title: "Cooler Duplo Rgb Cpu (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_973075-MLB99598255855_112025-F.webp",
        price: "R$ 119,90",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://meli.la/2onu69M",
        mercadoLivreLink: "https://meli.la/2onu69M"
    },
    {
        id: 27,
        title: "Controle Sem Fio Joystick Bluetooth Para Ps4 Videogame Tv Samsung Pc - Marca Genérico (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_762912-MLA105696431793_012026-F.webp",
        price: "R$ 54,88",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://meli.la/2qutJR6",
        mercadoLivreLink: "https://meli.la/2qutJR6"
    },
    {
        id: 28,
        title: "Samsung Galaxy Fit3 Pulseira Esportiva (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_628280-MLA99494775208_112025-F.webp",
        price: "R$ 299,99",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://meli.la/1FURJiR",
        mercadoLivreLink: "https://meli.la/1FURJiR"
    },
    {
        id: 29,
        title: "Microfone Lapela Sem Fio Duplo Anti Ruído Com Imã Bitvendo Preto (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_917369-MLB104230172576_012026-F.webp",
        price: "R$ 99,07",
        category: "eletronicos",
        subcategory: "Microfone",
        shopeeLink: "https://meli.la/2t2PAMH",
        mercadoLivreLink: "https://meli.la/2t2PAMH"
    },
    {
        id: 30,
        title: "Projetor Smart Portátil Several Importados Full Hd 4k Android 11 Wi-fi Bluetooth",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_752031-MLA97933964606_112025-F.webp",
        price: "R$ 176,41 à 194,35",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/1BHKkdTkLv?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2a936BW"
    },
    {
        id: 31,
        title: "Galaxy Tab A11, 64gb, 4gb Ram, Tela De 8.7 , Bateria 5.100mah, Câmera Frontal 5mp, Câmera Traseira 8mp (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_892318-MLA99419882190_112025-F.webp",
        price: "R$ 862,40 à 980,00",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://meli.la/2aZZB3k",
        mercadoLivreLink: "https://meli.la/2aZZB3k"
    },
    {
        id: 32,
        title: "Notebook Gamer Acer Nitro V Intel Core I5 - 8GB Ram, 512GB SSD, NVIDIA RTX4050, Windows 11 Home, Tela 15,6 Full HD (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_906887-MLA99953146309_112025-F.webp",
        price: "R$ 5.599,90",
        category: "eletronicos",
        subcategory: "Notebook",
        shopeeLink: "https://meli.la/11hV4tE",
        mercadoLivreLink: "https://meli.la/11hV4tE"
    },
    {
        id: 33,
        title: "Impressora Ecotank Epson L3250 + Refil Tinta (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_783901-MLA99933795683_112025-F.webp",
        price: "R$ 1.196,00",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://meli.la/33en6nD",
        mercadoLivreLink: "https://meli.la/33en6nD"
    },
    {
        id: 34,
        title: "Smart Tv 32 Philco",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_681053-MLA99382614472_112025-F.webp",
        price: "R$ 854,68 à 889,00",
        category: "eletronicos",
        subcategory: "TV",
        shopeeLink: "https://s.shopee.com.br/2qPoUuGbsV?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2bpL4Nc"
    },
    {
        id: 35,
        title: "Tv box Aquário plus padrão 4K 16GB preto com 2GB de memória ram (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_837219-MLA99539537332_122025-F.webp",
        price: "R$ 199,90",
        category: "eletronicos",
        subcategory: "TV",
        shopeeLink: "https://meli.la/2ES7thG",
        mercadoLivreLink: "https://meli.la/2ES7thG"
    },
    {
        id: 36,
        title: "Nobreak JBR Guard",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_790588-MLA104793500356_012026-F.webp",
        price: "R$ 284,05 à 322,91",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/2LTI96CxoR?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1P7CYx6"
    },
    {
        id: 37,
        title: "Multímetro Digital Profissional Multifunções",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_984049-MLA100086533863_122025-F.webp",
        price: "R$ 31,96 à 39,98",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/3qI5vyzgtZ?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1FbBbhi"
    },
    {
        id: 38,
        title: "Console Sony Playstation 5 Edição Slim Disk 1tb Branco + Controle Sem Fio Dualsense (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_921596-MLA100042443481_122025-F.webp",
        price: "R$ 3.831,00",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://meli.la/1VHnzti",
        mercadoLivreLink: "https://meli.la/1VHnzti"
    },
    {
        id: 39,
        title: "Campainha Sem Fio Intelbras CIB 101 Preta",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_632697-MLA100063596197_122025-F.webp",
        price: "R$ 65,62 à 95,00",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/3VfFXmhabL?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2SZeq7j"
    },
    {
        id: 40,
        title: "Estante Armário Prateleira de Aço Suporta 150kg 198cm x 90cm x 28cm",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_748325-MLA96103231787_102025-F.webp",
        price: "R$ 113,05 à 209,99",
        category: "casa",
        subcategory: "Organização",
        shopeeLink: "https://s.shopee.com.br/6fcX3qvdpk?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/24H3ezF"
    },
    {
        id: 41,
        title: "Sapateiras 8 Pares Sapatos Pequena Para Entrada Da Porta",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_783363-MLB84035891578_052025-F.webp",
        price: "R$ 18,98 à 20,74",
        category: "casa",
        subcategory: "Organização",
        shopeeLink: "https://s.shopee.com.br/3fyfkjDWs2?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2wfmodr"
    },
    {
        id: 42,
        title: "Kit 2 Suporte Porta Shampoo (Shoppe 1 unidade)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_909045-MLA106285067495_012026-F.webp",
        price: "R$ 23,31 à 41,97",
        category: "casa",
        subcategory: "Banheiro",
        shopeeLink: "https://s.shopee.com.br/4qAd96GdD3?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2FGBc7X"
    },
    {
        id: 43,
        title: "Estante Plástica 3 Prateleiras Multiuso (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_782767-MLA99566817634_122025-F.webp",
        price: "R$ 39,90",
        category: "casa",
        subcategory: "Organização",
        shopeeLink: "https://meli.la/2tUp4xG",
        mercadoLivreLink: "https://meli.la/2tUp4xG"
    },
    {
        id: 44,
        title: "Kit 2 Porta Shampoo Sabonete",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_947210-MLA100045854643_122025-F.webp",
        price: "R$ 10,88 à 25,90",
        category: "casa",
        subcategory: "Banheiro",
        shopeeLink: "https://s.shopee.com.br/7Kry7sT4Kl?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1NpSDZz"
    },
    {
        id: 45,
        title: "Magnow Pack Sacos A Vácuo 10 Unidades (Shopee 5 Unidades)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_679504-MLA98268902674_112025-F.webp",
        price: "R$ 43,78",
        category: "casa",
        subcategory: "Organização",
        shopeeLink: "https://s.shopee.com.br/3qI5xzB3mI?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2Ct7KSK"
    },
    {
        id: 46,
        title: "Resistência Lorenzetti Acqua Ultra 220/7800",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_667297-MLA99898694899_112025-F.webp",
        price: "R$ 63,43",
        category: "casa",
        subcategory: "Eletrodomésticos",
        shopeeLink: "https://s.shopee.com.br/LiDnlS07t?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2LHG3qG"
    },
    {
        id: 47,
        title: "Chuveiro Lorenzetti Loren Shower Eletrônico Branco 6800W",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_896908-MLA101388142032_122025-F.webp",
        price: "R$ 110,87 à 116,71",
        category: "casa",
        subcategory: "Eletrodomésticos",
        shopeeLink: "https://s.shopee.com.br/AUozubKvbt?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2axg6Zm"
    },
    {
        id: 48,
        title: "Kit Cabides Veludo Slim Adulto 50 Unidades",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_873539-MLA100979589011_122025-F.webp",
        price: "R$ 69,90 à 72,89",
        category: "casa",
        subcategory: "Organização",
        shopeeLink: "https://s.shopee.com.br/AUozukUM2P?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1nYX8ck"
    },
    {
        id: 49,
        title: "Marinex Conjunto De Assadeiras Oval Opaline 3 Peças Branco",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_985069-MLA99586816098_122025-F.webp",
        price: "R$ 41,84 à 69,89",
        category: "casa",
        subcategory: "Cozinha",
        shopeeLink: "https://s.shopee.com.br/1BHKnoP26b?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1qJfLSB"
    },
    {
        id: 50,
        title: "Kit 2 Travesseiros Antialérgico",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_650156-MLA82873825475_032025-F.webp",
        price: "R$ 34,99 à 37,99",
        category: "casa",
        subcategory: "Quarto",
        shopeeLink: "https://s.shopee.com.br/8KkVLC5pqP?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/14sKdhK"
    },
    {
        id: 51,
        title: "Aparelho De Som Bebês Ninar",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_892746-MLB91906105625_092025-F.webp",
        price: "R$ 67,00 à 76,90",
        category: "casa",
        subcategory: "Eletrodomésticos",
        shopeeLink: "https://s.shopee.com.br/5VQJy9CNM3?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2Cq89Ab"
    },
    {
        id: 52,
        title: "Torneira Dazie Metais Com Filtro Cozinha Para Parede Flexível",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_840765-MLA100039591131_122025-F.webp",
        price: "R$ 79,95 à 119,50",
        category: "casa",
        subcategory: "Cozinha",
        shopeeLink: "https://s.shopee.com.br/10xuc0Z4gn?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1fguabW"
    },
    {
        id: 53,
        title: "Roçadeira Nakasaki 75cc 3.6hpNk750pro 8 Em 1",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_666556-MLB107954510195_032026-F.webp",
        price: "R$ 509,68 à 649,99",
        category: "casa",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/3VfFajMX2j?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1qHyosE"
    },
    {
        id: 54,
        title: "Piscina Splash Fun Redonda Inflável 2400 Litros - Mor",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_875807-MLA100068626119_122025-F.webp",
        price: "R$ 165,20 à 179,90",
        category: "casa",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/4qAstkJN80?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1Wmi5YH"
    },
    {
        id: 55,
        title: "Cadeira de Escritório Giratória",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_691781-MLA96150876349_102025-F.webp",
        price: "R$ 149,90 à 239,00",
        category: "casa",
        subcategory: "Quarto",
        shopeeLink: "https://s.shopee.com.br/3LLpOjScd0?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1gn1pse"
    },
    {
        id: 56,
        title: "Conjunto Panelas Antiaderente 10 Peças Teflon Várias Cores (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_974219-MLB75860517636_042024-F-conjunto-panelas-antiaderente-10-pecas-teflon-varias-cores.webp",
        price: "R$ 199,90 à 229,90",
        category: "casa",
        subcategory: "Cozinha",
        shopeeLink: "https://meli.la/1HYDZRQ",
        mercadoLivreLink: "https://meli.la/1HYDZRQ"
    },
    {
        id: 57,
        title: "Suporte Papel Higiênico",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_660581-MLA101160289190_122025-F.webp",
        price: "R$ 20,90 à 45,44",
        category: "casa",
        subcategory: "Banheiro",
        shopeeLink: "https://s.shopee.com.br/6VIrAxx7wF?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2VoZGN2"
    },
    {
        id: 58,
        title: "Espelho Vildrex Roma 70x50cm (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_737366-MLB95371198573_102025-F-espelho-vildrex-roma-70x50cm-design-moderno-lapidado-luxo.webp",
        price: "R$ 138,40",
        category: "casa",
        subcategory: "Banheiro",
        shopeeLink: "https://meli.la/2gycR4V",
        mercadoLivreLink: "https://meli.la/2gycR4V"
    },
    {
        id: 59,
        title: "Kit 6 Cadeiras De Jantar Allegra Master Empilhável",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_780534-MLU78498372852_082024-F.webp",
        price: "R$ 542,71 à 567,60",
        category: "casa",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/AAC9XwCi9J?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2p4Vc4q"
    },
    {
        id: 60,
        title: "Kit 4 Potes Acrílico 3,8l Organizador Geladeira Rebirth (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_840698-MLA99503355112_112025-F.webp",
        price: "R$ 149,00",
        category: "casa",
        subcategory: "Cozinha",
        shopeeLink: "https://meli.la/15tyMu8",
        mercadoLivreLink: "https://meli.la/15tyMu8"
    },
    {
        id: 61,
        title: "Cuba Gourmet para Cozinha Aço Inox 201 50x40cm",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_965451-MLA96140580195_102025-F.webp",
        price: "R$ 90,25 à 188,95",
        category: "casa",
        subcategory: "Cozinha",
        shopeeLink: "https://s.shopee.com.br/gL4FXDYPw?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2zQsZMY"
    },
    {
        id: 62,
        title: "Kit C/ 4 Toalha De Banho Gigante 80 X 1,50 (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_957812-MLB95817097996_102025-F.webp",
        price: "R$ 78,99",
        category: "casa",
        subcategory: "Banheiro",
        shopeeLink: "https://meli.la/28N6VP1",
        mercadoLivreLink: "https://meli.la/28N6VP1"
    },
    {
        id: 63,
        title: "Kit 2 Tapetes Para Banheiro Tapete Mágico Ultra Para Absorção (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_723164-MLB101848516780_122025-F-kit2-tapetes-para-banheiro-tapete-magico-ultra-para-absorc.webp",
        price: "R$ 26,89",
        category: "casa",
        subcategory: "Banheiro",
        shopeeLink: "https://meli.la/1q3R3vy",
        mercadoLivreLink: "https://meli.la/1q3R3vy"
    },
    {
        id: 64,
        title: "Cadeira Escritório Ergonômica Genebra (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_764756-MLA96570589252_112025-F.webp",
        price: "R$ 906,53",
        category: "casa",
        subcategory: "Quarto",
        shopeeLink: "https://meli.la/2ESwkNg",
        mercadoLivreLink: "https://meli.la/2ESwkNg"
    },
    {
        id: 65,
        title: "Kit 10 Organizador Multiuso Modular Gaveta Acrilico Rebirth Cor Cristal",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_784253-MLA93968883763_102025-F.webp",
        price: "R$ 36,90 à 42,90",
        category: "casa",
        subcategory: "Organização",
        shopeeLink: "https://s.shopee.com.br/gL4FtDKUP?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2QUPAQn"
    },
    {
        id: 66,
        title: "Jogo de Copos de Vidro Long Drink 255ml",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_806940-MLA99595417968_122025-F.webp",
        price: "R$ 29,05",
        category: "casa",
        subcategory: "Cozinha",
        shopeeLink: "https://meli.la/1qjZFud",
        mercadoLivreLink: "https://meli.la/1qjZFud"
    },
    {
        id: 67,
        title: "Kit 10 Lâmpadas Led 20w Bulbo 6500k Luz Branca Avant Luz Branco-frio",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_786773-MLA99935935511_112025-F.webp",
        price: "R$ 57,20 à 59,90",
        category: "casa",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/6fcX61KqPt?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2LU6VDo"
    },
    {
        id: 68,
        title: "Cadeira Escritório Gamer Ergonômica",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_841609-MLA97120092747_112025-F.webp",
        price: "R$ 448,56 à 454,10",
        category: "casa",
        subcategory: "Quarto",
        shopeeLink: "https://s.shopee.com.br/qeUSZ7wPN?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2ZGCzeB"
    },
    {
        id: 69,
        title: "Fechadura Digital de Sobrepor com Senha FR 10 Preto Intelbras",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_962132-MLA99518049008_112025-F.webp",
        price: "R$ 217,00 à 239,90",
        category: "casa",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/50U3QQ4lIH?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2vfPGzW"
    },
    {
        id: 70,
        title: "Cooktop Philco Cook Chef 5 Cor Preto (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_993783-MLA100001154819_112025-F.webp",
        price: "R$ 447,00",
        category: "casa",
        subcategory: "Eletrodomésticos",
        shopeeLink: "https://meli.la/1GHFqDp",
        mercadoLivreLink: "https://meli.la/1GHFqDp"
    },
    {
        id: 71,
        title: "Panela De Pressão Elétrica 5 litros Preta",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_755263-MLA99963739851_112025-F.webp",
        price: "R$ 303,91 à 339,17",
        category: "casa",
        subcategory: "Eletrodomésticos",
        shopeeLink: "https://s.shopee.com.br/1Lal430hOp?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1C14NGG"
    },
    {
        id: 72,
        title: "Panela De Arroz Elétrica Riso (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwr4vy4ce3jqa2@resize_w450_nl.webp",
        price: "R$ 137,70",
        category: "casa",
        subcategory: "Eletrodomésticos",
        shopeeLink: "https://s.shopee.com.br/6Ag0p8LW8R?share_channel_code=1",
        mercadoLivreLink: "#"
    },
    {
        id: 73,
        title: "Máscara Sólida de Limpeza com Chá Verde (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134301-7rd4z-m70ia2xnt6kpdd@resize_w450_nl.webp",
        price: "R$ 4,99",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "https://s.shopee.com.br/60MbLd8Va1?share_channel_code=1",
        mercadoLivreLink: "#"
    },
    {
        id: 74,
        title: "Pipizito Funil Urinário Descartável - 5 unidades (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mk95rrvv5xj647@resize_w450_nl.webp",
        price: "R$ 17,90",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "https://s.shopee.com.br/20qSack3EZ?share_channel_code=1",
        mercadoLivreLink: "#"
    },
    {
        id: 75,
        title: "Kit Rosa Mosqueta Skin Care (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m79xkgjqkcwcf2@resize_w450_nl.webp",
        price: "R$ 44,90",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "https://s.shopee.com.br/900Cvi0ksR?share_channel_code=1",
        mercadoLivreLink: "#"
    },
    {
        id: 76,
        title: "Principia, Protetor Solar Facial FPS70 (Shopee 60 fps)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_869201-MLA96608367971_102025-F.webp",
        price: "R$ 49,00 à 62,19",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "https://s.shopee.com.br/9Kd3Kcw8r7?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2tFWAC2"
    },
    {
        id: 77,
        title: "Principia Kit Anti-Manchas Essencial (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_664739-MLA99823417217_112025-F.webp",
        price: "R$ 151,92 à 168,80",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1Ap2Ybv"
    },
    {
        id: 78,
        title: "Principia Sérum Hidratante Principia 2% Ácidos Hialurônicos (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_669609-MLA96762810985_102025-F.webp",
        price: "R$ 54,00 à 59,00",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/29c26Yt"
    },
    {
        id: 79,
        title: "Principia Kit Shampoo E Condicionador Antiqueda (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_697454-MLA100076214423_122025-F.webp",
        price: "R$ 90,00 à 110,00",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1BJkge9"
    },
    {
        id: 80,
        title: "NIVEA Creme Hidratante 145g, Hidratação Profunda 24h (Loja Oficial Nivea) (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_846879-MLA104791629956_012026-F.webp",
        price: "R$ 28,41 à 35,97",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1moCDHm"
    },
    {
        id: 81,
        title: "Bumbum Cream 200ml Hidratante Corporal (Loja Oficial Shopee)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_834123-MLB97445071613_112025-F.webp",
        price: "R$ 85,13 à 99,00",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "https://s.shopee.com.br/1LaloZEuKc?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2886a4p"
    },
    {
        id: 82,
        title: "NIVEA MEN Creme 4 em 1 75g - Hidratação intensa",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_867602-MLA106663398677_022026-F.webp",
        price: "R$ 20,19 à 21,00",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "https://s.shopee.com.br/1VuC1dqU3i?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1176uFw"
    },
    {
        id: 83,
        title: "Bioderma Clareador Corporal para Áreas Íntimas (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_706604-MLA72271437954_102023-F.webp",
        price: "R$ 119,00 à 205,00",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1SnHu4E"
    },
    {
        id: 84,
        title: "Boca Rosa | Stick Cor Multifuncional, Batom Vegano (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfyhshsij8jk24@resize_w450_nl.webp",
        price: "R$ 47,41 à 58,00",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "https://s.shopee.com.br/807flBblj8?share_channel_code=1",
        mercadoLivreLink: "#"
    },
    {
        id: 85,
        title: "Top Cropped Feminino Amarrar Tricot Frente Única (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8gvt4qktwk18c.webp",
        price: "R$ 29,50 à 59,90",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/15booFuwf?share_channel_code=1",
        mercadoLivreLink: "#"
    },
    {
        id: 86,
        title: "NIVEA Sabonete Líquido Óleo de Banho 200ml",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_887251-MLA99338566368_112025-F.webp",
        price: "R$ 29,98 à 39,99",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "https://s.shopee.com.br/4LENOpJxvE?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1sjWygW"
    },
    {
        id: 87,
        title: "Prancha de cabelo Gama Italy Eleganza Plus",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_937265-MLA99972528235_112025-F.webp",
        price: "R$ 117,00 à 149,90",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "https://s.shopee.com.br/6Ag1aNhjyf?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2g56cBC"
    },
    {
        id: 88,
        title: "Escova Secadora de Cabelos Britânia",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_632196-MLA84850490695_052025-F.webp",
        price: "R$ 75,32 à 169,10",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "https://s.shopee.com.br/4AuxCqq7Q4?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2KZvykg"
    },
    {
        id: 89,
        title: "Secador de Cabelos Mondial 2000W",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_896053-MLA99888382229_112025-F.webp",
        price: "R$ 102,90 à 187,63",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "https://s.shopee.com.br/3VfGPnjoU7?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/34jQmRd"
    },
    {
        id: 90,
        title: "Attracione Men perfume Masculino Com Feromônios Ativados 25 mL",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_723846-MLA94663175802_102025-F.webp",
        price: "R$ 66,93 à 79,00",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "https://s.shopee.com.br/10xvRMTMSm?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1NMRc4T"
    },
    {
        id: 91,
        title: "Kit 3 Clareador Dental E Moldeira Whiteness Perfect 22% (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_888976-MLB90059243347_082025-F.webp",
        price: "R$ 65,51",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2QUrrxb"
    },
    {
        id: 92,
        title: "Gel de Limpeza Antioleosidade Bioderma Sébium Gel Moussant 500ml (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_990617-MLA99157275052_112025-F.webp",
        price: "R$ 125,99",
        category: "beleza",
        subcategory: "Skincare",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2FXk9vT"
    },
    {
        id: 93,
        title: "Perfume Sedutor Árabe Sabah 100ml Original Feminino (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_753960-MLB78002610612_082024-F.webp",
        price: "R$ 157,25",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2eamyaQ"
    },
    {
        id: 94,
        title: "Perfume Lattafa Asad 100ml Eau De Parfum Original Árabe (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_687418-MLB81527468562_012025-F.webp",
        price: "R$ 149,56 à 186,95",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1qKq5rh"
    },
    {
        id: 95,
        title: "Perfume Masculino Natura Essencial Único Deo Parfum 90ml (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_997812-MLA92288090836_092025-F.webp",
        price: "R$ 192,00",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1XzkB5n"
    },
    {
        id: 96,
        title: "Blue Melody Paris Elysees Edt- Perfume Feminino 100ml (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_648877-MLA84546857704_052025-F.webp",
        price: "R$ 67,90",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1Nc4oKi"
    },
    {
        id: 97,
        title: "Perfume Masculino Amadeirado Asad Bourbon 100ml Isabelle La Belle (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_682372-MLA103217659554_012026-F.webp",
        price: "R$ 92,40",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2BUfSZj"
    },
    {
        id: 98,
        title: "Natura Essencial Exclusivo Masculino Eau de parfum 100 ml (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_820895-MLA48087898727_112021-F.webp",
        price: "R$ 126,00",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1H4Qvsv"
    },
    {
        id: 99,
        title: "Colônia Turma Da Mônica Cebolinha Jequiti 25mL (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_661293-MLA105819592910_022026-F.webp",
        price: "R$ 23,17 à 25,90",
        category: "beleza",
        subcategory: "Perfumes",
        shopeeLink: "https://s.shopee.com.br/4VXncnD3l5?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1dUnQRq"
    },
    {
        id: 100,
        title: "Pomada Para Cabelo Brilho Super Heavy Hold - Red Nek 70g",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_828761-MLA81769144934_012025-F.webp",
        price: "R$ 29,90 à 49,90",
        category: "beleza",
        subcategory: "Cuidado Pessoal",
        shopeeLink: "https://s.shopee.com.br/4frDpGd2vH?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2xR8rP6"
    },
    {
        id: 101,
        title: "Tênis Casual Academia Feminino E Masculino",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_978523-MLB82486799752_022025-F-tnis-casual-academia-feminino-e-masculino-skate-sneakers.webp",
        price: "R$ 44,80 à 65,99",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/9zslivFrP7?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2d2RBCV"
    },
    {
        id: 102,
        title: "Tênis Kappa Pulse Academia Corrida Caminhada Original (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_876900-MLB83421186907_032025-F-tnis-kappa-pulse-academia-corrida-caminhada-original.webp",
        price: "R$ 145,25",
        category: "tenis",
        subcategory: "Corrida",
        shopeeLink: "https://meli.la/12NCQPs",
        mercadoLivreLink: "https://meli.la/12NCQPs"
    },
    {
        id: 103,
        title: "Kit 4 Camisas Camiseta Básica Lisa 100% Algodão (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_620375-MLB107341304409_022026-F-kit-4-camisas-camiseta-basica-lisa-100-algodo-premium-301.webp",
        price: "R$ 78,20",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://meli.la/1cUohRn",
        mercadoLivreLink: "https://meli.la/1cUohRn"
    },
    {
        id: 104,
        title: "Kit 2 Camisa Proteção Uvb50 Blusa Térmica Masculina (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_703347-MLB87352735877_072025-F-kit-2-camisa-camiseta-proteco-uvb50-blusa-termica-masculina.webp",
        price: "R$ 54,44",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://meli.la/2sjb9jk",
        mercadoLivreLink: "https://meli.la/2sjb9jk"
    },
    {
        id: 105,
        title: "Kit 6 Camisetas Masculina Academia Dry Fit Malha Fria Treino (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_966392-MLB82701380775_022025-F-kit-6-camisetas-masculina-academia-dry-fit-malha-fria-treino.webp",
        price: "R$ 131,16",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://meli.la/2i5x7jz",
        mercadoLivreLink: "https://meli.la/2i5x7jz"
    },
    {
        id: 106,
        title: "Camisa Palmeiras Away 25/26 Torcedor Masculina (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_883844-MLB95633564516_102025-F-camisa-palmeiras-away-2526-torcedor-masculina.webp",
        price: "R$ 155,39",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://meli.la/2gXkWeg",
        mercadoLivreLink: "https://meli.la/2gXkWeg"
    },
    {
        id: 106,
        title: "Camisa Botafogo Torcedor 25/26 Masculina (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_733289-MLB96315613801_102025-F-camisa-botafogo-torcedor-2526-masculina.webp",
        price: "R$ 154,29",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://meli.la/2WRoacx",
        mercadoLivreLink: "https://meli.la/2WRoacx"
    },
    {
        id: 107,
        title: "Camisa Vasco Da Gama 25/26 Torcedor Masculina (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_658511-MLB92264029902_092025-F-camisa-vasco-da-gama-2526-torcedor-masculina.webp",
        price: "R$ 165,27",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://meli.la/1HF42WW",
        mercadoLivreLink: "https://meli.la/1HF42WW"
    },
    {
        id: 108,
        title: "Kit 30 Cabide De Madeira Adulto Grande Antideslizante Slim",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_640841-MLA99829184729_112025-F.webp",
        price: "R$ 113,95 à 119,90",
        category: "casa",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/60MczAv5p9?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2yUutBA"
    },
    {
        id: 109,
        title: "Tênis StreetLife Masculino Feminino Famosinho Promoção (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mc2bouyt5sive0@resize_w450_nl.webp",
        price: "R$ 145,97",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/4qAfbBHxxO?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/4qAfbBHxxO?share_channel_code=1"
    },
    {
        id: 110,
        title: "Tênis Tesla Coil All Black (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-metbc9vvz94y45@resize_w450_nl.webp",
        price: "R$ 49,99",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/5q3CnITDoY?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/5q3CnITDoY?share_channel_code=1"
    },
    {
        id: 111,
        title: "Iphone 15 128/512 GB (Mercado Livre Original, Shopee Usado)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_831434-MLA96401363339_102025-F.webp",
        price: "R$ 4.024,00 à 4.124,41",
        category: "Telefones",
        subcategory: "iPhone",
        shopeeLink: "https://s.shopee.com.br/9KdDlO6oPJ?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/19oirxh"
    },
    {
        id: 112,
        title: "iPhone 16 Plus 256 GB Rosa Shopee / iPhone 16 128/256GB (Mercado Livre Original) (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_842494-MLA96419095420_102025-F.webp",
        price: "R$ 5.334,00",
        category: "Telefones",
        subcategory: "iPhone",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2WnDoAU"
    },
    {
        id: 113,
        title: "iPhone 11 Pro (Usado Shopee com 70% bateria) (Apenas Shopee)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_839025-MLA95685070222_102025-F.webp",
        price: "R$ 1.388,79",
        category: "Telefones",
        subcategory: "iPhone",
        shopeeLink: "https://s.shopee.com.br/3B2eyO7k2F?share_channel_code=1",
        mercadoLivreLink: "#"
    },
    {
        id: 114,
        title: "Xiaomi Poco X7 Pro 256/512GB (Shopee 5g NFC",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_674066-MLA99563535558_122025-F.webp",
        price: "R$ 2.090,00 à 2.502,32",
        category: "Telefones",
        subcategory: "Xiaomi",
        shopeeLink: "https://s.shopee.com.br/AUpBAxScqr?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1UvCfGJ"
    },
    {
        id: 115,
        title: "Smartphone Xiaomi Poco C85 256gb +fone, relógio Brinde",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_613821-MLB94444083625_102025-F.webp",
        price: "R$ 882,28 à 939,00",
        category: "Telefones",
        subcategory: "Xiaomi",
        shopeeLink: "https://s.shopee.com.br/50UJ9wIBDw?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1kfZJLV"
    },
    {
        id: 116,
        title: "Mouse Gamer Attack Shark X11 Branco 22000 Dpi (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_844880-MLA79274666536_092024-F.webp",
        price: "R$ 229,00",
        category: "eletronicos",
        subcategory: "Mouse",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1DhkPto"
    },
    {
        id: 117,
        title: "Fone De Ouvido Headset Gamer Rgb Led Pc (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_727343-MLB90817117910_082025-F.webp",
        price: "R$ 52,99",
        category: "eletronicos",
        subcategory: "Headset",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/11bLSyw"
    },
    {
        id: 118,
        title: "Headset Gamer Redragon H510-Pro Zeus (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_797324-MLA95633278998_102025-F.webp",
        price: "R$ 317,99",
        category: "eletronicos",
        subcategory: "Headset",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2BYiJ45"
    },
    {
        id: 119,
        title: "Mouse Sem Fio Oman Preto (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_853463-MLA99517621875_112025-F.webp",
        price: "R$ 59,90",
        category: "eletronicos",
        subcategory: "Mouse",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2Jaxyvj"
    },
    {
        id: 120,
        title: "Vintex Rolo De Microfibras 29x29cm (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_822352-MLB107518735179_022026-F.webp",
        price: "R$ 59,53",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2DBARo1"
    },
    {
        id: 121,
        title: "Glazy Anti Fog 500ml Anti Embacante Vonixx Limpa Vidros",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_710997-MLB107592102485_022026-F.webp",
        price: "R$ 51,78 à 52,90",
        category: "carro",
        subcategory: "Interior do Carro",
        shopeeLink: "https://s.shopee.com.br/9AJoxWgYD7?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2igfZYV"
    },
    {
        id: 122,
        title: "Aromatizante Cheirinho Vonixx New Car Automotivo",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_932254-MLA105995562665_012026-F.webp",
        price: "R$ 19,99 à 22,90",
        category: "carro",
        subcategory: "Interior do Carro",
        shopeeLink: "https://s.shopee.com.br/BP0FMIn6l?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2W36wzL"
    },
    {
        id: 123,
        title: "Aroma Carro Vonixx Cheirinho Odorizador",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_685471-MLB105573985023_012026-F.webp",
        price: "R$ 21,23",
        category: "carro",
        subcategory: "Interior do Carro",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/18D7zHJ"
    },
    {
        id: 124,
        title: "Mangueira Flexível Mangueira Mágica",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_871290-MLA99609936970_122025-F.webp",
        price: "R$ 19,90 à 45,97",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "https://s.shopee.com.br/807raBvaoy?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2RePfjZ"
    },
    {
        id: 125,
        title: "Câmera De Re Automotiva 8 Leds Hd Infravermelho Visão Noturna (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_856616-MLA96076005507_102025-F.webp",
        price: "R$ 31,88",
        category: "carro",
        subcategory: "Acessórios Automotivos",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/13z6aBZ"
    },
    {
        id: 126,
        title: "Cabo Recarregar Bateria Startools 2,2 Mts 300amp Automotiva (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_973263-MLA99900334773_112025-F.webp",
        price: "R$ 32,38",
        category: "carro",
        subcategory: "Acessórios Automotivos",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/1diDvVw"
    },
    {
        id: 127,
        title: "Mini Aspirador De Pó Portátil Potente Recarregável Usb",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_682094-MLU77169623292_072024-F.webp",
        price: "R$ 20,99 à 33,60",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "https://s.shopee.com.br/9AJp6z7ox0?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1cA56qk"
    },
    {
        id: 128,
        title: "Kit Lavagem Automotiva Vonixx",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_942117-MLA106965144250_022026-F.webp",
        price: "R$ 111,45 à 151,91",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "https://s.shopee.com.br/8fNYWbnG8U?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2vuRwTb"
    },
    {
        id: 129,
        title: "Kit Limpa Vidros 4 em 1 Vonixx com Toalha Microfibra e Aplicador 500ml",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_831291-MLA99451179836_112025-F.webp",
        price: "R$ 32,52 à 38,71",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "https://s.shopee.com.br/9AJp7lAQiP?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2a8i2TB"
    },
    {
        id: 130,
        title: "Snow Foam Pulverizador Manual Borrifador Espuma 2l",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_878602-MLB91054690242_092025-F.webp",
        price: "R$ 37,90",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "https://s.shopee.com.br/5q3N9kTR31?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2NVWKg6"
    },
    {
        id: 131,
        title: "Cera Automotiva Vitrificadora Blend Vonixx",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_969634-MLA99443031276_112025-F.webp",
        price: "R$ 47,70 à 62,92",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "https://s.shopee.com.br/7AYkkM2NRK?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2v9HMiR"
    },
    {
        id: 132,
        title: "Limpa Roda Automotiva IZER 500ml (Shoppe Izer + Vexus)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_676065-MLA99335499294_112025-F.webp",
        price: "R$ 36,32 à 39,90",
        category: "carro",
        subcategory: "Limpeza Automotiva",
        shopeeLink: "https://s.shopee.com.br/8ARHwML8RX?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1fe3zXm"
    },
    {
        id: 133,
        title: "Óleo Motor Volkswagen 5w40 Sintético GS55553R2BRA (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_685749-MLA90531129321_082025-F.webp",
        price: "R$ 40,50",
        category: "carro",
        subcategory: "Itens Gerais para Carro",
        shopeeLink: "https://meli.la/1hTt1R1",
        mercadoLivreLink: "https://meli.la/1hTt1R1"
    },
    {
        id: 134,
        title: "Som Automotivo H-tech ht-1025 Bluetooth Usb Mp3 com controle",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_767767-MLA99700574194_122025-F.webp",
        price: "R$ 56,86 à 67,90",
        category: "carro",
        subcategory: "Interior do Carro",
        shopeeLink: "https://s.shopee.com.br/4LEZNgqhMb?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1kw9dsD"
    },
    {
        id: 135,
        title: "Kit Central Multimídia Universal (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_948492-MLB93961442855_102025-F.webp",
        price: "R$ 198,70",
        category: "carro",
        subcategory: "Acessórios Automotivos",
        shopeeLink: "https://meli.la/1VUJFmm",
        mercadoLivreLink: "https://meli.la/1VUJFmm"
    },
    {
        id: 136,
        title: "Mousepad Gamer Antiderrapante 80x30cm Jogos Dragão Chinês (Shopee 80x40cm)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_785475-MLB100858864133_122025-F-mousepad-gamer-antiderrapante-80x30cm-jogos-drago-chins.webp",
        price: "R$ 29,90 à 34,99",
        category: "eletronicos",
        subcategory: "Mousepad",
        shopeeLink: "https://s.shopee.com.br/900Owzh9Zn?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1QHzT15"
    },
    {
        id: 137,
        title: "Mouse Pad Gamer Abstrato MK Premium Antiderrapante (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ly3kvgulgmxj26@resize_w450_nl.webp",
        price: "R$ 29,99",
        category: "eletronicos",
        subcategory: "Mousepad",
        shopeeLink: "https://s.shopee.com.br/5q3NBOetL4?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/5q3NBOetL4?share_channel_code=1"
    },
    {
        id: 138,
        title: "Kit Mobilador Completo Hub Tipo C Mouse Gamer Teclado Uma Mão Mouse Pad Tripé (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjiw4tx7x8g28c.webp",
        price: "R$ 68,99",
        category: "eletronicos",
        subcategory: "Geral",
        shopeeLink: "https://s.shopee.com.br/4qApzepDCh?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/4qApzepDCh?share_channel_code=1"
    },
    {
        id: 139,
        title: "Teclado Mecânico Aula F75 Preto Sem Fio RGB (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_737520-MLA99930414501_112025-F.webp",
        price: "R$ 379,47",
        category: "eletronicos",
        subcategory: "Teclado",
        shopeeLink: "#",
        mercadoLivreLink: "https://meli.la/2GjYmEc"
    },
    {
        id: 140,
        title: "Monitor Gamer Aoc 24 180hz 0,5ms Ips (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_741210-MLA99948558237_112025-F.webp",
        price: "R$ 699,00 à 899,00",
        category: "eletronicos",
        subcategory: "Monitor",
        shopeeLink: "https://meli.la/1TpJj3j",
        mercadoLivreLink: "https://meli.la/1TpJj3j"
    },
    {
        id: 141,
        title: "Monitor Gamer Curvo 24 Ips Full Hd 180hz 1ms Freesync Hdmi (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_874248-MLB106209080073_012026-F.webp",
        price: "R$ 741,57 à 1.099,44",
        category: "eletronicos",
        subcategory: "Monitor",
        shopeeLink: "https://meli.la/1R3Gdnj",
        mercadoLivreLink: "https://meli.la/1R3Gdnj"
    },
    {
        id: 142,
        title: "Suporte Para Notebook Com Cooler",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_605768-MLB31735617469_082019-F.webp",
        price: "R$ 59,95 à 79,99",
        category: "eletronicos",
        subcategory: "Notebook",
        shopeeLink: "https://s.shopee.com.br/7fV1NaquNE?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/34cAZtD"
    },
    {
        id: 143,
        title: "Notebook Asus Vivobook Go 15 16gb Ram 512gb Ssd (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_721783-MLA99507462046_112025-F.webp",
        price: "R$ 3.336,61 à 3.899,00",
        category: "eletronicos",
        subcategory: "Notebook",
        shopeeLink: "https://meli.la/2B49xBB",
        mercadoLivreLink: "https://meli.la/2B49xBB"
    },
    {
        id: 144,
        title: "Tênis Asics Dynablast 5 Feminino Corrida (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_764207-MLB106826872350_022026-F-tnis-asics-dynablast-5-feminino-corrida-caminhada.webp",
        price: "R$ 444,36 à 799,90",
        category: "tenis",
        subcategory: "Corrida",
        shopeeLink: "https://meli.la/2GzmXFQ",
        mercadoLivreLink: "https://meli.la/2GzmXFQ"
    },
    {
        id: 145,
        title: "Tenis Corrida Olympikus Corre 4 Lançamento Original (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_739316-MLB95623611790_102025-F-tenis-corrida-olympikus-corre-4-lancamento-original.webp",
        price: "R$ 577,36 à 749,88",
        category: "tenis",
        subcategory: "Corrida",
        shopeeLink: "https://meli.la/1UshGrq",
        mercadoLivreLink: "https://meli.la/1UshGrq"
    },
    {
        id: 146,
        title: "Tênis Asics Revelation Original Macio Corrida Caminhada (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_881530-MLB106688995208_022026-F-tnis-asics-revelation-original-macio-corrida-caminhada.webp",
        price: "R$ 99,90 à 299,90",
        category: "tenis",
        subcategory: "Corrida",
        shopeeLink: "https://meli.la/1eFRHYZ",
        mercadoLivreLink: "https://meli.la/1eFRHYZ"
    },
    {
        id: 147,
        title: "Tênis Fila Recovery Feminino Corrida (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_652828-MLB106832202314_022026-F-tnis-fila-recovery-feminino-corrida-caminhada.webp",
        price: "R$ 349,50 à 399,90",
        category: "tenis",
        subcategory: "Corrida",
        shopeeLink: "https://meli.la/1svam4n",
        mercadoLivreLink: "https://meli.la/1svam4n"
    },
    {
        id: 148,
        title: "Tênis Fila Progress Lite Masculino Corrida (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_944363-MLB107460894325_022026-F-tnis-fila-progress-lite-masculino-corrida.webp",
        price: "R$ 275,40 à 333,22",
        category: "tenis",
        subcategory: "Corrida",
        shopeeLink: "https://meli.la/1kvujxp",
        mercadoLivreLink: "https://meli.la/1kvujxp"
    },
    {
        id: 149,
        title: "Tênis Kappa Run 200 Original Caminhada Academia (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_845503-MLA107369533213_022026-F-tnis-kappa-run-200-original-caminhada-academia.webp",
        price: "R$ 89,22 à 169,99",
        category: "tenis",
        subcategory: "Treino/Academia",
        shopeeLink: "https://meli.la/2Xp7AHb",
        mercadoLivreLink: "https://meli.la/2Xp7AHb"
    },
    {
        id: 150,
        title: "Tênis Academia Caminhada Maculino Feminino Leve Corrida Zero (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_942019-MLB99760958810_122025-F-tnis-academia-caminhada-maculino-feminino-leve-corrida-zero.webp",
        price: "R$ 74,99 à 99,99",
        category: "tenis",
        subcategory: "Treino/Academia",
        shopeeLink: "https://meli.la/18nx5xW",
        mercadoLivreLink: "https://meli.la/18nx5xW"
    },
    {
        id: 151,
        title: "Tenis Masculino E Feminino De Academia/Caminhada Ortopedico (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_981987-MLB79987886899_102024-F-tenis-masculino-e-feminino-de-caminhada-ortopedico-crossfit.webp",
        price: "R$ 67,80 à 78,00",
        category: "tenis",
        subcategory: "Treino/Academia",
        shopeeLink: "https://meli.la/149oPyv",
        mercadoLivreLink: "https://meli.la/149oPyv"
    },
    {
        id: 152,
        title: "Tênis Challenge Fitness Unissex Treino Academia E Caminhada (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_658312-MLB79829687809_102024-F-tnis-challenge-fitness-unissex-treino-academia-e-caminhada.webp",
        price: "R$ 78,70",
        category: "tenis",
        subcategory: "Treino/Academia",
        shopeeLink: "https://meli.la/2etRY3p",
        mercadoLivreLink: "https://meli.la/2etRY3p"
    },
    {
        id: 153,
        title: "Tênis Esportivo Confortável Academia Corrida Academia fittshoes (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mj97qt8vbcoy58.webp",
        price: "R$ 59,99",
        category: "tenis",
        subcategory: "Treino/Academia",
        shopeeLink: "https://s.shopee.com.br/7fV1PbfsIe?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/7fV1PbfsIe?share_channel_code=1"
    },
    {
        id: 154,
        title: "Tênis Feminino Academia para Mulher Caminhada Promoção O2X Corrida (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbfbrp7g5uqq91.webp",
        price: "R$ 51,95 à 99,90",
        category: "tenis",
        subcategory: "Treino/Academia",
        shopeeLink: "https://s.shopee.com.br/7KsB10yGnj?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/7KsB10yGnj?share_channel_code=1"
    },
    {
        id: 155,
        title: "Lovito Tênis Vintage Liso Com Sola Macia De Lona Para Mulheres (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-82608-mki0o1ae835xcc.webp",
        price: "R$ 60,90 à 65,90",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/AACMOYAPQG?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/AACMOYAPQG?share_channel_code=1"
    },
    {
        id: 156,
        title: "Tênis Esportivo Casual W-Box Air Pulse 90 Unissex (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbcsd4cp4d8952.webp",
        price: "R$ 79,90 à 122,92",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/AACMOavzwA?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/AACMOavzwA?share_channel_code=1"
    },
    {
        id: 157,
        title: "Tenis Couro Starr StreetWear Masculino (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbmiylkis7egaa.webp",
        price: "R$ 184,86 à 194,58",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/7KsB1PfRNg?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/7KsB1PfRNg?share_channel_code=1"
    },
    {
        id: 158,
        title: "Tenis QIX Trek Urban Hiking Streetwear Skate Kings Original (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd4y-m7avxaho07w0ae.webp",
        price: "R$ 307,49 à 323,67",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/5VQWq4ugcd?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/5VQWq4ugcd?share_channel_code=1"
    },
    {
        id: 159,
        title: "Tênis Masculino Branco Lançamento Confortável 34 a 43 (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcqpsi9g03r5a2.webp",
        price: "R$ 59,60",
        category: "tenis",
        subcategory: "Casual",
        shopeeLink: "https://s.shopee.com.br/LiQgbrPaA?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/LiQgbrPaA?share_channel_code=1"
    },
    {
        id: 160,
        title: "Calça Skinny Preta Masculina Jeans",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_649397-MLB86480128727_062025-F.webp",
        price: "R$ 58,90 à 59,99",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/6KzfIzz7pu?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2KEC6ba"
    },
    {
        id: 161,
        title: "Calça Jeans Wide Leg Feminina Cintura Alta",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_986413-MLB103709559910_012026-F.webp",
        price: "R$ 49,99 à 81,60",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/4LEavgFNpQ?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2AjDLcx"
    },
    {
        id: 162,
        title: "Kit 2 Short De Linho Masculino Básico Mauricinho Premium",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_835476-MLB82131786885_012025-F-kit-2-short-de-linho-masculino-basico-mauricinho-premium.webp",
        price: "R$ 43,83 à 89,90",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/9pZXTy3GkQ?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2ikeBDg"
    },
    {
        id: 163,
        title: "Kit 6 Cuecas Lupo Boxer Box Sem Costura Basic Microfibra",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_724774-MLB100762267821_122025-F-kit-6-cuecas-lupo-boxer-box-sem-costura-basic-microfibra.webp",
        price: "R$ 139,90 à 288,63",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/4frRKakRLm?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2PjJy2M"
    },
    {
        id: 164,
        title: "Kit 10 Cuecas Boxer Lisa Polo Wear (Shopee 5 Unidades)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_751178-MLB101662448092_122025-F.webp",
        price: "R$ 64,12 à 105,99",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/2VmwkjlOvj?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2ZwA1B1"
    },
    {
        id: 165,
        title: "Kit 2 Calças Jogger Tactel Com Elastano Impulse",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_664658-MLB96932532195_112025-F-kit-2-calcas-jogger-tactel-com-elastano-impulse.webp",
        price: "R$ 71,97 à 124,83",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/6VJ5WEF41E?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2hGNXwa"
    },
    {
        id: 166,
        title: "Calça Jeans Wide Leg Feminina Cintura Alta Sem Lycra (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_717613-MLB96633630079_102025-F-calca-jeans-wide-leg-feminina-cintura-alta-sem-lycra-stillge.webp",
        price: "R$ 59,31 à 109,99",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://meli.la/27anCdh",
        mercadoLivreLink: "https://meli.la/27anCdh"
    },
    {
        id: 167,
        title: "Kit Com 3 Conjuntos De Sutiã Reforçado E Calcinha Fio Duplo (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_744525-MLB86106138091_062025-F-kit-com-3-conjuntos-de-suti-reforcado-e-calcinha-fio-duplo.webp",
        price: "R$ 60,84 à 98,00",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://meli.la/134anka",
        mercadoLivreLink: "https://meli.la/134anka"
    },
    {
        id: 168,
        title: "Kit 3 Blusa Feminina Suplex Manga Curta Baby tee (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgslhyqgmd53e1.webp",
        price: "R$ 40,50",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/8KkjiC6c1V?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/8KkjiC6c1V?share_channel_code=1"
    },
    {
        id: 169,
        title: "Calça Pantalona Alfaiataria Premium Com Bolso (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ma4qg4onmdjb35.webp",
        price: "R$ 49,80 à 129,90",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/3B2dYn1aI9?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/3B2dYn1aI9?share_channel_code=1"
    },
    {
        id: 170,
        title: "Sutiã Com Alcinha Alta Sustentação Com Bojo Removível Conforto (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7ra2s-mbmk25nwr76k44.webp",
        price: "R$ 19,00",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/5q3OjjLYlS?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/5q3OjjLYlS?share_channel_code=1"
    },
    {
        id: 171,
        title: "KIT 10 Calcinhas Empina Bumbum Fio Dental Sem Costura no Bumbum (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ma31trlm6qt5e3.webp",
        price: "R$ 66,89",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/9KdGuBPDxS?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/9KdGuBPDxS?share_channel_code=1"
    },
    {
        id: 172,
        title: "KIT COM 4 SUTIÃS Reforçados Plus Size Alta Sustentação (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjae1gjq4jybde.webp",
        price: "R$ 35,98 à 60,96",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/2BA6N2chqq?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/2BA6N2chqq?share_channel_code=1"
    },
    {
        id: 173,
        title: "Pijama Americano com botoes em Malha blogueirinha (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfh20zin86x0d6.webp",
        price: "R$ 29,99 à 31,99",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/2BA6N5O5aE?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/2BA6N5O5aE?share_channel_code=1"
    },
    {
        id: 174,
        title: "Kit 3 Cropped Tube Tomara Que Caia (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mad6r7g1xn95fb.webp",
        price: "R$ 30,50 à 50,00",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/6pvvvgjitz?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/6pvvvgjitz?share_channel_code=1"
    },
    {
        id: 175,
        title: "Top Cropped Feminino Frente Única com Amarração (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdyg-md2lsmys37cp2e.webp",
        price: "R$ 15,99 à 30,00",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/1qXFyYaXO1?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/1qXFyYaXO1?share_channel_code=1"
    },
    {
        id: 176,
        title: "Cropped Feminino Corset Renda Corselet Alça Regulagem (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdutmgvncwsg7d.webp",
        price: "R$ 49,99 à 51,99",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/4AvAkt0O8D?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/4AvAkt0O8D?share_channel_code=1"
    },
    {
        id: 177,
        title: "Kit 3 Ou 1 Unidade Cropped Gola Quadrada Decote Feminino Manga Curta (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81zug-mksjuvi43k0339.webp",
        price: "R$ 19,99 à 41,99",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/8ARJWFbouV?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/8ARJWFbouV?share_channel_code=1"
    },
    {
        id: 178,
        title: "Calça Jogger Preta Masculina Dry Fit (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lp2ydonmf0wle7.webp",
        price: "R$ 40,96 à 49,96",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/AUpEJe5bNP?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/AUpEJe5bNP?share_channel_code=1"
    },
    {
        id: 179,
        title: "Calça Jeans Cargo Masculina Preta 34 Ao 44 (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-821f9-mgp8iq7zwu8bf5.webp",
        price: "R$ 59,90 à 100,00",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/7VBckEA3sa?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/7VBckEA3sa?share_channel_code=1"
    },
    {
        id: 180,
        title: "Calça Balão Preta Edição Limitada Baggy Larga 36 ao 48 (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-8259z-mg3xls4zbvns47.webp",
        price: "R$ 76,99 à 179,99",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/4AvAm7ZPQp?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/4AvAm7ZPQp?share_channel_code=1"
    },
    {
        id: 181,
        title: "Kit 4 Camiseta Oversized Streetwear Masculina Gola Alta Algodão (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-me7b031f82yre9.webp",
        price: "R$ 94,99 à 99,98",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/gLIbl730E?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/gLIbl730E?share_channel_code=1"
    },
    {
        id: 182,
        title: "Conjunto Camiseta e Bermuda Moletom Syna World Streetwear (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mhgv9vqs0sg337.webp",
        price: "R$ 92,67 à 98,60",
        category: "roupas",
        subcategory: "Masculino",
        shopeeLink: "https://s.shopee.com.br/6KzfMDOKhu?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/6KzfMDOKhu?share_channel_code=1"
    },
    {
        id: 183,
        title: "Blusinha Cropped Bata Borboleta Feminina (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-meugjnrxrs3nf0.webp",
        price: "R$ 27,99 à 79,99",
        category: "roupas",
        subcategory: "Feminino",
        shopeeLink: "https://s.shopee.com.br/60MoxjeFDM?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/60MoxjeFDM?share_channel_code=1"
    },
    {
        id: 184,
        title: "Banco Academia Regulável Supino Musculação Reclinável",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_850325-MLA99452787722_112025-F.webp",
        price: "R$ 375,16 à 849,90",
        category: "academia",
        subcategory: "Equipamentos",
        shopeeLink: "https://s.shopee.com.br/1LazQUXHWn?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1V9uufb"
    },
    {
        id: 185,
        title: "Estação De Musculação 45kg Academia Em Casa",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_983948-MLB106593170534_022026-F.webp",
        price: "R$ 1.668,40 à 2.349,00",
        category: "academia",
        subcategory: "Equipamentos",
        shopeeLink: "https://s.shopee.com.br/LiSEnSi3j?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1sdyoqq"
    },
    {
        id: 186,
        title: "Balança Digital Bioimpedância Bluetooth",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_934432-MLA95533070350_102025-F.webp",
        price: "R$ 35,99 à 59,99",
        category: "academia",
        subcategory: "Equipamentos",
        shopeeLink: "https://s.shopee.com.br/40bkbar8Ym?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1DdCYAX"
    },
    {
        id: 187,
        title: "Suplemento Academia Creatina Max Titanium Em Pó Pote 150g Creatina Sem Sabor",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_860438-MLA99627617112_122025-F.webp",
        price: "R$ 27,90 à 57,02",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://s.shopee.com.br/9pZXYPfm2N?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/13prfuB"
    },
    {
        id: 188,
        title: "Creatina Monohidratada 1Kg Soldiers Nutrition 100% Pura Importada",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_640712-MLA107002677903_022026-F.webp",
        price: "R$ 66,90 à 239,90",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://s.shopee.com.br/9KdGyDq2GZ?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1RTwBaz"
    },
    {
        id: 189,
        title: "Growth Creatina Monohidratada Pote 100g Sem Sabor (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_770224-MLA100089592563_122025-F.webp",
        price: "R$ 41,69",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://meli.la/1FRcjEz",
        mercadoLivreLink: "https://meli.la/1FRcjEz"
    },
    {
        id: 190,
        title: "Creatina Monohidratada Pura 1kg Dark Lab Unidade Sem sabor",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_848860-MLA99964507641_112025-F.webp",
        price: "R$ 69,90 à 179,90",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://s.shopee.com.br/qeirDou6D?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1c6A8Ms"
    },
    {
        id: 191,
        title: "Whey Concentrado 80% Growth Supplements Sabor Brigadeiro x 1kg (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_906081-MLA49862575294_052022-F.webp",
        price: "R$ 189,90",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://meli.la/17dhktG",
        mercadoLivreLink: "https://meli.la/17dhktG"
    },
    {
        id: 192,
        title: "Pasta de Amendoim Dr. Peanut Gourmet Vários Sabores 600g",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lukrpe1esqcg94.webp",
        price: "R$ 39,00 à 78,90",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://s.shopee.com.br/W1sT68mf7?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1zE8EFN"
    },
    {
        id: 193,
        title: "Multivitaminico 120 Capsulas Growth Supplement Rende 4 Meses (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_775936-MLA95634523914_102025-F.webp",
        price: "R$ 55,76 à 60,49",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://meli.la/1NjpUne",
        mercadoLivreLink: "https://meli.la/1NjpUne"
    },
    {
        id: 194,
        title: "Omegafor Plus 60 Cápsulas Ômega 3 Vitafor (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_777116-MLA99998014703_112025-F.webp",
        price: "R$ 92,06 à 132,00",
        category: "academia",
        subcategory: "Suplementos",
        shopeeLink: "https://meli.la/113sopX",
        mercadoLivreLink: "https://meli.la/113sopX"
    },
    {
        id: 195,
        title: "Kit 3 Bermudas Dry Fit De Alto Padrão Para Academia (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_653478-MLB108194594139_032026-F-kit-3-bermudas-dry-fit-de-alto-padro-para-academia.webp",
        price: "R$ 88,34 à 134,99",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://meli.la/2wb93xo",
        mercadoLivreLink: "https://meli.la/2wb93xo"
    },
    {
        id: 196,
        title: "Roupas De Academia Feminina Camiseta Tapa Bumbum (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_915035-MLB52253392469_112022-F-roupas-de-academia-feminina-camiseta-tapa-bumbum-sobre-legin.webp",
        price: "R$ 26,42 à 39,99",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://meli.la/1tfpTMW",
        mercadoLivreLink: "https://meli.la/1tfpTMW"
    },
    {
        id: 197,
        title: "Bermuda Suplex Ciclista Bolso Lateral Cós Alta (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_739693-MLB101681292772_122025-F-bermuda-suplex-ciclista-bolso-lateral-cos-alta.webp",
        price: "R$ 31,71 à 42,55",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://meli.la/2j7m5wT",
        mercadoLivreLink: "https://meli.la/2j7m5wT"
    },
    {
        id: 198,
        title: "Camiseta Dry-fit Preta Caveira Unisex Dark Lab (Apenas Mercado Livre Original)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_907332-MLB97660814552_112025-F-camiseta-dry-fit-preta-caveira-unisex-dark-lab.webp",
        price: "R$ 43,30 à 69,31",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://meli.la/2ovuV7E",
        mercadoLivreLink: "https://meli.la/2ovuV7E"
    },
    {
        id: 199,
        title: "Calça Legging Leg Flare Zero Transparência Grossa Academia (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_658388-MLB90869609638_082025-F-calca-legging-leg-flare-zero-transparncia-grossa-academia.webp",
        price: "R$ 34,90 à 59,90",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://meli.la/2LUuiR5",
        mercadoLivreLink: "https://meli.la/2LUuiR5"
    },
    {
        id: 200,
        title: "6 Pares Meias Puma Cano Médio Alto Atoalhada Academia Sport (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_867938-MLB101473500189_122025-F-6-pares-meias-puma-cano-medio-alto-atoalhada-academia-sport.webp",
        price: "R$ 59,49 à 131,65",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://meli.la/1FJvWRj",
        mercadoLivreLink: "https://meli.la/1FJvWRj"
    },
    {
        id: 201,
        title: "Kit 3 Pç Shorts Masculina Esporte Academia Ziper Refletivo Masculino (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7ra3g-mbljy8n6kd2270.webp",
        price: "R$ 49,99 à 69,99",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/40bke9k6aa?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/40bke9k6aa?share_channel_code=1"
    },
    {
        id: 202,
        title: "Calça Legging Canelada de Cintura Alta Sem Costura para Academia Feminina (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lzhsnpao0az924.webp",
        price: "R$ 32,99 à 69,99",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/1gDprssn3p?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/1gDprssn3p?share_channel_code=1"
    },
    {
        id: 203,
        title: "Conjunto Academia Short e Top Duplo Poliamida Feminina Zero Transparência (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mg8lm6vbvevbec.webp",
        price: "R$ 64,90",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/4AvAqUnGjX?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/4AvAqUnGjX?share_channel_code=1"
    },
    {
        id: 204,
        title: "Conjunto Fitness Roupa de Academia Feminina Top e Calça Zero Transparência (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-me9r4noud43n0a.webp",
        price: "R$ 75,90 à R$119,90",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/5Ani2LreQk?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/5Ani2LreQk?share_channel_code=1"
    },
    {
        id: 205,
        title: "Kit 12 pares de Meias feminina para academia confortáveis algodão (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7ratc-ma2q8ex6mrsc00.webp",
        price: "R$ 23,66",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/9fG7OdRJiB?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/9fG7OdRJiB?share_channel_code=1"
    },
    {
        id: 206,
        title: "Macacão Feminino Longo Para Treino Roupa de Academia com Costas Abertas (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjwyvpe82e4hb2.webp",
        price: "R$ 59,90 á 76,77",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/9zsxnGUO3v?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/9zsxnGUO3v?share_channel_code=1"
    },
    {
        id: 207,
        title: "Short Saia Academia Feminino Cintura Alta Tapa Bumbum (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mh236zedcwe89d.webp",
        price: "R$ 27,99 á 99,99",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/6KzfQXhfPc?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/6KzfQXhfPc?share_channel_code=1"
    },
    {
        id: 208,
        title: "Blusa Manga Longa Gola Alta Academia Inverno moda 2026 (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rff9-m94n27sgl5uv83.webp",
        price: "R$ 64,90 á R$65,90",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/4LEb2t6TYS?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/4LEb2t6TYS?share_channel_code=1"
    },
    {
        id: 209,
        title: "Kit 2 Camisas Dry Fit Academia Treino Musculação (Apenas Shopee)",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbgmh7tormjma2.webp",
        price: "R$ 40,86 á R$109,90",
        category: "academia",
        subcategory: "Roupa de Academia",
        shopeeLink: "https://s.shopee.com.br/4AvAqbShl4?share_channel_code=1",
        mercadoLivreLink: "https://s.shopee.com.br/4AvAqbShl4?share_channel_code=1"
    },
    {
        id: 210,
        title: "Strap Profissional 100% Algodão",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_664019-MLA99602312890_122025-F.webp",
        price: "R$ 19,09 á R$24,90",
        category: "academia",
        subcategory: "Acessorios Fitness",
        shopeeLink: "https://s.shopee.com.br/20qgIiAyYe?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/2g9nanu"
    },
    {
        id: 211,
        title: "Colchonete 98 X 50 X 3 Academia Yoga Ginasticaa (Shopee Outro Tamanho)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_980086-MLU75889731135_042024-F.webp",
        price: "R$ 22,59 á R$27,00",
        category: "academia",
        subcategory: "Acessorios Fitness",
        shopeeLink: "https://s.shopee.com.br/5L78GyUFhA?share_channel_code=1",
        mercadoLivreLink: "https://meli.la/1eZyqCi"
    },
    {
        id: 212,
        title: "Kit 20 Itens Esportivos Para Treino Em Casa Academia Funcional (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_875719-MLA101786839575_122025-F.webp",
        price: "R$ 52,36 á R$59,97",
        category: "academia",
        subcategory: "Acessorios Fitness",
        shopeeLink: "https://meli.la/2JVuAZb",
        mercadoLivreLink: "https://meli.la/2JVuAZb"
    },
    {
        id: 213,
        title: "Kit 5 Faixa Elástica Mini Band Para Treino Resistência Funcional Academia (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_984500-MLA103746126662_012026-F.webp",
        price: "R$ 19,00",
        category: "academia",
        subcategory: "Acessorios Fitness",
        shopeeLink: "https://meli.la/2TPvD1o",
        mercadoLivreLink: "https://meli.la/2TPvD1o"
    },
    {
        id: 214,
        title: "Kit 5 Faixa Elástica Mini Band Para Treino Resistência Funcional Academia (Apenas Mercado Livre)",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_984500-MLA103746126662_012026-F.webp",
        price: "R$ 19,00",
        category: "academia",
        subcategory: "Acessorios Fitness",
        shopeeLink: "https://meli.la/2TPvD1o",
        mercadoLivreLink: "https://meli.la/2TPvD1o"
    }
];
