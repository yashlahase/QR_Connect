import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles';

const ProfileScreen = ({
  userProfile,
  setUserProfile,
  isDarkMode,
  onProfileCompleted,
}) => {
  const [localName, setLocalName] = useState(userProfile.name);
  const [localPhone, setLocalPhone] = useState(userProfile.phone);
  const [localEmail, setLocalEmail] = useState(userProfile.email);
  const [localLinkedin, setLocalLinkedin] = useState(userProfile.linkedin);
  const [localInstagram, setLocalInstagram] = useState(userProfile.instagram);
  const [errors, setErrors] = useState({});

  
}