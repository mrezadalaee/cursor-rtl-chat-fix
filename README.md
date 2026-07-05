# RTL Support Snippets for AI Coding Tools 🚀

A collection of JavaScript snippets to fix **Right-to-Left (RTL)** text rendering issues (Persian, Arabic) in various AI coding tools.

Currently, many AI tools do not fully support RTL directionality in their chat interfaces, causing mixed English/RTL sentences to scramble. These snippets force the correct direction without breaking code blocks.

## Available Scripts

| Script | Target | Method |
|--------|--------|--------|
| [`rtl.js`](rtl.js) | **Cursor** Editor | CSS injection |
| [`opencode-rtl.js`](opencode-rtl.js) | **Opencode** CLI Chat | Smart per-element RTL detection |
| [`claude-rtl.js`](claude-rtl.js) | **Claude Desktop** | CSS injection |

## ✨ Features

- **Smart Direction:** Sets RTL only for text, keeping code blocks LTR.
- **Non-destructive:** Does not modify application files permanently.
- **Easy to use:** No plugins required.

## 🛠 How to Use

### Cursor

1. Open the [`rtl.js`](rtl.js) file and copy its content.
2. Open **Cursor**.
3. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) → **`Toggle Developer Tools`**.
4. Go to the **Console** tab, paste the code, and press **Enter**.

### Opencode

1. Open the [`opencode-rtl.js`](opencode-rtl.js) file and copy its content.
2. Open **Opencode** in your browser.
3. Press `F12` or `Ctrl + Shift + I` to open Developer Tools.
4. Go to the **Console** tab, paste the code, and press **Enter**.

### Claude Desktop

1. Open the [`claude-rtl.js`](claude-rtl.js) file and copy its content.
2. Open **Claude Desktop**.
3. Press `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac) to open Developer Tools.
4. Go to the **Console** tab, paste the code, and press **Enter**.

> **Note:** These are temporary fixes injected into the running instance. You will need to re-apply the snippet if you completely restart the application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
