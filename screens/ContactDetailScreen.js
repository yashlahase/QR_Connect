import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  
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

}

