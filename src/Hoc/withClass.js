import React from "react";

const withClass = (InnerComponent, styled) => {
    return props => (<div style={styled}>
        <InnerComponent/>
    </div>);
};


export default withClass;
