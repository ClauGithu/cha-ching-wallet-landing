(function(){
  var CALENDLY = "https://calendar.quantiqai.io/claudia/discovery-call?date=2026-09-21&month=2026-09";

  var i18n = {
    en: {
      navLinks: [["#tipos","Pass types"],["#agente","AI Agent"],["#proceso","How it works"]],
      navCta: "Book a demo",
      heroEyebrow: "WALLET PASSES + AI AGENT",
      heroTitleHtml: "Your brand, in their pocket.<span class=\"line2\"><em class=\"grad-text\">Powered by an AI agent.</em></span>",
      heroLede: "Cha Ching Wallet turns any loyalty, membership or event program into an <b>Apple Wallet</b> or <b>Google Wallet</b> pass, connected to an AI Agent that chats, scans receipts and keeps customers coming back.",
      chips: ["Membership","Points","Punch card","Coupon","Event ticket","Prepaid balance","Business card","Loyalty"],
      heroCtaPrimary: "Book a demo",
      ctaNote: "Reply within 24h · No commitment",
      heroCtaGhost: "See the 8 pass types →",
      prevName: "Cha Ching Wallet", prevOnline: "online",
      previewFootHtml: "Your <b>AI Agent</b> never clocks out.",
      stats: [["7+","different types of wallet passes"],["0","apps your customer installs"],["2","wallets supported: Apple & Google"],["24/7","AI Agent working for your brand"]],
      typesEyebrow: "LIVE PREVIEW",
      typesTitleHtml: "This is how <em class=\"grad-text\">your pass</em> replies",
      typesLede: "Eight ways Cha Ching Wallet already works for businesses like yours.",
      types: [
        ["01","MEMBERSHIP","🎟️","3,102 active members",[["cli","How do I join the Cha Ching Club?"],["age","Just your name and email, and I'll send your pass right now 👛"]]],
        ["02","POINTS","⭐","1,240 pts balance",[["cli","Just uploaded my $24 receipt"],["age","Done! +24 points. You're at 1,240 🎉"]]],
        ["03","PUNCH CARD","🔁","9 / 10 punches",[["cli","How many punches until my reward?"],["age","One more! Your next coffee is free ☕"]]],
        ["04","COUPON","🏷️","Expires tonight",[["cli","Is the 20% off coupon still valid?"],["age","Yes, it expires at 11:59pm. Tap to redeem"]]],
        ["05","EVENT TICKET","🎫","Row 12 · Seat 8",[["cli","Where's my ticket for tonight's show?"],["age","Right here, just show the QR at the door 🎫"]]],
        ["06","PREPAID BALANCE","💳","$34.50 available",[["cli","How much balance do I have left?"],["age","You've got $34.50 remaining"]]],
        ["07","BUSINESS CARD","🪪","212 contacts saved",[["cli","Saved to my contacts ✅"],["age","That easy, you've got my details now"]]],
        ["08","LOYALTY","🤝","Gold tier unlocked",[["cli","Did I hit Gold tier yet?"],["age","You did! 2x points starting today 🥇"]]]
      ],
      agentEyebrow: "BUILT-IN AI AGENT",
      agentTitleHtml: "An agent that chats, records<br>and rewards, <em class=\"grad-text\">on its own</em>.",
      agentLede: "Every wallet program connects to an AI Agent: it answers questions, awards points from a scanned receipt, and fires automations the moment something happens on the pass.",
      agentPrevName: "Agente Cha Ching", agentOnline: "online",
      agentChat: [["cli","Hey! I came from the Instagram promo, how do I join?"],["age","On it 🙌 Just your name and email and I'll send your pass right away."],["pass","Pass added to Apple Wallet: Cha Ching Club"],["cli","Just uploaded my receipt, how many points did I get?"],["age","Added 18 points for your $18.40 purchase. You're at 1,240 🎉"]],
      agentList: [
        "AI receipt scanning: snap a photo, points or a punch land in seconds.",
        "The moment something happens on a pass, like a new stamp, an unlocked reward, or a used coupon, we can automatically send an email or a text, or add a row to your spreadsheet.",
        "Lock-screen notifications: announce a promo or nudge someone one step from their reward.",
        "Unified contact: everyone who joins becomes a contact in your conversational CRM."
      ],
      contactEyebrow: "GET IN TOUCH",
      contactTitleHtml: "Let's talk about your <em class=\"grad-text\">wallet program</em>.",
      contactLede: "Send us a note and we'll get back to you with the best next step for your brand.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message / Question",
      messagePlaceholder: "Tell us a little about your program, timeline, or question.",
      contactSubmit: "Send message",
      contactNote: "We usually reply within 24 hours.",
      stepsEyebrow: "PROCESS",
      stepsTitleHtml: "From zero to lock-screen <em class=\"grad-text\">in 4 steps</em>",
      stepsLede: "No long onboarding. No complicated tech. Just results.",
      steps: [
        ["Create your program","Pick the pass type: membership, points, punch card, ticket. Then design it with your brand."],
        ["They join and save it","Customers join via a link or QR and add the pass to Apple Wallet or Google Wallet in one tap."],
        ["The AI Agent takes over","It answers questions, scans receipts, adds points and punches, and fires automations on every event."],
        ["You own the lock-screen","Send silent updates, announcements and rewards straight to the lock screen. No apps to install."]
      ],
      compat: ["Apple Wallet","Google Wallet","No apps to install","Real-time updates"],
      ctaTitleHtml: "Let's put your brand <em class=\"grad-text\">in their pocket</em>.",
      ctaLede: "Book a 20-minute demo and we'll build your first wallet pass live: your logo, your colors, your AI Agent connected.",
      ctaButton: "Book my demo",
      ctaGhost: "See pass types",
      footTag: "Wallet passes + AI Agent for businesses that want to live in their customers' pocket.",
      footCol1Title: "Product",
      footCol1Links: [["#tipos","Pass types"],["#agente","AI Agent"],["#proceso","How it works"]],
      footCol2Title: "Company",
      footCol2Links: [[CALENDLY,"Book a demo"],["#","Quantiq AI"]],
      footCopy: "© " + new Date().getFullYear() + " Cha Ching Wallet, by Quantiq AI.",
      footNote: "Apple Wallet and Google Wallet are trademarks of their respective owners."
    },
    es: {
      navLinks: [["#tipos","Tipos de pases"],["#agente","AI Agent"],["#proceso","Cómo funciona"]],
      navCta: "Agendar demo",
      heroEyebrow: "WALLET PASSES + AI AGENT",
      heroTitleHtml: "Tu marca, en su bolsillo.<span class=\"line2\"><em class=\"grad-text\">Impulsada por un AI Agent.</em></span>",
      heroLede: "Cha Ching Wallet convierte cualquier programa de lealtad, membresía o evento en un pase de <b>Apple Wallet</b> o <b>Google Wallet</b>, conectado a un AI Agent que conversa, escanea recibos y fideliza.",
      chips: ["Membresía","Puntos","Sellos","Cupón","Boleto de evento","Saldo prepagado","Tarjeta de presentación","Lealtad"],
      heroCtaPrimary: "Agendar una demo",
      ctaNote: "Respuesta en menos de 24h · Sin compromiso",
      heroCtaGhost: "Ver los 8 tipos de pase →",
      prevName: "Cha Ching Wallet", prevOnline: "en línea",
      previewFootHtml: "Tu <b>AI Agent</b> nunca cierra turno.",
      stats: [["7+","tipos diferentes de wallet pass"],["0","apps que tu cliente instala"],["2","wallets soportados: Apple y Google"],["24/7","AI Agent trabajando por tu marca"]],
      typesEyebrow: "VISTA PREVIA",
      typesTitleHtml: "Así responde <em class=\"grad-text\">tu pase</em>",
      typesLede: "Ocho formas en las que Cha Ching Wallet ya funciona para negocios como el tuyo.",
      types: [
        ["01","MEMBRESÍA","🎟️","3,102 miembros activos",[["cli","¿Cómo me uno al Club Cha Ching?"],["age","Solo tu nombre y correo, y te mando el pase ahora mismo 👛"]]],
        ["02","PUNTOS","⭐","1,240 pts acumulados",[["cli","Ya subí mi recibo de $24"],["age","¡Listo! +24 puntos. Vas por 1,240 🎉"]]],
        ["03","SELLOS","🔁","9 / 10 sellos",[["cli","¿Cuántos sellos me faltan?"],["age","¡Uno más! Tu próximo café es gratis ☕"]]],
        ["04","CUPÓN","🏷️","Vence hoy",[["cli","¿Aún vale el cupón de 20%?"],["age","Sí, vence a las 11:59pm. Tócalo para canjear"]]],
        ["05","BOLETO DE EVENTO","🎫","Fila 12 · Asiento 8",[["cli","¿Dónde está mi boleto para hoy?"],["age","Aquí tienes, solo muestra el QR en la entrada 🎫"]]],
        ["06","SALDO PREPAGADO","💳","$34.50 disponibles",[["cli","¿Cuánto saldo me queda?"],["age","Te quedan $34.50 disponibles"]]],
        ["07","TARJETA DE PRESENTACIÓN","🪪","212 contactos guardados",[["cli","Guardado en mis contactos ✅"],["age","¡Así de fácil! Ya tienes mis datos"]]],
        ["08","LEALTAD","🤝","Nivel Gold desbloqueado",[["cli","¿Ya llegué al nivel Gold?"],["age","¡Sí! Puntos x2 desde hoy 🥇"]]]
      ],
      agentEyebrow: "AI AGENT INTEGRADO",
      agentTitleHtml: "Un agente que conversa, registra<br>y premia, <em class=\"grad-text\">solo</em>.",
      agentLede: "Cada wallet program se conecta a un AI Agent: responde preguntas, sube puntos al escanear un recibo y dispara automatizaciones cuando algo importante pasa en el pase.",
      agentPrevName: "Agente Cha Ching", agentOnline: "en línea",
      agentChat: [["cli","¡Hola! Vengo de la promo de Instagram, ¿cómo me uno?"],["age","Claro 🙌 Solo tu nombre y correo y te mando tu pase al instante."],["pass","Pase añadido a Apple Wallet: Club Cha Ching"],["cli","Ya subí mi recibo, ¿cuántos puntos gané?"],["age","¡Sumé 18 puntos por tu compra de $18.40! Vas por 1,240 🎉"]],
      agentList: [
        "Escaneo de recibos con IA: una foto y los puntos o sellos se asignan en segundos.",
        "En cuanto pasa algo en un pase, como un sello nuevo, una recompensa lista o un cupón usado, se puede mandar un correo o un mensaje, o agregar una fila a tu hoja de cálculo automáticamente.",
        "Notificaciones al lock-screen: anuncia promociones o avisa a quien está a un paso de su recompensa.",
        "Contacto unificado: quien se une queda como contacto en tu CRM conversacional."
      ],
      contactEyebrow: "CONTÁCTANOS",
      contactTitleHtml: "Hablemos de tu <em class=\"grad-text\">programa wallet</em>.",
      contactLede: "Envíanos un mensaje y te responderemos con el mejor siguiente paso para tu marca.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo",
      emailPlaceholder: "tu@empresa.com",
      messageLabel: "Mensaje / Pregunta",
      messagePlaceholder: "Cuéntanos un poco sobre tu programa, tu fecha objetivo o tu pregunta.",
      contactSubmit: "Enviar mensaje",
      contactNote: "Normalmente respondemos en menos de 24 horas.",
      stepsEyebrow: "PROCESO",
      stepsTitleHtml: "De cero a lock-screen <em class=\"grad-text\">en 4 pasos</em>",
      stepsLede: "Sin onboarding largo. Sin tecnología complicada. Solo resultados.",
      steps: [
        ["Crea tu programa","Elige el tipo de pase: membresía, puntos, sellos, boleto. Luego diséñalo con tu marca."],
        ["Se unen y lo guardan","Tus clientes se unen con un link o QR y agregan el pase a Apple Wallet o Google Wallet en un tap."],
        ["El AI Agent entra en acción","Responde dudas, escanea recibos, suma puntos y sellos, y dispara automatizaciones en cada evento."],
        ["Impactas el lock-screen","Envía actualizaciones, anuncios y recompensas directo a la pantalla de bloqueo. Sin apps que instalar."]
      ],
      compat: ["Apple Wallet","Google Wallet","Sin apps que instalar","Actualizaciones en tiempo real"],
      ctaTitleHtml: "Pongamos tu marca <em class=\"grad-text\">en su bolsillo</em>.",
      ctaLede: "Agenda una demo de 20 minutos y construimos tu primer wallet pass en vivo: tu logo, tus colores, tu AI Agent conectado.",
      ctaButton: "Agendar mi demo",
      ctaGhost: "Ver tipos de pase",
      footTag: "Wallet passes + AI Agent para negocios que quieren vivir en el bolsillo de sus clientes.",
      footCol1Title: "Producto",
      footCol1Links: [["#tipos","Tipos de pases"],["#agente","AI Agent"],["#proceso","Cómo funciona"]],
      footCol2Title: "Compañía",
      footCol2Links: [[CALENDLY,"Agendar demo"],["#","Quantiq AI"]],
      footCopy: "© " + new Date().getFullYear() + " Cha Ching Wallet, by Quantiq AI.",
      footNote: "Apple Wallet y Google Wallet son marcas de sus respectivos dueños."
    }
  };

  function el(tag, cls, html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; }
  var reduceMotion = false;
  try{ reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}

  function renderChat(container, arr){
    container.innerHTML='';
    var items = [];
    arr.forEach(function(m){
      var node = (m[0]==='pass') ? el('div','status-pill', m[1]) : el('div','tbubble ' + m[0], m[1]);
      container.appendChild(node);
      items.push({ kind:m[0], node:node });
    });
    if(reduceMotion){
      items.forEach(function(it){ it.node.classList.add('show'); });
      return;
    }
    container.classList.add('chat-stream');
    container._chatItems = items;
    container._revealed = false;
  }

  function playReveal(container){
    if(container._revealed) return;
    container._revealed = true;
    var items = container._chatItems || [];
    var delay = 150;
    items.forEach(function(item){
      if(item.kind === 'age'){
        var typingEl = el('div','typing show','<i></i><i></i><i></i>');
        (function(typingEl, atDelay){ setTimeout(function(){ container.insertBefore(typingEl, item.node); }, atDelay); })(typingEl, delay);
        delay += 550;
        (function(typingEl, node, atDelay){ setTimeout(function(){ typingEl.remove(); node.classList.add('show'); }, atDelay); })(typingEl, item.node, delay);
        delay += 220;
      } else {
        (function(node, atDelay){ setTimeout(function(){ node.classList.add('show'); }, atDelay); })(item.node, delay);
        delay += 320;
      }
    });
  }

  var chatObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ playReveal(entry.target); chatObserver.unobserve(entry.target); }
    });
  }, {threshold:0.3});

  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('on'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold:0.12});

  function wireMotion(){
    document.querySelectorAll('.chat-stream').forEach(function(c){ chatObserver.observe(c); });
    document.querySelectorAll('.reveal').forEach(function(el){
      if(reduceMotion){ el.classList.add('on'); } else { revealObserver.observe(el); }
    });
  }

  function render(lang){
    var t = i18n[lang];
    document.documentElement.lang = lang;

    var navLinks = document.getElementById('navLinks'); navLinks.innerHTML='';
    t.navLinks.forEach(function(l){ var a=el('a'); a.href=l[0]; a.textContent=l[1]; navLinks.appendChild(a); });
    var navCta = document.getElementById('navCta'); navCta.textContent=t.navCta; navCta.href=CALENDLY;

    document.getElementById('heroEyebrow').textContent = t.heroEyebrow;
    document.getElementById('heroTitle').innerHTML = t.heroTitleHtml;
    document.getElementById('heroLede').innerHTML = t.heroLede;
    var chips = document.getElementById('chipRow'); chips.innerHTML='';
    t.chips.forEach(function(c){ chips.appendChild(el('span','chip', c)); });
    var hp = document.getElementById('heroCtaPrimary'); hp.textContent=t.heroCtaPrimary; hp.href=CALENDLY;
    document.getElementById('ctaNote').textContent = t.ctaNote;
    document.getElementById('heroCtaGhost').textContent = t.heroCtaGhost;

    document.getElementById('prevName').textContent = t.prevName;
    document.getElementById('prevOnline').textContent = t.prevOnline;
    document.getElementById('previewFoot').innerHTML = t.previewFootHtml;

    var sg = document.getElementById('statGrid'); sg.innerHTML='';
    t.stats.forEach(function(s, i){
      var c = el('div','stat-card reveal');
      c.style.transitionDelay = (i*0.08) + 's';
      c.appendChild(el('b', null, s[0]));
      c.appendChild(el('span', null, s[1]));
      sg.appendChild(c);
    });

    document.getElementById('typesEyebrow').textContent = t.typesEyebrow;
    document.getElementById('typesTitle').innerHTML = t.typesTitleHtml;
    document.getElementById('typesLede').textContent = t.typesLede;
    var tc = document.getElementById('typeCarousel'); tc.innerHTML='';
    t.types.forEach(function(p, i){
      var card = el('div','type-card reveal');
      card.style.transitionDelay = (i*0.06) + 's';
      card.appendChild(el('span','num', p[0] + ' · ' + p[1]));
      var who = el('div','who');
      who.appendChild(el('div','type-icon', p[2]));
      who.appendChild(el('h3', null, p[1]));
      card.appendChild(who);
      var chat = el('div','type-chat');
      renderChat(chat, p[4]);
      card.appendChild(chat);
      card.appendChild(el('span','status-pill', p[3]));
      tc.appendChild(card);
    });

    document.getElementById('agentEyebrow').textContent = t.agentEyebrow;
    document.getElementById('agentTitle').innerHTML = t.agentTitleHtml;
    document.getElementById('agentLede').textContent = t.agentLede;
    document.getElementById('agentPrevName').textContent = t.agentPrevName;
    document.getElementById('agentOnline').textContent = t.agentOnline;
    renderChat(document.getElementById('agentChat'), t.agentChat);
    var al = document.getElementById('agentList'); al.innerHTML='';
    t.agentList.forEach(function(txt, i){
      var li = el('li','reveal');
      li.style.transitionDelay = (i*0.08) + 's';
      li.appendChild(el('span','check','✓'));
      li.appendChild(el('span', null, txt));
      al.appendChild(li);
    });

    document.getElementById('stepsEyebrow').textContent = t.stepsEyebrow;
    document.getElementById('stepsTitle').innerHTML = t.stepsTitleHtml;
    document.getElementById('stepsLede').textContent = t.stepsLede;
    var sgd = document.getElementById('stepsGrid'); sgd.innerHTML='';
    t.steps.forEach(function(s, i){
      var st = el('div','step reveal');
      st.style.transitionDelay = (i*0.08) + 's';
      st.appendChild(el('span','num grad-text', String(i+1)));
      st.appendChild(el('h3', null, s[0]));
      st.appendChild(el('p', null, s[1]));
      sgd.appendChild(st);
    });
    var cr = document.getElementById('compatRow'); cr.innerHTML='';
    t.compat.forEach(function(c){ cr.appendChild(el('span', null, c)); });

    document.getElementById('contactEyebrow').textContent = t.contactEyebrow;
    document.getElementById('contactTitle').innerHTML = t.contactTitleHtml;
    document.getElementById('contactLede').textContent = t.contactLede;
    document.getElementById('nameLabel').textContent = t.nameLabel;
    document.getElementById('emailLabel').textContent = t.emailLabel;
    document.getElementById('messageLabel').textContent = t.messageLabel;
    document.getElementById('name').setAttribute('placeholder', t.namePlaceholder);
    document.getElementById('email').setAttribute('placeholder', t.emailPlaceholder);
    document.getElementById('message').setAttribute('placeholder', t.messagePlaceholder);
    document.getElementById('contactSubmit').textContent = t.contactSubmit;
    document.getElementById('contactNote').textContent = t.contactNote;

    document.getElementById('ctaTitle').innerHTML = t.ctaTitleHtml;
    document.getElementById('ctaLede').textContent = t.ctaLede;
    var cb = document.getElementById('ctaButton'); cb.textContent=t.ctaButton; cb.href=CALENDLY;
    document.getElementById('ctaGhost').textContent = t.ctaGhost;

    document.getElementById('footTag').textContent = t.footTag;
    document.getElementById('footCol1Title').textContent = t.footCol1Title;
    var fc1 = document.getElementById('footCol1Links'); fc1.innerHTML='';
    t.footCol1Links.forEach(function(l){ var a=el('a'); a.href=l[0]; a.textContent=l[1]; fc1.appendChild(a); });
    document.getElementById('footCol2Title').textContent = t.footCol2Title;
    var fc2 = document.getElementById('footCol2Links'); fc2.innerHTML='';
    t.footCol2Links.forEach(function(l){ var a=el('a'); a.href=l[0]; a.textContent=l[1]; if(l[0]===CALENDLY){a.target='_blank';a.rel='noopener';} fc2.appendChild(a); });
    document.getElementById('footCopy').textContent = t.footCopy;
    document.getElementById('footNote').textContent = t.footNote;

    try{ localStorage.setItem('ccw-lang', lang); }catch(e){}
    document.getElementById('btnEs').setAttribute('aria-pressed', String(lang==='es'));
    document.getElementById('btnEn').setAttribute('aria-pressed', String(lang==='en'));

    wireMotion();
  }

  var initialLang = 'en';
  try{ var saved = localStorage.getItem('ccw-lang'); if(saved==='es'||saved==='en') initialLang = saved; }catch(e){}

  document.getElementById('btnEs').addEventListener('click', function(){ render('es'); });
  document.getElementById('btnEn').addEventListener('click', function(){ render('en'); });

  render(initialLang);
})();