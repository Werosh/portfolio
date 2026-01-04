# Project Images Directory

This directory contains screenshots and images for all portfolio projects.

## How to Add Project Images

### Step 1: Prepare Your Images

1. **Image Format**: Use JPG, PNG, or WebP format
2. **Recommended Size**: 
   - Width: 1200-1920px
   - Height: Auto (maintain aspect ratio)
   - File size: Under 500KB (optimize for web)
3. **Image Quality**: Use high-quality screenshots that showcase your project well

### Step 2: Name Your Images

Name your images using the project's slug (lowercase, with hyphens). **You can use either `.jpg`, `.png`, or `.webp` extension** - just make sure the filename in the markdown matches your actual file.

Here are the expected filenames (use the extension that matches your file):

#### Featured Projects:
- `nebula-arcs.jpg` or `nebula-arcs.png`
- `sparkling-car-care.png` or `sparkling-car-care.jpg`
- `nextgen-websites.png` or `nextgen-websites.jpg`
- `exl-education.jpg` or `exl-education.png`
- `blue-heaven-rentals.png` or `blue-heaven-rentals.jpg`

#### Client Projects:
- `yummy-yako.png` or `yummy-yako.jpg`
- `study-mate.jpg` or `study-mate.png`
- `busmate-lk.png` or `busmate-lk.jpg`
- `ai-write-checker.png` or `ai-write-checker.jpg`
- `gardenin-template.png` or `gardenin-template.jpg`

#### Template Projects:
- `job-portal-design.png` or `job-portal-design.jpg`
- `sandaru-aqua.png` or `sandaru-aqua.jpg`
- `lassana-moments.png` or `lassana-moments.jpg`
- `salon-ims.png` or `salon-ims.jpg`
- `alphawizards-portfolio.png` or `alphawizards-portfolio.jpg`
- `serenity-hotel.png` or `serenity-hotel.jpg`
- `buy-book-anywhere.png` or `buy-book-anywhere.jpg`
- `group-portfolio.png` or `group-portfolio.jpg`
- `herbal-haven.png` or `herbal-haven.jpg`

**Important**: The extension in the markdown file must match your actual image file extension. If you have `project-name.png`, the markdown should reference `project-name.png`, not `.jpg`.

### Step 3: Place Images in This Folder

Simply copy your image files to this directory (`docs/images/projects/`) with the correct filename.

### Step 4: Verify

The images are already referenced in `docs/projects.md`. Once you add the image files with the correct names, they will automatically appear on your projects page.

## Image Optimization Tips

- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
- For screenshots, PNG works well for UI elements, JPG for photos
- Consider using WebP format for better compression (modern browsers support it)

## Example

If you have a screenshot for "Nebula Arcs":
1. Save it as `nebula-arcs.jpg` (or `.png`)
2. Place it in `docs/images/projects/nebula-arcs.jpg`
3. The image will automatically appear on the projects page!

## Notes

- Images are optional - if an image file doesn't exist, the placeholder will simply not display
- All images use the `.project-image` CSS class for consistent styling
- Images are responsive and will scale properly on all devices

