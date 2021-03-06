import React from "react";

import classes from "./Members.module.css";

const Mentions = ({ members }) => {
  const membersList = members.map((member) => (
    <li key={member.id}>
      <strong>
        <a href={member.portfolio} target="_blank" rel="noreferrer">
          {member.name}
        </a>
      </strong>
      <p>{member.bio}</p>
    </li>
  ));
  return (
    <div className={classes.Members}>
      <h2>Honorable Mentions</h2>
      <ol>{membersList}</ol>
    </div>
  );
};

export default Mentions;
