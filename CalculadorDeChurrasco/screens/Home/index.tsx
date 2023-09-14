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




    return (
    
        <View style={styles.body}>

            <View style={styles.cabecalho}>
                <Text style={styles.txtCabecalho}>
                    ChurraSul
                </Text>
            </View>

            <View style={styles.inHM}>
                <View style={styles.inHomen}>

                    <Text style={styles.txt}>Homens</Text>

                    <TextInput
                        style={styles.input}
                        keyboardType = 'numeric'
                        placeholderTextColor={'#fff'}
                        onChangeText={text => setQtHomen(text)}
                        value={qtHomen}
                    ></TextInput>

                </View>

                <View style={styles.inMulher}>

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
                <Text>
                    Comida
                </Text>
                <View>

                    <View>
                        <Text>
                            {LCerveja}g
                        </Text>
                        <Text>
                            Cerveja
                        </Text>
                        <Text>
                            {margemCer}g
                        </Text>
                    </View>

                    <View>
                        <Text>
                            {LAgua}g
                        </Text>
                        <Text>
                            Agua
                        </Text>
                        <Text>
                            {margemAg}g
                        </Text>
                    </View>
                        <Text>
                            {LRefri}g
                        </Text>
                        <Text>
                            Refrigerante
                        </Text>
                        <Text>
                            {margemR}g
                        </Text>
                    </View>
                    
                </View>

                <View>
                    <Text>
                        {totalBebida}g
                    </Text>
                    <Text>
                        TOTAL
                    </Text>
                </View>

            </View>
           
        
    )
}