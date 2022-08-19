import supertest from "supertest";

import { server } from "../../index";
import app from "../../app";

const api = supertest(app);

describe("user route", () => {
  test.skip("create user", async () => {
    await api
      .post("/api/usr/create-user")
      .send({
        firstname: "Adrian",
        lastname: "Salcedo",
        email: "adrian2@gmail.com",
        password: "12345678",
        friends: [],
      })
      .set("Accept", "application/json")
      .expect(200);
  });

  test("GET /users", async () => {
    const res = await api
      .get("/api/usr/")
      .expect(200)
      .expect("Content Type", /application\/json/);
    console.log(res.body);
  });

  afterAll(() => {
    server.close();
  });
});
