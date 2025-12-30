(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* Fix RTL for Chat Messages */
        .markdown-section, 
        .anysphere-markdown-container-root,
        [class*="composer-human-ai-pair-container"],
        .chat-message-content {
            direction: rtl !important;
            text-align: right !important;
            unicode-bidi: plaintext !important;
        }

        /* Keep Code Blocks LTR */
        code, 
        pre, 
        .markdown-inline-code,
        [class*="monaco-editor"],
        .token {
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: normal !important;
            display: inline-block;
        }
    `;
    document.head.appendChild(style);
    console.log("%c RTL Fix Applied! ", "background: #222; color: #bada55; font-size: 15px;");
})();