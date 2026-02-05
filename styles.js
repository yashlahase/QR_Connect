import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const colors = {
  // Light theme colors
  primary: '#3B82F6',
  secondary: '#EF4444',
  background: '#FFFFFF',
  surface: '#F9FAFB',
  text: '#1F2937',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  border: '#D1D5DB',
  
  // Modern Grayish-Black Dark theme colors
  dark: {
    background: '#0F0F0F',      
    surface: '#1A1A1A',         
    text: '#FFFFFF',            
    textSecondary: '#B3B3B3',  
    textMuted: '#8A8A8A',       
    border: '#333333',          
  }
};