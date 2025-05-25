# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. This website features a clean design with smooth animations and is fully responsive across all devices.

## Features

- Modern and clean design
- Responsive layout
- Smooth scrolling navigation
- Interactive project cards
- Skills section with tags
- Contact section with social links
- Animated elements on scroll
- Mobile-friendly navigation

## Customization

### Personal Information

1. Open `index.html` and modify:
   - Your name in the hero section
   - Your professional title/subtitle
   - About Me section content
   - Skills in the skill tags
   - Project descriptions and links
   - Social media links in the contact section

### Styling

1. Open `styles.css` to customize:
   - Color scheme (modify the variables in `:root`)
   - Font sizes and families
   - Spacing and layout
   - Animations and transitions

### Adding Projects

To add a new project:

1. In the `index.html` file, copy an existing project card in the projects section
2. Modify the content:
   ```html
   <div class="project-card">
       <h3>Your Project Title</h3>
       <p>Your project description</p>
       <div class="project-links">
           <a href="your-demo-link" class="btn small">View Project</a>
           <a href="your-github-link" class="btn small secondary">GitHub</a>
       </div>
   </div>
   ```

## Deployment

You can deploy this website using various hosting services:

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your main branch as the source
5. Your site will be published at `https://yourusername.github.io/repository-name`

### Netlify

1. Sign up for a Netlify account
2. Connect your GitHub repository
3. Deploy from the Netlify dashboard
4. Your site will be published with a Netlify subdomain (can be customized)

### Vercel

1. Sign up for a Vercel account
2. Import your project from GitHub
3. Configure your deployment settings
4. Your site will be published with a Vercel subdomain (can be customized)

## Local Development

To run the website locally:

1. Clone the repository
2. Open the project folder
3. Open `index.html` in your browser

For live reload during development, you can use extensions like Live Server in VS Code.

## Browser Support

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. 