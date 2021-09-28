import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Form, Input, Row, Tooltip } from 'antd';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Message from './Message';

const HeaderStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);

    .header {
        &-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &-title {
            margin: 0;
            font-weight: bold;
        }

        &-description: font-size: 12px;
    }
`;

const ButtonGroupStyled = styled.div`

`;

const ContentStyled = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
`;


const MessageListStyled = styled.div`

`;

const WrapperStyled = styled.div`
    height: 100vh;
`;

const ChatWindow = (props) => {

    const handleAddUser = useCallback(() => {

    }, []);

    return (
        <WrapperStyled>
            <HeaderStyled>
                <div className="header-info">
                    <p className="header-title">Room 1</p>
                    <span className="header-description">This is room 1</span>
                </div>
                <ButtonGroupStyled>
                    <Button icon={<UserAddOutlined />} onClick={handleAddUser} >
                        Mời
                    </Button>
                    <Avatar.Group maxCount={2}>
                        <Tooltip title="A" placement="top">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="B" placement="top">
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="C" placement="top">
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title="D" placement="top">
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            <ContentStyled>
                <MessageListStyled>
                    <Message text="Hello everyone!" createdAt="2021-09-28" displayName="Nguyen Van A" />
                    <Message text="Hello everyone!" createdAt="2021-09-28" displayName="Nguyen Van D" />
                    <Message text="Hello everyone!" createdAt="2021-09-28" displayName="Nguyen Van B" />
                    <Message text="Hello everyone!" createdAt="2021-09-28" displayName="Nguyen Van E" />
                    <Message text="Hello everyone!" createdAt="2021-09-28" displayName="Nguyen Van DD" />
                    <Message text="Hello everyone!" createdAt="2021-09-28" displayName="Nguyen Van SSS" />
                </MessageListStyled>
                <Form>
                    <Form.Item name="message">
                        <Input />
                    </Form.Item>
                    <Button>Gửi</Button>
                </Form>
            </ContentStyled>
        </WrapperStyled>
    );
};

export default ChatWindow;
