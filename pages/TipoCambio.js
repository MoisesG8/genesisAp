import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import { SvgXml } from "react-native-svg"

import { FontAwesome5 } from '@expo/vector-icons';
import { Theme } from "../config/Themes";
import { customFetchAll, customFetchGET } from "../config/funciones";

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


export default function TipoCambio() {
    const [tipoCambio, setTipoCambio] = useState(null);
    const obtenerTipoCambio = async () => {
        //llamar servicio
        const respuesta = await customFetchGET("https://b3e5-2803-d100-98a8-1e9f-eca7-f8a8-c2d-b5a9.ngrok-free.app/gestiones/obtenerCambioDia", "");
        if (respuesta) {
            setTipoCambio(JSON.parse(JSON.stringify(respuesta)))
            console.log(respuesta)
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <SvgXml width='100%' height={75 * scale} xml={FiguraSVGFooter} style={{ position: 'absolute', bottom: -2 }} />
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 45 }}
                onPress={() => { obtenerTipoCambio() }}>
                <FontAwesome5 name="dollar-sign" color={Theme.colorBlack70} size={60} />
                <Text style={{ fontSize: 14, color: Theme.colorBlack50 }}>Obtener Tipo de cambio</Text>
            </TouchableOpacity>
            <View style={{ borderWidth: 0, flex: 1, alignItems: 'center', paddingTop: 100 }}>
                <Text style={{ fontSize: 30 * scale, color: Theme.colorPrimary, fontWeight: 'bold' }}>
                    {
                        tipoCambio ? "Q. " + tipoCambio.cambio : ""
                    }
                </Text>
                <Text style={{ fontSize: 30 * scale, color: Theme.colorPrimary, fontWeight: 'bold' }}>
                    {
                        tipoCambio ? tipoCambio.dia : ""
                    }
                </Text>
            </View>
        </View>
    )
}

