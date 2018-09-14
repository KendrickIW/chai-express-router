import { Router } from "express-serve-static-core";


export type RouteAssertion = (path: string | RegExp, method: string) => void;

export function hasRoute(router: Router, path: string | RegExp, method: string): boolean {
    const { stack = [] } = router;
    for(let i: number = 0; i < stack.length; i++) {
        const { route = {} } = stack[i];

        if(route.path === path && route.methods[method]) { return true; }
    }

    return false;
}

export function routeAssert(path: string | RegExp, method: string = 'get') {
    const result: boolean = hasRoute(this._obj, path, method);
    const failMessage: string = `expected router to have the route [${method}] ${path}`;
    const notFailMessage: string = `expected router to not have the route [${method}] ${path}`;
    this.assert(result, failMessage, notFailMessage);
}

export function addRouteMethod (chai: any, utils: any): void {
    const proto: object = chai.Assertion.prototype;
    const methodName: string = 'route';
    const assertion: RouteAssertion = routeAssert;
    utils.addMethod(proto, methodName, assertion);
}