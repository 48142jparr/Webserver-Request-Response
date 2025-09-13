# Express.js Web Server Tutorial

A modern Node.js web application built with Express.js that demonstrates async/await patterns and serves dynamic HTML content.

## 🚀 Overview

This project is a simple yet effective demonstration of building a web server using Node.js and Express.js. It showcases modern JavaScript features including async/await for file operations and serves a personalized HTML page with embedded media content.

## ✨ Features

- **Modern Express.js Server** - Built with the latest Express framework
- **Async/Await Implementation** - Uses modern JavaScript async patterns
- **Static File Serving** - Efficiently serves HTML content
- **Error Handling** - Robust error handling for file operations
- **Embedded Media** - Includes Giphy integration for dynamic content
- **Responsive Design** - Mobile-friendly HTML with custom CSS

## 📁 Project Structure

```
Tutorial Node js/
├── index.js              # Main Express server with async/await
├── home.html             # HTML page with embedded content
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Dependency lock file
├── node_modules/         # Installed dependencies
└── README.md            # Project documentation
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **HTML5** - Modern markup for web content
- **CSS3** - Styling and responsive design
- **Giphy API** - Embedded media content

## 📋 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes bundled with Node.js)
- A modern web browser

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
node index.js
```

### 3. View the Application
Open your browser and navigate to:
```
http://localhost:3000/home
```

## 🔧 Configuration

### Environment Variables
- `PORT` - Server port (default: 3000)

Example:
```bash
PORT=8080 node index.js
```

### Custom Port
```bash
export PORT=5000
node index.js
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/home`  | Serves the main HTML page with embedded content |

## 🧪 Testing

### Manual Testing
1. Start the server: `node index.js`
2. Open browser to `http://localhost:3000/home`
3. Verify the page loads with content and embedded Giphy

### Using curl
```bash
# Test the home endpoint
curl http://localhost:3000/home

# Test error handling
curl http://localhost:3000/nonexistent
```

## 🔍 Code Highlights

### Async/Await File Reading
```javascript
application.get('/home', async (req, res) => {
    try {
        const html = await readFile('./home.html', 'utf8');
        res.send(html);
    } catch (err) {
        res.status(500).send('Error loading home page');
    }
});
```

### Modern ES6+ Features
- Destructuring imports
- Async/await patterns
- Template literals
- Arrow functions

## 🚧 Development

### Adding New Routes
```javascript
application.get('/about', async (req, res) => {
    res.json({ message: 'About page' });
});
```

### Static File Serving
```javascript
application.use(express.static('public'));
```

### Middleware Integration
```javascript
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
```

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

**Module Not Found**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**File Permission Issues**
```bash
# Check file permissions
ls -la home.html
```

## 📚 Learning Resources

This project demonstrates:
- Express.js server setup and configuration
- Modern async/await patterns in Node.js
- File system operations with promises
- HTTP request/response handling
- Error handling best practices
- HTML/CSS integration
- Project structure and organization

## 🎯 Next Steps

Consider extending this project with:
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and sessions
- [ ] Template engines (EJS, Handlebars)
- [ ] API endpoints for CRUD operations
- [ ] Unit and integration testing
- [ ] Docker containerization
- [ ] Deployment to cloud platforms

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as part of a Node.js learning tutorial.

---

⭐ **Happy Coding!** ⭐
