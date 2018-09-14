import * as chai from 'chai';
import exampleRouter from './_helpers/exampleRouter';
import chaiExpressRouter from '../src';

chai.use(chaiExpressRouter);

describe('chaiExpressRouter', () => {
    let subject: any;
    beforeEach(() => {
        subject = chaiExpressRouter;
    });

    it('is defined', () => {
        subject.should.not.be.undefined;
    });

    it('should validate existing routes', () => {
        exampleRouter.should.have.route('/home', 'get');
    });

    it('should validate routes that do not exist', () => {
        exampleRouter.should.not.have.route('/nowwhere', 'post');
    });
});