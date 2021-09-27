import { Button, Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useCallback } from 'react';
import { GooglePlusOutlined, FacebookOutlined } from '@ant-design/icons';
import firebase, { auth } from '../../firebase/config';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();

const Login = (props) => {
    const handleLogin = useCallback((provider) => {
        auth.signInWithPopup(provider);
    }, []);

    return (
        <Row justify="center" style={{ width: '100%', height: 800 }}>
            <Col span={8}>
                <Title style={{ textAlign: 'center' }}>Chat app</Title>
                <Button style={{ marginBottom: 20, width: '100%' }} icon={<GooglePlusOutlined />} onClick={() => handleLogin(ggProvider)}>
                    Đăng nhập bằng Google
                </Button>
                <Button style={{ width: '100%' }} icon={<FacebookOutlined />} onClick={() => handleLogin(fbProvider)}>
                    Đăng nhập bằng Facebook
                </Button>
            </Col>
        </Row>
    )
};

export default Login;
