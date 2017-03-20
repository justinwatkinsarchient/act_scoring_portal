import * as angular from 'angular';
import template from './about.html!text';


class AboutController implements ng.IComponentController {
    static $inject = [];
    constructor() {
        console.log('about me');
    }
}

export var Component  = <angular.IComponentOptions> {
    controller: AboutController,
    template: template
}

export var Name = 'scoring.about';