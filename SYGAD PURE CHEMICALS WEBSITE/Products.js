/**
 * FULL PRODUCT DATABASE
 * Each product now supports "variants" for different sizes/prices as requested.
 */
const allProducts = [
    // --- DAIRY ---
    { id: "spc-dairy-set", cat: "dairy", tag: "Essential", name: "THE SPC DAIRY SET", img: "spc dairy set.jpg.jpg", desc: "A combination of proteins, trace minerals, multivitamins and live yeast culture for mixing with bran & maize germ.", variants: [{ size: "2.35kg", price: 500 }, { size: "1kg", price: 250 }] },
    { id: "magic-set-dairy", cat: "dairy", tag: "Premium", name: "THE SPC MAGIC SET DAIRY", img: "aquafeed daily dairy meal.jpg.jpg", desc: "High energy enzymatic set for peak lactation and milk volume.", variants: [{ size: "Full Set", price: 2100 }] },
    { id: "maxilac", cat: "dairy", tag: "Milk", name: "SPC MAXILAC", img: "maxilac mineral suppliment.jpg.jpg", desc: "Balanced minerals for daily milk production and maintenance.", variants: [{ size: "1kg", price: 250 }, { size: "2kg", price: 450 }] },
    { id: "maxilac-super", cat: "dairy", tag: "Fertility", name: "SPC MAXILAC SUPER", img: "maxilac super one year one calf.jpg.jpg", desc: "Premium heat induction and booster for the 'One Year One Calf' goal.", variants: [{ size: "1kg", price: 280 }] },
    { id: "udder-booster", cat: "dairy", tag: "Health", name: "SPC UDDER BOOSTER", img: "udder booster.jpg.jpg", desc: "Prevents mastitis and improves udder health by regenerating cells.", variants: [{ size: "1kg", price: 1000 }] },
    { id: "dry-cow", cat: "dairy", tag: "Dry Period", name: "SPC DRY COW MINERAL", img: "dry cow mineral supplement.jpg.jpg", desc: "Essential minerals for cows in the dry period to prepare for calving.", variants: [{ size: "2kg", price: 350 }] },
    { id: "semix", cat: "dairy", tag: "Heat", name: "SPC SEMIX", img: "semix(container).jpg.jpg", desc: "Superior estrus mix for rapid heat induction.", variants: [{ size: "250ml", price: 200 }] },
    { id: "gyna-10", cat: "dairy", tag: "Health", name: "GYNA 10", img: "spc gyna 10.jpg.jpg", desc: "Uterine health and reproductive recovery after birth.", variants: [{ size: "500ml", price: 600 }] },
    { id: "pla-out", cat: "dairy", tag: "Recovery", name: "SPC PLA OUT", img: "pla out.jpg.jpg", desc: "Placenta expulsion support post-calving.", variants: [{ size: "500ml", price: 650 }] },
    { id: "high-phos", cat: "dairy", tag: "Minerals", name: "SPC HIGH PHOSPHORUS", img: "highphosphorus maziwa.jpg.jpg", desc: "Targeted mineral support for phosphorus deficiency.", variants: [{ size: "1kg", price: 400 }] },
    { id: "hemahalt-dairy", cat: "dairy", tag: "Tonic", name: "SPC HEMAHALT (DAIRY)", img: "trace mineral suppliment for dairy.jpg.jpg", desc: "Iron and blood tonic for high-yielding productivity.", variants: [{ size: "500ml", price: 500 }] },

    // --- HEIFERS ---
    { id: "heifers-set", cat: "heifers", tag: "Growth", name: "THE SPC HEIFERS SET", img: "the heifer set.jpg.jpg", desc: "Ensures rapid growth and early maturity in young heifers.", variants: [{ size: "2.4kg", price: 500 }] },
    { id: "magic-set-heifers", cat: "heifers", tag: "Premium", name: "MAGIC SET HEIFERS", img: "magic set heifers.jpg.jpg", desc: "Enzymatic booster for maturing heifers.", variants: [{ size: "Full Set", price: 2100 }] },
    { id: "heifers-mineral", cat: "heifers", tag: "Minerals", name: "HEIFERS MINERAL", img: "heifer mineral suppliment.jpg.jpg", desc: "Mineral mix for strong skeletal development.", variants: [{ size: "2kg", price: 400 }] },
    { id: "transitional-mineral", cat: "heifers", tag: "Transition", name: "TRANSITIONAL MINERAL", img: "transitional mineral supplement for heifers.jpg.jpg", desc: "For heifers moving into the dairy cycle.", variants: [{ size: "2kg", price: 370 }] },

    // --- CALVES ---
    { id: "calves-set", cat: "calves", tag: "Starter", name: "SPC CALVES SET", img: "spc calves set.jpg.jpg", desc: "Essential immunity and growth starter for young calves.", variants: [{ size: "Unit", price: 500 }] },
    { id: "calf-mineral", cat: "calves", tag: "Minerals", name: "CALF MINERAL", img: "calf mineral supplement.jpg.jpg", desc: "Trace minerals for immunity and bone growth.", variants: [{ size: "1kg", price: 200 }] },
    { id: "milk-replacer", cat: "calves", tag: "Milk", name: "SPC MILK REPLACER", img: "milk replacer.jpg.jpg", desc: "High quality vitaminized milk substitute.", variants: [{ size: "1kg", price: 700 }] },

    // --- BEEF ---
    { id: "beef-set", cat: "beef", tag: "Weight", name: "THE SPC BEEF SET", img: "spc beef set.jpg.jpg", desc: "For rapid meat production and fattening of beef cattle.", variants: [{ size: "3.4kg", price: 500 }] },
    { id: "bioboost-beef", cat: "beef", tag: "Boost", name: "BIOBOOST BEEF", img: "bioboost beef cows.jpg.jpg", desc: "Rumen optimizer for maximum weight gain.", variants: [{ size: "1kg", price: 550 }] },
    { id: "magic-set-beef", cat: "beef", tag: "Premium", name: "MAGIC SET BEEF", img: "magic set beef.jpg.jpg", desc: "High-performance weight gain set for finishers.", variants: [{ size: "Full Set", price: 2100 }] },

    // --- GOATS & SHEEP ---
    { id: "magic-set-goats", cat: "goats", tag: "Premium", name: "MAGIC SET GOATS", img: "magic set sheep and goats.jpg.jpg", desc: "Fast growth and milk for dairy goats and sheep.", variants: [{ size: "Full Set", price: 2100 }] },
    { id: "shoat-mineral", cat: "goats", tag: "Minerals", name: "SPC SHOAT MINERAL", img: "sheep and goat mineral.jpg.jpg", desc: "Balanced minerals for sheep and goats.", variants: [{ size: "1kg", price: 200 }] },

    // --- PIGS ---
    { id: "pig-set", cat: "pigs", tag: "Growth", name: "THE SPC PIG SET", img: "the pig set.jpg.jpg", desc: "Complete set for weight, health and immunity.", variants: [{ size: "Unit", price: 500 }] },
    { id: "magic-set-pigs", cat: "pigs", tag: "Premium", name: "MAGIC SET PIG", img: "spc magic set pigs.jpg", desc: "Advanced growth for fattening pigs and sow health.", variants: [{ size: "Full Set", price: 2100 }] },
    { id: "pig-mineral", cat: "pigs", tag: "Minerals", name: "SPC PIG MINERAL", img: "pig mineral suppliment.jpg.jpg", desc: "Daily mineral requirements for growing pigs.", variants: [{ size: "1kg", price: 350 }] },

    // --- POULTRY ---
    { id: "magic-layers", cat: "poultry", tag: "Layers", name: "MAGIC SET LAYERS", img: "spc magic set layers.jpg.jpg", desc: "Peak production and health for laying birds.", variants: [{ size: "Full Set", price: 2100 }] },
    { id: "bioboost-layers", cat: "poultry", tag: "Layers", name: "BIOBOOST LAYERS", img: "bioboost for layers.jpg.jpg", desc: "Enhances feed conversion in laying hens.", variants: [{ size: "100g", price: 200 }] },
    { id: "egg-booster", cat: "poultry", tag: "Eggs", name: "EGG BOOSTER", img: "egg booster.jpg.jpg", desc: "Improves shell quality and laying persistency.", variants: [{ size: "700g", price: 700 }] },
    { id: "magic-broiler", cat: "poultry", tag: "Broilers", name: "MAGIC SET BROILER", img: "spc magic set layers.jpg.jpg", desc: "Rapid maturity and health for meat birds.", variants: [{ size: "Full Set", price: 2100 }] },
    { id: "broiler-booster", cat: "poultry", tag: "Broilers", name: "BROILER BOOSTER", img: "broiler booster.jpg.jpg", desc: "Weight gain and stress reduction for broilers.", variants: [{ size: "700g", price: 700 }] },

    // --- GENERAL HEALTH ---
    { id: "stop-cannibalism", cat: "general", tag: "Behavior", name: "STOP CANNIBALISM", img: "stop cannibalism.jpg.jpg", desc: "Reduces pecking and aggressive behavior in poultry.", variants: [{ size: "100g", price: 300 }] },
    { id: "magic-fattening", cat: "general", tag: "Weight", name: "SPC MAGIC FATTENING", img: "aquafeed fattening meal.jpg.jpg", desc: "Universal concentrate for all ruminants.", variants: [{ size: "1kg", price: 200 }] },
    { id: "multivitamin", cat: "general", tag: "Vitamins", name: "SPC MULTIVITAMIN", img: "spc multivitamin(container).jpg.jpg", desc: "High potency multivitamin for all livestock.", variants: [{ size: "1kg", price: 500 }] },
    { id: "minevita", cat: "general", tag: "Immunity", name: "SPC MINEVITA", img: "minevita.jpg.jpg", desc: "Balanced vitamins plus trace minerals.", variants: [{ size: "1kg", price: 800 }] },
    { id: "rumipetizer", cat: "general", tag: "Appetite", name: "RUMIPETIZER", img: "rumipetizer.jpg.jpg", desc: "Restores rumen function and stimulates appetite.", variants: [{ size: "100g", price: 200 }] },
    { id: "dcp-granular", cat: "general", tag: "Minerals", name: "DCP GRANULAR", img: "dicalcium phosphate(DCP).jpg.jpg", desc: "Essential Calcium and Phosphorus supplement.", variants: [{ size: "1kg", price: 280 }] },
    { id: "coat-conditioner", cat: "general", tag: "Conditioner", name: "SKIN & COAT CONDITIONER", img: "skin hair and coat conditioner.jpg.jpg", desc: "Improves appearance and hair health.", variants: [{ size: "1kg", price: 500 }] }
];

