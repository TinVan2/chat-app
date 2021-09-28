import { Avatar, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    margin-bottom: 10px;

    .author {
        margin-left: 5px;
        font-weight: bold;
    }

    .createdAt {
        
    }
`;

const Message = ({ text, displayName, createdAt, photoURL }) => {
    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>A</Avatar>
                <Typography.Text className="author">{displayName}</Typography.Text>
                <Typography.Text className="createdAt">{createdAt}</Typography.Text>
            </div>
            <div>
                <Typography.Text>{text}</Typography.Text>
            </div>
        </WrapperStyled>
    )
}

export default Message;
