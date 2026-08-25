/**
 * DeepSeek Harness RTL Support Script (Smart RTL)
 * Paste this in DeepSeek Harness' Developer Tools Console to enable RTL for Persian/Arabic messages.
 */
(function persistentRTL() {
  // Detect Persian characters
  function hasPersian(text) {
    return /[\u0600-\u06FF]/.test(text);
  }

  // Apply RTL to a single element (respecting previous conditions)
  function applyRTLToElement(element) {
    if (!element) return;
    // Skip if inside a code block or is itself code
    if (element.closest('pre, code, .rdIaPG_root, .-wGnkG_root, .kvRD2a_actions')) {
      return;
    }
    const text = element.textContent;
    if (hasPersian(text) && text.trim().length > 0) {
      element.style.direction = 'rtl';
      element.style.textAlign = 'right';
      element.style.unicodeBidi = 'embed';
      element.style.wordBreak = 'break-word';
    }
  }

  // Process newly added nodes
  function processNode(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    // If the element itself is one of the bubbles
    if (node.matches && node.matches('.bawzBW_bubble, ._text_1pfhk_1, .T6sLqq_body, ._markdown_1r4m5_5')) {
      applyRTLToElement(node);
    }

    // Search for bubbles inside this node
    const bubbles = node.querySelectorAll('.bawzBW_bubble, ._text_1pfhk_1, .T6sLqq_body, ._markdown_1r4m5_5');
    bubbles.forEach(applyRTLToElement);
  }

  // Set up MutationObserver to watch for new messages
  const chatContainer = document.querySelector('.S6wQTW_column');
  if (!chatContainer) {
    console.warn('Chat container not found. The page class may have changed.');
    return;
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        processNode(node);
      });
    });
  });

  observer.observe(chatContainer, {
    childList: true,
    subtree: true
  });

  // Apply to currently existing messages (first run)
  document.querySelectorAll('.bawzBW_bubble, ._text_1pfhk_1, .T6sLqq_body, ._markdown_1r4m5_5')
    .forEach(applyRTLToElement);

  // Protective styles (to avoid leaking into code blocks)
  if (!document.getElementById('rtl-protection-style')) {
    const style = document.createElement('style');
    style.id = 'rtl-protection-style';
    style.textContent = `
      /* Protect code and non-chat elements */
      pre, code, .rdIaPG_root, .-wGnkG_root, 
      .kvRD2a_actions, .kvRD2a_timeStart, .kvRD2a_timeEnd,
      .S6wQTW_column, .S6wQTW_flowItem, .bawzBW_userRow {
        direction: ltr !important;
        text-align: left !important;
        unicode-bidi: normal !important;
      }
    `;
    document.head.appendChild(style);
  }

  console.log('✅ Dynamic RTL enabled. New messages are now right-aligned automatically.');
})();
