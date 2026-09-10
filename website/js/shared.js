/**
 * F.R.E. CONTRACTOR — SHARED LAYOUT ENGINE
 * Injects nav + footer into every page automatically.
 * Update nav/footer in ONE place, reflects everywhere.
 */

const SHARED = {
    currentLang: localStorage.getItem('fre_lang') || 'en',

    NAV_HTML: `
    <div class="top-banner">
        <div class="container">
            <div class="top-banner-links">
                <a href="tel:+19294127546" class="top-phone">
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 18 18"><path d="M14.707 12.707l-2-2a1 1 0 00-1.414 0l-1.086 1.086a9.08 9.08 0 01-3.586-3.586l1.086-1.086a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0L2.586 5.414C2.211 5.789 2 6.285 2 6.808c0 4.965 4.227 8.99 9.192 8.99.523 0 1.019-.211 1.394-.586l1.707-1.707a1 1 0 000-1.414z"/></svg>
                    (929) 412-7546
                </a>
                <a href="https://wa.me/19294127546" target="_blank" rel="noopener" class="top-banner-desktop">
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                </a>
                <span class="top-banner-desktop" style="color:#64748B;">2760 Holland Ave, Bronx NY</span>
                <a href="booking.html" class="top-banner-appointment-btn top-banner-desktop"><span class="pulse-dot"></span> 📅 Book On-Site Estimate Visit</a>
                <button type="button" class="top-banner-corridor-btn top-banner-desktop" id="btn-open-corridor-gate" title="Select your profile corridor">🏛️ Client Gateway ▾</button>
                <button type="button" class="top-banner-install-btn" id="btn-open-install-modal" title="Install App on Desktop or Mobile"><span style="font-size:0.85rem;">📲</span> Install App</button>
            </div>
            <div class="lang-switch">
                <button class="lang-btn" data-lang="en">EN</button>
                <span style="color:#475569;">|</span>
                <button class="lang-btn" data-lang="es">ES</button>
            </div>
        </div>
    </div>
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
        <div class="container nav-wrap">
            <a href="index.html" class="brand-logo-link" aria-label="F.R.E. Contractor Home">
                <img src="assets/logo.png" alt="F.R.E. Contractor LLC Logo" class="brand-logo-img">
                <div class="brand-title-box">
                    <span class="brand-main-title">F.R.E. Contractor</span>
                    <span class="brand-tagline">Fast · Reliable · Efficient</span>
                </div>
            </a>
            <ul class="nav-menu" role="list">
                <li class="nav-item has-megamenu">
                    <a href="residential.html" class="nav-link">Services & Materials ▾</a>
                    <div class="megamenu">
                        <div class="megamenu-col">
                            <span class="megamenu-title">🏠 Residential</span>
                            <a href="service-interior-painting.html" class="megamenu-link">
                                <span class="megamenu-icon">🖌️</span>
                                <div class="megamenu-text">
                                    <strong>Interior Painting</strong>
                                    <span>Walls, baseboards & trim</span>
                                </div>
                            </a>
                            <a href="service-cabinet-refinishing.html" class="megamenu-link">
                                <span class="megamenu-icon">🗄️</span>
                                <div class="megamenu-text">
                                    <strong>Cabinet Refinishing</strong>
                                    <span>Factory-smooth spray finish</span>
                                </div>
                            </a>
                            <a href="service-popcorn-ceiling.html" class="megamenu-link">
                                <span class="megamenu-icon">⬆️</span>
                                <div class="megamenu-text">
                                    <strong>Popcorn Ceiling</strong>
                                    <span>Removal & Level 5 skim</span>
                                </div>
                            </a>
                            <a href="service-exterior-painting.html" class="megamenu-link">
                                <span class="megamenu-icon">🏡</span>
                                <div class="megamenu-text">
                                    <strong>Exterior Facades</strong>
                                    <span>Townhouses & masonry</span>
                                </div>
                            </a>
                        </div>
                        <div class="megamenu-col">
                            <span class="megamenu-title">🏢 Commercial & GC</span>
                            <a href="service-commercial-retail.html" class="megamenu-link">
                                <span class="megamenu-icon">🏬</span>
                                <div class="megamenu-text">
                                    <strong>Retail Rollouts</strong>
                                    <span>T-Mobile, storefronts</span>
                                </div>
                            </a>
                            <a href="service-nycha-housing.html" class="megamenu-link">
                                <span class="megamenu-icon">🏘️</span>
                                <div class="megamenu-text">
                                    <strong>NYCHA Housing</strong>
                                    <span>Approved turnover protocol</span>
                                </div>
                            </a>
                            <a href="government-verification.html" class="megamenu-link">
                                <span class="megamenu-icon">🛡️</span>
                                <div class="megamenu-text">
                                    <strong>Government Compliance</strong>
                                    <span>DOS ID 6658255 & $2M COI</span>
                                </div>
                            </a>
                            <a href="bid-portal.html" class="megamenu-link">
                                <span class="megamenu-icon">📋</span>
                                <div class="megamenu-text">
                                    <strong>GC Subcontract Bidding</strong>
                                    <span>Fast 24-hr bid packages</span>
                                </div>
                            </a>
                            <a href="portal.html" class="megamenu-link">
                                <span class="megamenu-icon">🏛️</span>
                                <div class="megamenu-text">
                                    <strong>Client Sector Gateway</strong>
                                    <span>Switch corridor view</span>
                                </div>
                            </a>
                        </div>
                        <div class="megamenu-col">
                            <span class="megamenu-title">🛒 Materials Store</span>
                            <a href="store.html#flooring" class="megamenu-link">
                                <span class="megamenu-icon">🪵</span>
                                <div class="megamenu-text">
                                    <strong>Flooring Catalog</strong>
                                    <span>LVP Waterproof & Hardwood</span>
                                </div>
                            </a>
                            <a href="store.html#paint" class="megamenu-link">
                                <span class="megamenu-icon">🎨</span>
                                <div class="megamenu-text">
                                    <strong>Paint & Coatings</strong>
                                    <span>Benjamin Moore & Scuff-X</span>
                                </div>
                            </a>
                            <a href="store.html#material-calculator" class="megamenu-link">
                                <span class="megamenu-icon">🧮</span>
                                <div class="megamenu-text">
                                    <strong>Material Calculator</strong>
                                    <span>SqFt, boxes & gallon tool</span>
                                </div>
                            </a>
                            <a href="estimate.html" class="megamenu-link">
                                <span class="megamenu-icon">⚡</span>
                                <div class="megamenu-text">
                                    <strong>Turnkey Labor + Supply</strong>
                                    <span>Instant bundled price quote</span>
                                </div>
                            </a>
                        </div>
                        <div class="megamenu-banner">
                            <div>
                                <span class="megamenu-banner-badge">📅 Online Scheduling</span>
                                <h4 class="megamenu-banner-title">Book Free Estimate Visit</h4>
                                <p class="megamenu-banner-desc">Select your date & time for an on-site laser assessment anywhere in NYC. 100% Free & written same-day quote.</p>
                            </div>
                            <div style="display:flex;flex-direction:column;gap:8px;">
                                <a href="booking.html" class="btn btn-primary" style="font-size:0.82rem;padding:9px 14px;text-align:center;background:var(--amber);color:#000;font-weight:800;border:none;">📅 Pick Date & Time Slot →</a>
                                <a href="estimate.html" style="font-size:0.75rem;color:var(--text-sub);text-align:center;text-decoration:underline;">Or compute price online in 60 seconds</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="store.html" class="nav-link" style="color:var(--amber);font-weight:700;"><span style="font-size:1rem;">🛒</span> Store</a></li>
                <li><a href="portfolio.html" class="nav-link" data-t="nav_portfolio">Portfolio</a></li>
                <li><a href="about.html" class="nav-link" data-t="nav_about">About</a></li>
                <li><a href="reviews.html" class="nav-link" data-t="nav_reviews">Reviews</a></li>
                <li><a href="contact.html" class="nav-link" data-t="nav_contact">Contact</a></li>
            </ul>
            <div class="nav-actions">
                <a href="estimate.html" class="btn btn-primary" id="nav-cta" data-t="nav_estimate">Free Estimate</a>
                <button id="btn-mobile-menu" aria-label="Open mobile menu" class="mobile-menu-btn">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
        
        <div class="mobile-drawer" id="mobile-drawer">
            <div class="mobile-drawer-header">
                <a href="index.html" class="mob-drawer-logo">
                    <img src="assets/logo.png" alt="FRE Logo" style="height:40px;">
                    <div style="display:flex;flex-direction:column;text-align:left;">
                        <strong style="color:#fff;font-size:1.05rem;line-height:1.1;letter-spacing:-0.01em;">F.R.E. Contractor</strong>
                        <span style="color:var(--amber);font-size:0.68rem;font-weight:700;">Fast · Reliable · Efficient</span>
                    </div>
                </a>
                <div style="display:flex;align-items:center;gap:10px;">
                    <div class="lang-switch" style="padding:2px 8px;background:rgba(255,255,255,0.06);border-radius:20px;">
                        <button class="lang-btn" data-lang="en">EN</button>
                        <span style="color:#475569;">|</span>
                        <button class="lang-btn" data-lang="es">ES</button>
                    </div>
                    <button class="mobile-close-btn" id="mobile-close" aria-label="Close mobile menu">✕</button>
                </div>
            </div>
            <div class="mobile-drawer-body">
                <div class="mob-action-grid">
                    <a href="booking.html" class="mob-action-card mob-action-book">
                        <span class="mob-action-icon">📅</span>
                        <div>
                            <strong>Book Estimate Visit</strong>
                            <span>Free On-Site Laser Assessment</span>
                        </div>
                    </a>
                    <button type="button" class="mob-action-card mob-action-install btn-trigger-install">
                        <span class="mob-action-icon">📲</span>
                        <div>
                            <strong>Install Native App</strong>
                            <span>iOS • Android • Windows • Mac</span>
                        </div>
                    </button>
                </div>
                <div class="mob-menu-group">
                    <span class="mob-group-title">Executive Corridors & Portals</span>
                    <a href="residential.html" class="mob-nav-item">
                        <span class="mob-item-icon" style="color:var(--amber);">🏠</span>
                        <div class="mob-item-text">
                            <strong>Residential Services Hub</strong>
                            <span>Apartments, Townhouses, Luxury Paint</span>
                        </div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                    <a href="commercial.html" class="mob-nav-item">
                        <span class="mob-item-icon" style="color:#38bdf8;">🏢</span>
                        <div class="mob-item-text">
                            <strong>Commercial Corridor</strong>
                            <span>Retail Rollouts, Scuff-X & Night Turns</span>
                        </div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                    <a href="government-verification.html" class="mob-nav-item">
                        <span class="mob-item-icon" style="color:var(--green);">🛡️</span>
                        <div class="mob-item-text">
                            <strong>Government & NYCHA Compliance</strong>
                            <span>DOS ID 6658255, Prevailing Wage, $2M COI</span>
                        </div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                    <a href="bid-portal.html" class="mob-nav-item">
                        <span class="mob-item-icon" style="color:#fbbf24;">📋</span>
                        <div class="mob-item-text">
                            <strong>Contractor Bid Desk</strong>
                            <span>CSI Div 09 Blueprints & 24-Hr Takeoffs</span>
                        </div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                    <a href="portal.html" class="mob-nav-item">
                        <span class="mob-item-icon" style="color:#c084fc;">🏛️</span>
                        <div class="mob-item-text">
                            <strong>Multi-Sector Gateway</strong>
                            <span>Switch Dedicated Corridor View</span>
                        </div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                </div>
                <div class="mob-menu-group">
                    <span class="mob-group-title">Supply Store & Estimator Tools</span>
                    <a href="store.html" class="mob-nav-item highlight-store">
                        <span class="mob-item-icon">🛒</span>
                        <div class="mob-item-text">
                            <strong>Contractor Materials Store</strong>
                            <span>Wholesale LVP Flooring & BM Paints</span>
                        </div>
                        <span class="mob-item-pill">Amazon Store</span>
                    </a>
                    <a href="estimate.html" class="mob-nav-item">
                        <span class="mob-item-icon" style="color:var(--green);">💰</span>
                        <div class="mob-item-text">
                            <strong>Instant Cost Estimator</strong>
                            <span>Calculate Project Budget in 60 Sec</span>
                        </div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                </div>
                <div class="mob-menu-group">
                    <span class="mob-group-title">Verification & Company</span>
                    <a href="portfolio.html" class="mob-nav-item">
                        <span class="mob-item-icon">📸</span>
                        <div class="mob-item-text"><strong>Project Portfolio (Before & After)</strong></div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                    <a href="reviews.html" class="mob-nav-item">
                        <span class="mob-item-icon">⭐</span>
                        <div class="mob-item-text"><strong>Client Reviews (5.0 Stars)</strong></div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                    <a href="about.html" class="mob-nav-item">
                        <span class="mob-item-icon">👷</span>
                        <div class="mob-item-text"><strong>About F.R.E. & Milestones</strong></div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                    <a href="contact.html" class="mob-nav-item">
                        <span class="mob-item-icon">📍</span>
                        <div class="mob-item-text"><strong>Contact Bronx HQ</strong></div>
                        <span class="mob-item-arrow">›</span>
                    </a>
                </div>
            </div>
            <div class="mobile-drawer-footer">
                <a href="tel:+19294127546" class="mob-drawer-call-link">
                    <span>📞</span> Tap to Call (929) 412-7546
                </a>
                <div class="mob-drawer-sub">
                    2760 Holland Ave, Bronx, NY 10467 • DOS ID: 6658255
                </div>
            </div>
        </div>
    </nav>`,

    FOOTER_HTML: `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="assets/logo.png" alt="F.R.E. Contractor LLC" class="footer-brand-logo" style="height:60px;margin-bottom:14px;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4));">
                    <p class="footer-desc footer-tagline">Fast · Reliable · Efficient. Serving the Bronx and all five NYC boroughs with premium painting and finishing services since 2022.</p>
                    <div class="footer-social footer-socials">
                        <a href="https://www.instagram.com/f.r.e.contractornyc/" target="_blank" rel="noopener" aria-label="Instagram" class="footer-social-btn">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://wa.me/19294127546" target="_blank" rel="noopener" aria-label="WhatsApp" class="footer-social-btn">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        </a>
                        <a href="tel:+19294127546" aria-label="Phone" class="footer-social-btn">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 18 18"><path d="M14.707 12.707l-2-2a1 1 0 00-1.414 0l-1.086 1.086a9.08 9.08 0 01-3.586-3.586l1.086-1.086a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0L2.586 5.414C2.211 5.789 2 6.285 2 6.808c0 4.965 4.227 8.99 9.192 8.99.523 0 1.019-.211 1.394-.586l1.707-1.707a1 1 0 000-1.414z"/></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="footer-head footer-col-title">Services & Supply</h4>
                    <ul class="footer-links">
                        <li><a href="service-interior-painting.html">Interior Painting</a></li>
                        <li><a href="service-cabinet-refinishing.html">Cabinet Refinishing</a></li>
                        <li><a href="service-popcorn-ceiling.html">Popcorn Ceiling Removal</a></li>
                        <li><a href="service-exterior-painting.html">Exterior Townhouses</a></li>
                        <li><a href="service-commercial-retail.html">Retail & Commercial Stores</a></li>
                        <li><a href="service-nycha-housing.html">NYCHA Public Housing</a></li>
                        <li><a href="store.html">Flooring & Paint Materials Store</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-head footer-col-title">Portals & Verification</h4>
                    <ul class="footer-links">
                        <li><a href="portal.html" style="color:var(--amber);font-weight:700;">🏛️ Client Sector Gateway</a></li>
                        <li><a href="government-verification.html" style="color:var(--green);font-weight:600;">🛡️ NYCHA / Gov Verification</a></li>
                        <li><a href="bid-portal.html">📋 Contractor Bid Desk</a></li>
                        <li><a href="booking.html" style="color:#38bdf8;font-weight:700;">📅 Book Free Estimate Visit</a></li>
                        <li><a href="estimate.html">Instant Cost Estimator</a></li>
                        <li><a href="portfolio.html">Project Portfolio</a></li>
                        <li><a href="about.html">About F.R.E. Contractor</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-head footer-col-title">Contact Bronx HQ</h4>
                    <ul class="footer-links">
                        <li><a href="tel:+19294127546">(929) 412-7546</a></li>
                        <li><a href="mailto:info@frecontractor.com">info@frecontractor.com</a></li>
                        <li>2760 Holland Ave</li>
                        <li>Bronx, NY 10467</li>
                    </ul>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:16px;">
                        <a href="booking.html" class="btn btn-primary" style="display:inline-flex;font-size:0.82rem;padding:9px 14px;background:#38bdf8;color:#04101e;font-weight:800;">📅 Book Estimate Visit</a>
                        <a href="estimate.html" class="btn btn-outline" style="display:inline-flex;font-size:0.82rem;padding:8px 14px;">Instant Cost Quoter</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2024–2026 F.R.E. Contractor L.L.C. All rights reserved. DOS ID: 6658255.</p>
                <p>Site by <a href="https://todobuild.us" target="_blank" rel="noopener">TodoBuild Technologies</a></p>
            </div>
        </div>
    </footer>
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/19294127546" class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
    <!-- Mobile Sticky Call Bar -->
    <div class="mobile-call-bar">
        <a href="tel:+19294127546" class="mobile-call-link">📞 Tap to Call (929) 412-7546</a>
        <a href="estimate.html" class="mobile-estimate-link">💰 Free Estimate</a>
    </div>`,

    CORRIDOR_GATE_HTML: `
    <div id="fre-corridor-gate" style="display:none;" role="dialog" aria-modal="true" aria-labelledby="corridor-gate-title">
        <div class="corridor-gate-container">
            <button class="corridor-gate-close" id="btn-close-corridor-gate" aria-label="Close modal">✕</button>
            
            <!-- Marketing Editorial Header -->
            <div style="text-align:center;max-width:760px;margin:0 auto 6px auto;">
                <div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
                    <span class="badge" style="background:rgba(245,130,32,0.15);border-color:rgba(245,130,32,0.35);color:var(--amber);font-size:0.75rem;padding:4px 10px;">🏛️ Multi-Sector Enterprise Gateway</span>
                    <span class="badge" style="background:rgba(56,189,248,0.12);border-color:rgba(56,189,248,0.3);color:#38bdf8;font-size:0.75rem;padding:4px 10px;">⭐ NYC DOS ID: 6658255 • Bronx &amp; NYC</span>
                </div>
                <h2 id="corridor-gate-title" style="font-size:2rem;font-weight:900;color:#fff;margin-bottom:8px;letter-spacing:-0.025em;line-height:1.2;">
                    Welcome to <span style="background:linear-gradient(135deg,#ffffff,#F58220);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">F.R.E. Contractor LLC</span>
                </h2>
                <p style="color:var(--text-muted);font-size:0.92rem;line-height:1.5;max-width:620px;margin:0 auto;">
                    Precision Craftsmanship Meets Modern NYC Infrastructure. Choose your specialized corridor below, or claim our <strong>2026 CSI Div 09 Cost Guide + $250 Welcome Credit</strong>.
                </p>
            </div>

            <!-- Marketing Newsletter & VIP Perk Incentive Bar -->
            <div class="gate-newsletter-banner">
                <div class="gate-newsletter-left">
                    <span class="gate-perk-badge">🎁 VIP PRIVILEGE</span>
                    <p class="gate-newsletter-title">
                        Claim Your <span>2026 NYC Estimating Benchmark</span> &amp; <span>$250 Project Credit</span>
                    </p>
                </div>
                <div class="gate-newsletter-form" id="gate-newsletter-form-container">
                    <input type="email" id="gate-vip-email" class="gate-newsletter-input" placeholder="Enter work or personal email..." aria-label="Enter email for voucher" required>
                    <button type="button" id="btn-gate-claim-vip" class="gate-newsletter-btn">Claim $250 Perk ➔</button>
                </div>
                <div id="gate-vip-success" class="gate-newsletter-success" style="display:none;">
                    <span>🎉 Privilege Activated! Promo Code <strong>FRE250-VIP</strong> applied to your session.</span>
                </div>
            </div>
            
            <!-- Photographic Corridor Cards Grid -->
            <div class="corridor-gate-grid">
                <!-- Corridor 1: Residential -->
                <a href="residential.html" class="corridor-gate-option opt-res" data-corridor="residential">
                    <div class="corridor-gate-thumb">
                        <img src="assets/images/hero-residential.jpg" alt="Residential Interior Finishes" loading="eager">
                        <div class="corridor-gate-thumb-overlay"></div>
                        <div class="corridor-gate-status-pill">
                            <span class="dot"></span> Level 5 Luxury Interior
                        </div>
                    </div>
                    <div class="corridor-gate-content">
                        <div>
                            <span class="corridor-gate-sector">Homeowners &amp; Co-Ops</span>
                            <h3 class="corridor-gate-name">Residential Corridor</h3>
                            <p class="corridor-gate-desc">Apartments, luxury townhouses, dustless popcorn ceiling skim-coating, and fine spray cabinet refinishing.</p>
                            <div class="corridor-gate-tags">
                                <span class="corridor-gate-tag">🎨 Luxury Paint</span>
                                <span class="corridor-gate-tag">✨ Dustless Skim</span>
                            </div>
                        </div>
                        <div class="corridor-gate-cta">
                            <span>Enter Residential Portal</span>
                            <span class="arrow">→</span>
                        </div>
                    </div>
                </a>

                <!-- Corridor 2: Commercial PM -->
                <a href="commercial.html" class="corridor-gate-option opt-comm" data-corridor="commercial">
                    <div class="corridor-gate-thumb">
                        <img src="assets/images/hero-commercial.jpg" alt="Commercial Retail Rollouts" loading="eager">
                        <div class="corridor-gate-thumb-overlay"></div>
                        <div class="corridor-gate-status-pill">
                            <span class="dot"></span> Turnkey Retail &amp; Night Turns
                        </div>
                    </div>
                    <div class="corridor-gate-content">
                        <div>
                            <span class="corridor-gate-sector">Property Managers &amp; Retail</span>
                            <h3 class="corridor-gate-name">Commercial Corridor</h3>
                            <p class="corridor-gate-desc">Turnkey retail rollouts (T-Mobile), off-hours night execution, high-durability Scuff-X coatings, and multi-unit turns.</p>
                            <div class="corridor-gate-tags">
                                <span class="corridor-gate-tag">🏢 Off-Hours Night</span>
                                <span class="corridor-gate-tag">🛡️ Scuff-X Finish</span>
                            </div>
                        </div>
                        <div class="corridor-gate-cta">
                            <span>Enter Commercial Hub</span>
                            <span class="arrow">→</span>
                        </div>
                    </div>
                </a>

                <!-- Corridor 3: Government / NYCHA -->
                <a href="government-verification.html" class="corridor-gate-option opt-gov" data-corridor="government">
                    <div class="corridor-gate-thumb">
                        <img src="assets/images/gallery-commercial.jpg" alt="Government & Public Housing" loading="eager">
                        <div class="corridor-gate-thumb-overlay"></div>
                        <div class="corridor-gate-status-pill">
                            <span class="dot"></span> NYCHA &amp; Public Works
                        </div>
                    </div>
                    <div class="corridor-gate-content">
                        <div>
                            <span class="corridor-gate-sector">Public Agencies &amp; Housing</span>
                            <h3 class="corridor-gate-name">Government &amp; NYCHA</h3>
                            <p class="corridor-gate-desc">Official NY DOS ID: 6658255, certified payroll, prevailing wage verification, and $2M municipal liability records.</p>
                            <div class="corridor-gate-tags">
                                <span class="corridor-gate-tag">🏛️ Certified Payroll</span>
                                <span class="corridor-gate-tag">📄 $2M Insured</span>
                            </div>
                        </div>
                        <div class="corridor-gate-cta">
                            <span>Verify Credentials</span>
                            <span class="arrow">→</span>
                        </div>
                    </div>
                </a>

                <!-- Corridor 4: General Contractors / Subcontract Bidding -->
                <a href="bid-portal.html" class="corridor-gate-option opt-gc" data-corridor="gc">
                    <div class="corridor-gate-thumb">
                        <img src="assets/images/hero-blueprints.jpg" alt="Contractor Blueprint Takeoffs" loading="eager">
                        <div class="corridor-gate-thumb-overlay"></div>
                        <div class="corridor-gate-status-pill">
                            <span class="dot"></span> 24-Hr Takeoff Turnaround
                        </div>
                    </div>
                    <div class="corridor-gate-content">
                        <div>
                            <span class="corridor-gate-sector">General Contractors &amp; Estimators</span>
                            <h3 class="corridor-gate-name">Contractor Bid Desk</h3>
                            <p class="corridor-gate-desc">Instant blueprint uploads, CSI MasterFormat Div 09 takeoffs, 24-hr binding proposal turnaround, and OSHA 30 teams.</p>
                            <div class="corridor-gate-tags">
                                <span class="corridor-gate-tag">📐 Div 09 Blueprints</span>
                                <span class="corridor-gate-tag">⚡ 24h Turnaround</span>
                            </div>
                        </div>
                        <div class="corridor-gate-cta">
                            <span>Upload Plans &amp; RFP</span>
                            <span class="arrow">→</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Footer & Quick Links -->
            <div class="corridor-gate-footer">
                <a href="store.html" class="gate-footer-badge-link">
                    <span>📦</span> Need Materials Only? <strong style="color:var(--amber);text-decoration:underline;">Browse Flooring &amp; Paint Store</strong>
                </a>
                <div class="gate-footer-actions">
                    <a href="tel:+19294127546" class="gate-footer-badge-link" style="color:#38bdf8;">
                        <span>📞</span> Direct Line: (929) 412-7546
                    </a>
                    <button type="button" id="btn-continue-general" class="gate-skip-btn">Explore standard full website overview →</button>
                </div>
            </div>
        </div>
    </div>`,

    init() {
        // Inject nav
        const navEl = document.getElementById('site-header');
        if (navEl) navEl.innerHTML = this.NAV_HTML;

        // Inject footer
        const footerEl = document.getElementById('site-footer');
        if (footerEl) footerEl.innerHTML = this.FOOTER_HTML;

        // Inject corridor gate modal if not present
        if (!document.getElementById('fre-corridor-gate')) {
            document.body.insertAdjacentHTML('beforeend', this.CORRIDOR_GATE_HTML);
        }

        // Setup Corridor Gateway Modal interactions
        this.initCorridorGate();

        // Fix asset paths for subdirectory pages if needed
        this.fixAssetPaths();

        // Ensure Favicon & PWA App Metadata
        if (!document.querySelector("link[rel*='icon']")) {
            const link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.href = 'assets/logo.png';
            document.head.appendChild(link);
        }

        // Ensure Web App Manifest
        if (!document.querySelector("link[rel='manifest']")) {
            const manifestLink = document.createElement('link');
            manifestLink.rel = 'manifest';
            manifestLink.href = 'manifest.json';
            document.head.appendChild(manifestLink);
        }

        // Ensure iOS & Mobile App Meta Tags
        if (!document.querySelector("meta[name='theme-color']")) {
            const metaTheme = document.createElement('meta');
            metaTheme.name = 'theme-color';
            metaTheme.content = '#040D1A';
            document.head.appendChild(metaTheme);

            const metaCapable = document.createElement('meta');
            metaCapable.name = 'apple-mobile-web-app-capable';
            metaCapable.content = 'yes';
            document.head.appendChild(metaCapable);

            const metaBar = document.createElement('meta');
            metaBar.name = 'apple-mobile-web-app-status-bar-style';
            metaBar.content = 'black-translucent';
            document.head.appendChild(metaBar);

            const appleTouch = document.createElement('link');
            appleTouch.rel = 'apple-touch-icon';
            appleTouch.href = 'assets/logo.png';
            document.head.appendChild(appleTouch);
        }

        // Ensure PWA Install script is loaded
        if (!document.querySelector("script[src*='pwa-install.js']")) {
            const pwaScript = document.createElement('script');
            pwaScript.src = 'js/pwa-install.js';
            pwaScript.defer = true;
            document.head.appendChild(pwaScript);
        }

        // Init nav active state
        this.setActiveNavLink();

        // Init mobile menu
        this.initMobileMenu();

        // Init language
        this.applyLanguage(this.currentLang);

        // Sticky nav shadow
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.site-nav');
            if (nav) nav.style.boxShadow = window.scrollY > 48 ? '0 4px 24px rgba(0,0,0,0.55)' : 'none';
        }, { passive: true });
    },

    initCorridorGate() {
        const gate = document.getElementById('fre-corridor-gate');
        const openBtn = document.getElementById('btn-open-corridor-gate');
        const closeBtn = document.getElementById('btn-close-corridor-gate');
        const continueBtn = document.getElementById('btn-continue-general');
        if (!gate) return;

        const openGate = () => {
            gate.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };

        const closeGate = () => {
            gate.style.display = 'none';
            document.body.style.overflow = '';
        };

        if (openBtn) openBtn.addEventListener('click', openGate);
        if (closeBtn) closeBtn.addEventListener('click', () => {
            localStorage.setItem('fre_corridor_chosen', 'dismissed');
            closeGate();
        });
        if (continueBtn) continueBtn.addEventListener('click', () => {
            localStorage.setItem('fre_corridor_chosen', 'general');
            closeGate();
        });

        // Close when clicking modal backdrop outside container
        gate.addEventListener('click', (e) => {
            if (e.target === gate) {
                localStorage.setItem('fre_corridor_chosen', 'dismissed');
                closeGate();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && gate.style.display === 'flex') {
                closeGate();
            }
        });

        // Record corridor selection on option click
        gate.querySelectorAll('.corridor-gate-option').forEach(option => {
            option.addEventListener('click', () => {
                const corridor = option.dataset.corridor || 'general';
                localStorage.setItem('fre_corridor_chosen', corridor);
            });
        });

        // Handle VIP Newsletter / $250 Voucher Submission
        const claimVipBtn = document.getElementById('btn-gate-claim-vip');
        const vipEmailInput = document.getElementById('gate-vip-email');
        const formContainer = document.getElementById('gate-newsletter-form-container');
        const successNotice = document.getElementById('gate-vip-success');

        const existingVipEmail = localStorage.getItem('fre_vip_email');
        if (existingVipEmail && successNotice && formContainer) {
            formContainer.style.display = 'none';
            successNotice.style.display = 'flex';
            successNotice.innerHTML = `<span>✓ VIP Privilege Active for <strong>${existingVipEmail}</strong> (Code: <strong>FRE250-VIP</strong>)</span>`;
        }

        if (claimVipBtn && vipEmailInput) {
            const handleVipSubmit = (e) => {
                if (e) e.preventDefault();
                const email = (vipEmailInput.value || '').trim();
                if (!email || !email.includes('@') || !email.includes('.')) {
                    vipEmailInput.style.borderColor = '#ef4444';
                    vipEmailInput.placeholder = 'Please enter a valid email address';
                    vipEmailInput.focus();
                    return;
                }

                // Persist VIP registration
                localStorage.setItem('fre_vip_email', email);
                localStorage.setItem('fre_vip_code', 'FRE250-VIP');

                // Animate to success
                if (formContainer) formContainer.style.display = 'none';
                if (successNotice) {
                    successNotice.style.display = 'flex';
                    successNotice.innerHTML = `<span>🎉 VIP Privilege Activated for <strong>${email}</strong>! Code <strong>FRE250-VIP</strong> applied.</span>`;
                }
            };

            claimVipBtn.addEventListener('click', handleVipSubmit);
            vipEmailInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleVipSubmit(e);
            });
        }

        // Corridor gateway only opens on explicit user click (no auto-popup)
    },

    fixAssetPaths() {
        // No subdirectory pages in this flat structure — all pages at root
    },

    setActiveNavLink() {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link, .mob-link').forEach(link => {
            const href = link.getAttribute('href') || '';
            if (href === path || (path === '' && href === 'index.html')) {
                link.classList.add('nav-active');
            }
        });
    },

    initMobileMenu() {
        const btn = document.getElementById('btn-mobile-menu');
        const close = document.getElementById('mobile-close');
        const drawer = document.getElementById('mobile-drawer');
        if (!btn || !drawer) return;

        const openDrawer = () => {
            drawer.classList.add('open');
            document.body.classList.add('drawer-open');
        };
        const closeDrawer = () => {
            drawer.classList.remove('open');
            document.body.classList.remove('drawer-open');
        };

        btn.addEventListener('click', () => {
            if (drawer.classList.contains('open')) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });
        if (close) close.addEventListener('click', closeDrawer);
        drawer.querySelectorAll('.mob-nav-item, .mob-action-card, .mob-drawer-call-link, .mob-link').forEach(l => {
            l.addEventListener('click', closeDrawer);
        });
    },

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('fre_lang', lang);
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        if (window.FRE_I18N) window.FRE_I18N.apply(lang);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    SHARED.init();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => SHARED.applyLanguage(btn.dataset.lang));
    });

    // ── Inject Mobile Call Bar on every page ──
    if (!document.querySelector('.mobile-call-bar')) {
        const callBar = document.createElement('div');
        callBar.className = 'mobile-call-bar';
        callBar.innerHTML = `
            <div class="mob-call-left">
                <svg width="16" height="16" fill="#22c55e" viewBox="0 0 18 18"><path d="M14.707 12.707l-2-2a1 1 0 00-1.414 0l-1.086 1.086a9.08 9.08 0 01-3.586-3.586l1.086-1.086a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0L2.586 5.414C2.211 5.789 2 6.285 2 6.808c0 4.965 4.227 8.99 9.192 8.99.523 0 1.019-.211 1.394-.586l1.707-1.707a1 1 0 000-1.414z"/></svg>
                <div>
                    <div class="mob-call-name">F.R.E. Contractor LLC</div>
                    <div class="mob-call-phone">(929) 412-7546</div>
                </div>
            </div>
            <div class="mob-call-btn-group">
                <a href="tel:+19294127546" class="mob-call-btn mob-call-btn-green">📞 Call</a>
                <a href="booking.html" class="mob-call-btn mob-call-btn-amber">📅 Book</a>
            </div>
        `;
        document.body.appendChild(callBar);
    }
});

window.SHARED = SHARED;
