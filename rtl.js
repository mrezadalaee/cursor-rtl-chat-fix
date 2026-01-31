(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* 1. General AI Responses (Right to Left) */
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

        /* 3. Input Placeholder Fix */
        .aislash-editor-placeholder {
            direction: rtl !important;
            text-align: right !important;
            right: 15px !important;
            left: auto !important;
        }

        /* 4. Fix List Bullets */
        .markdown-section ul, 
        .markdown-section ol {
            padding-right: 20px !important;
            padding-left: 0 !important;
        }

        /* 5. TABLE FIXES (New Update) */
        /* قاب دور جدول را LTR نگه می‌داریم تا اسکرول خراب نشود */
        .markdown-table-container {
            direction: ltr !important; 
        }
        
        /* خود جدول را RTL می‌کنیم تا ستون‌ها جابجا شوند */
        table.markdown-table {
            direction: rtl !important;
            width: 100% !important;
        }

        /* متن داخل سلول‌ها و هدرها راست‌چین شود */
        .markdown-table th,
        .markdown-table td {
            text-align: right !important;
            border: 1px solid var(--vscode-textSeparator-foreground) !important; /* خطوط جدول واضح‌تر */
        }

        /* 6. Code Blocks LTR (Strict Override) */
        code, 
        pre, 
        .markdown-code-outer-container,
        .cursor-code-block-content,
        .monaco-editor {
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: plaintext !important;
        }
        
        /* Inline code inside Persian text */
        .markdown-section code {
            display: inline-block; 
            direction: ltr;
        }
    `;
    document.head.appendChild(style);
    console.log("%c RTL Fix Updated (Table Scroll Fixed)! ", "background: #007acc; color: #fff; font-size: 14px; padding: 4px; border-radius: 4px;");
})();