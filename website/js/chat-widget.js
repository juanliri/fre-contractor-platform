/**
 * F.R.E. CONTRACTOR — CUSTOM CHAT WIDGET (No ChatBot.com needed)
 * Free replacement. Connects to FAQ tree + WhatsApp handoff.
 */
(function() {
    const FAQ = [
        { q: 'How much does interior painting cost?', a: 'Rooms typically range from $350–$900 per room depending on size, ceiling height, and prep work needed. Get your exact estimate →', link: 'estimate.html' },
        { q: 'Do you work with NYCHA apartments?', a: 'Yes! We have extensive experience with NYCHA apartments and low-income housing projects across all 5 boroughs.' },
        { q: 'Are you licensed and insured?', a: 'Yes. F.R.E. Contractor LLC is fully licensed (DOS ID: 6658255) and carries General Liability insurance. COI available upon request.' },
        { q: 'How soon can you start?', a: 'For small residential jobs we can often start within 3–5 business days. Commercial projects are scheduled based on scope. Book now →', link: 'booking.html' },
        { q: 'Do you do cabinet refinishing?', a: 'Yes! Cabinet refinishing is one of our specialties — a fraction of the cost of full replacement. Learn more →', link: 'residential.html' },
        { q: 'Can you remove popcorn ceilings?', a: 'Absolutely. We\'ve removed thousands of square feet of popcorn ceilings. We test for asbestos on pre-1980 homes. Safe and clean.' },
        { q: 'Do you offer commercial project bids?', a: 'Yes — general contractors, facilities managers, and property managers can submit a formal RFQ through our Bid Portal →', link: 'bid-portal.html' },
        { q: 'What areas do you serve?', a: 'We serve all 5 NYC boroughs: Bronx, Manhattan, Brooklyn, Queens, and Staten Island. We\'re based in the Bronx.' },
    ];

    const CSS = `
#fre-chat-widget { position:fixed; bottom:148px; right:24px; z-index:450; font-family:'Inter',sans-serif; }
#fre-chat-btn { width:56px; height:56px; background:linear-gradient(135deg,#0B2545,#1D9A76); border-radius:50%; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 20px rgba(0,0,0,0.4); transition:transform .2s ease; }
#fre-chat-btn:hover { transform:scale(1.08); }
#fre-chat-badge { position:absolute; top:-3px; right:-3px; width:16px; height:16px; background:#F58220; border-radius:50%; border:2px solid #07172B; font-size:9px; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; }
#fre-chat-box { position:fixed; bottom:92px; right:24px; width:340px; max-width:calc(100vw - 32px); height:auto; max-height:min(540px, calc(100vh - 110px)); max-height:min(540px, calc(100dvh - 110px)); background:rgba(7,23,43,.98); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,.14); border-radius:16px; box-shadow:0 24px 60px rgba(0,0,0,.75); display:none; flex-direction:column; overflow:hidden; z-index:9999; }
#fre-chat-box.open { display:flex; animation:chatFadeIn .22s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes chatFadeIn { from{opacity:0;transform:translateY(12px) scale(0.98)} to{opacity:1;transform:none} }
#fre-chat-head { flex-shrink:0; padding:12px 16px; background:linear-gradient(135deg,rgba(11,37,69,.9),rgba(29,154,118,.25)); border-bottom:1px solid rgba(255,255,255,.08); display:flex; align-items:center; gap:10px; }
#fre-chat-head img { width:34px; height:34px; border-radius:50%; object-fit:cover; border:2px solid #1D9A76; flex-shrink:0; }
.fre-agent-info strong { color:#fff; font-size:.88rem; display:block; }
.fre-agent-info span { color:#94a3b8; font-size:.74rem; }
.fre-online { width:8px; height:8px; background:#22c55e; border-radius:50%; margin-left:auto; flex-shrink:0; box-shadow:0 0 6px rgba(34,197,94,.6); }
#fre-chat-close { background:rgba(255,255,255,0.08); border:none; color:#cbd5e1; cursor:pointer; font-size:1.1rem; width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; line-height:1; transition:background .15s, color .15s; flex-shrink:0; margin-left:6px; }
#fre-chat-close:hover { background:rgba(239,68,68,0.25); color:#ef4444; }
#fre-chat-msgs { padding:12px 14px; flex:1 1 auto; max-height:210px; min-height:80px; overflow-y:auto; display:flex; flex-direction:column; gap:8px; }
#fre-chat-msgs::-webkit-scrollbar { width:4px; }
#fre-chat-msgs::-webkit-scrollbar-track { background:transparent; }
#fre-chat-msgs::-webkit-scrollbar-thumb { background:rgba(255,255,255,.15); border-radius:4px; }
.chat-bubble { padding:8px 12px; border-radius:12px; font-size:.82rem; line-height:1.45; max-width:88%; }
.chat-bubble.bot { background:rgba(255,255,255,.07); color:#cbd5e1; align-self:flex-start; border-bottom-left-radius:4px; }
.chat-bubble.user { background:linear-gradient(135deg,#1D9A76,#0B2545); color:#fff; align-self:flex-end; border-bottom-right-radius:4px; }
.chat-bubble a { color:#F58220; }
#fre-chat-faqs { flex-shrink:0; padding:0 14px 8px; max-height:130px; overflow-y:auto; display:flex; flex-direction:column; gap:5px; }
#fre-chat-faqs::-webkit-scrollbar { width:4px; }
#fre-chat-faqs::-webkit-scrollbar-thumb { background:rgba(255,255,255,.1); border-radius:4px; }
.faq-btn { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.09); color:#94a3b8; padding:7px 11px; border-radius:8px; text-align:left; cursor:pointer; font-size:.76rem; font-family:inherit; transition:all .15s ease; }
.faq-btn:hover { background:rgba(245,130,32,.12); border-color:rgba(245,130,32,.35); color:#F58220; }
#fre-chat-footer { flex-shrink:0; padding:8px 14px; border-top:1px solid rgba(255,255,255,.06); display:flex; gap:8px; }
#fre-chat-input { flex:1; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.12); border-radius:8px; padding:8px 12px; color:#fff; font-size:.82rem; outline:none; font-family:inherit; }
#fre-chat-input::placeholder { color:#475569; }
#fre-chat-send { background:#F58220; border:none; border-radius:8px; padding:8px 14px; cursor:pointer; color:#fff; font-weight:700; font-size:.8rem; transition:background .2s; }
#fre-chat-send:hover { background:#d97010; }
#fre-chat-wa { flex-shrink:0; padding:6px 14px 12px; }
#fre-chat-wa a { display:flex; align-items:center; justify-content:center; gap:8px; background:rgba(37,211,102,.12); border:1px solid rgba(37,211,102,.25); color:#22c55e; padding:8px; border-radius:8px; text-decoration:none; font-size:.78rem; font-weight:700; transition:all .2s; }
#fre-chat-wa a:hover { background:rgba(37,211,102,.2); }
@media (max-width:480px) {
  #fre-chat-box { bottom:76px; right:12px; left:12px; width:auto; max-width:none; max-height:calc(100vh - 90px); max-height:calc(100dvh - 90px); }
  #fre-chat-widget { bottom:134px; right:16px; }
}
`;

    const HTML = `
<style>${CSS}</style>
<div id="fre-chat-widget">
  <div id="fre-chat-box">
    <div id="fre-chat-head">
      <img src="assets/logo.png" alt="FRE Logo">
      <div class="fre-agent-info">
        <strong>F.R.E. Support</strong>
        <span>Bronx Painting Experts</span>
      </div>
      <div class="fre-online"></div>
      <button id="fre-chat-close" aria-label="Close chat">✕</button>
    </div>
    <div id="fre-chat-msgs">
      <div class="chat-bubble bot">👋 Hi! I'm the F.R.E. virtual assistant. How can I help you today?</div>
    </div>
    <div id="fre-chat-faqs"></div>
    <div id="fre-chat-footer">
      <input id="fre-chat-input" placeholder="Type a question...">
      <button id="fre-chat-send">Send</button>
    </div>
    <div id="fre-chat-wa">
      <a href="https://wa.me/19294127546" target="_blank" rel="noopener">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Chat on WhatsApp (live)
      </a>
    </div>
  </div>
  <button id="fre-chat-btn" aria-label="Open chat">
    <span id="fre-chat-badge">?</span>
    <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"/></svg>
  </button>
</div>`;

    document.addEventListener('DOMContentLoaded', () => {
        document.body.insertAdjacentHTML('beforeend', HTML);

        const btn   = document.getElementById('fre-chat-btn');
        const box   = document.getElementById('fre-chat-box');
        const close = document.getElementById('fre-chat-close');
        const msgs  = document.getElementById('fre-chat-msgs');
        const faqsEl = document.getElementById('fre-chat-faqs');
        const input = document.getElementById('fre-chat-input');
        const send  = document.getElementById('fre-chat-send');
        const badge = document.getElementById('fre-chat-badge');

        let open = false;

        // Populate FAQ quick-reply buttons
        FAQ.slice(0, 4).forEach((item, i) => {
            const b = document.createElement('button');
            b.className = 'faq-btn';
            b.textContent = item.q;
            b.onclick = () => answer(item);
            faqsEl.appendChild(b);
        });

        function addBubble(text, type) {
            const div = document.createElement('div');
            div.className = `chat-bubble ${type}`;
            div.innerHTML = text;
            msgs.appendChild(div);
            msgs.scrollTop = msgs.scrollHeight;
        }

        function answer(item) {
            addBubble(item.q, 'user');
            setTimeout(() => {
                let resp = item.a;
                if (item.link) resp += ` <a href="${item.link}">Click here →</a>`;
                addBubble(resp, 'bot');
            }, 350);
        }

        function handleInput() {
            const q = input.value.trim().toLowerCase();
            if (!q) return;
            addBubble(input.value, 'user');
            input.value = '';

            // Simple keyword match
            const match = FAQ.find(f => {
                const kw = f.q.toLowerCase().split(' ').filter(w => w.length > 3);
                return kw.some(w => q.includes(w));
            });

            setTimeout(() => {
                if (match) {
                    let resp = match.a;
                    if (match.link) resp += ` <a href="${match.link}">Click here →</a>`;
                    addBubble(resp, 'bot');
                } else {
                    addBubble('Great question! For personalized help, reach us directly on WhatsApp or call <a href="tel:+19294127546">(929) 412-7546</a>.', 'bot');
                }
            }, 400);
        }

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            open = !open;
            box.classList.toggle('open', open);
            badge.style.display = 'none';
        });
        close.addEventListener('click', (e) => {
            e.stopPropagation();
            open = false;
            box.classList.remove('open');
        });
        send.addEventListener('click', handleInput);
        input.addEventListener('keydown', e => e.key === 'Enter' && handleInput());

        // Close on ESC or click outside
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && open) {
                open = false;
                box.classList.remove('open');
            }
        });
        document.addEventListener('click', (e) => {
            if (open && !box.contains(e.target) && !btn.contains(e.target)) {
                open = false;
                box.classList.remove('open');
            }
        });

        // Show badge after delay
        setTimeout(() => {
            if (!open) badge.style.display = 'flex';
        }, 3000);
    });
})();
