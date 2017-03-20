import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import * as LayoutComponent from './layout';
import * as HomeComponent from './home';
import * as AboutComponent from './about';

var moduleName = 'app.scoring';

export const moduleStates = {
    states: [
        <Ng1StateDeclaration>{
            name: 'app.scoring',
            url: '/scoring',
            abstract: true,
            component: LayoutComponent.Name,
        },
        <Ng1StateDeclaration>{
            name: 'app.scoring.index',
            url: '',
            component: HomeComponent.Name
        },
        <Ng1StateDeclaration>{
            name: 'app.scoring.about',
            url: '/about',
            component: AboutComponent.Name
        }
    ]
};

export default angular.module(moduleName, [uiRouter])
.component(LayoutComponent.Name, LayoutComponent.Component)
.component(HomeComponent.Name, HomeComponent.Component)
.component(AboutComponent.Name, AboutComponent.Component);