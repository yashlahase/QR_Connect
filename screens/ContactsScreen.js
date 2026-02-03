import React, { useState, useMemo, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactItem from '../components/ContactItem';

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

}