/*global $:false, jQuery:false */
jQuery(function ($) {
    "use strict";

    var $body = $('body'),
        $window = $(window);

    var myMap,
        mapData;

    var popupMap = {
        init: function () {
            var self = this;
            this.initMain();
        },
        initMain: function () {
            var self = this;
            startDrawMap();
            function startDrawMap() {
                mapData = {
                    mapId: 'map',
                    center: [38.918522,47.216864],
                    zoom: 17
                };
                self._initDrawMap(mapData);
            }
        },
        _initDrawMap: function (data) {
            if (window.ymaps) {

                ymaps.ready(function () {
                    myMap = new ymaps.Map(data.mapId, {
                        center: data.center,
                        zoom: data.zoom
                    });

                    myMap.controls
                        .add('zoomControl', {left: 5, top: 5})
                        .add('mapTools', { left: 35, top: 5 });

                    var placemark = new ymaps.Placemark([38.91855376,47.21704118], {
                        name: 'Altair crew agency',
                        balloonContent: $('.js-ym-balloon1').html()
                    });

                    window.myObjects = ymaps.geoQuery(placemark);
                    window.myObjects.addToMap(myMap);
                });
            }
        }
    };
    popupMap.init();

});