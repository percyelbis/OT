var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_B_CUENCA0 = new ol.format.GeoJSON();
var features_B_CUENCA0 = format_B_CUENCA0.readFeatures(json_B_CUENCA0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B_CUENCA0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B_CUENCA0.addFeatures(features_B_CUENCA0);var lyr_B_CUENCA0 = new ol.layer.Vector({
                source:jsonSource_B_CUENCA0, 
                style: style_B_CUENCA0,
                title: '<img src="styles/legend/B_CUENCA0.png" /> B_CUENCA'
            });var format_B_PRESAS1 = new ol.format.GeoJSON();
var features_B_PRESAS1 = format_B_PRESAS1.readFeatures(json_B_PRESAS1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B_PRESAS1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B_PRESAS1.addFeatures(features_B_PRESAS1);var lyr_B_PRESAS1 = new ol.layer.Vector({
                source:jsonSource_B_PRESAS1, 
                style: style_B_PRESAS1,
                title: '<img src="styles/legend/B_PRESAS1.png" /> B_PRESAS'
            });var format_B_BOCATOMAS2 = new ol.format.GeoJSON();
var features_B_BOCATOMAS2 = format_B_BOCATOMAS2.readFeatures(json_B_BOCATOMAS2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B_BOCATOMAS2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B_BOCATOMAS2.addFeatures(features_B_BOCATOMAS2);var lyr_B_BOCATOMAS2 = new ol.layer.Vector({
                source:jsonSource_B_BOCATOMAS2, 
                style: style_B_BOCATOMAS2,
                title: '<img src="styles/legend/B_BOCATOMAS2.png" /> B_BOCATOMAS'
            });

lyr_B_CUENCA0.setVisible(true);lyr_B_PRESAS1.setVisible(true);lyr_B_BOCATOMAS2.setVisible(true);
var layersList = [baseLayer,lyr_B_CUENCA0,lyr_B_PRESAS1,lyr_B_BOCATOMAS2];
lyr_B_CUENCA0.set('fieldAliases', {'FID_1': 'FID_1', 'FID_1_1': 'FID_1_1', 'OBJECTID': 'OBJECTID', 'N_ID_CUEN': 'N_ID_CUEN', 'V_NIVEL1': 'V_NIVEL1', 'V_NIVEL2': 'V_NIVEL2', 'V_NIVEL3': 'V_NIVEL3', 'V_NIVEL4': 'V_NIVEL4', 'V_NIVEL5': 'V_NIVEL5', 'V_NIVEL6': 'V_NIVEL6', 'V_NIVEL7': 'V_NIVEL7', 'NOMB_UH_N1': 'NOMB_UH_N1', 'NOMB_UH_N2': 'NOMB_UH_N2', 'NOMB_UH_N3': 'NOMB_UH_N3', 'NOMB_UH_N4': 'NOMB_UH_N4', 'NOMB_UH_N5': 'NOMB_UH_N5', 'NOMB_UH_N6': 'NOMB_UH_N6', 'NOMB_UH_N7': 'NOMB_UH_N7', 'V_COD_CUEN': 'V_COD_CUEN', 'V_NOM_CUEN': 'V_NOM_CUEN', 'V_ORD_CUEN': 'V_ORD_CUEN', 'N_AREA_KM2': 'N_AREA_KM2', 'V_TIP_FUEN': 'V_TIP_FUEN', 'N_AREA_KM': 'N_AREA_KM', 'N_QMed_OH': 'N_QMed_OH', 'P_CUE_PHID': 'P_CUE_PHID', 'P_OH_PHID': 'P_OH_PHID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'N_PRESAS': 'N_PRESAS', 'N_BOCATOMA': 'N_BOCATOMA', });
lyr_B_PRESAS1.set('fieldAliases', {'PUNTO': 'PUNTO', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'ESTRUCTURA': 'ESTRUCTURA', 'DETALLE': 'DETALLE', 'ESTADO': 'ESTADO', 'RIO_y_QUEB': 'RIO_y_QUEB', 'VOLUMEN__M': 'VOLUMEN__M', });
lyr_B_BOCATOMAS2.set('fieldAliases', {'PUNTO': 'PUNTO', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'ESTRUCTURA': 'ESTRUCTURA', 'DETALLE': 'DETALLE', 'ESTADO': 'ESTADO', 'RIO_Y_QUEB': 'RIO_Y_QUEB', 'Area_Actua': 'Area_Actua', 'INCORPORAR': 'INCORPORAR', 'TOTAL_Has_': 'TOTAL_Has_', 'ACTUAL_m3_': 'ACTUAL_m3_', 'INCORPOR_1': 'INCORPOR_1', 'TOTAL_m3_s': 'TOTAL_m3_s', 'FAMILIA': 'FAMILIA', });
lyr_B_CUENCA0.set('fieldImages', {'FID_1': 'Hidden', 'FID_1_1': 'Hidden', 'OBJECTID': 'Hidden', 'N_ID_CUEN': 'TextEdit', 'V_NIVEL1': 'TextEdit', 'V_NIVEL2': 'TextEdit', 'V_NIVEL3': 'TextEdit', 'V_NIVEL4': 'TextEdit', 'V_NIVEL5': 'TextEdit', 'V_NIVEL6': 'TextEdit', 'V_NIVEL7': 'TextEdit', 'NOMB_UH_N1': 'TextEdit', 'NOMB_UH_N2': 'TextEdit', 'NOMB_UH_N3': 'TextEdit', 'NOMB_UH_N4': 'TextEdit', 'NOMB_UH_N5': 'TextEdit', 'NOMB_UH_N6': 'TextEdit', 'NOMB_UH_N7': 'TextEdit', 'V_COD_CUEN': 'TextEdit', 'V_NOM_CUEN': 'TextEdit', 'V_ORD_CUEN': 'TextEdit', 'N_AREA_KM2': 'TextEdit', 'V_TIP_FUEN': 'TextEdit', 'N_AREA_KM': 'TextEdit', 'N_QMed_OH': 'TextEdit', 'P_CUE_PHID': 'TextEdit', 'P_OH_PHID': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'N_PRESAS': 'TextEdit', 'N_BOCATOMA': 'TextEdit', });
lyr_B_PRESAS1.set('fieldImages', {'PUNTO': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'ESTRUCTURA': 'TextEdit', 'DETALLE': 'TextEdit', 'ESTADO': 'TextEdit', 'RIO_y_QUEB': 'TextEdit', 'VOLUMEN__M': 'TextEdit', });
lyr_B_BOCATOMAS2.set('fieldImages', {'PUNTO': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'ESTRUCTURA': 'TextEdit', 'DETALLE': 'TextEdit', 'ESTADO': 'TextEdit', 'RIO_Y_QUEB': 'TextEdit', 'Area_Actua': 'TextEdit', 'INCORPORAR': 'TextEdit', 'TOTAL_Has_': 'TextEdit', 'ACTUAL_m3_': 'TextEdit', 'INCORPOR_1': 'TextEdit', 'TOTAL_m3_s': 'TextEdit', 'FAMILIA': 'TextEdit', });
lyr_B_CUENCA0.set('fieldLabels', {'N_ID_CUEN': 'inline label', 'V_NIVEL1': 'inline label', 'V_NIVEL2': 'inline label', 'V_NIVEL3': 'inline label', 'V_NIVEL4': 'inline label', 'V_NIVEL5': 'inline label', 'V_NIVEL6': 'inline label', 'V_NIVEL7': 'inline label', 'NOMB_UH_N1': 'inline label', 'NOMB_UH_N2': 'inline label', 'NOMB_UH_N3': 'inline label', 'NOMB_UH_N4': 'inline label', 'NOMB_UH_N5': 'inline label', 'NOMB_UH_N6': 'inline label', 'NOMB_UH_N7': 'inline label', 'V_COD_CUEN': 'inline label', 'V_NOM_CUEN': 'inline label', 'V_ORD_CUEN': 'inline label', 'N_AREA_KM2': 'inline label', 'V_TIP_FUEN': 'inline label', 'N_AREA_KM': 'inline label', 'N_QMed_OH': 'inline label', 'P_CUE_PHID': 'inline label', 'P_OH_PHID': 'inline label', 'N_PRESAS': 'inline label', 'N_BOCATOMA': 'inline label', });
lyr_B_PRESAS1.set('fieldLabels', {'PUNTO': 'inline label', 'ESTE': 'inline label', 'NORTE': 'inline label', 'ESTRUCTURA': 'inline label', 'DETALLE': 'inline label', 'ESTADO': 'inline label', 'RIO_y_QUEB': 'inline label', 'VOLUMEN__M': 'inline label', });
lyr_B_BOCATOMAS2.set('fieldLabels', {'PUNTO': 'inline label', 'ESTE': 'inline label', 'NORTE': 'inline label', 'ESTRUCTURA': 'inline label', 'DETALLE': 'inline label', 'ESTADO': 'inline label', 'RIO_Y_QUEB': 'inline label', 'Area_Actua': 'inline label', 'INCORPORAR': 'inline label', 'TOTAL_Has_': 'inline label', 'ACTUAL_m3_': 'inline label', 'INCORPOR_1': 'inline label', 'TOTAL_m3_s': 'inline label', 'FAMILIA': 'inline label', });
lyr_B_BOCATOMAS2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});