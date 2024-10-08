To create a Python Flask application with a navbar and footer where the main content changes based on the navigation, follow these steps:

### 1. Project Structure

```
flask_app/
│
├── app.py
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── about.html
│   ├── contact.html
└── static/
    ├── css/
        └── styles.css
```

### 2. `app.py` (Flask Backend)

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### 3. `templates/base.html` (Main Layout)

This file includes the navbar and footer, and will use a content block for rendering different pages.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flask App</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>
    <!-- Navbar -->
    <nav>
        <ul>
            <li><a href="{{ url_for('home') }}">Home</a></li>
            <li><a href="{{ url_for('about') }}">About</a></li>
            <li><a href="{{ url_for('contact') }}">Contact</a></li>
        </ul>
    </nav>

    <!-- Main Content -->
    <div class="content">
        {% block content %}{% endblock %}
    </div>

    <!-- Footer -->
    <footer>
        <p>Footer content here</p>
    </footer>
</body>
</html>
```

### 4. `templates/home.html`, `about.html`, and `contact.html`

Each page will extend the base template and fill in the `content` block.

#### `home.html`
```html
{% extends "base.html" %}

{% block content %}
    <h1>Welcome to the Home Page</h1>
    <p>This is the main content of the home page.</p>
{% endblock %}
```

#### `about.html`
```html
{% extends "base.html" %}

{% block content %}
    <h1>About Us</h1>
    <p>Learn more about our website on this page.</p>
{% endblock %}
```

#### `contact.html`
```html
{% extends "base.html" %}

{% block content %}
    <h1>Contact Us</h1>
    <p>You can reach us through the contact form.</p>
{% endblock %}
```

### 5. `static/css/styles.css` (Styling)

Add some basic styles for the layout.

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

nav {
    background-color: #333;
    color: white;
    padding: 10px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 8px;
}

nav ul li a:hover {
    background-color: #555;
}

.content {
    padding: 20px;
    min-height: 400px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: absolute;
    width: 100%;
    bottom: 0;
}
```

### How it works:
- The `base.html` file provides the basic layout with a navbar at the top and a footer at the bottom.
- The `{% block content %}` in `base.html` is dynamically filled by each specific page (`home.html`, `about.html`, etc.).
- When you click on the different links in the navbar, it routes to different views and changes the main content section accordingly.

### Running the Application
1. Open a terminal, navigate to the `flask_app` folder, and run:

```bash
python app.py
```

2. Visit `http://127.0.0.1:5000/` in your browser to view the app. You can navigate through the pages using the links in the navbar.