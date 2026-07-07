# Creating a Minecraft Creeper ID Card using Lua

Project developed during the Bootcamp Lua Developer Training, under the guidance of specialist [Rafael Skoberg](https://github.com/rafaskb "Rafael Skoberg").
Build a simple Lua application where you'll learn to work with variables, functions, and conditional logic in a fun, relaxed way.

## Technologies Used

- **HTML** - semantic and accessible markup for the ID card.
- **CSS** - responsive styles with support for dark/light themes (dark is the default).
- **JavaScript** - logic for rendering attributes, toggling languages, switching themes, regenerating attributes, and copying JSON.

## Features

- **Dark / Light Mode** toggled via moon/sun icons. Dark mode is the default, and the preference is saved to `localStorage`.
- **Multilingual**: English (default), Portuguese (Brazil), Spanish. The interface and text update instantly.
- **Accessible**: Semantic HTML, `aria` attributes, keyboard-navigable code block, and progress bars using `role="progressbar"` and `aria-valuenow`.
- **Responsive**: Works on desktop, tablet, and smartphone.
- **Illustrative Lua source code** included in the interface for reference (read-only).
- **"Copy JSON" button** to export current card data for use in other tools or exercises.

## How to Run

1. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
2. Use the language selector and theme toggle button in the header. Click **Regenerate** to select attributes or **Copy JSON** to copy the current card data.

## Accessibility Notes

- All interactive controls are keyboard-accessible.
- Dynamic content updates use `aria-live` regions.
- Progress bars expose `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes. ---

## Expanding the project (ideas)

- Add more creatures and a selector to switch between them.
- Load the Lua file dynamically (via *drag and drop*) and process the attributes.
- Add animations and sound effects (ensure accessible mute controls).
- Offer an export option (SVG/PNG) for the card (note: this demo does not include file export).

![Screenshot](/img/rg_creeper.png)

[LICENSE](/LICENSE)

See [original repository](https://github.com/digitalinnovationone/trilha-lua/tree/main/M%C3%B3dulo%201/Desafio%20de%20Projeto).
