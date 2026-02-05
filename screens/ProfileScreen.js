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

    const cleanPhoneNumber = (phone) => {
    let cleaned = '';
    for (let i = 0; i < phone.length; i++) {
      const char = phone[i];
      if (char === ' ' || char === '-' || char === '(' || char === ')') {
        continue;
      }
      cleaned += char;
    }
    return cleaned;
  };

  const isValidPhone = (phone) => {
    const cleanPhone = cleanPhoneNumber(phone);
    if (cleanPhone.length < 10) return false;
    if (cleanPhone.length > 15) return false;

    for (let i = 0; i < cleanPhone.length; i++) {
      const char = cleanPhone[i];
      if (i === 0 && char === '+') continue;
      if (char < '0' || char > '9') return false;
    }

    return true;
  };

    const validateFields = () => {
    const newErrors = {};

    if (!localName.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!localPhone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(localPhone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!localEmail.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!isValidEmail(localEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };


    const handleSave = () => {
    const validationErrors = validateFields();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setUserProfile({
        name: localName.trim(),
        phone: localPhone.trim(),
        email: localEmail.trim(),
        linkedin: localLinkedin.trim(),
        instagram: localInstagram.trim(),
      });
      onProfileCompleted();
    } else {
      Alert.alert(
        'Required Fields Missing',
        'Please fill in all required fields correctly.'
      );
    }
  };
}