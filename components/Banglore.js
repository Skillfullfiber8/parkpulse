import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";

export default function Coimbatore ({navigation, route}){
  const data = [
    { label: 'Coimbatore', value: 'Coimbatore' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Banglore', value: 'Banglore' },
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
            case 'Banglore':
              resetDropdownValue('Banglore');
              break;
            default:
              resetDropdownValue(null);
              break;
          }
        });
    
        return unsubscribe;
      }, [navigation, route.name]);
    
    return(
        <View style = {styles.container_img}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholder={!isFocus ? 'Banglore' : ''}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              //inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              //search
              maxHeight={300}
              labelField="label"
              valueField="value"
              //searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                navigation.navigate(item.value);
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Elemental' })}>
                <Image 
                    source={require('./image/banglore/elemental_image.png')}
                    style={styles.img}    
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Orion' })}>
                <Image 
                    source={require('./image/banglore/orion_image.png')}
                    style={styles.img}  
                />
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Park Square' })}>
                <Image 
                    source={require('./image/banglore/parksquare_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container_img:    {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#d8f0fa'
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