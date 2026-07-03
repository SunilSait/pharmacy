// ===== MEDICARE — SHARED COMPONENTS =====
// Pharmacy & Medical Store
// Shared navbar + footer injected across all pages

(function () {
    'use strict';

    // --- Configuration ---
    const BRAND_NAME = 'MediCare';
    const BRAND_TAGLINE = 'Your Trusted Pharmacy & Medical Store';
    const CURRENT_YEAR = new Date().getFullYear();
    const PHONE = '+91 98400 12345';
    const EMAIL = 'care@medicare-pharmacy.com';
    const ADDRESS = '14 Health Avenue, Chennai, TN 600001';
    const STORE_TIMINGS = 'Mon–Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 6:00 PM';

    const NAV_LINKS = [
        { label: 'Home', href: 'index.html' },
        { label: 'Home 2', href: 'home2.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Services', href: 'services.html' },
        { label: 'Products', href: 'products.html' },
        { label: 'Contact', href: 'contact.html' }
    ];

    const SOCIAL_LINKS = [
        { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
        { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
        { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
        { icon: 'fab fa-whatsapp', href: '#', label: 'WhatsApp' }
    ];

    // --- Brand Logo SVG (Medical Cross with M) ---
    const LOGO_SVG = `<svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="medGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--logo-primary)"/>
                <stop offset="100%" stop-color="#34D399"/>
            </linearGradient>
        </defs>
        <!-- Background circle -->
        <circle cx="50" cy="50" r="46" fill="url(#medGrad)" fill-opacity="0.12" stroke="var(--logo-primary)" stroke-width="1.5" stroke-opacity="0.4"/>
        <!-- Medical cross -->
        <rect x="42" y="22" width="16" height="56" rx="4" fill="url(#medGrad)" fill-opacity="0.85"/>
        <rect x="22" y="42" width="56" height="16" rx="4" fill="url(#medGrad)" fill-opacity="0.85"/>
        <!-- Inner highlight -->
        <rect x="44" y="24" width="6" height="10" rx="2" fill="white" fill-opacity="0.3"/>
    </svg>`;

    // --- Get current page filename ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // --- Render Navbar ---
    function renderNavbar() {
        const navLinksDesktop = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage ||
                             (currentPage === '' && link.href === 'index.html') ||
                             (currentPage === 'pharmacy' && link.href === 'index.html');
            return `<a href="${link.href}" class="nav-link whitespace-nowrap text-[12.5px] font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#059669] relative group ${isActive ? 'text-[#059669]' : 'text-neutral-700 dark:text-neutral-300'}">
                ${link.label}
                <span class="absolute -bottom-1 left-0 h-[1.5px] bg-[#059669] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}"></span>
            </a>`;
        }).join('');

        const navLinksMobile = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage || (currentPage === '' && link.href === 'index.html');
            return `<a href="${link.href}" class="nav-link flex items-center px-5 py-4 text-sm font-semibold uppercase tracking-wider border-b border-neutral-100 dark:border-[#1A3D2A] hover:text-[#059669] transition-all ${isActive ? 'text-[#059669] bg-emerald-50/40 dark:bg-[#059669]/5' : 'text-neutral-700 dark:text-neutral-200'}">
                ${link.label}
            </a>`;
        }).join('');

        return `
        <nav id="main-nav" class="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-[#0D2318]/95 border-b border-[#D1FAE5] dark:border-[#1A3D2A] transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center gap-2.5 group shrink-0">
                        ${LOGO_SVG}
                        <span class="font-bold text-xl tracking-tight text-[#0F172A] dark:text-[#F0FDF4] group-hover:text-[#059669] transition-colors" style="font-family: 'Sora', sans-serif;">
                            ${BRAND_NAME}
                        </span>
                    </a>

                    <!-- Desktop Nav -->
                    <div id="desktop-links" class="hidden xl:flex items-center gap-4 xl:gap-5">
                        ${navLinksDesktop}
                    </div>

                    <!-- Right Actions -->
                    <div class="flex items-center gap-2">
                        <!-- RTL Toggle -->
                        <button id="dir-toggle" class="js-dir-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-white dark:bg-[#122B1E] border border-[#D1FAE5] dark:border-[#1A3D2A] hover:border-[#059669] text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-all shadow-sm" aria-label="Toggle RTL">
                            <i class="fas fa-exchange-alt text-sm"></i>
                        </button>

                        <!-- Theme Toggle -->
                        <button id="theme-toggle-desktop" class="js-theme-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-white dark:bg-[#122B1E] border border-[#D1FAE5] dark:border-[#1A3D2A] hover:border-[#059669] text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-all shadow-sm" aria-label="Toggle theme">
                            <i class="fas fa-moon text-sm"></i>
                        </button>

                        <!-- Secondary CTA -->
                        <a href="login.html" class="hidden xl:inline-flex items-center gap-2 border border-[#059669] text-[#059669] px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#059669] hover:text-white transition-all whitespace-nowrap">
                            Sign In
                        </a>

                        <!-- Primary CTA -->
                        <a href="contact.html#prescription" class="hidden xl:inline-flex items-center gap-2 bg-gradient-to-r from-[#059669] to-[#047857] text-white px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:from-[#10B981] hover:to-[#059669] transition-all whitespace-nowrap shadow-md shadow-[#059669]/25">
                            Upload Prescription
                        </a>

                        <!-- Mobile Menu Btn -->
                        <button id="mobile-menu-btn" class="xl:hidden p-2.5 rounded-xl bg-white dark:bg-[#122B1E] border border-[#D1FAE5] dark:border-[#1A3D2A] text-neutral-700 dark:text-neutral-300 transition-all" aria-label="Toggle menu">
                            <i class="fas fa-bars text-lg" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden xl:hidden border-b border-[#D1FAE5] dark:border-[#1A3D2A] bg-white dark:bg-[#0D2318]" style="position: absolute; top: 100%; left: 0; right: 0; z-index: 100; max-height: 85vh; overflow-y: auto;">
                <div class="max-w-7xl mx-auto pt-2 pb-6">
                    <div class="flex flex-col gap-0 mb-4">
                        ${navLinksMobile}
                    </div>
                    <div class="flex flex-col sm:flex-row items-center gap-3 px-5 pt-4 border-t border-neutral-100 dark:border-[#1A3D2A]">
                        <div class="flex gap-2 w-full sm:w-auto">
                            <button class="js-dir-toggle flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#122B1E] border border-[#D1FAE5] dark:border-[#1A3D2A] text-neutral-600 dark:text-neutral-400 flex-1 sm:flex-none justify-center text-sm">
                                <i class="fas fa-exchange-alt text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-wider">LTR / RTL</span>
                            </button>
                            <button class="js-theme-toggle flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#122B1E] border border-[#D1FAE5] dark:border-[#1A3D2A] text-neutral-600 dark:text-neutral-400 flex-1 sm:flex-none justify-center text-sm">
                                <i class="fas fa-moon text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-wider">Theme</span>
                            </button>
                        </div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <a href="login.html" class="flex-1 sm:flex-none text-center border border-[#059669] text-[#059669] px-4 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#059669] hover:text-white transition-all">Sign In</a>
                            <a href="contact.html#prescription" class="flex-1 sm:flex-none text-center bg-gradient-to-r from-[#059669] to-[#047857] text-white px-4 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all">Upload Rx</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    // --- Render Footer ---
    function renderFooter() {
        const socialLinksHtml = SOCIAL_LINKS.map(s =>
            `<a href="${s.href}" aria-label="${s.label}" class="w-10 h-10 flex items-center justify-center rounded-full border border-[#D1FAE5] dark:border-[#1A3D2A] text-neutral-500 dark:text-neutral-400 hover:text-[#059669] hover:border-[#059669] hover:-translate-y-1 transition-all duration-300">
                <i class="${s.icon} text-sm"></i>
            </a>`
        ).join('');

        return `
        <footer class="bg-[#F0FDF4] dark:bg-[#040D09] border-t border-[#D1FAE5] dark:border-[#1A3D2A] pt-16 pb-6 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Main Footer Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
                    <!-- Brand -->
                    <div class="lg:col-span-1 space-y-5">
                        <a href="index.html" class="flex items-center gap-2.5 group">
                            ${LOGO_SVG}
                            <span class="font-bold text-xl tracking-tight text-[#0F172A] dark:text-[#F0FDF4]" style="font-family: 'Sora', sans-serif;">${BRAND_NAME}</span>
                        </a>
                        <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            ${BRAND_TAGLINE}. Quality medicines, health devices & baby care delivered to your doorstep.
                        </p>
                        <div class="text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                            <p><i class="fas fa-clock text-[#059669] mr-2"></i>${STORE_TIMINGS}</p>
                            <p><i class="fas fa-phone text-[#059669] mr-2"></i>${PHONE}</p>
                            <p><i class="fas fa-envelope text-[#059669] mr-2"></i>${EMAIL}</p>
                        </div>
                        <div class="flex gap-3">${socialLinksHtml}</div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-bold mb-5 text-[#0F172A] dark:text-white uppercase text-xs tracking-[0.15em]">Quick Links</h4>
                        <ul class="space-y-2.5">
                            <li><a href="index.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Home</a></li>
                            <li><a href="home2.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Home 2 — Premium</a></li>
                            <li><a href="services.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Our Services</a></li>
                            <li><a href="products.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Products</a></li>
                            <li><a href="about.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">About Us</a></li>
                            <li><a href="contact.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Resources -->
                    <div>
                        <h4 class="font-bold mb-5 text-[#0F172A] dark:text-white uppercase text-xs tracking-[0.15em]">Resources</h4>
                        <ul class="space-y-2.5">
                            <li><a href="login.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Sign In</a></li>
                            <li><a href="signup.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Create Account</a></li>
                            <li><a href="contact.html#prescription" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Upload Prescription</a></li>
                            <li><a href="coming-soon.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">Coming Soon</a></li>
                            <li><a href="404.html" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#059669] transition-colors">404 Page</a></li>
                        </ul>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-white dark:bg-[#0D2318] p-6 rounded-2xl border border-[#D1FAE5] dark:border-[#1A3D2A]">
                        <h4 class="font-bold mb-2 text-[#0F172A] dark:text-white" style="font-family:'Sora',sans-serif;font-size:1.1rem;">Health Tips</h4>
                        <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Get weekly health tips, offers & medicine reminders in your inbox.</p>
                        <form id="newsletter-form" class="space-y-2.5">
                            <input type="email" required placeholder="your@email.com"
                                class="w-full px-4 py-3 text-sm bg-[#F0FDF4] dark:bg-[#122B1E] border border-[#D1FAE5] dark:border-[#1A3D2A] focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 rounded-xl outline-none transition-all dark:text-white placeholder:text-neutral-400" />
                            <button type="submit" class="w-full bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#10B981] hover:to-[#059669] text-white text-sm font-bold py-3 rounded-xl transition-all">
                                Subscribe
                            </button>
                        </form>
                        <p id="newsletter-success" class="hidden text-xs text-emerald-500 mt-2 font-bold text-center">✦ Thank you for subscribing!</p>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div class="border-t border-[#D1FAE5] dark:border-[#1A3D2A] pt-8">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p class="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                            &copy; ${CURRENT_YEAR} ${BRAND_NAME}. Your Health, Our Priority.
                        </p>
                        <div class="flex items-center gap-6">
                            <a href="#" class="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-[#059669] transition-colors">Privacy</a>
                            <a href="#" class="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-[#059669] transition-colors">Terms</a>
                            <span class="text-[11px] uppercase tracking-widest text-neutral-400">${PHONE}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Back to Top -->
        <button id="back-to-top" aria-label="Back to top" class="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#059669] to-[#047857] text-white border-none cursor-pointer opacity-0 translate-y-5 transition-all duration-300 hover:-translate-y-1 hover:scale-110 shadow-lg shadow-[#059669]/30 active:scale-95">
            <i class="fas fa-chevron-up text-sm"></i>
        </button>`;
    }

    // --- Initialize ---
    function init() {
        const navContainer = document.getElementById('navbar-container');
        if (navContainer) navContainer.innerHTML = renderNavbar();

        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) footerContainer.innerHTML = renderFooter();

        initTheme();
        initDirection();
        initMobileMenu();
        initScrollEffects();
        initNewsletter();
        initScrollReveal();
    }

    // --- Theme ---
    function initTheme() {
        const html = document.documentElement;
        const themeBtns = document.querySelectorAll('.js-theme-toggle');

        const setTheme = (isDark) => {
            if (isDark) {
                html.classList.add('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-sun text-sm text-yellow-400';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Light Mode';
                });
                localStorage.setItem('mc-dark-mode', 'true');
            } else {
                html.classList.remove('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-moon text-sm';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Dark Mode';
                });
                localStorage.setItem('mc-dark-mode', 'false');
            }
        };

        themeBtns.forEach(btn => btn.addEventListener('click', () => setTheme(!html.classList.contains('dark'))));

        const stored = localStorage.getItem('mc-dark-mode');
        if (stored === 'true' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }

    // --- Direction ---
    function initDirection() {
        const html = document.documentElement;
        const dirBtns = document.querySelectorAll('.js-dir-toggle');

        const setDir = (dir) => {
            html.setAttribute('dir', dir);
            localStorage.setItem('mc-rtl', dir === 'rtl' ? 'true' : 'false');
            dirBtns.forEach(btn => {
                const span = btn.querySelector('span');
                if (span) span.textContent = dir === 'rtl' ? 'RTL' : 'LTR';
            });
        };

        dirBtns.forEach(btn => btn.addEventListener('click', () => {
            setDir((html.getAttribute('dir') || 'ltr') === 'ltr' ? 'rtl' : 'ltr');
        }));

        localStorage.getItem('mc-rtl') === 'true' ? setDir('rtl') : setDir('ltr');
    }

    // --- Mobile Menu ---
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                if (menuIcon) menuIcon.className = isHidden ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
            });
        }
    }

    // --- Scroll Effects ---
    function initScrollEffects() {
        const backToTop = document.getElementById('back-to-top');
        const nav = document.getElementById('main-nav');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (backToTop) {
                backToTop.classList.toggle('opacity-0', scrollTop <= 400);
                backToTop.classList.toggle('translate-y-5', scrollTop <= 400);
                backToTop.classList.toggle('opacity-100', scrollTop > 400);
                backToTop.classList.toggle('translate-y-0', scrollTop > 400);
            }
            if (nav) nav.classList.toggle('shadow-lg', scrollTop > 10);
        });

        if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // --- Newsletter ---
    function initNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const success = document.getElementById('newsletter-success');
                btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Subscribing...';
                setTimeout(() => {
                    this.classList.add('hidden');
                    if (success) success.classList.remove('hidden');
                }, 1500);
            });
        }
    }

    // --- Scroll Reveal ---
    function initScrollReveal() {
        const revealEls = document.querySelectorAll('.reveal, .animate-on-scroll');
        if (!revealEls.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(el => observer.observe(el));
    }

    // --- DOM Ready ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
