var wms_layers = [];

var format_shp_0 = new ol.format.GeoJSON();
var features_shp_0 = format_shp_0.readFeatures(json_shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_0.addFeatures(features_shp_0);
var lyr_shp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shp_0, 
                style: style_shp_0,
                interactive: true,
    title: 'shp<br />\
    <img src="styles/legend/shp_0_0.png" /> Mer [Red] 2603 points<br />\
    <img src="styles/legend/shp_0_1.png" /> oasis [Cyan] 562 points<br />\
    <img src="styles/legend/shp_0_2.png" /> sable [Yellow] 46 points<br />\
    <img src="styles/legend/shp_0_3.png" /> TA [Maroon] 4697 points<br />\
    <img src="styles/legend/shp_0_4.png" /> TAagricol [Magenta] 227 points<br />\
    <img src="styles/legend/shp_0_5.png" /> zc [Green] 619 points<br />\
    <img src="styles/legend/shp_0_6.png" /> zu [Blue] 916 points<br />\
    <img src="styles/legend/shp_0_7.png" /> <br />'
        });

lyr_shp_0.setVisible(true);
var layersList = [lyr_shp_0];
lyr_shp_0.set('fieldAliases', {'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', });
lyr_shp_0.set('fieldImages', {'Class_Name': 'TextEdit', 'Class_Id': 'Range', 'Parts': 'Range', 'Length': 'TextEdit', 'Area': 'TextEdit', });
lyr_shp_0.set('fieldLabels', {'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_shp_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});