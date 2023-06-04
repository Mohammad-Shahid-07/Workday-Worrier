import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import {useHistory} from 'react-router-dom'
const ProjectSummary = ({ project }) => {
    const {deleteDocument} = useFirestore("projects")
    const history = useHistory()
    const {user} = useAuthContext()
    const handleClick =  (e) =>{
      
        deleteDocument(project.id)
        history.push('/')
    }
    return ( 
        <div>
            <div className="project-summary">
                <h2 className="page-title">{project.name}</h2>
                <p>By {project.createdBy.displayName}</p>
                <p className="due-date">Project Due By {project.dueDate.toDate().toDateString()}</p>
                <p className="details">{project.details}</p>
                <h4>Project is assigned to:</h4>
                <div className="assigned-users">
                {project.assignedUsersList.map(user => (
                <div key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </div>
              ))}
              </div>
            </div>
               {  user.uid === project.createdBy.id && <button className="btn" onClick={handleClick}>Mark As Complete</button>} 
        </div>

     );
}
 
export default ProjectSummary;