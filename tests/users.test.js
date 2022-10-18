const request = require("supertest");
const ApiUrl = "https://jsonplaceholder.typicode.com";

describe("POST /users", () => {
  it("should return 201 and check user with name 'TestAPI' and email 'testapi@mail.com' exists", () => {
    const inicio = performance.now();
    return request(ApiUrl)
      .post("/users")
      .send({
        name: "TestAPI",
        username: "lolp",
        email: "testapi@mail.com",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "88047-560",
        website: "qatime.com",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
      })
      .expect(201)
      .then((response) => {
        const tempo = performance.now() - inicio;
        console.log("A requisição levou " + tempo + "ms");
        expect(tempo).toGreaterThan(2000);
        const wantedPostUser = {
          name: "TestAPI",
          username: "lolp",
          email: "testapi@mail.com",
          address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
              lat: "-38.2386",
              lng: "57.2232",
            },
          },
          phone: "88047-560",
          website: "qatime.com",
          company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
          },
        };

        const postUser = response.body;
        expect(postUser.name).toEqual(wantedPostUser.name);
        expect(postUser.username).toEqual(wantedPostUser.username);
        expect(postUser.email).toEqual(wantedPostUser.email);
        expect(postUser.address.street).toEqual(wantedPostUser.address.street);
        expect(postUser.address.suite).toEqual(wantedPostUser.address.suite);
        expect(postUser.address.city).toEqual(wantedPostUser.address.city);
        expect(postUser.address.zipcode).toEqual(
          wantedPostUser.address.zipcode
        );
        expect(postUser.address.geo.lat).toEqual(
          wantedPostUser.address.geo.lat
        );
        expect(postUser.address.geo.lng).toEqual(
          wantedPostUser.address.geo.lng
        );
        expect(postUser.phone).toEqual(wantedPostUser.phone);
        expect(postUser.website).toEqual(wantedPostUser.website);
        expect(postUser.company.name).toEqual(wantedPostUser.company.name);
        expect(postUser.company.catchPhrase).toEqual(
          wantedPostUser.company.catchPhrase
        );
        expect(postUser.company.bs).toEqual(wantedPostUser.company.bs);
      });
  });
});

describe("GET /users/{id}", () => {
  it("should return 200 and check user name is 'Clementina DuBuque'", () => {
    return request(ApiUrl)
      .get("/users/10")
      .expect(200)
      .then((response) => {
        const user = response.body;
        expect(user.name).toEqual("Clementina DuBuque");
        expect(user.username).toEqual("Moriah.Stanton");
        expect(user.email).toEqual("Rey.Padberg@karina.biz");
        expect(user.address.street).toEqual("Kattie Turnpike");
        expect(user.address.suite).toEqual("Suite 198");
        expect(user.address.city).toEqual("Lebsackbury");
        expect(user.address.zipcode).toEqual("31428-2261");
        expect(user.address.geo.lat).toEqual("-38.2386");
        expect(user.address.geo.lng).toEqual("57.2232");
        expect(user.phone).toEqual("024-648-3804");
        expect(user.website).toEqual("ambrose.net");
        expect(user.company.name).toEqual("Hoeger LLC");
        expect(user.company.catchPhrase).toEqual(
          "Centralized empowering task-force"
        );
        expect(user.company.bs).toEqual("target end-to-end models");
      });
  });
});

describe("PUT /users/{id}", () => {
  it("should return 200 and check user was update to 'TestApiPUTJest' and email 'testapijest@mail.com", () => {
    return request(ApiUrl)
      .put("/users/10")
      .send({
        name: "TestAPI",
        username: "lolp",
        email: "testapi@mail.com",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "88047-560",
        website: "qatime.com",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
      })
      .expect(200)
      .then((response) => {
        const wantedPutUser = {
          name: "TestAPI",
          username: "lolp",
          email: "testapi@mail.com",
          address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
              lat: "-38.2386",
              lng: "57.2232",
            },
          },
          phone: "88047-560",
          website: "qatime.com",
          company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
          },
        };

        const putUser = response.body;
        expect(putUser.name).toEqual(wantedPutUser.name);
        expect(putUser.username).toEqual(wantedPutUser.username);
        expect(putUser.email).toEqual(wantedPutUser.email);
        expect(putUser.address.street).toEqual(wantedPutUser.address.street);
        expect(putUser.address.suite).toEqual(wantedPutUser.address.suite);
        expect(putUser.address.city).toEqual(wantedPutUser.address.city);
        expect(putUser.address.zipcode).toEqual(wantedPutUser.address.zipcode);
        expect(putUser.address.geo.lat).toEqual(wantedPutUser.address.geo.lat);
        expect(putUser.address.geo.lng).toEqual(wantedPutUser.address.geo.lng);
        expect(putUser.phone).toEqual(wantedPutUser.phone);
        expect(putUser.website).toEqual(wantedPutUser.website);
        expect(putUser.company.name).toEqual(wantedPutUser.company.name);
        expect(putUser.company.catchPhrase).toEqual(
          wantedPutUser.company.catchPhrase
        );
        expect(putUser.company.bs).toEqual(wantedPutUser.company.bs);
      });
  });
});
