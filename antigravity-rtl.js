/**
 * Antigravity IDE RTL Support Script (Smart RTL)
 * Paste this in Antigravity IDE's Developer Tools Console to enable RTL for Persian/Arabic messages.
 */
(function() {
  const PERSIAN_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const SKIP_TAGS = new Set(['code', 'pre', 'kbd', 'samp', 'var', 'script', 'style', 'textarea', 'input', 'svg', 'img', 'button']);
  const TARGET_SELECTOR = 'p, h1, h2, h3, h4, h5, h6, li, blockquote, td, th, figcaption, dt, dd, summary, [class*="select-text"], [class*="whitespace-pre-wrap"]';

  function isRTLText(text) {
    if (!text || !text.trim()) return false;
    const letters = text.match(/[\p{L}]/gu) || [];
    if (letters.length === 0) return false;
    const persianCount = (text.match(new RegExp(PERSIAN_REGEX.source, 'gu')) || []).length;
    return (persianCount / letters.length) > 0.3; // More than 30% Persian/Arabic characters
  }

  function resetInlineCode(el) {
    // Set direction to LTR for all code elements inside this element
    el.querySelectorAll('code, pre, kbd, samp, var').forEach(child => {
      child.style.direction = 'ltr';
      child.style.textAlign = 'left';
    });
  }

  function processElement(el) {
    if (el.hasAttribute('data-rtl-injected')) return;
    if (SKIP_TAGS.has(el.tagName.toLowerCase())) return;

    if (isRTLText(el.textContent)) {
      el.style.direction = 'rtl';
      el.style.textAlign = 'right';
      resetInlineCode(el);
      el.setAttribute('data-rtl-injected', 'true');
    }
  }

  // Initial execution
  document.querySelectorAll(TARGET_SELECTOR).forEach(processElement);

  // Observe future DOM changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mut => {
      mut.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches && node.matches(TARGET_SELECTOR)) {
            processElement(node);
          }
          if (node.querySelectorAll) {
            node.querySelectorAll(TARGET_SELECTOR).forEach(processElement);
          }
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  console.log('✅ Smart RTL for Antigravity IDE applied.');
})();
