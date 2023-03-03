import { Col, Divider, Drawer, Row } from "antd";
import DescriptionItem from "antd/lib/descriptions/Item";
import React from "react";
import LogoutButton from "../Button/LogoutButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/AuthAction";

const ViewProfile = ({ onClose, open , auth }) => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const DescriptionItem = ({ title, content }) => (
    <div
      style={{
        marginBottom: "7px",
        color: " rgba(0, 0, 0, 0.65)",
        fontSize: "14px",
        lineHeight: "1.5715",
      }}
    >
      <p
        style={{
          display: "inline-block",
          marginRight: "8px",
          color: "rgba(0, 0, 0, 0.85)",
        }}
      >
        {title}:
      </p>
      {content}
    </div>
  );
  return (
    <Drawer
      width={640}
      placement="right"
      closable={true}
      onClose={onClose}
      open={open}
      footer={[
       <LogoutButton logoutHandler={logoutHandler} />
      ]}
    >
      <p
        style={{
          marginBottom: 24,
          display: "block",
          marginBottom: "16px",
          color: "rgba(0, 0, 0, 0.85)",
          fontSize: "16px",
          lineHeight: "1.5715",
        }}
      >
        User Profile
      </p>
      <p className="site-description-item-profile-p">Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content={<>{auth.user.firstName} {auth.user.lastName}</>} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Email" content={auth.user.email} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="City" content="HangZhou" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Country" content="China🇨🇳" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Birthday" content="February 2,1900" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Website" content="-" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Message"
            content="Make things as simple as possible but no simpler."
          />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Company</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Department" content="XTech" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
          />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Contacts</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Email" content="AntDesign@example.com" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Github"
            content={
              <a href="http://github.com/ant-design/ant-design/">
                github.com/ant-design/ant-design/
              </a>
            }
          />
        </Col>
      </Row>
    </Drawer>
  );
};

export default ViewProfile;
