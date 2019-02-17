const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;

describe("List", () => {
  beforeEach(done => {
    this.list;
    sequelize.sync({ force: true }).then(res => {
      List.create({
        title: "My List"
      })
        .then(list => {
          this.list = list;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });

  describe("#create()", () => {
    it("should create a list with title and userId", done => {
      List.create({
        title: "Your List"
      })
        .then(list => {
          expect(list.title).toBe("Your List");
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });

    it("should not create a list without a title", done => {
      List.create({
        title: ""
      })
        .then(list => {
          done();
        })
        .catch(err => {
          expect(err.message).toContain("List title cannot be null");
          done();
        });
    });
  });
});
