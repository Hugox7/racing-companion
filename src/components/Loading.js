import React from 'react';
import { Spin } from 'antd';

const Loading = () => {

    const style = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={style}>
            <Spin size="large" />
        </div>
    );
}

export default Loading;