import { List } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const InvoiceList = ({ data }) => (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
            <List.Item key={item.id}>
                <List.Item.Meta
                    title={`Invoice ID - ${item.id}`}
                    description={item.email}
                />

                <Link to={`/invoice/${item.id}`}>View</Link>
            </List.Item>
        )}
    />
);

export default InvoiceList;
