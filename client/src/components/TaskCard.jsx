function TaskCard({ task, deleteTask }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Due:</strong>{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;