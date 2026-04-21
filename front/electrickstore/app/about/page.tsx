"use client";
import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function AboutPage() {
  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Title level={2}>About Us</Title>
      <p>Electrick store 2026. Учебный проект.</p>
    </div>
  );
}