let quoteList = [];

/**
 * Renders products into their respective category grids
 */
function displayProducts() {
    // Clear all grids first
    document.querySelectorAll('.modern-grid').forEach(grid => grid.innerHTML = '');
    
    allProducts.forEach(p => {
        const grid = document.getElementById(`${p.cat}-grid`);
        if (!grid) return;

        const defaultVar = p.variants[0]; 

        grid.innerHTML += `
            <div class="product-card" data-name="${p.name.toLowerCase()}">
                <div class="img-box">
                    <img src="FARMERS LINK IMAGES/${p.img}" onerror="this.src='placeholder.png'">
                    <button class="add-quote-btn" onclick="addToQuote('${p.id}', 0)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="card-info">
                    <span class="tag">${p.tag}</span>
                    <h3>${p.name}</h3>
                    <div class="price-row" style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                        <span class="price" style="font-weight:800; color:#1B4332;">Ksh ${defaultVar.price}</span>
                        <span class="unit" style="font-size:0.8rem; background:#f0fdf4; padding:2px 8px; border-radius:10px;">${defaultVar.size}</span>
                    </div>
                    <a href="Product-Category.html?id=${p.id}" class="order-btn" style="display:block; text-align:center; background:#1B4332; color:white; text-decoration:none; padding:8px; border-radius:6px; margin-top:10px; font-size:0.9rem;">View Details</a>
                </div>
            </div>
        `;
    });
}

