# Cursor Editor RTL Support Snippet 🚀

A simple JavaScript snippet to fix **Right-to-Left (RTL)** text rendering issues (Persian, Arabic) in the **Cursor** editor's AI Chat.

Currently, Cursor does not fully support RTL directionality in its chat interface, causing mixed English/RTL sentences to scramble. This snippet forces the correct direction without breaking code blocks.

## ✨ Features
* **Smart Direction:** Sets RTL only for text, keeping code blocks LTR.
* **Non-destructive:** Does not modify application files permanently.
* **Easy to use:** No plugins required.

## 🛠 How to Use

Since Cursor is based on VS Code, we can inject styles via the Developer Tools console.

1. Open the [`rtl.js`](rtl.js) file in this repository and copy its content.
2. Open **Cursor**.
3. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) to open the command palette.
4. Type and select **`Toggle Developer Tools`**.
5. Navigate to the **Console** tab.
6. Paste the code you copied and hit **Enter**.

✅ **Done!** The chat should now display RTL text correctly.

> **Note:** This is a temporary fix injected into the running instance. You will need to re-apply this snippet if you completely restart the Cursor application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.