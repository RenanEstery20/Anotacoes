import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    padding: 10,
    backgroundColor: "#069",
  },
  txt_titulo:{
      textAlign:'center',
      color:'white',
      fontSize:22,
      marginTop:10
  },
  view_anotacao:{
      padding:20
  },
  txt_anotacao:{
      fontSize:13,
  },
  btn_anotacao:{
      position: "absolute",
      right:20,
      bottom:20,
      width:50,
      height:50,
      backgroundColor:'#069',
      borderRadius:25
  },
  txt_btn_anotacao:{
    color: "white",
    position: "relative",
    textAlign: "center",
    top: 3,
    fontSize: 30,  
  },
  btn_salvar:{
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#069",
  },
  txt_btn_salvar:{
      textAlign: "center",
      color: "white"
  },
  txt_input_anotacao:{
      padding:20,
      height:300,
      textAlignVertical:'top',  
  },
  txt_texto_vazio:{
    opacity:0.3,
  },
  btn_editar:{
      fontSize:12,
      color:'white',
      textAlign:'center',
      marginTop:16
  }
});
