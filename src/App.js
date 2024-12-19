import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleModalSave = (updatedTask) => {
    editTask(updatedTask);
    setShowModal(false);
  };

  return (
    <div className="App">
      <Container className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1>Task Manager</h1>
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            Add Task
          </Button>
        </div>

        <TaskList
          tasks={tasks}
          onEditTask={handleEditClick}
          onDeleteTask={deleteTask}
        />
      </Container>
      <TaskForm
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        onAddTask={addTask}
      />
      {currentTask && (
        <EditTask
          show={showModal}
          handleClose={() => setShowModal(false)}
          task={currentTask}
          onSave={handleModalSave}
        />
      )}
    </div>
  );
}

export default App;
