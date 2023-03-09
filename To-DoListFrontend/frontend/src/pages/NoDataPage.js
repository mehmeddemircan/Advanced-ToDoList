import React from "react";

import { Button, Result } from "antd";
const NoDataPage = () => {
  return (
    <Result
      title={
        <>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <h6 className="my-3">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknowt to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electroised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passagages{" "}
          </h6>
        </>
      }
      extra={
        <Button type="primary" key="console">
          Choose One list
        </Button>
      }
    />
  );
};

export default NoDataPage;
