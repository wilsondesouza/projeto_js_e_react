import Badge from 'react-bootstrap/Badge';
import ListGroupBS from 'react-bootstrap/ListGroup';

export default function ListGroups({ items = [] }) {
    return (
        <ListGroupBS as="ul" >
            {items.map(item => (
                <ListGroupBS.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.title}</div>
                    </div>
                    {item.total ? (
                        <Badge bg="primary" pill>
                            {item.total}
                        </Badge>
                    ) : null}
                </ListGroupBS.Item>
            ))}
        </ListGroupBS>
    );
}
