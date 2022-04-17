import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar ,ActivityIndicator} from 'react-native';
import {apoc} from '../../../clothes_information.json';

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);
const Index = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={apoc["001"]}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default Index;