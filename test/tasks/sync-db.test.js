const { syncDB } = require("../../tasks/sync-db");

describe('Test in sync-db.test.js', () => {

    test('should execute the process two times', () => {
        syncDB(); // 1
        const result = syncDB(); // 2
        expect(result).toBe(2);

    });
});