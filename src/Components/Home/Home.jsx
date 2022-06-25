import React, { useState } from "react";
import InvoiceForm from "../Invoice/InvoiceForm/InvoiceForm";
import { Button, Modal } from "antd";
import InvoiceList from "../Invoice/InvoiceList/InvoiceList";
import "./Home.css";

const Home = ({ setInvoices, invoices }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleFormSubmit = (values) => {
        setInvoices((invoices) => [...invoices, values]);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="home">
            <h1 className="home__heading">Resturant Invoice App</h1>
            <div className="home__create__button">
                <Button type="primary" onClick={showModal}>
                    + Create Invoice
                </Button>
            </div>
            <Modal
                centered
                title="Invoice Form"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <InvoiceForm
                    handleFormSubmit={handleFormSubmit}
                    handleCancel={handleCancel}
                />
            </Modal>
            <InvoiceList data={invoices} />
        </div>
    );
};

export default Home;
