import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityComparison =
      priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityComparison !== 0) return priorityComparison;

    const dateA = a.dueDate ? new Date(a.dueDate) : new Date(9999, 12, 31);
    const dateB = b.dueDate ? new Date(b.dueDate) : new Date(9999, 12, 31);
    return dateA - dateB;
  });

  const groupedTasks = sortedTasks.reduce((groups, task) => {
    (groups[task.priority] = groups[task.priority] || []).push(task);
    return groups;
  }, {});

  if (tasks.length === 0) {
    return (
      <p className="text-center">
        No tasks yet. Add a new task to get started!
      </p>
    );
  }

  return (
    <div>
      {Object.keys(groupedTasks).map((priority) => (
        <div key={priority} className="mb-4">
          <h2>{priority}</h2>
          <div className="d-flex flex-wrap">
            {groupedTasks[priority].map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
