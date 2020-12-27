import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput, AsyncStorage } from "react-native";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {

  const [estado, setarEstado] = useState("leitura"); 
  const [anotacao, setarAnotacao] = useState('');


  useEffect(()=>{
    (async () =>{
      try{
        const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
        setarAnotacao(anotacaoLeitura);
      }catch(error){}
    })();
  },[])


  setData = async() =>{
    try{
        await AsyncStorage.setItem('anotacao', anotacao);
    }catch(error){

    }
    alert('sua anotação foi salva!')
  }

  function atualizarTexto(){
    setarEstado('leitura');
    setData();
  }

  if (estado == "leitura") { 
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <View style={styles.header}>
          <Text style={styles.txt_titulo}><AntDesign name="book" size={24} color="white" /> {'   '}Aplicativo Anotação </Text>
        </View>
        {
          (anotacao != '')?
          <View style={styles.view_anotacao}> 
          <Text style={styles.txt_anotacao}>{anotacao}</Text>
        </View>
        :
        <View style={styles.view_anotacao}> 
          <Text style={styles.txt_texto_vazio}>Nenhuma anotação encontrada :( </Text>
        </View>
        }
        <TouchableOpacity  onPress={() => setarEstado("atualizando")} style={styles.btn_anotacao}> 
        {
          (anotacao == "")?
          <Text style={styles.txt_btn_anotacao}>+</Text>
          :
          <Text style={styles.btn_editar}>Editar</Text>
        }
        
        </TouchableOpacity>   
      </View>   
         ); 
  } else if (estado == "atualizando") {   
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <View style={styles.header}>
          <Text style={styles.txt_titulo}> Aplicativo Anotação</Text>
        </View>
        <TextInput autoFocus={true} style={styles.txt_input_anotacao} onChangeText={(text)=>setarAnotacao(text)} multiline={true} numberOfLines={5} value={anotacao}></TextInput>
        <TouchableOpacity onPress={() => atualizarTexto()} style={styles.btn_salvar}> 
          <Text style={styles.txt_btn_salvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );    
  }
}


 
