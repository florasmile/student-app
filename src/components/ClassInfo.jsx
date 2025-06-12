import PropTypes from "prop-types";

const ClassInfo = (props) => {
  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.memberCount}</li>
      </ul>
    </section>
  );
};

ClassInfo.proptypes = {
  memberCount: PropTypes.number.isRequired,
};
export default ClassInfo;