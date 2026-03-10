function showSolution(problem) {
    const display = document.getElementById('solution-display');
    let message = "";

    const solutions = {
        'mastitis': {
            title: "Mastitis Management",
            prod: "SPC MASTISTOP (Spray or Powder)",
            desc: "Prevent with Mastistop Spray or treat clinical cases with Mastistop Double Strength."
        },
        'digestion': {
            title: "Digestive Health",
            prod: "SPC RUMIPETIZER",
            desc: "Stabilizes rumen digestion and restores appetite fast."
        },
        'yield': {
            title: "Milk Booster",
            prod: "SPC UDDER BOOSTER & DAIRY SET",
            desc: "Regenerates udder cells and provides essential minerals for maximum milk."
        },
        'repro': {
            title: "Reproductive Care",
            prod: "SPC GYNA-10 & SEMIX",
            desc: "Treats irregular cycles, repeat breeding, and helps detect heat signs."
        },
        'sale': {
            title: "Appearance & Value",
            prod: "SPC SKIN & COAT CONDITIONER",
            desc: "Improves coat shine and physical appeal to increase the animal's market value."
        }
    };

    const data = solutions[problem];
    
    display.innerHTML = `
        <div class="solution-content">
            <h4 style="color:#E2B17A">${data.title}</h4>
            <p><strong>Use:</strong> <span class="highlight-prod">${data.prod}</span></p>
            <p style="font-size:0.9rem">${data.desc}</p>
            <a href="https://wa.me/254706390116" class="whatsapp-btn" style="display:inline-block; margin-top:10px; padding:8px 20px;">Order Solution</a>
        </div>
    `;
}