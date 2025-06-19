# website-template.md

## Repeatable Website Build Prompt

I want to build a modern, polished, single-page website for a project or business.  
The site should feel warm, gentle, and supportive, with a calming, modern design (inspired by [empathy.com](https://www.empathy.com)).

**Please generate the following:**

---

### 1. index.html
- A complete, accessible homepage.
- Responsive hero section with logo, headline, and mission statement.
- Three feature/benefit blocks describing the core value.
- Footer with copyright.
- “Create Account” button that opens a modal sign-up flow.
- Use semantic HTML5 elements.
- Add `<!-- INSERT: ... -->` comments for customizable sections (e.g., logo, name, mission).

---

### 2. styles.css
- Calming, modern palette (lavender, slate blue, light gray, white).
- Clean, sans-serif font (e.g., Helvetica Neue, Arial, Inter).
- Spacious, gentle layout using flexbox or grid.
- Mobile responsive by default.
- Top comment block for theme variable overrides.

---

### 3. scripts.js
- “Create Account” button opens modal with sign-up form (name, email, password).
- Validate form and show a warm, supportive success message.
- Modal closes on background click or “×” icon.

---

### 4. Logo
- Minimalist logo using a soft lavender or white background.
- Modern sans-serif type for the brand name.
- Optional gentle symbol (e.g., heart, calm wave, abstract figure).
- Return the logo as an inline image in your output (not a download).

Use the following for the site unless I specify otherwise:
- **Project Name:** [INSERT PROJECT NAME]
- **Mission Statement:** [INSERT 1-sentence description of the service/mission here]

---

### 5. Output instructions
- Provide each file in its own fenced code block for copy/paste.
- Do not zip files unless I request it.
- Ask if I need GitHub Pages deployment help.
- Ask if I’d like to save this prompt for future reuse.

---

## Example Input

**Project Name:** GriefOps  
**Mission Statement:** A platform for families experiencing loss to gently organize memorials, RSVPs, and invitations — replacing chaotic group texts and spreadsheets with a calm shared space.

---

## Self-Review Criteria

Before finalizing, check that the result is:
- Clear and modular for new use cases.
- Covers homepage, CSS, JS interactivity, and branding/logo.
- Uses a warm, inclusive tone and modern layout.
- Delivers copy-pasteable code blocks for all assets.

---

## Output Structure

1. Logo image (inline)
2. Code blocks for:
    - `index.html`
    - `styles.css`
    - `scripts.js`
3. Deployment help (if requested)

---

