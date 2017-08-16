'use strict';

angular.module('creditShopApp').factory('MessageService', function MessageService($rootScope, $translate) {
    $rootScope.alerts = [];
    var sdo = {
        scrollTop: function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
        },
        display: function (type, key, params) {
            // store for on-the-fly translations
            $rootScope.messageServiceType = type;
            $rootScope.messageServiceKey = key;
            $rootScope.messageServiceParams = params;
            $translate(key, params).then(function (translated) {
                $rootScope.alerts.splice(0, $rootScope.alerts.length);
                $rootScope.alerts.push({msg: translated, type: type});
                sdo.scrollTop();
            }, function() { // handle missing translations
                $rootScope.alerts.splice(0, $rootScope.alerts.length);
                $rootScope.alerts.push({msg: key, type: type});
                sdo.scrollTop();
            });
        },
        clear: function () {
            $rootScope.alerts.splice(0, $rootScope.alerts.length);
            $rootScope.messageServiceType = undefined;
            $rootScope.messageServiceKey = undefined;
            $rootScope.messageServiceParams = undefined;
        }
    };
    return sdo;
});