/**
 * Search Functionality: Filters displayed cards based on input
 */
function searchProducts() {
    const query = document.getElementById('product-search').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    const sections = document.querySelectorAll('.category-block');

    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    // Hide entire section if no products match in that category
    sections.forEach(section => {
        const hasVisibleItems = Array.from(section.querySelectorAll('.product-card')).some(c => c.style.display !== 'none');
        section.style.display = hasVisibleItems ? 'block' : 'none';
    });
}

/**
 * Category Filter: Shows only selected category block
 */
function filterByCategory() {
    const filterValue = document.getElementById('category-filter').value;
    const blocks = document.querySelectorAll('.category-block');
    
    // Reset search bar when filtering categories to avoid confusion
    document.getElementById('product-search').value = "";

    blocks.forEach(block => {
        if(filterValue === 'all' || block.id === filterValue) {
            block.style.display = 'block';
            // Ensure cards inside are visible
            block.querySelectorAll('.product-card').forEach(c => c.style.display = 'flex');
        } else {
            block.style.display = 'none';
        }
    });
}

/**
 * Quote Management
 */
function addToQuote(productId, variantIndex) {
    const product = allProducts.find(p => p.id === productId);
    const variant = product.variants[variantIndex];
    
    quoteList.push({
        uniqueId: Date.now() + Math.random(), 
        name: product.name,
        size: variant.size,
        price: variant.price
    });
    
    updateQuoteUI();

    // Feedback animation
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    icon.className = 'fas fa-check';
    btn.style.background = '#e2b17a';
    setTimeout(() => {
        icon.className = 'fas fa-plus';
        btn.style.background = '#1B4332';
    }, 800);
}

