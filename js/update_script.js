const fs = require('fs');

const dataStr = fs.readFileSync('c:/Users/Kauan/Desktop/site/js/data.js', 'utf8');

const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);

try {
    vm.runInContext(dataStr, sandbox);
} catch (e) {
    console.error("Error evaluating data.js", e);
}

let categories = sandbox.categories || [];
let products = sandbox.products || [];

// Replace categories with new structured categories
categories = [
    { id: 'Telefones', name: 'Telefones', icon: '📱', subcategories: ['Samsung', 'iPhone', 'Xiaomi', 'Motorola', 'Other Phones'] },
    { id: 'roupas', name: 'Roupas', icon: '👕', subcategories: ['Men\'s Clothing', 'Women\'s Clothing'] },
    { id: 'beleza', name: 'Beleza', icon: '✨', subcategories: ['Skincare', 'Perfumes', 'Personal Care'] },
    { id: 'eletronicos', name: 'Eletrônicos', icon: '💻', subcategories: ['Mouse', 'Mousepad', 'Headset', 'Keyboard', 'Microphone', 'Monitor', 'Notebook', 'TV', 'General Electronics'] },
    { id: 'sneakers', name: 'Sneakers', icon: '👟', subcategories: ['Running', 'Casual', 'Training'] },
    { id: 'gym', name: 'Gym / Fitness', icon: '🏋️', subcategories: ['Supplements', 'Gym Equipment', 'Fitness Accessories', 'Workout Clothing'] },
    { id: 'casa', name: 'Casa & Decoração', icon: '🏠', subcategories: ['Geral'] }
];

function determineSubcategory(p) {
    const title = p.title.toLowerCase();

    if (p.category === 'Telefones' || p.category === 'telefones') {
        p.category = 'Telefones';
        if (title.includes('iphone')) return 'iPhone';
        if (title.includes('samsung') || title.includes('galaxy')) return 'Samsung';
        if (title.includes('xiaomi') || title.includes('poco') || title.includes('redmi')) return 'Xiaomi';
        if (title.includes('moto')) return 'Motorola';
        return 'Other Phones';
    }

    if (p.category === 'eletronicos') {
        if (title.includes('mousepad')) return 'Mousepad';
        if (title.includes('mouse')) return 'Mouse';
        if (title.includes('headset') || title.includes('fone')) return 'Headset';
        if (title.includes('teclado')) return 'Keyboard';
        if (title.includes('microfone')) return 'Microphone';
        if (title.includes('monitor')) return 'Monitor';
        if (title.includes('notebook')) return 'Notebook';
        if (title.includes('tv ') || title.includes('tv') || title.includes('televisao')) return 'TV';
        return 'General Electronics';
    }

    if (p.category === 'beleza') {
        if (title.includes('perfume')) return 'Perfumes';
        if (title.includes('creme') || title.includes('sérum') || title.includes('limpeza') || title.includes('protetor') || title.includes('skin care') || title.includes('sabonete')) return 'Skincare';
        return 'Personal Care';
    }

    if (p.category === 'roupas') {
        if (title.includes('masculina') || title.includes('homem')) return 'Men\'s Clothing';
        if (title.includes('feminina') || title.includes('mulher')) return 'Women\'s Clothing';
        return 'Women\'s Clothing'; // default
    }

    return 'Geral';
}

// Map products and unify links
products = products.map(p => {
    // Unify links
    const newP = {
        title: p.title || '',
        price: p.price || '',
        image: p.image || '',
        category: (p.category === 'telefones') ? 'Telefones' : (p.category || ''),
        subcategory: '',
        shopeeLink: p.shopeeLink || p.shLink || '',
        mercadoLivreLink: p.mercadoLivreLink || p.mlLink || ''
    };

    newP.subcategory = determineSubcategory(newP);

    // Maintain properties order, add id
    return { id: p.id, ...newP };
});

const output = `const categories = ${JSON.stringify(categories, null, 4)};\n\nconst products = ${JSON.stringify(products, null, 4)};\n`;

fs.writeFileSync('c:/Users/Kauan/Desktop/site/js/data.js', output, 'utf8');
console.log('Update successful');
