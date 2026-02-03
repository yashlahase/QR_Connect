import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera';
import { styles } from '../styles';

const ScanQRScreen = ({
  isDarkMode,
  permission,
}) => {
  if (!permission) {
    return (
      <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
        <View style={styles.scanContainer}>
          <Text style={[styles.screenTitle, isDarkMode && styles.darkText]}>
            Loading Camera...
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}