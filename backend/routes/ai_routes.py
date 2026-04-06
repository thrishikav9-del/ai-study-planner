from flask import Blueprint, jsonify
from models import Task
from ai.suggestion_engine import generate_suggestions

ai_bp = Blueprint('ai', __name__)

@ai_bp.route('/suggestions', methods=['GET'])
def get_suggestions():
    tasks = Task.query.all()
    suggestions = generate_suggestions(tasks)
    return jsonify(suggestions)
