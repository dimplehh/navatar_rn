import React from 'react';
import { Image, StyleSheet, Button, View, SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

const Index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.user}>
                <View style={{height: 120, flexDirection: 'row'}}>
                    <View style={{width: 100}}>
                        <View style={{width: 100, height: 100}} ></View>
                    </View>
                </View>
                <View style={{height: 230, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../image/1.jpg')} style={{width: 150, height: 150}}/>
                        </View>
                        <View><Text style={{color:'gray'}}>GUCCI</Text>
                        <Text>CUCCI 블랙</Text>
                        <Text>10000원</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../image/2.jpg')} style={{width: 150, height: 150}}/>
                        </View>
                        <View><Text style={{color:'gray'}}>GUCCI</Text>
                        <Text>CUCCI 핑크</Text>
                        <Text>10000원</Text>
                        </View>
                    </View>
                </View>
                <View style={{height: 230, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../image/3.jpg')} style={{width: 190, height: 150}}/>
                        </View>
                        <View><Text style={{color:'gray'}}>GUCCI</Text>
                        <Text>미키 GUCCI 회색</Text>
                        <Text>270000원</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../image/4.jpg')} style={{width: 150, height: 150}}/>
                        </View>
                        <View><Text style={{color:'gray'}}>GUCCI</Text>
                        <Text>GUCCI 스페셜</Text>
                        <Text>210000원</Text>
                        </View>
                    </View>
                </View>
                <View style={{height: 230, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../image/5.jpg')} style={{width: 150, height: 150}}/>
                        </View>
                        <View><Text style={{color:'gray'}}>GUCCI</Text>
                        <Text>아구찜1</Text>
                        <Text>10000원</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                        <Image source={require('../../../image/6.jpg')} style={{width: 150, height: 150}}/>
                        </View>
                        <View><Text style={{color:'gray'}}>GUCCI</Text>
                        <Text>아구찜2</Text>
                        <Text>10000원</Text>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        backgroundColor: '#FFFFFF',
    },
    scrollView:{
        backgroundColor:'white',
        marginHorizontal:20,
    },
    user:{
        backgroundColor:'white',
        marginHorizontal:20,
    },
    text: {
        fontSize:42,
    },
});

export default Index;