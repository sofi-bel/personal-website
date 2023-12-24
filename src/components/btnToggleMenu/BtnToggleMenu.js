import React from "react";

const BtnToggleMenu = ({ onChange }) => {
  return (
    <div className="navbar__toggler" onClick={onChange}>
      <div className="navbar__toggler-icon">
        <div className="navbar__toggler-icon--line--top"></div>
        <div className="navbar__toggler-icon--line--bottom"></div>
      </div>
    </div>
  );
};

export default BtnToggleMenu;
