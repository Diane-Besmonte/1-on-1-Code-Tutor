// ADD CONDITIONAL ACCESSIBILITY ON THIS COMPONENT
import VisuallyHidden from "./VisuallyHidden";

function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
      {isOnline && <VisuallyHidden> (Online) </VisuallyHidden>}
    </li>
  );
}

export default Friend;
