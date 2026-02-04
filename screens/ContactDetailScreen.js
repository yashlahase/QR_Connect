import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  Clipboard,
} from 'react-native';

const ContactDetailScreen = ({ contact, isDarkMode, onBack, onDeleteContact }) => {
const copyToClipboard = (text, label) => {
  Clipboard.setString(text);
  Alert.alert('Copied', `${label} copied to clipboard`);
};

  const handleDeleteContact = () => {
    Alert.alert(
      'Delete Contact',
      `Are you sure you want to delete ${contact.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDeleteContact(contact),
        },
      ]
    );
  };

    const openInstagram = async (instagramHandle) => {
    try {
      let handle = instagramHandle.replace('@', '');
      const appUrl = `instagram://user?username=${handle}`;
      const canOpenApp = await Linking.canOpenURL(appUrl);

      if (canOpenApp) {
        await Linking.openURL(appUrl);
      } else {
        const webUrl = `https://instagram.com/${handle}`;
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      try {
        let handle = instagramHandle.replace('@', '');
        const webUrl = `https://instagram.com/${handle}`;
        await Linking.openURL(webUrl);
      } catch (webError) {
        Alert.alert('Error', 'Failed to open Instagram profile');
      }
    }
  };

    const openLinkedIn = async (linkedinUrl) => {
    try {
      let url = linkedinUrl;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }

      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Cannot open LinkedIn profile');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open LinkedIn profile');
    }
  };

    const openEmail = async (emailAddress) => {
    try {
      const emailUrl = `mailto:${emailAddress}`;
      const canOpen = await Linking.canOpenURL(emailUrl);

      if (canOpen) {
        await Linking.openURL(emailUrl);
      } else {
        Alert.alert('Error', 'Cannot open email app');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open email app');
    }
  };


  const openPhone = async (phoneNumber) => {
    try {
      const phoneUrl = `tel:${phoneNumber}`;
      const canOpen = await Linking.canOpenURL(phoneUrl);

      if (canOpen) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert('Error', 'Cannot open phone dialer');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open phone dialer');
    }
  };

    const contactInfoItems = [
    {
      icon: '📞',
      label: 'Phone',
      value: contact.phone,
      displayValue: contact.phone,
      action: () => openPhone(contact.phone),
      onLongPress: () =>
        copyToClipboard(contact.phone, 'Phone number'),
    },
    {
      icon: '✉️',
      label: 'Email',
      value: contact.email,
      displayValue: contact.email,
      action: () => openEmail(contact.email),
      onLongPress: () =>
        copyToClipboard(contact.email, 'Email address'),
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: contact.linkedin,
      displayValue: getLinkedInUsername(contact.linkedin),
      action: () => openLinkedIn(contact.linkedin),
      onLongPress: () =>
        copyToClipboard(contact.linkedin, 'LinkedIn profile'),
    },
    {
      icon: '📷',
      label: 'Instagram',
      value: contact.instagram,
      displayValue: contact.instagram,
      action: () => openInstagram(contact.instagram),
      onLongPress: () =>
        copyToClipboard(contact.instagram, 'Instagram handle'),
    },
  ].filter((item) => item.value);

}

