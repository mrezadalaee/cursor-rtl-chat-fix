(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* 1. Chat & Questions (Smart RTL/LTR detection) */
        .markdown-section, 
        .anysphere-markdown-container-root,
        [class*="composer-human-ai-pair-container"],
        .chat-message-content,
        .composer-questionnaire-toolbar,
        #composer-toolbar-section {
            direction: rtl !important;
            text-align: right !important;
            unicode-bidi: plaintext !important;
        }

        /* 2. Plan Mode (Strict RTL to fix bullet points alignment) */
        .markdown-lexical-editor-root,
        [class*="markdown-plan-editor"] {
            direction: rtl !important;
            text-align: right !important;
        }

        /* 3. Fix Question Buttons Order */
        .composer-questionnaire-toolbar .monaco-button {
            flex-direction: row-reverse !important;
        }

        /* 4. Keep Code Blocks LTR */
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
    console.log("%c RTL Fix Applied (Chat + Plan Mode)! ", "background: #222; color: #bada55; font-size: 15px;");
})();