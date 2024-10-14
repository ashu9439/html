from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

# # Tabs input  epic    features    userStories
@app.route('/input')
def input():
    return render_template('index.html')

# @app.route('/epic')
# def epic():
#     return render_template('epic.html')

# @app.route('/features')
# def features():
#     return render_template('features.html')

# @app.route('/user_stories')
# def userStories():
#     return render_template('userStories.html')

if __name__ == '__main__':
    app.run(debug=True)
