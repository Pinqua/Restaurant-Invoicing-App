import { Descriptions, Table } from "antd";
import "./InvoiceDescription.css";
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "GST Tax",
        dataIndex: "tax",
        key: "tax",
    },
    {
        title: "Including 5% GST",
        dataIndex: "priceIncludingGST",
        key: "priceIncludingGST",
    },
];
const InvoiceDescription = (props) => (
    <>
        <Descriptions
            title="Invoice Details"
            labelStyle={{ fontWeight: "bold" }}
            bordered
        >
            <Descriptions.Item label="ID">{props.invoice.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{props.invoice.name}</Descriptions.Item>
            <Descriptions.Item label="Phone No">
                {props.invoice.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
                {props.invoice.address}
            </Descriptions.Item>
            <Descriptions.Item label="Date">{props.invoice.date}</Descriptions.Item>
            <Descriptions.Item label="Invoice via email">
                {props.invoice.invoice_via_email?"Yes":"No"}
            </Descriptions.Item>
            <Descriptions.Item label="Note">{props.invoice.note}</Descriptions.Item>
        </Descriptions>
        <br />
        <h4>Items</h4>
        <Table columns={columns} dataSource={props.invoice.items} rowKey="id" />
        <h2 className="invoice__desc__total__price">
            Total Price : $ {props.invoice.totalPrice}
        </h2>
    </>
);

export default InvoiceDescription;
