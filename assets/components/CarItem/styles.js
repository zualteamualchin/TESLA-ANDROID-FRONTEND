import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('screen').height,
      },
      titles: {
        marginTop: '30%',
        alignItems:'center',
      },
      title: {
        fontSize: 50,
        fontWeight:'600',
      },
      subtitle: {
        fontSize: 16,
        color:'#5c5e62',
      },
      image: {
        width:'100%',
        height: '100%',
        resizeMode:'cover',
        position: 'absolute',
      },
      buttonContainer: {
        position: 'absolute',
        bottom:50,
        width:'100%',
        //backgroundColor:'red',
      }
});
export default styles;