function removeFromQuote(uniqueId) {
    quoteList = quoteList.filter(item => item.uniqueId !== uniqueId);
    updateQuoteUI();
}

function updateQuoteUI() {
    const countEl = document.getElementById('quote-count');
    const summaryCountEl = document.getElementById('summary-count');
    if(countEl) countEl.innerText = quoteList.length;
    if(summaryCountEl) summaryCountEl.innerText = quoteList.length;
    
    const listContainer = document.getElementById('quote-items-list');
    if(!listContainer) return;

    let total = 0;
    listContainer.innerHTML = '';

    if(quoteList.length === 0) {
        listContainer.innerHTML = '<p style="text-align:center; color:gray; padding:20px;">Your list is empty.</p>';
    }

    quoteList.forEach(item => {
        total += item.price;
        listContainer.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; border-bottom:1px solid #eee;">
                <div>
                    <div style="font-weight:700; font-size:0.9rem;">${item.name}</div>
                    <div style="font-size:0.75rem; color:gray;">${item.size}</div>
                </div>
                <div style="display:flex; align-items:center; gap:15px;">
                    <b style="color:#1B4332;">Ksh ${item.price}</b>
                    <i class="fas fa-trash-alt" style="color:#ff4d4d; cursor:pointer;" onclick="removeFromQuote(${item.uniqueId})"></i>
                </div>
            </div>
        `;
    });

    const totalPriceEl = document.getElementById('quote-total-price');
    if(totalPriceEl) totalPriceEl.innerText = `Ksh ${total.toLocaleString()}`;
}

/**
 * Mobile Menu & Page Init
 */
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.className = navList.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
});

