import { useState } from "react";
import ProjectList from "../../components/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./Dashboard.css";
import ProjectFilter from "./ProjectFilter";
export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const { user } = useAuthContext();
  const [currentFilter, setCurrentFilter] = useState("all");
  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;

            break;
          case "mine":
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;

            break;
          case "development":
          case "design":
          case "sales":
          case "marketing":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;
            break;
          default:
            return true;
            break;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">DashBoard</h2>

      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectList projects={projects} />}
    </div>
  );
}
