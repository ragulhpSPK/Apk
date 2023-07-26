import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Body from './Body';

const Navbar = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingHorizontal: 10,
        }}>
        <Image
          height={70}
          width={70}
          resizeMode="contain"
          source={{
            uri: 'https://png.pngtree.com/template/20200309/ourmid/pngtree-organic-fresh-fruit-logo-with-apple-and-green-leaf-image_355045.jpg',
          }}
        />
        <TextInput
          // keyboardType="number-pad"
          autoCapitalize="words"
          style={{
            borderBottomWidth: 0.8,
            borderBottomColor: 'gray',
            borderRadius: 5,
            width: 265,
            height: 38,
            paddingLeft: 10,
            fontSize: 20,
          }}
          onChangeText={e => {
            setSearch(e);
          }}
          placeholder="Search Here"
        />
        {/* <View style={{ position: "relative" }}>
          <View
            style={{
              position: "absolute",
              left: 24,
              backgroundColor: "blue",
              borderRadius: 50,
              height: 20,
              width: 20,
              bottom: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>1</Text>
          </View>
          <Image
            height={40}
            width={40}
            resizeMode="contain"
            source={{
              uri: "https://cdn3d.iconscout.com/3d/premium/thumb/cart-5590712-4652404.png",
            }}
          />
        </View> */}
      </View>
      <Body search={search} />
    </View>
  );
};

export default Navbar;
