import React from 'react';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar ,ActivityIndicator} from 'react-native';
import {apoc} from '../../../clothes_information.json';

const GridView = ({ name, image, price}) => (
    <View style={styles.gridbox}>
    <Image source={{uri:image}} style={{width: 150, height: 150}}/>
      <Text style={styles.gridText}>{name}</Text>
      <Text style={styles.gridText}>{price}</Text>
    </View>
  );

const Index = () => {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList numColumns={2}
            data={apoc["001"]}
            renderItem={({item})=><GridView name={item.name} image={item.main_image} price={item.price}/>}
            keyExtractor={item => item.name}
            key={item=>item.name}
          />
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    gridbox: {
        flex: 1,
        height: 230,
        margin: 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
      },
     
      gridText: {
        fontSize: 15,
        color: 'black'
      }
  });

export default Index;