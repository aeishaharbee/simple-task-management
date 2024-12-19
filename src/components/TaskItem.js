import { Button, Card, Col } from "react-bootstrap";

export default function TaskItem({ task, onEditTask, onDeleteTask }) {
  return (
    <Col lg={4} sm={6} xs={12} className="mb-4">
      <Card className="m-2 h-100">
        <Card.Body className="mb-0">
          <h3 className="m-0">{task.taskName}</h3>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center justify-content-between flex-row flex-sm-column flex-md-row gap-0 gap-2 gap-md-0">
          <p className="m-0">Due: {task.dueDate}</p>
          <div className="gap-2 d-flex">
            <Button onClick={() => onEditTask(task)} variant="outline-warning">
              Edit
            </Button>
            <Button
              onClick={() => onDeleteTask(task.id)}
              variant="outline-danger"
            >
              Delete
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
}
