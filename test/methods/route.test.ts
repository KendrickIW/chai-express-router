import * as route from '../../src/lib/methods/route';
import exampleRouter from '../_helpers/exampleRouter';

describe('route', () => {
   describe('.hasRoute', () => {
       const { hasRoute } = route;
       it('should return true when route is present', () => {
           const method: string = 'get';
           const path: string = '/home';
           
           const results: boolean = hasRoute(exampleRouter, path, method);

           results.should.be.true;
       });

       it('should return false when route path does not exist', () => {
            const method: string = 'get';
            const path: string = '/idontexist';
            
            const results: boolean = hasRoute(exampleRouter, path, method);

            results.should.be.false;
       });

       it('should return false when route method does not exist');
   });
});