import * as angular from 'angular';
import template from './home.html!text';


/**
 * 
 * 
 * @class HomeController
 * @implements {ng.IController}
 */
class HomeController implements ng.IController {   
    static $inject = [];
    /**
     * Creates an instance of HomeController.
     * 
     * @memberOf HomeController
     */
    constructor() {

    }
    
}

export var Component  = <angular.IComponentOptions> {
    controller: HomeController,
    template: template
}

export var Name = 'scoring.home';