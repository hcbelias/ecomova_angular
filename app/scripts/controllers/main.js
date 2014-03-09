define(['angular'], function (angular) {
  'use strict';

  angular.module('ecomovaAngularApp', [])
    .controller('MainCtrl', function ($scope) {
        var mainModal = $('#main-modal'),
            backgroundModal = mainModal.find('.reveal-modal-bg');
        debugger;
        $scope.email = '';
        $scope.submitEmail = function () {
            $scope.email.push($scope.email);
        };

        mainModal.data('reveal-init', {
            animation: 'fadeAndPop',
            animation_speed: 250,
            close_on_background_click: false,
            close_on_esc: false,
            dismiss_modal_class: 'close-reveal-modal',
            bg_class: backgroundModal.attr('class'),
            bg: backgroundModal,
            css: {
                open: {
                    'opacity': 0,
                    'visibility': 'visible',
                    'display': 'block'
                  },
                  close: {
                    'opacity': 1,
                    'visibility': 'hidden',
                    'display': 'none'
                  }
            }
		});
        mainModal.foundation('reveal', 'open');


    });
});