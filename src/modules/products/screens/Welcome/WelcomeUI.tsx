import { StyleSheet } from 'react-native';
import React from 'react';
import { BaseText, ViewContainer } from '@components';
import UserPoints from '@modules/products/components/UserPoints';
import UserMovements from '@modules/products/components/UserMovements';

const WelcomeUI = () => {
  return (
    <ViewContainer>
      <BaseText style={styles.welcomeBack}>Bienvenido de vuelta!</BaseText>
      <BaseText style={styles.userName}>Ruben Rodriguez</BaseText>
      <UserPoints month="Diciembre" totalPoints="10,00.00 pts" />
      <UserMovements />
    </ViewContainer>
  );
};

export default WelcomeUI;

const styles = StyleSheet.create({
  welcomeBack: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 27.32,
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.86,
  },
});
