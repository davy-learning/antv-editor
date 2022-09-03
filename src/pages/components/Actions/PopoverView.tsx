
import React from 'react';
import { Popconfirm, message } from 'antd';
export const PopoverView = (props: any) => {
  const text = props.text
  const size = props.size
  const confirm = () => {
    message.info('Clicked on Yes.' + text);
  };
  return (
    <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
      <div style={{ fontSize: 20, padding: 10, ...size, cursor: 'pointer' }} ></div>
    </Popconfirm>
  )
}
