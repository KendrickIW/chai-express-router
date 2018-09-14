import { addRouteMethod } from './lib';

function chaiExpressRouter(chai: any, utils: any): void {
    addRouteMethod(chai, utils);
}

export default chaiExpressRouter;
