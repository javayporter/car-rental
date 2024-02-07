import Button from "./Button";

const Navbar = ({ logo, item, buttonText }) => {
  return (
    <nav>
      <ul>
        <li>{logo}</li>
        <li>{item}</li>
      </ul>
      <Button text={buttonText} />
    </nav>
  );
};

export default Navbar;
