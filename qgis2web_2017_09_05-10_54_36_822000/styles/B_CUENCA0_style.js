var size = 0;

var styleCache_B_CUENCA0={}
var style_B_CUENCA0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if (feature.get("V_NOM_CUEN") !== null) {
        labelText = String(feature.get("V_NOM_CUEN"));
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(115,172,10,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(146,95,146,0.0)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_B_CUENCA0[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_B_CUENCA0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_B_CUENCA0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};