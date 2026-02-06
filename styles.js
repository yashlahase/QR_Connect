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

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBar: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: colors.dark.background,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 50,
  },

  // Welcome Screen Styles
  welcomeContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  qrIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  qrIconText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 15,
  },
  authButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  emailButton: {
    backgroundColor: '#3B82F6',
  },
  googleButton: {
    backgroundColor: '#EF4444',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  authButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  appleButtonText: {
    color: 'white',
  },

  // Profile Screen Styles
  profileContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 28,
      fontWeight: 'bold',
      color: '#1F2937',
      textAlign: 'center',
      marginVertical: 30,
    },
    darkText: {
      color: colors.dark.text,
    },
    darkSubtext: {
      color: colors.dark.textSecondary,
    },
    formContainer: {
      gap: 15,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#D1D5DB',
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      backgroundColor: '#F9FAFB',
      color: '#1F2937',
    },
    darkInput: {
      backgroundColor: colors.dark.surface,
      borderColor: colors.dark.border,
      color: colors.dark.text,
    },
    saveButton: {
      height: 50,
      backgroundColor: '#3B82F6',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    saveButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },

})