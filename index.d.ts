/// <reference types="chai" />

declare module 'chai-express-router' {
    function chaiExpressRouter(chai: any, utils: any): void;

    export = chaiExpressRouter;
}

declare namespace Chai {
    interface RouteAssertion {
        (path: string | RegExp, method: string): Assertion
    }

    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        route: RouteAssertion;
    }
}