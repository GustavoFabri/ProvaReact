import { Text, View, TextInput, TouchableOpacity, Alert, FlatList, KeyboardAvoidingView, KeyboardAvoidingViewBase} from "react-native";
import React, { useState } from 'react';
import { styles } from './styles';



export default function Home() {
    

    const [qtHomen, setQtHomen ] = useState('');
    const [qtMulher,setQtMulher] = useState('');
    const [qtCrianca,setQtCrianca] = useState('');
    const [qntPessoas,setQntPessoas] = useState('0');
    const [pesoCarne,setPesoCarne] = useState('0');
    const [margemC,setMargemC ] = useState('0');
    const [pesoAperitivo,setPesoAperitivo] = useState('0');
    const [margemA,setMargemA] = useState('0');
    const [totalComida,setTotalComida] = useState('0');
    const [LCerveja,setLCerveja] = useState('0');
    const [margemCer,setMargemCer] = useState('0');
    const [LAgua,setLAgua] = useState('0');
    const [margemAg,setMargemAg] = useState('0');
    const [LRefri,setLRefri] = useState('0');
    const [margemR,setMargemR] = useState('0');
    const [totalBebida,setTotalBebida] = useState('0');


    function CalculoComida(){

        var homenNumber = Number(qtHomen)
        var MulherNumber = Number(qtMulher)
        var CriancaNumber = Number(qtCrianca)

        var homen = 0
        var mulher = 0
        var crianca = 0

        var totalCrianca = 0
        var totalHomen = 0
        var totalMulher = 0

        var total = 0

        var totalPessoas = 0

        var totalM = 0

        var totalCarne = 0

        homen = homenNumber * 400 
        mulher = MulherNumber * 300 
        crianca = CriancaNumber * 200 

        totalCrianca = crianca * 0.10
        totalHomen = homen * 0.10
        totalMulher = mulher * 0.10


        total = homen + mulher + crianca


        totalM = totalCrianca + totalHomen + totalMulher

        totalPessoas = homenNumber + MulherNumber + CriancaNumber


        totalCarne = totalM + total

        setQntPessoas(totalPessoas.toString())

        setPesoCarne(total.toString())

        setMargemC(totalM.toString())

        setTotalComida(totalCarne.toString())


        CalcAperitivo()

    }

    function CalcAperitivo(){

        var totalCarne = Number(totalComida)
        var homenNumber = Number(qtHomen)
        var MulherNumber = Number(qtMulher)
        var CriancaNumber = Number(qtCrianca)

        var homen = 0
        var mulher = 0
        var crianca = 0

        var totalCrianca = 0
        var totalHomen = 0
        var totalMulher = 0

        var total = 0

        var totalM = 0

        var geral = 0

        var totalA = 0


        homen = homenNumber * 150 
        mulher = MulherNumber * 100 
        crianca = CriancaNumber * 50 

        totalCrianca = crianca * 0.10
        totalHomen = homen * 0.10
        totalMulher = mulher * 0.10


        total = homen + mulher + crianca


        totalM = totalCrianca + totalHomen + totalMulher

        totalA = total + totalM

        geral = totalCarne + totalA

        setPesoAperitivo(total.toString())

        setMargemA(totalM.toString())

        setTotalComida(geral.toString())

    }

    function zerar(){
        
        setTotalBebida('0')
        setMargemR('0')
        setLRefri('0')
        setMargemAg('0')
        setLAgua('0')
        setMargemCer('0')
        setLCerveja('0')
        setTotalComida('0')
        setMargemA('0')
        setPesoAperitivo('0')
        setMargemC('0')
        setPesoCarne('0')
        setQntPessoas('0')
        setQtCrianca('0')
        setQtMulher('0')
        setQtHomen('0')   

    }

    return (
    
        <View style={styles.body}>

            <View style={styles.cabecalho}>
                <Text style={styles.txtCabecalho}>
                    ChurraSul
                </Text>
            </View>

            <View style={styles.inHM}>
                <View>

                    <Text style={styles.txt}>Homens</Text>

                    <TextInput
                        style={styles.input}
                        keyboardType = 'numeric'
                        placeholderTextColor={'#fff'}
                        onChangeText={text => setQtHomen(text)}
                        value={qtHomen}
                    ></TextInput>

                </View>

                <View>

                    <Text style={styles.txt}>Mulheres</Text>

                    <TextInput
                        style={styles.input}
                        keyboardType = 'numeric'
                        placeholderTextColor={'#fff'}
                        onChangeText={text => setQtMulher(text)}
                        value={qtMulher}
                    ></TextInput>

                </View>


            </View>

            <View style={styles.inCB}>
                <View>

                    <Text style={styles.txt}>Crianças</Text>

                    <TextInput
                    style={styles.input}
                    keyboardType = 'numeric'
                    placeholderTextColor={'#fff'}
                    onChangeText={text => setQtCrianca(text)}
                    value={qtCrianca}
                    ></TextInput>

                </View>

                <View>

                <TouchableOpacity
                    style={styles.bttC}
                    onPress={CalculoComida}
                    
                >
                    <Text style={styles.txtB}>Calcular</Text>
                </TouchableOpacity>

                </View>

            </View>

            <View style={styles.result}>
                <Text style={styles.txtR}>
                    Resultado
                </Text>
                <View style={styles.vwResult}
                >
                    <Text style={styles.txtResult}>Realizamos o calculo para {qntPessoas} participantes</Text>

                </View>
            </View>

            <View style={styles.calComida}>
                <Text style={styles.txtCo}>
                    Comida
                </Text>
                <View style={styles.vwCarne}>

                    <View style={styles.psCarne}> 
                        <Text style={styles.txtPC}>
                            {pesoCarne}g
                        </Text>
                        <Text style={styles.txtCarne}>
                            Carne
                        </Text>
                        <Text style={styles.txtM}>
                            {margemC}g
                        </Text>
                    </View>

                    <View style={styles.vwAperitivo}>
                        <Text style={styles.psAperitivo}>
                            {pesoAperitivo}g
                        </Text>
                        <Text style={styles.txtA}>
                            Aperitivo
                        </Text>
                        <Text style={styles.mAperitivo}>
                            {margemA}g
                        </Text>
                    </View>
                    <View style={styles.totalComida}>
                        <Text style={styles.txtPeso}>
                            {totalComida}g
                        </Text>
                        <Text style={styles.txtTotal}>
                            TOTAL
                        </Text>
                    </View>
                    
                </View>
            </View>

            <View style={styles.calBebida}>
                <Text style={styles.txtBebida}>
                    Bebida
                </Text >
                <View style={styles.vwBebida}>

                    <View style={styles.vwCerveja}>
                        <Text style={styles.txtQnt}>
                            {LCerveja}L
                        </Text>
                        <Text style={styles.txtmedida}>
                            Cerveja
                        </Text>
                        <Text style={styles.media}>
                            {margemCer}ml
                        </Text>
                    </View>

                    <View style={styles.vwAgua}>
                        <Text style={styles.txtQnt}>
                            {LAgua}L
                        </Text>
                        <Text style={styles.txtmedida}>
                            Agua
                        </Text>
                        <Text style={styles.media}>
                            {margemAg}ml
                        </Text>
                    </View>

                    <View style={styles.vwRefri}>
                        <Text style={styles.txtQnt}>
                            {LRefri}L
                        </Text>
                        <Text style={styles.txtmedida}>
                            Refrigerante
                        </Text>
                        <Text style={styles.media}>
                            {margemR}ml
                        </Text>
                    </View>
                    
                </View>

                <View style={styles.vwTotal}>

                    <View style={styles.vwvwTotal}>
                        <Text style={styles.txtotal}>
                            {totalBebida} Litros
                        </Text>
                        <Text style={styles.txtString}>
                            TOTAL
                        </Text>

                    </View>
                    
                </View>

                <View style={styles.vwBotao}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={zerar}
                    >
                        <Text style={styles.txtBotao}>Limpar</Text>
                    </TouchableOpacity>

                </View>

            </View>
           
        </View>
    )
}