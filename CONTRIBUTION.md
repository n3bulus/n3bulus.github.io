# Contributing to the Avatar Generator

Thank you for wanting to contribute! 🎉  
This project is powered by community-made assets, so your creativity makes it even better.

---

## 📂 Folder Structure

All visual assets live in specific folders inside `/assets`:
```yaml
assets/
├── accessories/
│ ├── 1.png
│ ├── 2.png
│ └── ...
├── mouths/
│ ├── 1.png
│ ├── 2.png
│ └── ...
├── backgrounds/
│ ├── 1.jpg
│ ├── 2.jpg
│ └── ...
└── base/
│ └── clippy_body.png
```

---

## 🖼️ Asset Requirements

### General
- **File format:** PNG **with transparent background** (except backgrounds, which can be full images and JPG).
- **Centered:** Make sure your asset is aligned and positioned for the avatar’s proportions.
- **Naming:** Use sequential numbers with no gaps:  
  `1.png`, `2.png`, `3.png`, etc.

---

### Accessories
- Should align correctly with the base Clippy body.
- Examples: glasses, hats, eyebrows, etc.
- Save inside `/assets/accessories/` with sequential numbering.

---

### Mouths
- Should be positioned in the correct mouth area relative to Clippy.
- Keep transparent background.
- Save inside `/assets/mouths/` with sequential numbering.

---

### Backgrounds
- Can be **full image** or **pattern**.
- If you want the user to choose a background color, that is handled in code.
- Save inside `/assets/backgrounds/` with sequential numbering starting from `1.jpg`.

---

## 🔄 How to Contribute

1. **Fork** this repository.
2. Create a **new branch**:  
```bash
   git checkout -b add-new-accessories
```
Add your assets to the correct folder following the rules above.
Test locally to ensure alignment works and files load correctly.

3. Commit your changes:
```bash
git commit -m "Add new accessories"
```

4. Push your branch:
```bash
git push origin add-new-accessories
```

5. Open a Pull Request and describe:
- What you added.
- Any notes about alignment or special positioning.

## ✅ Testing Your Assets
- Open `index.html` in a browser.
- Cycle through assets using the UI controls to make sure:
    - They load without errors.
    - They align with the Clippy base.


