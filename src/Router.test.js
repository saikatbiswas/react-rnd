import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "testUtils/textUtils";
import Routes from "Routes";
import { Route } from "react-router-dom";
import AuthGuard from "hoc/RouteGuard";
import LoginRegister from "pages/LoginRegister";

const setup = ()=>{
    return shallow(<Routes />);
};

describe('routes using array of routers', ()=>{

    let wrapper;
    let component;
    let pathMap = {};
    beforeAll( async ()=>{
        wrapper = setup();
        component = await findByTestAttr(wrapper, 'routes-component'); 
        pathMap = component.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
    });

    test('should show LoginRegister component for / router (getting array of routes)', () => {
        const loginWithAuth = AuthGuard(LoginRegister, false);
        // console.log(pathMap['/'])
        // console.log('1111',loginWithAuth)
        const expectedObj =  pathMap['/'];
        if(pathMap['/'].WrappedComponent === loginWithAuth.WrappedComponent){
            console.log('Yes match');
        }else{
            console.log('not match');
            console.log(pathMap['/'].WrappedComponent)
            console.log('1111',loginWithAuth.WrappedComponent)
        }


        expect(expectedObj).toStrictEqual(loginWithAuth);
    })

});


describe('Test <Routes /> component', ()=>{

    let wrapper;
    let component;

    beforeEach(async ()=>{
        wrapper = setup();
        component = await findByTestAttr(wrapper, 'routes-component'); 
    });
    

    test('Render without error', async ()=>{
        expect(component.length).toBe(1);
    });
    test('Router has <Switch>', async ()=>{
        const routeSwitch = component.find('Switch');

        expect(routeSwitch).toHaveLength(1);
    });
    test('<Route/> length more than one', async ()=>{
        const routeLink = component.find('Route');

        expect(routeLink.length).toBeGreaterThan(2);
    });

});