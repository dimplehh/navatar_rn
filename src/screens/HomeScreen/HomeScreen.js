import React, {useState} from 'react';
import { TouchableOpacity, Image, ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar ,ActivityIndicator} from 'react-native';
import {apoc, romanticcrown, kirsh, luvistrue, lee} from '../../../clothes_information.json';

const GridView = ({ name, image, price, AR}) => (
    <View style={styles.gridbox}>
    <Image source={{uri:image}} style={{width: 150, height: 150}}/>
      <Text style={styles.gridText}>{name}</Text>
      <Text style={styles.gridText2}>{price} ₩</Text>
    </View>
  );

const Index = () => {
    const [dataName, setDataName] = useState(apoc["001"]);

    const onPress1 = () => setDataName(apoc["001"]);
    const onPress2 = () => setDataName(apoc["003"]);
    const onPress3 = () => setDataName(luvistrue["022"]);//이 로직 지금 겉보기에만 그럴듯하고 개엉망임 flatList같은거 사용해서 버튼도 때에 따라 같은 onPress더라도 다른 결과 추출하도록 해야
      return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={true}>
                <TouchableOpacity style={styles.touch} onPress={onPress1}><Text style={{textAlign: "center"}}>Top</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={onPress2}><Text style={{textAlign: "center"}}>Pants</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={onPress3}><Text style={{textAlign: "center"}}>Skirt</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch}><Text style={{textAlign: "center"}}>Outer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch}><Text style={{textAlign: "center"}}>Atc</Text></TouchableOpacity>
            </ScrollView>
          <FlatList numColumns={2}
            data={dataName}
            renderItem={({item})=><GridView name={item.name}
            image={item.main_image} price={item.price} AR={item.AR}/>}
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
      },
      gridText2: {
        fontSize: 15,
        color: 'gray'
      },
      touch: {
        height: 50,
        width:100,
        paddingVertical: 10
      }
  });

export default Index;