import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import cars from './cars';
import styles from './styles';
import CarItem from '../CarItem';
const CarsList = (props) => {
    console.log(cars);
    return (
        <View style={styles.container}>
           <FlatList
           data = {cars}
           renderItem = {({item})=> <CarItem car={item} />} 
           snapToAlignment = {'start'} //screen adjustment auto
           decelerationRate = {'fast'}  //the speed of snap align
           snapToInterval = {Dimensions.get('screen').height}  //how big is 1 item in flatlist 
           />
        </View>
    )
}
export default CarsList;