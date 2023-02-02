import Dropdown from "react-bootstrap/Dropdown";

function DropdownButton({ userImg, username }) {
  return (
    <Dropdown className="w-100 d-flex align-items-center">
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className="d-flex m-0 p-0 dropdownBtn border border-secondary py-2 px-4 align-items-center"
      >
        <div className="d-flex align-items-center gap-4">
          <img
            src={userImg}
            style={{ width: "20px", borderRadius: "50%", height: "20px" }}
          />
          <p className="m-0 text-secondary">{username}</p>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-dark w-100">
        <Dropdown.Item href="#/action-1" className="text-light">
          Privacy
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="text-light">
          Help
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-light">
          Display
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;
