import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";

export default function (props) {
  const Context = useContext(MyContext);
  return (
    <div className="main-img">
      {Context.activeTab === props.id ? props.children : null}
    </div>
  );
}
