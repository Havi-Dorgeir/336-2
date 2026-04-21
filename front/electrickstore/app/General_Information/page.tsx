"use client";
import React, { useState } from "react";
import { Typography, Anchor, Card, Image as AntImage, Button, Modal, Space, Divider, Row, Col } from "antd";

import Link from "next/link";

const { Title, Paragraph, Text, Link: AntLink } = Typography;
export  default function GIPage(){
     const [isModalOpen, setIsMOdalOpen] = useState(false)
     return(
         <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
              <Paragraph>
                            This system is designed to manage a list of Events, Venues, and Devices.
                            It is built on a modern architecture using React, Next.js, and Ant Design.
                        </Paragraph>
         </div>
     )
}