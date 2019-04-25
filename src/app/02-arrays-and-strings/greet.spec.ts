import { greet } from './greet';

describe('greet', () => {
    it('should contain the name in the message', () => {
        expect(greet('menik')).toContain('menik');
    });
});
