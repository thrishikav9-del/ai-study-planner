def generate_suggestions(tasks):
    suggestions = []

    for task in tasks:
        if not task.completed:
            suggestions.append(f"Focus on '{task.title}' before {task.deadline}")

    if not suggestions:
        suggestions.append("All tasks completed! Great job 🎉")

    return suggestions
