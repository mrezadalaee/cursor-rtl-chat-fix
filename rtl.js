(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* --- 1. General AI Responses (Right to Left) --- */
        .anysphere-markdown-container-root, 
        .markdown-section {
            direction: rtl !important;
            text-align: right !important;
        }

        /* --- 2. User Input & History (Lexical Editor) --- */
        .aislash-editor-input, 
        .aislash-editor-input-readonly,
        .composer-human-message {
            direction: rtl !important;
            text-align: right !important;
        }

        /* --- 3. Input Placeholder Fix --- */
        .aislash-editor-placeholder {
            direction: rtl !important;
            text-align: right !important;
            right: 15px !important;
            left: auto !important;
        }

        /* --- 4. Fix List Bullets --- */
        .markdown-section ul, 
        .markdown-section ol {
            padding-right: 20px !important;
            padding-left: 0 !important;
        }

        /* --- 5. TABLE FIXES (Independent Scrolling) --- */
        .markdown-table-container {
            direction: ltr !important; /* Keep standard scrollbar direction */
            overflow-x: auto !important;
            max-width: 100% !important;
            display: block !important;
            border-radius: 4px;
        }
        
        table.markdown-table {
            direction: rtl !important;
            width: max-content !important;
            min-width: 100% !important;
            border-collapse: collapse !important;
        }

        .markdown-table th,
        .markdown-table td {
            text-align: right !important;
            border: 1px solid var(--vscode-textSeparator-foreground) !important;
            padding: 6px 10px !important;
        }

        /* --- 6. Code Blocks LTR (Strict Override) --- */
        code, 
        pre, 
        .markdown-code-outer-container,
        .cursor-code-block-content,
        .monaco-editor {
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: plaintext !important;
        }
        
        .markdown-section code {
            display: inline-block; 
            direction: ltr;
        }

        /* --- 7. PLAN MODE / QUESTIONNAIRE FIXES (NEW) --- */
        /* Main questions container */
        #composer-toolbar-section,
        .composer-questionnaire-toolbar {
            direction: rtl !important;
            text-align: right !important;
        }

        /* Questions header (Questions + stepper) */
        .composer-questionnaire-toolbar-header {
            direction: rtl !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
        }

        /* Question text */
        .composer-questionnaire-toolbar-question-label {
            text-align: right !important;
            direction: rtl !important;
        }

        /* Options (A, B, C) */
        .composer-questionnaire-toolbar-option {
            direction: rtl !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            text-align: right !important;
        }

        /* Space between option letter (A) and option text */
        .composer-questionnaire-toolbar-option-label {
            margin-right: 8px !important;
            margin-left: 0 !important;
        }

        /* Text inputs inside options (Other...) */
        .composer-questionnaire-toolbar-freeform-input {
            text-align: right !important;
            direction: rtl !important;
        }

        /* Bottom buttons (Skip / Continue) */
        .composer-questionnaire-toolbar-actions {
            direction: rtl !important;
            display: flex !important;
            flex-direction: row-reverse !important; /* Let Continue button fall to the left */
            justify-content: flex-end !important;
        }
    `;
    document.head.appendChild(style);
    console.log("%c RTL Fix Updated (Plan Mode + Tables)! ", "background: #e91e63; color: #fff; font-size: 14px; padding: 4px; border-radius: 4px;");
})();