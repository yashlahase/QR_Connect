import React, { useState, useMemo, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, FlatList } from 'react-native';
import ContactItem from '../components/ContactItem';
import { styles } from '../styles';

const ContactsScreen = ({ contacts, isDarkMode, onSelectContact }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) return contacts;
    const lower = searchQuery.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lower) ||
        contact.email.toLowerCase().includes(lower)
    );
  }, [contacts, searchQuery]);

    const handleSearchChange = useCallback((text) => {
    setSearchQuery(text);
  }, []);

  const handleContactPress = useCallback(
    (contact) => {
      onSelectContact(contact);
    },
    [onSelectContact]
  );

  const renderContactItem = useCallback(
    ({ item }) => (
      <ContactItem item={item} isDarkMode={isDarkMode} onPress={handleContactPress} />
    ),
    [isDarkMode, handleContactPress]
  );

    return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.contactsContainer}>
        <Text style={[styles.screenTitle, isDarkMode && styles.darkText]}>
          My Contacts
        </Text>

        <TextInput
          style={[styles.searchInput, isDarkMode && styles.darkInput]}
          placeholder="Search contacts..."
          placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
          value={searchQuery}
          onChangeText={handleSearchChange}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
        </View>
    </SafeAreaView>
    )
}

export default React.memo(ContactsScreen);