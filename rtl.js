(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* 1. AI Responses (Markdown) */
        .anysphere-markdown-container-root, 
        .markdown-section {
            direction: rtl !important;
            text-align: right !important;
        }

        /* 2. User Input & History (Lexical Editor) */
        .aislash-editor-input, 
        .aislash-editor-input-readonly,
        .composer-human-message {
            direction: rtl !important;
            text-align: right !important;
        }

        /* 3. Input Placeholder (Plan, @ for context...) */
        .aislash-editor-placeholder {
            direction: rtl !important;
            text-align: right !important;
            right: 15px !important;
            left: auto !important;
        }

        /* 4. Fix List Bullets in RTL */
        .markdown-section ul, 
        .markdown-section ol {
            padding-right: 20px !important;
            padding-left: 0 !important;
        }

        /* 5. Keep Code Blocks LTR (CRITICAL) */
        code, 
        pre, 
        .markdown-code-outer-container,
        .cursor-code-block-content,
        .monaco-editor {
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: plaintext !important;
        }
        
        /* Fix for inline code inside RTL text */
        .markdown-section code {
            display: inline-block; 
            direction: ltr;
        }
    `;
    document.head.appendChild(style);
    console.log("%c Cursor RTL Fix Updated (Lexical Engine)! ", "background: #4caf50; color: #fff; font-size: 14px; padding: 4px; border-radius: 4px;");
})();