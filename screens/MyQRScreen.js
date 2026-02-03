import React from 'react';

const MyQRScreen = ({ userProfile, isDarkMode }) => {
  const qrData = JSON.stringify({
    name: userProfile.name || 'Your Name',
    phone: userProfile.phone || '',
    email: userProfile.email || '',
    linkedin: userProfile.linkedin || '',
    instagram: userProfile.instagram || '',
  });


};

export default MyQRScreen;