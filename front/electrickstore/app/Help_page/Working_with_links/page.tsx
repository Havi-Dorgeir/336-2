"use client";
import React, { useState } from "react";

import { Typography, Button, Modal, Space, Divider, Row, Col } from "antd";
import { Card } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text, Link: AntLink } = Typography;
export default function WWLPage() {
    const [isModalOpen, setIsMOdalOpen] = useState(false)
    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
               <div id="links" style={{ marginBottom: "60px", paddingTop: "20px" }}>
                        <Title level={3}>3. Working with links</Title>
                        <Paragraph>
                            The system implements two types of link navigation:
                        </Paragraph>

                        <Space direction="vertical" size="middle">

                            <Card size="small" title="Перехід ІЗ затиранням вмісту">
                                <Text>Full redirect to another page (current page disappears):</Text>
                                <Link href="/events">
                                    <Button type="primary" ghost>Go to the list of events</Button>
                                </Link>
                            </Card>


                            <Card size="small" title="Перехід БЕЗ затирання вмісту">
                                <Text>Opening additional information on top of the current page: </Text>
                                <Button type="default" onClick={() => setIsMOdalOpen(true)}>
                                    Learn about the system rules
                                </Button>
                            </Card>
                        </Space>


                        <Modal
                            title="System rules"
                            open={isModalOpen}
                            onOk={() => setIsMOdalOpen(false)}
                            onCancel={() => setIsMOdalOpen(false)}
                            footer={[
                                <Button key="ok" type="primary" onClick={() => setIsMOdalOpen(false)}>
                                    Зрозуміло
                                </Button>
                            ]}
                        >
                            <p>Additional background information is displayed here.</p>
                            <p>As you can see, the background content of the Help page remained in place and was not erased!</p>
                        </Modal>
                    </div>
        </div>
    )
}