import Dropdown from "react-bootstrap/Dropdown";

function DropdownButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-dark ">
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
