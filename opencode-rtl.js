/**
 * Opencode RTL Support Script (Smart RTL)
 * Paste this in Opencode's Developer Tools Console to enable RTL for Persian/Arabic messages.
 */
(function() {
  // Check if text contains Persian/Arabic characters
  function hasPersianOrArabic(text) {
    return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
  }

  // Apply direction to an element based on its text content
  function applyDirection(element) {
    const text = element.textContent || '';
    if (hasPersianOrArabic(text)) {
      element.style.direction = 'rtl';
      element.style.textAlign = 'right';
      element.style.unicodeBidi = 'embed';
    } else {
      element.style.direction = 'ltr';
      element.style.textAlign = 'left';
      element.style.unicodeBidi = 'normal';
    }
  }

  // Select message text elements (only inside chat area)
  function processMessageElements() {
    const selectors = [
      '[data-slot="user-message-text"]',
      '[data-slot="text-part-body"] .markdown',
      '[data-slot="text-part-body"]',
      '.markdown p',
      '.markdown div',
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        // Only target elements inside chat area (not sidebar)
        if (el.closest('[data-timeline-row]') || el.closest('[data-slot="session-turn"]')) {
          applyDirection(el);
        }
      });
    });
  }

  // Initial application
  processMessageElements();

  // Watch for DOM changes (new messages)
  const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    for (const mut of mutations) {
      if (mut.addedNodes.length > 0) {
        shouldUpdate = true;
        break;
      }
    }
    if (shouldUpdate) {
      processMessageElements();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log('✅ Smart RTL for chat messages enabled (English messages stay LTR).');
})();
