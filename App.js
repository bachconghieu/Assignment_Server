import { Button, FlatList, StatusBar, StyleSheet, Text, TextInput, View, Alert,Image } from 'react-native';
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [linkImg, setLinkImg] = useState();
const url = "https://assignment-server402.herokuapp.com/getImages";



  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <TextInput style={{height:40,width:100}} placeholder={"Enter name"} onChangeText={(data)=>{setContent(data)}} />
      <TextInput style={{height:40,width:100}} placeholder={"Enter age"} onChangeText={(data)=>{setDate(data)}} />
      <TextInput style={{height:40,width:100}} placeholder={"Enter address"} onChangeText={(data)=>{setLinkImg(data)}} />
      <Button title={'Save Student'} onPress={()=>{
        
        
      }} />
        
      <FlatList 
        style={{flex:1, marginTop:30}}
        removeClippedSubviews
        data={data}
        renderItem={({item})=>{
          return(
            <View >
                <Text>{item.content}</Text>
                <Text>{item.date}</Text>
                {/* <Text>{item.linkImg}</Text> */}
                <Image source={{uri: item.linkImg}} style={{width:50,height:50}}/>
                <Text>================</Text>
            </View>

          )
        }}
      >

      </FlatList>

      <Button title='Load' onPress={()=>{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(url,requestOptions)
            .then(respone => respone.json())
            .then(kq => setData(kq))
            .catch(err => setData(err.message));

      }} />

    </View>
  );
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
