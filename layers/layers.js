ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([701877.756562, 2950251.683581, 893602.214668, 3076406.485826]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Agra_Division_GIS_Mapping_Shape_File_05122025_1 = new ol.format.GeoJSON();
var features_Agra_Division_GIS_Mapping_Shape_File_05122025_1 = format_Agra_Division_GIS_Mapping_Shape_File_05122025_1.readFeatures(json_Agra_Division_GIS_Mapping_Shape_File_05122025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Agra_Division_GIS_Mapping_Shape_File_05122025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agra_Division_GIS_Mapping_Shape_File_05122025_1.addFeatures(features_Agra_Division_GIS_Mapping_Shape_File_05122025_1);
var lyr_Agra_Division_GIS_Mapping_Shape_File_05122025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agra_Division_GIS_Mapping_Shape_File_05122025_1, 
                style: style_Agra_Division_GIS_Mapping_Shape_File_05122025_1,
                popuplayertitle: 'Agra_Division_GIS_Mapping_Shape_File_05-12-2025',
                interactive: true,
                title: '<img src="styles/legend/Agra_Division_GIS_Mapping_Shape_File_05122025_1.png" /> Agra_Division_GIS_Mapping_Shape_File_05-12-2025'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Agra_Division_GIS_Mapping_Shape_File_05122025_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Agra_Division_GIS_Mapping_Shape_File_05122025_1];
lyr_Agra_Division_GIS_Mapping_Shape_File_05122025_1.set('fieldAliases', {'asset_cate': 'asset_cate', 'asset_name': 'asset_name', 'land_plot': 'land_plot', 'asset_detl': 'asset_detl', 'agency_nam': 'agency_nam', 'lse_durtn': 'lse_durtn', 'encrh_type': 'encrh_type', 'encrh_nam': 'encrh_nam', 'asset_imag': 'asset_imag', 'date_time': 'date_time', 'area_sqm': 'area_sqm', 'railway': 'railway', 'division': 'division', 'state': 'state', 'district': 'district', 'city': 'city', 'sttncode': 'sttncode', 'sttnname': 'sttnname', 'stnfrom': 'stnfrom', 'stnto': 'stnto', 'tmssection': 'tmssection', 'constuncy': 'constuncy', 'remark': 'remark', });
lyr_Agra_Division_GIS_Mapping_Shape_File_05122025_1.set('fieldImages', {'asset_cate': 'TextEdit', 'asset_name': 'TextEdit', 'land_plot': 'TextEdit', 'asset_detl': 'TextEdit', 'agency_nam': 'TextEdit', 'lse_durtn': 'TextEdit', 'encrh_type': 'TextEdit', 'encrh_nam': 'TextEdit', 'asset_imag': 'ExternalResource', 'date_time': 'TextEdit', 'area_sqm': 'TextEdit', 'railway': 'TextEdit', 'division': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'city': 'TextEdit', 'sttncode': 'TextEdit', 'sttnname': 'TextEdit', 'stnfrom': 'TextEdit', 'stnto': 'TextEdit', 'tmssection': 'TextEdit', 'constuncy': 'TextEdit', 'remark': 'TextEdit', });
lyr_Agra_Division_GIS_Mapping_Shape_File_05122025_1.set('fieldLabels', {'asset_cate': 'no label', 'asset_name': 'no label', 'land_plot': 'no label', 'asset_detl': 'no label', 'agency_nam': 'no label', 'lse_durtn': 'no label', 'encrh_type': 'no label', 'encrh_nam': 'no label', 'asset_imag': 'no label', 'date_time': 'no label', 'area_sqm': 'no label', 'railway': 'no label', 'division': 'no label', 'state': 'no label', 'district': 'no label', 'city': 'no label', 'sttncode': 'no label', 'sttnname': 'no label', 'stnfrom': 'no label', 'stnto': 'no label', 'tmssection': 'no label', 'constuncy': 'no label', 'remark': 'no label', });
lyr_Agra_Division_GIS_Mapping_Shape_File_05122025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});