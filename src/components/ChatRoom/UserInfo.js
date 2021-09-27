import { Avatar, Button, Col, Row, Typography } from 'antd';
import React, { useCallback } from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .username {
        color: white;
        margin-left: 10px;
    }
`;

const UserInfo = (props) => {
    const { user } = props;

    const handleLogout = useCallback(() => {
        console.log('You are logout');
    }, []);

    return (
        <WrapperStyled>
            <div>
                <Avatar>A</Avatar>
                <Typography.Text className="username">Nguyen Van ABC</Typography.Text>
            </div>
            <Button onClick={handleLogout} ghost>Đăng xuất</Button>
        </WrapperStyled>
    );
};

export default UserInfo;
