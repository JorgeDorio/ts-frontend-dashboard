import { IOptions } from "./IOptions";
import "./Option.css";

export const SidebarOption = (props: IOptions) => {
  return (
    <div className="option-container">
      <img src={props.icon} alt="" className="option-icon" />
      <span className="option-title">{props.title}</span>
    </div>
  );
};
