(() => {
  const STYLE_ID = "chat-only-rtl-injection";

  document.getElementById(STYLE_ID)?.remove();

  const css = `
    /*
      Scope: only chat messages + composer
      Do NOT touch html/body/sidebar/header.
    */

    /* User message text */
    [role="feed"] [data-testid="user-message"],
    [role="feed"] [data-testid="user-message"] p,
    [role="feed"] [data-user-message-bubble="true"],
    [role="feed"] [data-user-message-bubble="true"] p {
      direction: rtl !important;
      text-align: right !important;
      unicode-bidi: plaintext !important;
    }

    /* Assistant markdown text only */
    [role="feed"] .font-claude-response .standard-markdown,
    [role="feed"] .font-claude-response .progressive-markdown,
    [role="feed"] .font-claude-response .standard-markdown p,
    [role="feed"] .font-claude-response .progressive-markdown p,
    [role="feed"] .font-claude-response .standard-markdown li,
    [role="feed"] .font-claude-response .progressive-markdown li,
    [role="feed"] .font-claude-response .standard-markdown blockquote,
    [role="feed"] .font-claude-response .progressive-markdown blockquote,
    [role="feed"] .font-claude-response .standard-markdown h1,
    [role="feed"] .font-claude-response .standard-markdown h2,
    [role="feed"] .font-claude-response .standard-markdown h3,
    [role="feed"] .font-claude-response .standard-markdown h4,
    [role="feed"] .font-claude-response .standard-markdown h5,
    [role="feed"] .font-claude-response .standard-markdown h6,
    [role="feed"] .font-claude-response .progressive-markdown h1,
    [role="feed"] .font-claude-response .progressive-markdown h2,
    [role="feed"] .font-claude-response .progressive-markdown h3,
    [role="feed"] .font-claude-response .progressive-markdown h4,
    [role="feed"] .font-claude-response .progressive-markdown h5,
    [role="feed"] .font-claude-response .progressive-markdown h6 {
      direction: rtl !important;
      text-align: right !important;
      unicode-bidi: plaintext !important;
    }

    /* Persian/RTL lists */
    [role="feed"] .font-claude-response .standard-markdown ul,
    [role="feed"] .font-claude-response .standard-markdown ol,
    [role="feed"] .font-claude-response .progressive-markdown ul,
    [role="feed"] .font-claude-response .progressive-markdown ol,
    [role="feed"] [data-testid="user-message"] ul,
    [role="feed"] [data-testid="user-message"] ol {
      direction: rtl !important;
      text-align: right !important;
      padding-right: 1.75rem !important;
      padding-left: 0 !important;
    }

    /* Composer / message input only */
    textarea,
    [contenteditable="true"][role="textbox"],
    [role="textbox"] {
      direction: rtl !important;
      text-align: right !important;
      unicode-bidi: plaintext !important;
    }

    /* Keep code, shell commands, paths, logs LTR */
    [role="feed"] pre,
    [role="feed"] code,
    [role="feed"] kbd,
    [role="feed"] samp,
    [role="feed"] pre *,
    [role="feed"] code *,
    [role="feed"] .cm-editor,
    [role="feed"] .cm-content,
    [role="feed"] [class*="language-"] {
      direction: ltr !important;
      text-align: left !important;
      unicode-bidi: isolate !important;
    }

    /* Inline code should not break inside Persian sentences */
    [role="feed"] p code,
    [role="feed"] li code {
      direction: ltr !important;
      unicode-bidi: isolate !important;
    }
  `;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);

  console.log("✅ Chat-only RTL applied. Sidebar/header untouched.");
})();