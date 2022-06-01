const app = require("../app");
const request = require("supertest");

/* Test GET /players */
describe("GET /players ", () => {
    test("Test if /players returns a JSON array of player information from virtual DB with multiple entities", async () => {
        const expectedJSON = [
            {"name": "trixie", "level": "3", "ac": "16", "initive": "+3", "pass_per": 12, "pass_ins": 14},
            {"name": "LBL", "level": "3", "ac": "14", "initive": "+2", "pass_per": 15, "pass_ins": 15}
        ]
        const response = await request(app).get("/players");
        expect(response.body).toEqual(expectedJSON);
        expect(response.statusCode).toBe(200);
    });
});