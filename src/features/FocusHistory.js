import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../Utils/color';
import { fontSizes, spacing } from '../Utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.noHistoty}>
        We are have not focusing on anything yet !
      </Text>
    );
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we are focusing on: </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  noHistoty: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
