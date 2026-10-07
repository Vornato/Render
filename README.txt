RENDER STUDIO - LOCAL WEBSITE

OPEN THE WEBSITE
Double-click index.html. No installation, build step, account or internet connection is needed to view the website. WhatsApp requires an internet connection.
Keep index.html, styles.css, sections.css, script.js and the assets folder together.

OPTIONAL LOCAL PREVIEW
If Python is installed, open a terminal in this folder and run:
python -m http.server 4173 --bind 127.0.0.1
Then open http://127.0.0.1:4173. Stop the preview with Ctrl+C.

WHAT IS INCLUDED
Responsive home, services, portfolio, about, process, FAQ and contact sections.
Six services: video creation, motion design, social media and posting, brand strategy, paid campaigns, analytics and reporting.
Expandable service details, portfolio category filters, two concept detail dialogs, the supplied brand motion video, a mobile navigation menu, scroll reveals and image motion.
The red square on the right tracks page progress. Click or drag the track to scroll; when focused, use the arrow keys, Page Up/Down, Home or End. It also works by touch.
A motion pause control is in the footer. The site respects the device’s reduced-motion preference. Portfolio videos play when a visitor clicks Play. The decorative hero background automatically loops silently while the top section is visible.

CONTACT
Contact: use the Chat on WhatsApp button. The phone number is not displayed.
The primary setting is RENDER_CONFIG at the top of script.js. Update whatsappNumber (digits only, including country code) if needed. Also update the fallback WhatsApp links in index.html so the buttons remain correct without JavaScript.
The project form builds a WhatsApp message using the visitor’s name, company, selected services and brief. It opens WhatsApp for the visitor to review and send; it does not send automatically. The website does not store or transmit form entries to a server.

EDITING CONTENT
index.html: all public page text, service lists, FAQ, portfolio cards and form.
styles.css: site tokens, header, hero, scroll control and their responsive styling.
sections.css: page sections, portfolio, forms, dialogs, footer and responsive styling.
script.js: navigation, contact number, motion, scroll control, filters, video and portfolio detail content.
assets/: optimized versions of the supplied logo, banner, video and four generated artworks.
To replace a portfolio concept, update its image/video and caption in index.html; if it opens a detail dialog, update conceptData in script.js as well.

CONTENT NOTES
The portfolio is intentionally labeled as studio concepts. The motion study uses your supplied Banner video.mp4. The other entries use the generated brand artworks. They do not claim client projects, campaign outcomes or measured results.
The about copy, service scopes, workflow and FAQ are proposed business copy. Review these against your actual offering before publishing.
No paid-ad accounts, social-media integrations, analytics tracking, backend or hosting have been added. Analytics describes a service the studio offers.

ASSETS
logo.webp: supplied logo, cropped around its original mark for a compact navigation treatment.
banner.webp: supplied banner image.
banner-loop.mp4: compressed, silent browser-friendly copy of the supplied banner video.
strategy.webp, content.webp, growth.webp, studio-wide.webp: optimized copies of the generated website illustrations.
All website assets and dependencies are included locally. The site loads no external fonts, scripts or tracking pixels.

GEORGIAN / ENGLISH
Use GE / ENG at the top of the page to switch languages. The site remembers the choice on this device. Georgian translation includes navigation, services, portfolio, details, form fields, accessibility labels and WhatsApp messages. Brand names and the supplied banner video stay in their original form.
i18n.js holds the Georgian translation dictionary and language-switch behavior. enhancements.css handles the language selector and Georgian typography. The Georgian fonts are included in assets, together with their open-font license.
You can also open index.html?lang=ka or index.html?lang=en to choose an initial language. The normal default is English.

REMOTION WEBSITE MOTION
motion.bundle.js is the local, prebuilt Remotion Player + React bundle. It runs directly from index.html without a server or installation.
The decorative composition follows the page's scroll progress. On desktop, a red square follows the pointer and responds to interactive controls. Touch and small-screen layouts use scroll motion without a custom cursor. The normal pointer is preserved. Pausing motion or enabling reduced motion hides this decorative layer.
motion-source includes the editable PixelMotion.tsx composition, the Player integration, build script, Studio entrypoint, package.json and lockfile. node_modules is not included.
To rebuild: open a terminal in motion-source, run npm ci, then npm run build. The rebuilt file goes in the parent website folder. Optional composition preview: npm run studio.
Documentation: https://www.remotion.dev/docs/player/player
The dependency license is in REMOTION-LICENSE.txt. The bundle's other notices are in motion.bundle.js.LEGAL.txt.

