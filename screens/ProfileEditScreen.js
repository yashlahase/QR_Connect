import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles';

const ProfileEditScreen = ({
  userProfile,
  setUserProfile,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [editName, setEditName] = useState(userProfile.name);
  const [editPhone, setEditPhone] = useState(userProfile.phone);
  const [editEmail, setEditEmail] = useState(userProfile.email);
  const [editLinkedin, setEditLinkedin] = useState(userProfile.linkedin);
  const [editInstagram, setEditInstagram] = useState(userProfile.instagram);

    const handleSave = () => {
    setUserProfile({
      name: editName,
      phone: editPhone,
      email: editEmail,
      linkedin: editLinkedin,
      instagram: editInstagram,
    });
  };

}
export default ProfileEditScreen;