import { View, Text, FlatList, ImageComponent } from "react-native";
import { styles } from "./src/styles/Style";

import Img from "./src/components/imgComponent";

export default function App() {
  const img = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMal0tBwFJFF0CVIe7cixk3vrardx6ESUvFA&usqp=CAU",
  };
  const data = [
    {
      id: "1",
      backgroundColor: "white",
      texto: "roger guedes",
      component: <Img />,
    },
  ];
  const dados = [{ id: "1", component: <Img /> }];
  const rdItem = ({ item }) => {
    return item.component;
  };
  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        data={dados} // Ele está recebendo todos os objetos do nosso array data
        renderItem={rdItem} // Chama a função para renderizar as Views box
        keyExtractor={(dados) => dados.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
