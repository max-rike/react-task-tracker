import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="add" onClick={onClick} />
    </header>
  );
};
Header.defaultProps = {
  title: "task tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
