import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, Button } from 'react-native';
import {FontAwesome, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';

import img from './assets/ImageBackground.jpg';
import digital from './assets/digital.png';
import wpp from './assets/wpp.png';
import bot from './assets/bot.png';
import boneco from './assets/boneco.png';

export default function App(){
  return(
    <View style = {{flex: 1}}>
      <View>  
        <ImageBackground source = {img} style = {styles.img}>
          <View style = {{flexDirection: "row",
                          backgroundColor: "white",
                          height: 50,
                          marginTop:70,
                          marginHorizontal: 15,
                          borderRadius: 10}}>
            <Image source = {digital} style = {styles.digital}/>
            <Text style = {styles.plusoft}>
            Plusoft 
            </Text>
            <FontAwesome name = "bars" size = {30} style = {{marginTop: 12, color: "red", marginLeft: 170}}/>
          </View>

          <View>
            <Text style = {styles.title}>plusoft Hike</Text>
            <Text style = {styles.texto}> Automatize processos e tenha mais tempo para tarefas estratégicas</Text>
            <Text style = {styles.botao}>Conheça mais</Text>
          </View>

          <View>
            <Image source={boneco} style={styles.boneco}/>
          </View>

          <View style = {{flexDirection: "row"}}>
            <Entypo name = "dots-two-horizontal" size = {30} style = {{color: "white",
                                                                       textAlign: "center",
                                                                       paddingTop: 70,
                                                                       marginLeft: 140}}/>
            <Entypo name = "dots-two-horizontal" size = {30} style = {{color: "white",
                                                                       textAlign: "center",
                                                                       paddingTop: 70,
                                                                       marginLeft: -6
                                                                       }}/>
          </View>
        </ImageBackground>

        <View>
          <View>
            <Text style = {{fontWeight: 500,
                            fontSize : 22,
                            textAlign: "center",
                            marginHorizontal: 50,
                            marginTop: 50
            }}>
              Temos um time de especialistas que domina o seu negócio
            </Text>

            <Text style = {{paddingHorizontal: 20, marginTop: 20}}>
              Pessoas querem ser ouvidas e ter respostas rápidsa e assertivas das suas demandas. 
              Para isso, é preciso invertir na experiência das pessoas, ou Human Experince(HX), a
              verdadeira fonte de vantagem competitiva da empresa. A Plusoft oferece um portifólio 
              completo de soluções, separadas por verticais, para sua companhia e vocês chegare lá!
            </Text>
          </View>
          
          <View style = {{flexDirection: "row"}}>
            <Image source={wpp} style = {styles.wppIcon}/>
            <Image source={bot} style = {styles.botIcon}/>
          </View>
          
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  img:{
    width: "100%",
    height: 460
  },

  digital:{
    width: 40,
    height: 40,
    paddingTop: 50,
    marginLeft: 20,
    borderRadius: 10
  },

  plusoft:{
    fontSize: 26,
    color: "red",
    marginTop: 5,
    paddingRight: 10,
    borderRadius: 10,
    marginLeft: 5,
    fontWeight: 500
  },

  title:{
    color: "white",
    fontWeight: 500,
    fontSize: 20,
    textAlign: "center",
    marginTop: 30
  },

  texto:{
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    marginTop: 20,
    marginHorizontal: 60
  },

  botao:{
    textAlign: "center",
    color: "white",
    fontWeight: 500,
    marginTop: 30,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    marginHorizontal: 90,
    paddingVertical: 5
  },

  wppIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 20
  },

  botIcon:{
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 245
  },

  boneco:{
    borderRadius: 100,
    marginLeft: 265,
    width: 40,
    height: 40,
    marginTop: 40
  }
})



