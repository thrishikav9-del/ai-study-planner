from flask import Blueprint, request, jsonify
from models import db, Task

task_bp = Blueprint('tasks', __name__)

@task_bp.route('/tasks', methods=['POST'])
def add_task():
    data = request.json
    
    if not data.get("title") or not data.get("deadline"):
        return jsonify({"error": "Invalid input"}), 400

    task = Task(
        title=data['title'],
        deadline=data['deadline']
    )

    db.session.add(task)
    db.session.commit()

    return jsonify({"message": "Task added"})


@task_bp.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    
    return jsonify([{
        "id": t.id,
        "title": t.title,
        "deadline": t.deadline,
        "completed": t.completed
    } for t in tasks])


@task_bp.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    task.completed = True
    db.session.commit()

    return jsonify({"message": "Task updated"})
