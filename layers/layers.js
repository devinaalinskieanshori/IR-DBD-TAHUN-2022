ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([93.820708, -13.436152, 142.171245, 8.505262]);
var wms_layers = [];

var format_adm_prov__0 = new ol.format.GeoJSON();
var features_adm_prov__0 = format_adm_prov__0.readFeatures(json_adm_prov__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_adm_prov__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_prov__0.addFeatures(features_adm_prov__0);
var lyr_adm_prov__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adm_prov__0, 
                style: style_adm_prov__0,
                popuplayertitle: "adm_prov_",
                interactive: true,
    title: 'adm_prov_<br />\
    <img src="styles/legend/adm_prov__0_0.png" /> Dibawa IR rata rata nasional<br />\
    <img src="styles/legend/adm_prov__0_1.png" /> Diatas IR rata rata nasional<br />'
        });

lyr_adm_prov__0.setVisible(true);
var layersList = [lyr_adm_prov__0];
lyr_adm_prov__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', '_JML_PSTA': '_JML_PSTA', '_NAMA_INST': '_NAMA_INST', 'IR DBD 22': 'IR DBD 22', });
lyr_adm_prov__0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', '_JML_PSTA': 'TextEdit', '_NAMA_INST': 'TextEdit', 'IR DBD 22': 'TextEdit', });
lyr_adm_prov__0.set('fieldLabels', {'OBJECTID': 'no label', 'WADMPR': 'header label - always visible', '_JML_PSTA': 'no label', '_NAMA_INST': 'no label', 'IR DBD 22': 'inline label - always visible', });
lyr_adm_prov__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});