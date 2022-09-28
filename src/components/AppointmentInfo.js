import {Button,ListGroup} from "react-bootstrap";
import {RiDeleteBin6Line} from "react-icons/ri"
const AppointInfo= ({appointment,onDeleteAppointment})=>{
    return (
        <>  
            <ListGroup.Item>
                    <p><small>Data:{appointment.aptDate}</small></p>
                    <p><strong>First:</strong>{appointment.firstName}</p>
                    <p><strong>Last:</strong>{appointment.lastName}</p>
                    <p><strong>Notes:</strong>{appointment.aptNotes}</p>
                    <Button onClick={()=>onDeleteAppointment(appointment.id)}size="sm" variant = "danger"><RiDeleteBin6Line/>Delete</Button>
            </ListGroup.Item>
        
        </>
    )
};
export default AppointInfo;