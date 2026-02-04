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

    const isValidEmail = (email) => {
    const trimmedEmail = email.trim();
    if (trimmedEmail.length < 5) return false;
    if (!trimmedEmail.includes('@')) return false;

    const parts = trimmedEmail.split('@');
    if (parts.length !== 2) return false;

    const [username, domain] = parts;
    if (username.length === 0 || domain.length === 0) return false;
    if (!domain.includes('.')) return false;

    const domainParts = domain.split('.');
    if (domainParts.length < 2) return false;
    if (domainParts[domainParts.length - 1].length < 2) return false;

    return true;
  };
}