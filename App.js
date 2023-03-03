import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
// import {constant} from './src/Component/constant';
export default function App() {
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const API_EndPoint = 'https://countriesnow.space/api/v0.1/countries/capital';
  const fun = () => {
    axios({
      method: 'GET',
      url: 'https://countriesnow.space/api/v0.1/countries/capital',
    })
      .then(res => setCountry(res.data.data))
      .catch(err => console.log(err));
  };
  const fun2 = () => {
    const result = axios({
      method: 'POST',
      url: 'https://countriesnow.space/api/v0.1/countries/cities',
      data: {
        country: 'india',
      },
    });
    result
      .then(res => setCity(res.data.data))
      .catch(error => console.log('error from fetch'));
  };

  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        <TouchableOpacity onPress={fun}>
          {/* <Text>{constant.clickHere}</Text> */}
          <Text> this is button </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fun2}>
          <Text>this is to post</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={country}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
      <FlatList data={city} renderItem={({item}) => <Text>{item}</Text>} />
    </SafeAreaView>
  );
}
