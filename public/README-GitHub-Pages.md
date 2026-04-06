# Austin's Lawn Service static site

## Folder layout
- `index.html`
- `privacy.html`
- `assets/css/styles.css`
- `assets/js/site.js`
- `media/` (copy all images, icons, and `AustinReady.mp4` here)
- `CNAME`
- `.nojekyll`

## Media files expected in `media/`
- `IMG_0346.jpe.jpg`
- `AustinLawnServiceRecommend-light-192x60px.png`
- `IMG_0331.jpe.jpg`
- `IMG_0347.jpeg`
- `IMG_0332.jpe.jpg`
- `IMG_0333.jpe.jpg`
- `IMG_0354_edited.jpg`
- `IMG_0355_edited.jpg`
- `IMG_0329.png`
- `IMG_0360.jpeg`
- `IMG_0351.jpeg`
- `IMG_0352.jpeg`
- `austincit.jpg.jpeg`
- `IMG_4874.jpeg`
- `IMG_0349.jpeg`
- `IMG_4870.jpeg`
- `IMG_4877.jpe.jpg`
- `IMG_0356.jpeg`
- `AustinReady.mp4`
- `cropped-AustinLawnService-512x512px-wbackground-32x32.png`
- `cropped-AustinLawnService-512x512px-wbackground-180x180.png`

## GitHub Pages
1. Create or use a GitHub repository.
2. Put these files at the publishing root (or in `/docs` if you prefer that pattern).
3. Copy your media files into `media/`.
4. In GitHub, enable **Pages** and publish from the branch/folder you chose.
5. In the repository Pages settings, set the custom domain to `www.austinslawnservice.com`.
6. Leave the `CNAME` file in place.
7. After DNS is updated and GitHub validates the domain, enable **Enforce HTTPS**.

## Route 53
For GitHub Pages with a `www` custom domain:
- create a `CNAME` record for `www` that points to your GitHub Pages hostname (for example, `<account>.github.io`).
- if you also want the root domain `austinslawnservice.com` to work, create the four GitHub Pages apex `A` records and let GitHub redirect the apex to `www` after both are configured.
