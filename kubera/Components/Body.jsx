import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Fruits} from '../helper/fruits';

const Body = ({search}) => {
  const [products, setProducts] = useState(Fruits);

  useEffect(() => {
    setProducts(
      Fruits.filter(res => {
        return res.name.toString().toLowerCase().includes(search);
      }),
    );
  }, [search, Fruits]);
  console.log(products, 'loeheh');

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 30,
          justifyContent: 'center',
          paddingTop: 30,
          paddingBottom: 120,
        }}>
        {Fruits.map((res, i) => {
          console.log(res);
          return (
            <View
              key={i}
              style={{
                width: 150,
                height: 150,
                shadowRadius: 5,

                backgroundColor: 'white',
                elevation: 20,
                alignItems: 'center',
                borderRadius: 20,
                justifyContent: 'center',
              }}>
              <Image
                height={70}
                width={70}
                alt="mango"
                source={{
                  uri: res.image,
                }}
                resizeMode="contain"
              />
              <Text style={{color: 'green', fontSize: 25, fontWeight: 600}}>
                {res.name}
              </Text>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 400}}>
                Rs:{res.price}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Body;
