import { StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { BaseText, Button, ViewContainer } from '@components';
import UserPoints from '@modules/products/components/UserPoints/UserPoints';
import UserMovements from '@modules/products/components/UserMovements/UserMovements';
import { Product } from '@services/types';
import { firstLetterUpperCase } from '@utils';

interface Props {
  isLoading: boolean;
  isShowingAll: boolean;
  month: string;
  onPressAll: () => void;
  onPressProduct: (id: string) => void;
  onPressSwapped: () => void;
  onPressWon: () => void;
  products?: Product[];
  totalPoints?: number;
}

const WelcomeUI = ({
  isLoading,
  isShowingAll,
  month,
  onPressAll,
  onPressProduct,
  onPressSwapped,
  onPressWon,
  products,
  totalPoints,
}: Props) => {
  const ButtonsRow = useCallback(() => {
    if (isShowingAll) {
      return (
        <>
          <Button title="Ganados" onPress={onPressWon} style={styles.button} disabled={isLoading} />
          <Button
            title="Canjeados"
            onPress={onPressSwapped}
            style={styles.button}
            disabled={isLoading}
          />
        </>
      );
    }
    return <Button title="Todos" onPress={onPressAll} style={styles.button} />;
  }, [isLoading, isShowingAll, onPressAll, onPressSwapped, onPressWon]);

  return (
    <ViewContainer>
      <BaseText style={styles.welcomeBack}>Bienvenido de vuelta!</BaseText>
      <BaseText style={styles.userName}>Ruben Rodriguez</BaseText>
      <UserPoints
        month={firstLetterUpperCase(month)}
        totalPoints={totalPoints}
        isLoading={isLoading}
      />
      <UserMovements products={products} onPress={onPressProduct} isLoading={isLoading} />
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
    flex: 1,
  },
});
