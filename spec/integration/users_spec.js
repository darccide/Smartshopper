const request = require("request");
const server = require("../../server");
const base = "http://localhost:5000/users/";
const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : users", () => {
  beforeEach(done => {
    sequelize
      .sync({ force: true })
      .then(() => {
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });

  describe("POST /users", () => {
    it("should create a new user and redirect", done => {
      const options = {
        url: "http://localhost:5000/users/new",
        form: {
          email: "hot@mail.com",
          password: "987654321"
        }
      };

      request.post(options, (err, res, body) => {
        User.findOne({ where: { email: "hot@mail.com" } })
          .then(user => {
            expect(user).not.toBeNull();
            expect(user.email).toBe("hot@mail.com");
            expect(user.id).toBe(1);
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });

    it("should not create a new user and redirect", done => {
      request.post(
        {
          url: "http://localhost:5000/users/new",
          form: {
            email: "none",
            password: "987654321"
          }
        },
        (err, res, body) => {
          User.findOne({ where: { email: "none" } })
            .then(user => {
              expect(user).toBeNull();
              done();
            })
            .catch(err => {
              console.log(err);
              done();
            });
        }
      );
    });
  });
});
