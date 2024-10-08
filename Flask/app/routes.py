from flask import render_template
from . import create_app

# TODo: add route here , will decide and check later
# 
# ============================================================

app = create_app()

@app.route('/')
def home():
    return render_template('welcome.html')

@app.route('/home')
def about():
    return render_template('about.html')
