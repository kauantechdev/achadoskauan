document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x');
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('bx-x');
                    icon.classList.add('bx-menu');
                }
            });
        });
    }

    window.incrementViews = function(productId) {
        let views = parseInt(localStorage.getItem('product_views_' + productId));
        if (isNaN(views)) {
            views = 12 + ((productId || 0) * 7) % 36;
        }
        views += 1;
        localStorage.setItem('product_views_' + productId, views);
        
        function formatViews(count) {
            if (count >= 500) return '500+';
            if (count >= 100) return '100+';
            if (count >= 50) return '50+';
            return count;
        }

        const badges = document.querySelectorAll('.views-badge[data-product-id="' + productId + '"]');
        badges.forEach(b => {
            b.innerHTML = '👀 ' + formatViews(views) + ' pessoas viram';
        });
    };

    // 1. Render Categories
    const categoriesContainer = document.getElementById('categories-container');
    const filtersContainer = document.querySelector('.filters');

    if (categoriesContainer && typeof categories !== 'undefined') {
        let catHtml = '';
        let filtersHtml = '<button class="filter-btn active" data-filter="all">Todos</button>';

        categories.forEach(cat => {
            // Add Category Card
            catHtml += `
            <div class="category-card" data-category="${cat.id}">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-name">${cat.name}</span>
            </div>
            `;

            // Add Filter Button
            filtersHtml += `<button class="filter-btn" data-filter="${cat.id}">${cat.name}</button>`;
        });

        categoriesContainer.innerHTML = catHtml;
        filtersContainer.innerHTML = filtersHtml;
    }

    // 2. Render Products
    const productContainer = document.getElementById('product-container');

    function renderProducts(productArray) {
        if (!productContainer) return;

        if (productArray.length === 0) {
            productContainer.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted);">Nenhum produto encontrado nesta categoria.</p>';
            return;
        }

        let html = '';
        productArray.forEach(prod => {
            html += createProductCard(prod);
        });

        productContainer.innerHTML = html;
    }

    function createProductCard(prod) {
        // Deterministic mock stats based on ID
        const ratingId = prod.id || Math.floor(Math.random() * 100);

        let views = localStorage.getItem('product_views_' + prod.id);
        if (!views) {
            views = 12 + ((prod.id || 0) * 7) % 36; 
            localStorage.setItem('product_views_' + prod.id, views);
        } else {
            views = parseInt(views);
        }

        function formatViews(count) {
            if (count >= 500) return '500+';
            if (count >= 100) return '100+';
            if (count >= 50) return '50+';
            return count;
        }
        
        let priceHtml = '';
        if (prod.price.includes('à')) {
            const parts = prod.price.split('à');
            const part1 = parts[0].replace('💰', '').replace(/a partir de/i, '').replace('R$', '').trim();
            const part2 = parts[1].replace('R$', '').trim();
            
            // Calculate estimated economy
            const p1Float = parseFloat(part1.replace(/\./g, '').replace(',', '.'));
            const p2Float = parseFloat(part2.replace(/\./g, '').replace(',', '.'));
            
            let economyHtml = '';
            if (!isNaN(p1Float) && !isNaN(p2Float) && p2Float > p1Float) {
                const economy = p2Float - p1Float;
                const economyFormatted = economy.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
                economyHtml = `<div class="economy-badge" style="color: #ff4757; font-weight: 800; font-size: 0.95rem; margin-top: 6px;">🔥 Economize até R$ ${economyFormatted}</div>`;
            }

            priceHtml = `
                <div class="price-main">💰 A partir de R$ ${part1}</div>
                <div class="price-old">De até R$ ${part2}</div>
                ${economyHtml}
            `;
        } else {
            let p = prod.price.replace('💰', '').replace(/a partir de/i, '').replace('R$', '').trim();
            priceHtml = `<div class="price-main">💰 A partir de R$ ${p}</div>`;
        }

        const badges = ['🔥 OFERTA', '💰 MENOR PREÇO', '✨ DESTAQUE'];
        const badgeText = badges[ratingId % badges.length];

        const titleLower = prod.title.toLowerCase();
        const onlyMercadoLivre = titleLower.includes('apenas mercado livre') || titleLower.includes('mercado livre apenas');
        const onlyShopee = titleLower.includes('apenas shopee') || titleLower.includes('shopee apenas');

        let shopeeBtnHtml = '';
        if (!onlyMercadoLivre && prod.shopeeLink) {
            shopeeBtnHtml = `
                    <a href="${prod.shopeeLink}" target="_blank" rel="noopener noreferrer" class="btn btn-shopee" onclick="window.incrementViews(${prod.id})">
                        🟠 Comprar na Shopee
                    </a>`;
        }

        let mlBtnHtml = '';
        if (!onlyShopee && prod.mercadoLivreLink) {
            mlBtnHtml = `
                    <a href="${prod.mercadoLivreLink}" target="_blank" rel="noopener noreferrer" class="btn btn-ml" onclick="window.incrementViews(${prod.id})">
                        🟡 Ver oferta no Mercado Livre
                    </a>`;
        }

        return `
        <article class="product-card" data-category="${prod.category}">
            <div class="product-img-wrapper">
                <span class="sales-badge">${badgeText}</span>
                <span class="views-badge" data-product-id="${prod.id}">👀 ${formatViews(views)} pessoas viram</span>
                <img src="${prod.image}" alt="${prod.title}" loading="lazy">
            </div>
            <div class="product-content">
                <h3 class="product-title" title="${prod.title}">${prod.title}</h3>
                
                <div class="product-stats">
                    <span>⭐ Muito bem avaliado</span> &nbsp;|&nbsp; <span>🛒 Produto popular</span>
                </div>

                <div class="product-price">
                    ${priceHtml}
                </div>
                
                <div class="product-actions">${shopeeBtnHtml}${mlBtnHtml}
                </div>
                <div class="card-disclaimer" style="font-size: 0.75rem; text-align: center; margin-top: 10px; color: var(--text-muted, #777); opacity: 0.8;">
                    * Apenas indicamos produtos. Compras feitas nas lojas oficiais.
                </div>
            </div>
        </article>
        `;
    }

    // 2.5 Render Top Offers
    const topOfertasContainer = document.getElementById('top-ofertas-container');
    if (topOfertasContainer && typeof products !== 'undefined' && products.length > 0) {
        let topOfertas = [];
        // Se existir a lista de IDs das ofertas, busca os produtos por ID
        if (typeof topOffersIds !== 'undefined' && topOffersIds.length > 0) {
            topOfertas = topOffersIds.map(id => products.find(p => p.id === id)).filter(Boolean).slice(0, 6);
        } else {
            // Caso contrário, pega os 6 primeiros produtos da lista (comportamento antigo)
            topOfertas = [...products].slice(0, 6);
        }

        let topOfertasHtml = '';
        topOfertas.forEach(prod => {
            topOfertasHtml += createProductCard(prod);
        });
        topOfertasContainer.innerHTML = topOfertasHtml;
    }

    if (typeof products !== 'undefined') {
        renderProducts(products);
    }

    // 3. Category Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');
    const searchInput = document.getElementById('search-input');
    const subcategoryContainer = document.getElementById('subcategory-filters');

    let currentCategory = 'all';
    let currentSubcategory = 'all';
    let currentSearchTerm = '';

    function renderSubcategories(categoryId) {
        if (!subcategoryContainer) return;

        if (categoryId === 'all') {
            subcategoryContainer.style.display = 'none';
            subcategoryContainer.innerHTML = '';
            return;
        }

        const category = categories.find(c => c.id === categoryId);
        if (category && category.subcategories && category.subcategories.length > 0) {
            let html = '<button class="subcategory-btn active" data-sub="all">Todos</button>';
            category.subcategories.forEach(sub => {
                html += `<button class="subcategory-btn" data-sub="${sub}">${sub}</button>`;
            });
            subcategoryContainer.innerHTML = html;
            subcategoryContainer.style.display = 'flex';

            // Attach event listeners to new subcategory buttons
            const subBtns = document.querySelectorAll('.subcategory-btn');
            subBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // Update active state
                    subBtns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');

                    currentSubcategory = e.target.getAttribute('data-sub');
                    applyFilters();
                });
            });
        } else {
            subcategoryContainer.style.display = 'none';
            subcategoryContainer.innerHTML = '';
        }
    }

    function applyFilters() {
        // Update active class on main category buttons
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === currentCategory);
        });

        // Update active class on category cards
        categoryCards.forEach(card => {
            card.classList.toggle('active', card.getAttribute('data-category') === currentCategory);
        });

        // Filter products array
        let filtered = products;

        // 1. Text Search
        if (currentSearchTerm) {
            const term = currentSearchTerm.toLowerCase();
            filtered = filtered.filter(p =>
                (p.title && p.title.toLowerCase().includes(term)) ||
                (p.category && p.category.toLowerCase().includes(term)) ||
                (p.subcategory && p.subcategory.toLowerCase().includes(term))
            );
        }

        // 2. Main Category
        if (currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }

        // 3. Subcategory
        if (currentSubcategory !== 'all') {
            filtered = filtered.filter(p => p.subcategory === currentSubcategory);
        }

        renderProducts(filtered);
    }

    // Search input listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            applyFilters();
        });
    }

    // Main category filter buttons listener
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentCategory = e.target.getAttribute('data-filter');
                currentSubcategory = 'all'; // Reset subcategory when changing main category
                renderSubcategories(currentCategory);
                applyFilters();
            });
        });
    }

    // Category cards listener
    if (categoryCards) {
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const targetCard = e.target.closest('.category-card');
                if (targetCard) {
                    currentCategory = targetCard.getAttribute('data-category');
                    currentSubcategory = 'all';
                    renderSubcategories(currentCategory);
                    applyFilters();

                    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
});
