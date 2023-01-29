import { StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { BaseText, Button, ViewContainer } from '@components';
import UserPoints from '@modules/products/components/UserPoints/UserPoints';
import UserMovements from '@modules/products/components/UserMovements/UserMovements';
import { Product } from '@services/types';

interface Props {
  onPressSwapped: () => void;
  onPressWon: () => void;
  products?: Product[];
  totalPoints?: number;
  isShowingAll: boolean;
  onPressAll: () => void;
}

const WelcomeUI = ({
  products,
  totalPoints,
  onPressSwapped,
  onPressWon,
  isShowingAll,
  onPressAll,
}: Props) => {
  const ButtonsRow = useCallback(() => {
    if (isShowingAll) {
      return (
        <>
          <Button title="Ganados" onPress={onPressWon} style={styles.button} />
          <Button title="Canjeados" onPress={onPressSwapped} style={styles.button} />
        </>
      );
    }
    return <Button title="Todos" onPress={onPressAll} style={styles.button} />;
  }, [isShowingAll, onPressAll, onPressSwapped, onPressWon]);

  return (
    <ViewContainer>
      <BaseText style={styles.welcomeBack}>Bienvenido de vuelta!</BaseText>
      <BaseText style={styles.userName}>Ruben Rodriguez</BaseText>
      <UserPoints month="Diciembre" totalPoints={totalPoints} />
      <UserMovements products={products} />
      <View style={styles.footer}>
        <ButtonsRow />
      </View>
    </ViewContainer>
  );
};

export default memo(WelcomeUI);

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
  footer: {
    flexDirection: 'row',
    marginTop: 43,
    marginHorizontal: -6.5,
  },
  button: {
    marginHorizontal: 6.5,
  },
});
