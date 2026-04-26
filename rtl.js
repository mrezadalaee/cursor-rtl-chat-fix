/**
 * Cursor IDE RTL Fix Script (Updated for latest Cursor)
 * Paste this in Cursor's Developer Tools Console (Help > Toggle Developer Tools > Console)
 */
(function () {
    const id = 'cursor-rtl-fix-style';
    let style = document.getElementById(id);
    if (style) style.remove();
  
    style = document.createElement('style');
    style.id = id;
    style.textContent = `
      /* --- 1. General AI Responses (Right to Left) --- */
      .markdown-root,
      .anysphere-markdown-container-root,
      .markdown-section,
      .composer-message-group,
      [data-message-kind="assistant"] .markdown-root,
      .space-y-4 {
        direction: rtl !important;
        text-align: right !important;
      }
  
      /* --- 2. User Input & History (Lexical Editor) --- */
      .aislash-editor-input,
      .aislash-editor-input-readonly,
      .composer-human-message,
      .composer-human-message-container,
      .human-message-with-todos-wrapper {
        direction: rtl !important;
        text-align: right !important;
      }
  
      /* --- 3. Input Placeholder Fix --- */
      .aislash-editor-placeholder,
      [data-placeholder] {
        direction: rtl !important;
        text-align: right !important;
        right: 15px !important;
        left: auto !important;
      }
  
      /* --- 4. Fix List Bullets --- */
      .markdown-root ul,
      .markdown-root ol,
      .markdown-section ul,
      .markdown-section ol,
      .list-disc,
      .list-inside,
      [data-streamdown="unordered-list"],
      [data-streamdown="ordered-list"] {
        padding-right: 20px !important;
        padding-left: 0 !important;
        direction: rtl !important;
        text-align: right !important;
      }
  
      /* --- 5. TABLE FIXES --- */
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
      .composer-code-block-content,
      .monaco-editor,
      .ui-code-block,
      .ui-default-code,
      .composer-message-codeblock {
        direction: ltr !important;
        text-align: left !important;
        unicode-bidi: plaintext !important;
      }
  
      .markdown-root code,
      .markdown-section code {
        display: inline-block;
        direction: ltr;
      }
  
      /* --- 7. TO-DO LIST (New UI structure: ui-todo-*) --- */
      .todo-list-container {
        direction: rtl !important;
        text-align: right !important;
      }
  
      .todo-list-header,
      .todo-list-header-left,
      .todo-list-header-right {
        direction: rtl !important;
        display: flex !important;
        flex-direction: row !important;
      }
  
      /* New todo item structure */
      .ui-todo-list,
      .todo-list {
        direction: rtl !important;
        padding-right: 20px !important;
        padding-left: 0 !important;
      }
  
      .ui-todo-item,
      .ui-todo-item__label {
        direction: rtl !important;
        text-align: right !important;
        display: flex !important;
        align-items: flex-start !important;
      }
  
      .ui-todo-item__indicator {
        margin-left: 8px !important;
        margin-right: 0 !important;
        margin-top: 2px !important;
      }
  
      .ui-todo-item__content {
        text-align: right !important;
        unicode-bidi: plaintext !important;
      }
  
      /* Legacy todo classes (fallback) */
      .todo-label,
      .todo-content {
        direction: rtl !important;
        text-align: right !important;
      }
  
      .todo-indicator-container {
        margin-left: 8px !important;
        margin-right: 0 !important;
      }
  
      /* --- 8. Plan Mode / Questionnaire --- */
      #composer-toolbar-section,
      .composer-questionnaire-toolbar,
      .composer-questionnaire-toolbar-header,
      .composer-questionnaire-toolbar-question-label,
      .composer-questionnaire-toolbar-option,
      .composer-questionnaire-toolbar-freeform-input,
      .composer-questionnaire-toolbar-actions {
        direction: rtl !important;
        text-align: right !important;
      }
  
      .composer-questionnaire-toolbar-option-label {
        margin-right: 8px !important;
        margin-left: 0 !important;
      }
  
      /* --- 9. Step headers, collapsible --- */
      .ui-step-group-header,
      .ui-collapsible-header,
      .composer-tool-former-message {
        direction: rtl !important;
        text-align: right !important;
      }
  
      .tool-summary-hover-target,
      .truncate-one-line {
        direction: rtl !important;
        text-align: right !important;
      }
  
      /* --- 10. Composer pane controls --- */
      .composer-pane-controls-feedback {
        direction: rtl !important;
      }
    `;
    document.head.appendChild(style);
    console.log(
      '%c RTL Fix Applied (Cursor Updated) ',
      'background: #9c27b0; color: #fff; font-size: 14px; padding: 4px; border-radius: 4px;'
    );
  })();