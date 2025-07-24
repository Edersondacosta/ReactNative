import { Text, Button, View } from "react-native";
import { useState } from "react"


export default function Index() {
  const [contador, setContador] = useState(0) // variável reativa
  
  type Usuario = {
    id: number
    nome: string
    email: string
  }

  type Produto = {
  id: number
  nome: string
}

  const [produtos, setProdutos] = useState<Produto [ ]>([ ])
  function carregarProdutos( ) {
    setProdutos([
      { id: 1, nome: "Camiseta" },
      { id: 2, nome: "Calça" },
      { id: 3, nome: "Tênis" }
    ])   }


  const [usuario, setUsuario] = useState<Usuario>({
  id: 1,
  nome: "João",
  email: "joao@email.com"
})

  function mostrarMensagem() {
    alert("Você clicou no botão!")
  }


    const [cont, setCont] = useState(0)
  function incrementar() {
    setCont(cont + 1)   
}
  function zerar() {
    setCont(0)  
}



  return (
    <View className="flex-1 justify-center items-center bg-red-600">
      <Text className="text-5xl text-dark-200 font-bold">Bem vindo!!!!!</Text>

    <View>
      <Text>Você clicou {contador} vezes</Text>
      <Button title="Clique aqui" onPress={() => setContador(contador + 1)} />
      <Text> {usuario.nome} {usuario.id} {usuario.email}</Text>
      
      <Button
        title="Atualizar usuário"
        onPress={() =>
        setUsuario({
          id: 2,
          nome: "Ederson",
          email: "costa@email.com"
        })
      }/>
      <Text> {usuario.nome} {usuario.id} {usuario.email}</Text>
        
    </View>

<View style={{ padding: 20 }}>
      <Button title="Carregar produtos" onPress={carregarProdutos} />
      {produtos.map((produto) => (
        <Text key={produto.id}>Produto: {produto.nome}</Text>
      ))}
    </View>



 
    <View style={{ padding: 20 }}>
      <Button title="Clique aqui" onPress={mostrarMensagem} />
    </View>



    <View style={{ padding: 20 }}>
      <Text>Total: {cont}</Text>
      <Button title="Somar 1" onPress={incrementar} />
      <Button title="Zerar contador" onPress={zerar} />
    </View>



    </View>
  );
}
