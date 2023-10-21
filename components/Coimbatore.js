import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { ScrollView } from "react-native-gesture-handler";


export default function Coimbatore ({navigation, route}){
  const data = [
    { label: 'Coimbatore', value: 'Coimbatore' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Bangalore', value: 'Bangalore' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

    const resetDropdownValue = (newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // Reset the dropdown value based on the screen being navigated to
        switch (route.name) {
          case 'Coimbatore':
            resetDropdownValue('Coimbatore');
            break;
          case 'Chennai':
            resetDropdownValue('Chennai');
            break;
          case 'Bangalore':
            resetDropdownValue('Bangalore');
            break;
          default:
            resetDropdownValue(null);
            break;
        }
      });
  
      return unsubscribe;
    }, [navigation, route.name]);
    
    return(
        <ScrollView style = {styles.scrollView}>
          <View style = {styles.container_img}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholder={!isFocus ? 'Coimbatore' : ''}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                navigation.navigate(item.value);
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Brookefields' })}>
                <Image 
                    source={require('./image/coimbatore/brookfields_image.png')}
                    style={styles.img}    
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Prozone' })}>
                <Image 
                    source={require('./image/coimbatore/prozone_image.png')}
                    style={{
                        height: 150, 
                        width: 319.36,
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginTop: 20
                        }}   
                />
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Fun Republic' })}>
                <Image 
                    source={require('./image/coimbatore/funrepublic_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Broadway' })}>
                <Image 
                    source={require('./image/coimbatore/broadway_image.png')}
                    style={{
                        height: 140, 
                        width: 319.36,
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginTop: 20
                        }}    
                />
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container_img:    {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#d8f0fa'
    },

    scrollView: {
      backgroundColor: '#d8f0fa',
    },

    img: {
        height: 130, 
        width: 319.36,
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20
    },

    dropdown: {
          margin: 16,
          height: 50,
          width: 319.36,
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
    },
    icon: {
          marginRight: 5,
    },
    placeholderStyle: {
          fontSize: 16,
    },
    selectedTextStyle: {
          fontSize: 16,
    },
    iconStyle: {
          width: 20,
          height: 20,
    },
    inputSearchStyle: {
          height: 40,
          fontSize: 16,
    },


    })