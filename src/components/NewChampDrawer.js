import React from 'react';
import { Drawer, Form, Input, Button } from 'antd';

const NewChampDrawer = ({ visible, onClose }) => {

    const layout = {
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      };

    return (
        <Drawer
            visible={visible}
            onClose={onClose}
            placement="right"
            title="Créer un nouveau championnat"
            width={400}
        >

            <Form
                {...layout}
            >
                <Form.Item
                    label="Nom"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: "Merci d'entrer un nom à votre championnat",
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="A propos"
                    name="about"
                    rules={[
                    {
                        required: false,
                    },
                    ]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="Type (F1, rally, endurance...)"
                    name="type"
                    rules={[
                    {
                        required: true,
                        message: "Merci d'entrer un type de voiture",
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Jeu vidéo"
                    name="game"
                    rules={[
                    {
                        required: true,
                        message: "Merci d'entrer un jeu vidéo",
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Button type='primary'>Créer</Button>

            </Form>

        </Drawer>
    );
}

export default NewChampDrawer;