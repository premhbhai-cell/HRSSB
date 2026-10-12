# Automatic image sliders

Five folder-based image sliders are available across the Home, About, Programs, Membership and Contact pages.

## Where to add images

- `src/assets/slider1/` — general / Who We Are gallery
- `src/assets/slider2/` — mission and objectives gallery
- `src/assets/slider3/` — programs and community work gallery
- `src/assets/slider4/` — Certificates & Recognition (shown before Who We Are on Home)
- `src/assets/slider5/` — Join Our Mission / membership and volunteer gallery

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`.

## How it works

1. Copy images into the folder for the slider you want to update.
2. Use unique filenames such as `image-01.jpg`, `image-02.jpg`.
3. Run a new build and deploy the website. Vite discovers images automatically; filenames do not need to be added to code.
4. Empty slider folders stay hidden until images are added.

Sliders change automatically every 4 seconds and include previous/next arrows and slide dots. The layout is responsive for desktop and mobile. The Certificates & Recognition slider is placed before the Home page's Who We Are section; Join Our Mission appears directly after the leadership section on Home. Both sections are also included on the About, Programs, Membership and Contact pages.

Note: folders are under `src/assets` so Vite can discover their images at build time. After adding images, rebuild and redeploy to publish them.
