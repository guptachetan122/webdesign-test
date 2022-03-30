import { useRouter } from "next/router";
import { Col, Input, Row, Typography } from "antd";
import React from "react";
import Sidebar from "../../../ui/Sidebar";
import { backNavbar } from "../../../constants/constants";
import styles from "../../../styles/ClubHouse.module.css";
import { SearchOutlined } from "@ant-design/icons";
import ClubhouseCardInfo from "../../../components/clubhouse/ClubhouseCardInfo";
import Subheader from "../../../ui/Subheader";

const { Text } = Typography;

const ClubhouseInfo = () => {
  const Router = useRouter();
  const { chid } = Router.query;
  return (
    <>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={backNavbar} />{" "}
      </div> */}

      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          <Sidebar pageName={"clubhouse2"} />
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <ClubhouseCardInfo />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default ClubhouseInfo;
