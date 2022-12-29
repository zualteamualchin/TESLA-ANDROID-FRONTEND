import React from 'react';
import { ImageBackground } from 'react-native';
import {View, Text} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    const { name,tagline,image } = props.car;
    return (
        <View style = {styles.carContainer}>
        <ImageBackground
          source={image}
          style={styles.image}
        />
          
        
          <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton 
          type="primary" 
          content={"Custom Order"}
          onPress={()=>{
            console.warn("custom order was transferred");
          }}
          />
          <StyledButton 
          type="secondary"
          content={"Existing Inventory"}
          onPress={()=>{
            console.warn("existing order was transferred");
          }}
          />
        </View>
      </View>
    );
}
export default CarItem;