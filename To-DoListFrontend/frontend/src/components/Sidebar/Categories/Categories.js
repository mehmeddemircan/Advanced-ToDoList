import { Menu } from "antd";
import React, { Fragment } from "react";

const Categories = () => {
  return (
    <Fragment>
     
     <Menu.Item key={1}>
            <i class="fa-solid fa-star"></i>
            <a class="mx-2 " >hello</a>
            </Menu.Item>
            <Menu.Item key={2}>
            <i class="fa-solid fa-star"></i>
<a class="mx-2">hello</a>
            </Menu.Item>

            <Menu.Item key={3}>
            <i class="fa-solid fa-star"></i>
<a class="mx-2">hello</a>
            </Menu.Item>
            <Menu.Item key={4}>
            <i class="fa-solid fa-star"></i>
<a class="mx-2">hello</a>
            </Menu.Item>
            <Menu.Item key={5}>
            <i class="fa-solid fa-star"></i>
<a class="mx-2">hello</a>
            </Menu.Item>
                <hr />
    </Fragment>
  );
};

export default Categories;
