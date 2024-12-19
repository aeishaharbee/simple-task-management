import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function TaskForm({ show, handleClose, onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");

  const handleSave = () => {
    if (taskName.trim() === "") {
      alert("Task name cannot be empty!");
      return;
    }

    onAddTask({
      id: Date.now(),
      taskName,
      priority,
      dueDate,
    });

    setTaskName("");
    setPriority("Low");
    setDueDate("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
            />
          </Form.Group>
          <Form.Group controlId="formPriority" className="mt-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formDueDate" className="mt-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskForm;
