/**
 * Claude Desktop RTL Support Script
 * Paste this in Claude Desktop's Developer Tools Console to enable RTL for Persian/Arabic text.
 */
(function() {
    // Prevent multiple execution
    if (document.getElementById('smart-rtl-style')) return;

    const style = document.createElement('style');
    style.id = 'smart-rtl-style';
    style.innerHTML = `
        /* RTL for message bodies, titles, and input area */
        .font-claude-response-body, 
        .standard-markdown, 
        .ProseMirror,
        [data-testid="user-message"] {
            direction: rtl !important;
            text-align: right !important;
        }

        .standard-markdown p, 
        .standard-markdown h1, 
        .standard-markdown h2, 
        .standard-markdown h3, 
        .standard-markdown h4, 
        .standard-markdown h5, 
        .standard-markdown h6 {
            text-align: right !important;
        }

        /* Keep LTR for code blocks and terminals */
        pre, 
        .code-block__code, 
        [role="group"][aria-label="Code"],
        [data-language] {
            direction: ltr !important;
            text-align: left !important;
        }

        /* Isolate inline code to prevent RTL breakage */
        code {
            unicode-bidi: isolate;
            direction: ltr !important;
        }

        /* Fix padding for bullet and numbered lists */
        .standard-markdown ul, 
        .standard-markdown ol,
        [data-testid="user-message"] ul,
        [data-testid="user-message"] ol {
            padding-right: 2rem !important;
            padding-left: 0 !important;
        }

        /* Fix table direction */
        .standard-markdown table {
            direction: rtl !important;
        }
        .standard-markdown th, 
        .standard-markdown td {
            text-align: right !important;
        }

        /* Fix placeholder in message input */
        .ProseMirror p.is-empty::before {
            right: 0 !important;
            left: auto !important;
        }
        
        /* Keep copy buttons LTR to prevent UI breakage */
        button[aria-label="Copy to clipboard"],
        button[aria-label="Copy"],
        [data-testid="action-bar-copy"] {
            direction: ltr !important;
        }
    `;
    
    document.head.appendChild(style);
    console.log("%c✔ Page RTL applied successfully.", "color: #fff; background-color: #4caf50; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 14px;");
})();
