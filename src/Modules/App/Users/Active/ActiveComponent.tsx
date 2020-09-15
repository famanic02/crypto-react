import React from 'react';
import { Col, Row, List, Skeleton, Avatar, Popconfirm } from 'antd';

import './PerformersStyle.scss';
import moment from 'moment';

interface Props {}

const ActiveUsersComponent: React.FunctionComponent<Props> = () => {
  const list: any[] = [];

  return (
    <div className="Pending">
      <Row>
        <Col xs={24} md={12}>
          <h2>Danh sách ({list.length})</h2>
        </Col>
        <Col xs={24} md={12}>
          {/* <Row>
            <Col xs={12}></Col>
            <Col xs={12}>
              <Input.Search />
            </Col>
          </Row> */}
        </Col>
      </Row>
      <List
        className="demo-loadmore-list"
        // loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => {
          const { firstName, lastName, dateOfBirth, phone, avatarURL } = item.profile || {};
          return (
            <List.Item
              actions={[
                <Popconfirm
                  title="Are you sure？"
                  okText="Yes"
                  onConfirm={() => true}
                  cancelText="No"
                >
                  <span key="list-loadmore-more">Chặn</span>
                </Popconfirm>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={
                        avatarURL ||
                        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                      }
                    />
                  }
                  title={item.firstName}
                  description={`${'Ngày sinh'}: ${moment(dateOfBirth).format('DD/MM/YYYY')}`}
                />
                {firstName && (
                  <div className="Info">
                    <div>Tên</div>
                    <div>{`${firstName} ${lastName}`}</div>
                  </div>
                )}
                {phone && (
                  <div className="Info">
                    <div>SĐT</div>
                    <div>{phone}</div>
                  </div>
                )}
              </Skeleton>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default ActiveUsersComponent;
