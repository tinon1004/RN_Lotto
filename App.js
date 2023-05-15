import { StatusBar } from 'expo-status-bar';
import React,  { useEffect, useState }from 'react';
import { TouchableOpacity, StyleSheet, Text, View,Image,Dimensions  } from 'react-native';

let imagePath = require('lotto/assets/image/부적.png');

const {width: SCREEN_WIDTH} = Dimensions.get("window");

export default function App() {

  const [lotto, setLotto] = useState([]);

  function makeLotto(){
    let i=0;
    let lnumber =[];
    let rnumber = 0;

    let lottos =[];
    let a = 0;
    for(i=1; i<46; i++){
      lottos.push(i);
    }

    for(i = 0; i < 45; i++) {
      rnumber = Math.floor(Math.random() * 45) ;
    
      a = lottos[i];
      lottos[i] = lottos[rnumber];
      lottos[rnumber] = a;
    }
    
    for(i=0; i<6; i++){
      lnumber.push(lottos[i]);
    }
    setLotto(lnumber);
  }

  useEffect(()=>{
  makeLotto();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <Text style={styles.titleName}>로또 번호 추첨기</Text>

      <Image
          style={styles.image} // 스타일 수정 필요
          source={imagePath} // 이미지 경로 수정 필요
        />

      <TouchableOpacity
          style={styles.buttonContainer} // 버튼 컨테이너 스타일 추가
          onPress={() => makeLotto()}
        >
          <Text style={styles.buttonText}>로또번호 생성</Text>
        </TouchableOpacity>

        <Text style={styles.space}></Text>

      <Text style={styles.number}>{lotto.toLocaleString()}</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC66',
  },
  titleName: {
    fontSize : 40,
    fontWeight: "500",
    marginTop: 40,
  },
  title: {
    flex:1.2,
    backgroundColor: '#blue',
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 36,
    marginBottom: 20,
  },
  image: {
    // 이미지 스타일 추가
    height: 400,
    width: SCREEN_WIDTH,
    
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 10, // 버튼 모서리 둥글게
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  space: {
    height: 20, // 간격을 위한 빈 컴포넌트의 높이 설정
  },
});
