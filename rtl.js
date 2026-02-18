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
            direction: ltr !important; 
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

        /* --- 7. PLAN MODE / QUESTIONNAIRE FIXES --- */
        #composer-toolbar-section,
        .composer-questionnaire-toolbar {
            direction: rtl !important;
            text-align: right !important;
        }

        .composer-questionnaire-toolbar-header {
            direction: rtl !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
        }

        .composer-questionnaire-toolbar-question-label {
            text-align: right !important;
            direction: rtl !important;
        }

        .composer-questionnaire-toolbar-option {
            direction: rtl !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            text-align: right !important;
        }

        .composer-questionnaire-toolbar-option-label {
            margin-right: 8px !important;
            margin-left: 0 !important;
        }

        .composer-questionnaire-toolbar-freeform-input {
            text-align: right !important;
            direction: rtl !important;
        }

        .composer-questionnaire-toolbar-actions {
            direction: rtl !important;
            display: flex !important;
            flex-direction: row-reverse !important; 
            justify-content: flex-end !important;
        }

        /* --- 8. TO-DO LIST FIXES (NEW) --- */
        /* Main todo list container */
        .todo-list-container {
            direction: rtl !important;
            text-align: right !important;
        }

        /* List header (To-dos) */
        .todo-list-header {
            direction: rtl !important;
            display: flex !important;
            flex-direction: row !important;
        }

        .todo-list-header-left {
            direction: rtl !important;
            display: flex !important;
            justify-content: flex-start !important;
        }

        /* Each todo row (checkbox + text) */
        .todo-label {
            direction: rtl !important;
            text-align: right !important;
            display: flex !important;
            align-items: flex-start !important; /* Proper alignment for multi-line text */
        }

        /* Checkbox-to-text spacing */
        .todo-indicator-container {
            margin-left: 8px !important; /* Left spacing for checkbox */
            margin-right: 0 !important;  /* Remove right spacing (LTR default) */
            margin-top: 4px !important; /* Align with first line of text */
        }

        /* Todo text content */
        .todo-content {
            text-align: right !important;
            unicode-bidi: plaintext !important;
        }
    `;
    document.head.appendChild(style);
    console.log("%c RTL Fix Updated (Todo List Added)! ", "background: #9c27b0; color: #fff; font-size: 14px; padding: 4px; border-radius: 4px;");
})();