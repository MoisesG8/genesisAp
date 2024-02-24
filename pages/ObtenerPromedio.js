import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Text, TextInput } from "react-native";
import { SvgXml } from "react-native-svg"

import { FontAwesome5 } from '@expo/vector-icons';
import { Theme } from "../config/Themes";
import { customFetchAll, customFetchGET, customFetchAllV2 } from "../config/funciones";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
//const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const scale = SLIDER_WIDTH / 320;
import rutas from "../config/api"

const FiguraSVGHeader = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#EAEAEA" fill-opacity="1" d="M0,64L120,64C240,64,480,64,720,106.7C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
`

const FiguraSVGFooter = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#EAEAEA" fill-opacity="1" d="M0,96L120,128C240,160,480,224,720,245.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
`


export default function ObtenerPromedio() {
    const [promedio, setPromedio] = useState(null);
    const [fecha1, setFecha1] = useState("");
    const [fecha2, setFecha2] = useState("");
    const obtenerPromedio = async () => {
        //llamar servicio
        try {
            const respuesta = await customFetchAll("https://b3e5-2803-d100-98a8-1e9f-eca7-f8a8-c2d-b5a9.ngrok-free.app/gestiones/obtenerPromedioTasa", "POST", { "fechaInicio": fecha1, "fechaFin": fecha2 });
            setPromedio(respuesta)
            console.log(respuesta)
        } catch (e) {

        }

    }
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <SvgXml width='100%' height={75 * scale} xml={FiguraSVGFooter} style={{ position: 'absolute', bottom: -2 }} />
            <View style={{ padding: 20, flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    keyboardType='default'
                    contextMenuHidden={true}
                    style={{ marginBottom: 10, width: '80%', borderWidth: 0.8, borderRadius: 5, borderColor: Theme.colorBlack30, paddingVertical: 5, paddingHorizontal: 5, fontSize: 14, color: Theme.colorBlack50 }}
                    value={fecha1}
                    onChangeText={(texto) => { setFecha1(texto) }}
                    placeholder="fecha de inicio"
                />
                <TextInput
                    keyboardType='default'
                    contextMenuHidden={true}
                    style={{ width: '80%', borderWidth: 0.8, borderRadius: 5, borderColor: Theme.colorBlack30, paddingVertical: 5, paddingHorizontal: 5, fontSize: 14, color: Theme.colorBlack50 }}
                    value={fecha2}
                    onChangeText={(texto) => { setFecha2(texto) }}
                    placeholder="Fecha fin"
                />
                <TouchableOpacity style={{ width: 200, justifyContent: 'center', alignItems: 'center', padding: 10, borderWidth: 0.5, borderRadius: 10, borderBottomWidth: 5, marginTop: 10, borderColor: Theme.colorBlack50 }}
                    onPress={() => { obtenerPromedio() }}>
                    <FontAwesome5 name="calendar-alt" color={Theme.colorBlack70} size={40} />
                    <Text style={{ fontSize: 14, color: Theme.colorBlack50 }}>Obtener Promedio</Text>
                </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 0, flex: 1, alignItems: 'center', paddingTop: 5 }}>

                {promedio ?
                    <View style={{ width: '100%', borderWidth: 0, paddingLeft: 10, borderColor: Theme.colorBlack30 }}>
                        <Text style={{ fontSize: 13, color: Theme.colorBlack70 }}><Text style={{ color: Theme.colorBlack30 }}>Fecha Inicio: </Text>{promedio ? promedio.fechaInicio : ''}</Text>
                        <Text style={{ fontSize: 13, color: Theme.colorBlack70 }}><Text style={{ color: Theme.colorBlack30 }}>Fecha Fin: </Text>{promedio ? promedio.fechaFinal : ''}</Text>
                        <Text style={{ fontSize: 13, color: Theme.colorBlack70 }}><Text style={{ color: Theme.colorBlack30 }}>Promedio Compra: </Text>{promedio ? promedio.promedioCompra : ''}</Text>
                        <Text style={{ fontSize: 13, color: Theme.colorBlack70 }}><Text style={{ color: Theme.colorBlack30 }}>Promedio Venta: </Text>{promedio ? promedio.promedioVenta : ''}</Text>
                    </View>
                    :
                    null
                }
            </View>
        </View>
    )
}

