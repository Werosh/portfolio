# Portfolio Website

A fully responsive multi-page portfolio website built with MkDocs and Material theme.

## Quick Start

### Installation

```bash
pip install -r requirements.txt
```

### Local Development

```bash
python.exe -m mkdocs serve --watch docs/overrides
```

Visit `http://127.0.0.1:8000` in your browser.

**Auto-Reload Feature**: The `mkdocs serve` command automatically watches for file changes and reloads the browser. Use `--watch docs/overrides` to ensure CSS files in the overrides directory are watched for changes.

When you edit markdown files, CSS, or configuration, the site rebuilds automatically. No need to stop and restart the server!

For CSS changes, you may need to do a hard refresh (Ctrl+F5 or Cmd+Shift+R) to clear browser cache.

### Build

```bash
mkdocs build
```

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

## Configuration

Edit `mkdocs.yml` to customize:

- Site name and description
- Social media links
- Navigation structure
- Theme settings

## Adding Images

Place images in `docs/images/` directory and reference them in Markdown:

```markdown
![Description](images/your-image.png)
```

## Customization

The theme uses a dark slate color scheme. To modify colors, edit the `theme.palette` section in `mkdocs.yml`.
