// AI Style Advisor Function
function generateStyleAdvice() {
    const faceShape = document.getElementById('ai-face-shape').value;
    const hairType = document.getElementById('ai-hair-type').value;
    const vibe = document.getElementById('ai-vibe').value || 'Neutral';
    
    const btn = document.getElementById('ai-generate-btn');
    const container = document.getElementById('ai-output-container');
    const loading = document.getElementById('ai-loading');
    const result = document.getElementById('ai-result');
    
    // Show output container and loading
    container.classList.remove('hidden');
    loading.classList.remove('hidden');
    result.innerHTML = '';
    btn.disabled = true;
    
    // Simulate API call with timeout
    setTimeout(() => {
        const advice = getStyleAdvice(faceShape, hairType, vibe);
        loading.classList.add('hidden');
        result.innerHTML = advice;
        btn.disabled = false;
    }, 2000);
}

function getStyleAdvice(face, hair, vibe) {
    // Style recommendations based on face shape and hair type
    const recommendations = {
        'Oval': {
            'Straight & Fine': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop:</strong> Adds volume to fine hair while complementing your face shape</li>
                        <li><strong>French Crop:</strong> Modern and clean, works perfectly with straight fine hair</li>
                        <li><strong>Slicked Back:</strong> Emphasizes your balanced features</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Use texturizing products and dry your hair for maximum volume. Your oval face is versatile - you can pull off almost any style!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Straight & Thick': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Fade Haircut:</strong> Showcases your thick hair beautifully</li>
                        <li><strong>Undercut:</strong> High contrast look that's trendy and sharp</li>
                        <li><strong>Textured Quiff:</strong> Classic with modern twist</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Thick hair is a blessing! Shorter sides with longer top (3-4 inches) looks best. Style with clay or paste.</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Wavy': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop:</strong> Embraces your natural wave</li>
                        <li><strong>Taper Fade:</strong> Clean sides, length on top to show off waves</li>
                        <li><strong>Medium Length with Texture:</strong> Let those waves shine!</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Wavy hair looks best with 2-3 inches on top. Keep it slightly longer than straight hair. Use sea salt spray!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Curly': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Tight Fade with Curls on Top:</strong> Maximum impact</li>
                        <li><strong>Textured Afro:</strong> Embrace natural curls</li>
                        <li><strong>Defined Curls:</strong> Well-groomed curly look</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Regular trims (every 4-6 weeks) keep curls looking sharp. Use curl cream for definition.</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut) + Styling Products</p>
                </div>
            `,
            'Thinning': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Short Crop:</strong> Creates illusion of fuller hair</li>
                        <li><strong>Buzz Cut:</strong> Clean and confident look</li>
                        <li><strong>Short Textured Cut:</strong> Adds dimension</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Keep it short (1-2 inches max). Avoid long hair as it shows thinning. Consider styling powder for texture.</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹100 (Hair Cut)</p>
                </div>
            `,
        },
        'Round': {
            'Straight & Fine': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>High Fade with Spiky Top:</strong> Elongates face</li>
                        <li><strong>Textured Undercut:</strong> Adds height and angles</li>
                        <li><strong>Slicked Back with Length:</strong> Creates vertical lines</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Avoid short, rounded cuts. Go for height on top (3+ inches) and tight fades on sides. This creates angles!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Straight & Thick': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>High Fade with Textured Quiff:</strong> Modern and angular</li>
                        <li><strong>Pompadour:</strong> Creates vertical emphasis</li>
                        <li><strong>Slicked Back Fade:</strong> Sophisticated</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Your thick hair is perfect for creating height. Aim for length on top and fade sides. Style upward!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Wavy': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Taper Fade with Wavy Top:</strong> Natural texture with structure</li>
                        <li><strong>Textured Crop with Height:</strong> Adds dimension</li>
                        <li><strong>Long Top, Fade Sides:</strong> Modern and clean</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Keep top longer (3 inches+) to showcase waves and create height. Avoid heavy oils - use sea salt spray instead!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Curly': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Defined Curls with Tight Fade:</strong> Adds structure</li>
                        <li><strong>High Top Fade:</strong> Creates height and angles</li>
                        <li><strong>Shape Up with Long Curls:</strong> Well-groomed afro</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Tight fades on sides create contrast that adds angles to round faces. Keep curls well-defined!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Thinning': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop with Height:</strong> Adds dimension</li>
                        <li><strong>Short Fade:</strong> Creates angles</li>
                        <li><strong>Spiky Short Cut:</strong> Modern and youthful</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Go short but style with height. Use styling powder to add texture and volume. Tight fades add angles!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
        },
        'Square': {
            'Straight & Fine': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop:</strong> Softens angular jaw</li>
                        <li><strong>Messy Quiff:</strong> Casual and modern</li>
                        <li><strong>Fringe:</strong> Breaks up strong jawline</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Longer top with texture works well. Avoid sharp fades - go for gradual tapers instead. Add movement to soften angles!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Straight & Thick': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Pompadour:</strong> Professional and timeless</li>
                        <li><strong>Slicked Back with Taper:</strong> Sophisticated</li>
                        <li><strong>Messy Top Fade:</strong> Casual elegance</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Your thick hair can handle longer styles. Texture on top + gradual taper softens strong jawline. Style upward!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Wavy': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Wavy Quiff:</strong> Textured and soft</li>
                        <li><strong>Taper with Waves:</strong> Sophisticated</li>
                        <li><strong>Long Wavy Top:</strong> Relaxed elegance</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Waves naturally soften square faces. Keep top 3-4 inches for full texture. Avoid harsh lines - go gradual!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Curly': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Defined Curls with Taper:</strong> Soft and textured</li>
                        <li><strong>Curly Quiff:</strong> Modern and cool</li>
                        <li><strong>Medium Curls:</strong> Relaxed and confident</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Curls soften square jawlines naturally. Use gradual tapers instead of sharp fades. Keep curls well-defined!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Thinning': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop:</strong> Adds dimension</li>
                        <li><strong>Short with Taper:</strong> Clean and modern</li>
                        <li><strong>Spiky Short Cut:</strong> Youthful and fresh</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Short length with upward styling works best. Avoid longer cuts. Use styling powder for texture and volume!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
        },
        'Diamond': {
            'Straight & Fine': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop with Short Sides:</strong> Modern and clean</li>
                        <li><strong>Slicked Back:</strong> Emphasizes cheekbones</li>
                        <li><strong>Fringe:</strong> Adds width at forehead</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Diamond faces are narrow at forehead and chin. Longer top with shorter sides adds width. Style upward and back!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Straight & Thick': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>High Fade with Textured Top:</strong> Adds width</li>
                        <li><strong>Pompadour:</strong> Creates height and width</li>
                        <li><strong>Spiky Fade:</strong> Modern and bold</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Your thick hair is perfect for volumetric styles. Create width at temples with texture on top. Tight fades compliment!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Wavy': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Quiff with Fade:</strong> Modern sophistication</li>
                        <li><strong>Wavy Pompadour:</strong> Textured volume</li>
                        <li><strong>Long Top with Taper:</strong> Casual elegance</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Waves add natural width. Keep top longer (3-4 inches) and taper sides. Use sea salt spray for texture!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Curly': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Defined Curls with Fade:</strong> Adds width at cheeks</li>
                        <li><strong>High Top with Curls:</strong> Modern and cool</li>
                        <li><strong>Textured Afro Fade:</strong> Bold and confident</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Curls naturally add width to narrow faces. Keep longer on top, tight fade on sides for contrast!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Thinning': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop with Height:</strong> Adds dimension</li>
                        <li><strong>Short Spiky Cut:</strong> Creates illusion of fullness</li>
                        <li><strong>Tapered Crop:</strong> Clean and modern</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Longer top (2 inches) creates width at temples. Use styling powder for texture. Keep it neat and groomed!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
        },
        'Oblong': {
            'Straight & Fine': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Full Fringe:</strong> Shortens face appearance</li>
                        <li><strong>Textured Crop:</strong> Adds width at sides</li>
                        <li><strong>Medium Length with Volume:</strong> Creates width</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Oblong faces are long and narrow. Wider styles with volume at sides balance features. Avoid slicked-back looks!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Straight & Thick': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Quiff with Fringe:</strong> Balances length</li>
                        <li><strong>Side Part with Volume:</strong> Adds width</li>
                        <li><strong>Fade with Textured Top:</strong> Creates dimension</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Your thick hair can handle longer cuts. Create volume at temples and sides. Side part adds width!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Wavy': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Wavy Quiff with Fringe:</strong> Balanced and textured</li>
                        <li><strong>Taper with Side Part:</strong> Adds width at sides</li>
                        <li><strong>Medium Waves:</strong> Natural and relaxed</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Waves create natural width. Keep medium length with fringe. Avoid short, tight crops - they elongate face!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Curly': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Defined Curls with Width:</strong> Natural balance</li>
                        <li><strong>Curly Quiff with Fringe:</strong> Modern styling</li>
                        <li><strong>Medium Curls:</strong> Full and textured</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Curls naturally add width! Keep longer (3+ inches) for balanced look. Avoid sharp fades - gradual tapers work better!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
            'Thinning': `
                <div class="space-y-4">
                    <p><strong class="text-brand-gold">🧔 Best Styles for You:</strong></p>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Textured Crop with Volume:</strong> Adds width</li>
                        <li><strong>Medium with Fringe:</strong> Balances length</li>
                        <li><strong>Side Part Style:</strong> Creates width at sides</li>
                    </ul>
                    <p class="text-gray-400 text-sm mt-4"><strong>💡 Pro Tip:</strong> Add volume at sides, keep medium length. Styling powder helps create texture. Side parts add width!</p>
                    <p class="text-brand-gold font-semibold mt-3">💰 Estimated Cost: ₹150 (Stylish Hair Cut)</p>
                </div>
            `,
        },
    };
    
    // Get the recommendation or default
    const faceRecs = recommendations[face] || recommendations['Oval'];
    const advice = faceRecs[hair] || faceRecs['Straight & Thick'];
    
    return advice;
}

// WhatsApp Booking Function
function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;
    
    // Validate inputs
    if (!name || !phone || !service || !date || !time) {
        alert('Please fill in all required fields!');
        return;
    }
    
    // Format the date
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I would like to book an appointment at Jay Mata Di Salon.%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADate: ${formattedDate}%0ATime: ${time}%0AAdditional Notes: ${message || 'None'}%0A%0APlease confirm my appointment.`;
    
    // Send via WhatsApp
    const whatsappNumber = '919893468981';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    document.querySelector('form').reset();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});