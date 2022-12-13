import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import { handleTabActive } from "../../utils";

export default function (props) {
  const Context = useContext(MyContext)
  return (
    <>
      <li
        onClick={() => {
          handleTabActive(Context.setActiveTab,props.id);
        }}
        className={Context.activeTab === props.id ? "active" : ""}
      >
        {props.children}
      </li>
    </>
  );
}
