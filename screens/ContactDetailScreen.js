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

}

