// it('should run',() => {})
const request = require("supertest");
const app = require("./index");
var d={};

describe("Dictonary", () => {
    //   it("should run", () => {});
      it("GET /api ---> words array", () => {
          return request(app)
          .get('/api')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) =>{
              expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({ 
                    word1:expect.any(String),
                })
            ]))
          })
      });
      it("POST /api/add ---> created word", () => {
        return request(app).post('/api/add').send({ 
            word1:'peace begins with smile'
        }).expect('Content-Type', /json/)
        .then((response) =>{
            console.log(response.body)
            d=request.body
            expect(response.body).toEqual(expect.objectContaining({
                word1:expect.any(String),
            }))
        })
        
      });
      it("PUT /api/:id ---> updating specific document", () => {
         return request(app).put('/api/:id').expect('Content-Type', /json/)
         

      });



    });