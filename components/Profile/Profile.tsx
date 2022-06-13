import { Card, Button } from 'antd';
import React, { useState } from 'react';

const { Meta } = Card;

const Profile = ({ name, title, details }) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <Card
      hoverable
      style={{ width: '18rem' }}
      cover={
        <img src='http://fakeimg.pl/286x180?font=lobster' alt='Card cap' />
      }>
      <Meta title={name} description={title} />
      <br />
      <Button
        size='large'
        type='primary'
        onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? 'Hide' : 'Display'} Details
      </Button>
      <br />
      {showDetails && <span>{details}</span>}
    </Card>
  );
};

export default Profile;
