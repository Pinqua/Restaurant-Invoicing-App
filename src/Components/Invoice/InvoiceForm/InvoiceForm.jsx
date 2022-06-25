import React, { useState } from "react";
import { Button, Space, Form, Input, InputNumber, DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { calculatePriceIncludingGST } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

const InvoiceForm = ({ handleFormSubmit, handleCancel }) => {
    const [date, setDate] = useState();
    let navigate = useNavigate();
    const onFinish = (values) => {
        let newItems;
        let totalPrice = 0;
        if (values?.items) {
            newItems = values.items.map((item) => {
                const newItem = {
                    id: uuidv4(),
                    ...item,
                    ...calculatePriceIncludingGST(5, item.price),
                };
                totalPrice += newItem.priceIncludingGST;
                return newItem;
            });
        }
        const formValues = {
            id: uuidv4(),
            ...values,
            date,
            items: newItems,
            totalPrice,
        };
        handleCancel();
        navigate("/invoice/" + formValues.id);
        handleFormSubmit(formValues);
        console.log("Success:", formValues);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onChange = (value) => {
        console.log("changed", value);
    };

    const onOk = (value) => {
        setDate(value);
    };
    const onChangeDate = (value, dateString) => {
        setDate(dateString);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            colon={false}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input name!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: "Please input Phone No!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { type: "email" },
                    {
                        required: true,
                        message: "Please input email!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[
                    {
                        required: true,
                        message: "Please input address!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Date"
                rules={[
                    {
                        required: true,
                        message: "Please select date!",
                    },
                ]}
            >
                <DatePicker onChange={onChangeDate} onOk={onOk} />
            </Form.Item>
            <Form.Item label="Items" name="items">
                <Form.List name="items">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{ display: "flex", marginBottom: 8 }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, "name"]}
                                        rules={[{ required: true, message: "Missing item name" }]}
                                    >
                                        <Input placeholder="Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, "price"]}
                                        rules={[{ required: true, message: "Missing item price" }]}
                                    >
                                        <InputNumber
                                            placeholder="Price"
                                            formatter={(value) =>
                                                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                            }
                                            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                                            onChange={onChange}
                                        />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Items
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form.Item>
            <Form.Item label="Note" name="note">
                <Input />
            </Form.Item>

            <Form.Item label=" ">
                <Button type="primary" htmlType="submit" style={{ marginTop: 20 }}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default InvoiceForm;
