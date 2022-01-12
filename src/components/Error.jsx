import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-main">
      <Result
        className="error-box"
        status="404"
        title="404"
        subTitle="Sorry, the page you are trying to visited does not exist."
        extra={
          <div>
            <Link to="/" style={{ "margin-right": "20px" }}>
              <Button type="primary">About</Button>
            </Link>
            <Link to="/">
              <Button type="secondary">Back Home</Button>
            </Link>
          </div>
        }
      />
    </div>
  );
}

export default Error;
