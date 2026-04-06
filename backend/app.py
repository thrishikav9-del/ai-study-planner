from flask import Flask
from flask_cors import CORS
from config import Config
from models import db
from routes.task_routes import task_bp
from routes.ai_routes import ai_bp

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
CORS(app)

app.register_blueprint(task_bp)
app.register_blueprint(ai_bp)

@app.route('/')
def home():
    return "<h1>🧠 Smart Study Planner API is Running!</h1><p>The backend is healthy. Please open the React frontend (usually http://localhost:5173) to view the application UI.</p>"

import webbrowser

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    # Auto-open the backend in the browser as requested!
    webbrowser.open("http://127.0.0.1:5000/")
    app.run(debug=True)