HERO BACKGROUND LOOP
The top hero section uses assets/hero-loop.webm with assets/hero-loop.mp4 as a compatibility fallback: a 1920x1080, 30fps, 12-second seamless Remotion loop of softly blurred, shadow-like shapes. It is decorative and contains no lettering or repeated logo. assets/hero-loop-poster.webp is the static fallback.
hero-video.js controls muted inline autoplay, pauses playback when the hero leaves the viewport or the browser tab is hidden, and respects the site's motion pause control and reduced-motion preference.
The hero also includes assets/hero-loop-animated.webp, an animated-image version of the same loop. It moves without video autoplay permission and is visible until native video frames are confirmed. If the video is rejected or stalls, the animated fallback stays visible. Background layers use a normal non-negative stacking order.
A Play / Pause background control is always available at the top of the hero. It controls both video and image fallback. Pausing replaces the animated image with the still poster; reduced-motion and offscreen behavior are preserved. Clicking Play explicitly enables only this background, without enabling other animations.
The first section keeps the original two-column composition: headline and buttons on the left, the pixel artwork on the right. The movie fills all of #home edge to edge at full opacity, including the top, side gutters and space between the foreground elements. Whole-section white overlays have been removed. The foreground text, image frame and lower strip use rounded, transparent white glass panels with backdrop blur, white highlights and subtle shadows. The text panel fades from 62% to 50% white, and the artwork panel from 42% to 22% white. Outer corners are 28px on desktop and 22px on mobile; the artwork has rounded inner corners. The artwork stays sharp; background movement shows through the glass. Browsers without backdrop-filter use a more opaque white fallback. The movie has stronger charcoal-to-light movement, no lettering and one red dot in its center. On mobile the foreground cards stack over the same full-section video.
The video is contained inside #home; it does not extend into the navigation or other sections. All original image assets are still available in assets.
The editable composition is motion-source/src/HeroBackdrop.tsx. After npm ci in motion-source, run node render-hero.mjs to regenerate the MP4. The poster can be exported from frame 0.

VERIFICATION
Tested in Chromium at 320, 390, 768, 1024 and 1440 pixels wide with no horizontal overflow. Verified service expansion, portfolio filters and dialogs, video playback, mobile navigation, scroll keyboard controls, WhatsApp brief formatting, motion preference and direct opening from disk. The contact integration was verified by its URL and message content, without sending a message.

SECTION BACKGROUND TINTS
The active scroll section sets data-active-section on the document. The background fades through logo-derived muted red, light gray and warm white; services use a deeper red or charcoal with light text. The header follows the tint, and the hero movie has a subtle color blend while its white glass panels stay readable. The same scroll state drives navigation and the red-square section indicator. Reduced-motion preferences and the motion pause control make color changes immediate. Edit the six section palette rules at the end of enhancements.css to change the colors.

OPENING LOGO ANIMATION
Each fresh page load starts on black. The supplied logo's ten square positions assemble, RENDER STUDIO appears, then staggered black tiles fade to reveal the website in about 3.4 seconds. intro.css and intro.js control the responsive opening. Skip intro or Escape opens the website immediately. Reduced-motion or saved motion-pause settings show a short static logo and simple fade. The opening temporarily locks scrolling and background interaction, then restores both. A fail-safe removes it if initialization fails. The intro needs no video autoplay, external assets or server.

Intro verification: JavaScript syntax and isolated lifecycle checks for automatic completion, tile coverage at desktop/mobile sizes, skip/Escape, reduced motion, saved pause settings, resize, storage failures and restored interaction. The intro was not visually checked in the live file browser tab.

OCTOBER 2026 VISUAL UPDATE
Hero uses the supplied Render background video, optimized as assets/render-background.mp4, with a matching poster and animated fallback. This replaces the generated red-dot loop. Section palettes now cover the full page, header, form and footer, finishing in charcoal at contact. Hero glass reflections follow mouse pointers and respect motion preferences. The supplied Render Studio wordmark appears in the footer.

CINEMATIC DESIGN
cinematic.css adds a near-black canvas, diagonal light trails, sculptural artwork, white typography and red pill actions inspired by the supplied reference. The supplied video and whole-page scroll palettes remain active.

TYPOGRAPHY AND FINISHING PASS
English uses the locally hosted Manrope variable font; Georgian uses Noto Sans Georgian with its own size, spacing and weight rules. The OFL licenses are included in assets. cinematic.css is the final visual layer. Language choices persist and are shareable with ?lang=en or ?lang=ka. The first visit in a browser tab plays the shorter intro; later visits in the same session open directly. The decorative Remotion overlay is no longer loaded. The hero artwork responds gently to mouse pointers and respects paused/reduced motion.
The portfolio identity study now also uses the supplied Render background footage in its original, taller composition to keep the full studio mark visible in the card. The footer PNG is blended over the dark canvas without an opaque rectangle.

ADDITIONAL SERVICES
Website design & development and Brand identity & design are included in the service grid, capability strip and WhatsApp brief options, in English and Georgian. Website scope covers custom landing/business sites, responsive development, contact flows and launch handover. Brand identity covers logos, colors, typography, branded templates and guidelines.

REACTIVE HERO CARD
The hero artwork follows fine mouse pointers with up to 8 degrees of pitch and 11 degrees of yaw, a moving glass reflection, subtle layer parallax and smooth easing back to rest. A stable outer wrapper prevents pointer feedback jitter. Touch, reduced motion and the site motion toggle keep the effect disabled; hidden tabs, scroll and window blur reset it.
