# TurningBull Blog

A Jekyll blog about quantitative finance, economics, and leadership.

## Features

### Email Subscription
The blog includes an email subscription feature that allows readers to sign up for notifications when new articles are published.

#### Implementation Details
- **Form Service**: Uses [Formspree.io](https://formspree.io) for handling form submissions
- **Location**: Subscription form appears in the footer of all pages
- **Styling**: Matches the existing site theme with dark background and red accent colors
- **JavaScript**: Works with both jQuery and vanilla JavaScript (fallback included)
- **Privacy**: Includes privacy notice and allows users to dismiss the form

#### Configuration
1. Update the `formspree_id` in `_config.yml` with your own Formspree form ID
2. The form will submit to `https://formspree.io/f/{your-form-id}`
3. Subscribers will be redirected to `/subscription-success` page after submitting

#### Files Added/Modified
- `_includes/email-subscription.html` - Subscription form component
- `_includes/footer.html` - Updated to include subscription form
- `css/main.scss` - Added subscription form styles
- `js/main.js` - Added subscription form JavaScript functionality
- `subscription-success.md` - Success page for subscription confirmations
- `_config.yml` - Added formspree_id configuration

## Development

### Building the Site
```bash
bundle install
bundle exec jekyll build
```

### Running Locally
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/TurningBull/`

### Dependencies
- Jekyll 3.10.0
- github-pages gem for GitHub Pages compatibility
- Sass for styling
- jQuery for enhanced interactivity (with vanilla JS fallback)

## Deployment
This site is configured for GitHub Pages deployment. Simply push to the main branch and GitHub Pages will automatically build and deploy the site.