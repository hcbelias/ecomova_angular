'use strict';

angular.module('ecomovaAngularApp')
    .controller('MainCtrl', function ($scope) {
        angular.element(document).ready(function () {
            //$('#main-modal').data('reveal-init', {
                animation: 'fadeAndPop',
                animation_speed: 250,
                close_on_background_click: false,
                close_on_esc: false,
                dismiss_modal_class: 'close-reveal-modal',
                bg_class: 'reveal-modal-bg',
                bg: $('.reveal-modal-bg'),
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
            //$('#main-modal').foundation('reveal', 'open');
          });
        $scope.email = '';
        $scope.submitEmail = function () {
            $scope.email.push($scope.email);
          };


      });
