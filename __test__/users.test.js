
const {server} = require('../app')
const request = require('supertest');

describe("test end points service", () =>{
    
    afterAll( async () => {
        console.log("...ended end point test")
        server.close()
    })
    it("health check response 200", (done) => {
        request(server)
            .get('/health')
            .expect(200, done);
    })
})
