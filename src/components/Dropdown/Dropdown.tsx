import React from "react";
import Popper from "popper.js";
import './Dropdown.css';

interface DropdownProps {
  color: string;
  dropdownName: string;
  margin?: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  // dropdown props
  const { color, dropdownName, margin } = props;
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current as any, popoverDropdownRef.current as any, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-white")
    : (bgColor = "bg-" + color);
  return (
    <>
      <button
        className={
          "text-gray-400 text-sm px-6 py-3 rounded outline-none focus:outline-none mb-1 " +
          bgColor + " " + margin
        }
        style={{ transition: "all .15s ease", width: "345px", border: "1px solid #E1E1E1", textAlign: "left" }}
        type="button"
        ref={btnDropdownRef as any}
        onClick={() => {
          dropdownPopoverShow
            ? closeDropdownPopover()
            : openDropdownPopover();
        }}
      >
        {dropdownName}
      </button>
      <div
        ref={popoverDropdownRef as any}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          (color === "white" ? "bg-white " : bgColor + " ") +
          "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
            (color === "white" ? " text-gray-800" : "text-white")
          }
          onClick={e => e.preventDefault()}
        >
          Action
              </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
            (color === "white" ? " text-gray-800" : "text-white")
          }
          onClick={e => e.preventDefault()}
        >
          Another action
              </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
            (color === "white" ? " text-gray-800" : "text-white")
          }
          onClick={e => e.preventDefault()}
        >
          Something else here
              </a>
        <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
            (color === "white" ? " text-gray-800" : "text-white")
          }
          onClick={e => e.preventDefault()}
        >
          Seprated link
              </a>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <div className="width-70">
      <Dropdown color="white" dropdownName="平面設計師" margin="mr-10"/>
      <Dropdown color="white" dropdownName="專頁範疇" margin="mr-10"/>
      <Dropdown color="white" dropdownName="工作位置"/>
    </div>
  );
}