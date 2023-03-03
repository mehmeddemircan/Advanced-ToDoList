import React, { Fragment } from "react";
import { Input, Space } from "antd";

const SearchBox = () => {
  const { Search } = Input;

  return (
    <Fragment>
      <Space class="my-3">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
        />
      </Space>
    </Fragment>
  );
};

export default SearchBox;
