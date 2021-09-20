const { request } = require("express");
const app = require("../src/server");
const supertest = require("supertest");
const User = require("../src/models/user");
const connection = require('../src/config/database');

beforeAll(async()=>{
    connection();
});

beforeEach(async()=>{
    await User.deleteMany();
});

// it('returns 200 OK when signup is valid', (done)=>{
//     await supertest(app).get('/')
//     .expect(200,done);

// })
/*
describe('User Registration', () => {
    it('returns 200 OK when signup request is valid', (done) => {
      supertest(app)
        .post('/api/1.0/users')
        .send({
          name: 'user1',
          email: 'user1@mail.com',
          password: 'P4ssword',
        })
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
    });
  
    // it('returns success message when signup request is valid', (done) => {
    //   supertest(app)
    //     .post('/api/1.0/users')
    //     .send({
    //       username: 'user1',
    //       email: 'user1@mail.com',
    //       password: 'P4ssword',
    //     })
    //     .then((response) => {
    //       expect(response.body.message).toBe('User created');
    //       done();
    //     });
    // });
    it('returns success message when signup request is valid', async() => {
        const response = await supertest(app)
          .post('/api/1.0/users')
          .send({
            name: 'user1',
            email: 'user1@mail.com',
            password: 'P4ssword',
          })
          expect(response.body.message).toBe('User created');     
      });

      it('saves user to database', async() => {
        await supertest(app)
          .post('/api/1.0/users')
          .send({
            name: 'user1',
            email: 'user1@mail.com',
            password: 'P4ssword',
          })
        //   .then(() => {
        //     User.find().then((user)=>{
        //         expect(Array.from(user).length).toBe(1);
        //         done();
        //     })
              
        //   });
        const user = await User.findOne({email : 'user1@mail.com'});
        expect(user).not.toBeNull();
        // expect(user.name).toBeTruthy();
        // expect(user.email).toBeTruthy();
      });

      it('saves name and email to database', async() => {
        await supertest(app)
          .post('/api/1.0/users')
          .send({
            name: 'user1',
            email: 'user1@mail.com',
            password: 'P4ssword',
          })
        const user = await User.findOne({email : 'user1@mail.com'});
        expect(user).not.toBeNull();
        expect(user.name).toBe('user1');
        expect(user.email).toBe("user1@mail.com");
      });
      it('hashes password before saving to database', async() => {
        await supertest(app)
          .post('/api/1.0/users')
          .send({
            name: 'user1',
            email: 'user1@mail.com',
            password: 'P4ssword',
          })
        const user = await User.findOne({email : 'user1@mail.com'});
        expect(user).not.toBeNull();
        expect(user.password).not.toBe('p4ssword');
        
      });
  });
  */

 describe('User Registration', () => {
     const postValidUser = async()=>{
        return await supertest(app)
        .post('/api/1.0/users')
        .send({
          name: 'user1',
          email: 'user1@mail.com',
          password: 'P4ssword',
        })
     }
    it('returns 200 OK when signup request is valid', async() => {
        const res = await postValidUser();
        expect(res.statusCode).toBe(200);
    });
  
    it('returns success message when signup request is valid', async() => {
         const response = await postValidUser()
          expect(response.body.message).toBe('User created');     
      });

      it('saves user to database', async() => {
        await postValidUser();
        const user = await User.findOne({email : 'user1@mail.com'});
        expect(user).not.toBeNull(); 
      });

      it('saves name and email to database', async() => {
        await postValidUser();
        const user = await User.findOne({email : 'user1@mail.com'});
        expect(user).not.toBeNull();
        expect(user.name).toBe('user1');
        expect(user.email).toBe("user1@mail.com");
      });
      it('hashes password before saving to database', async() => {
        await postValidUser();
        const user = await User.findOne({email : 'user1@mail.com'});
        expect(user).not.toBeNull();
        expect(user.password).not.toBe('p4ssword'); 
      });
  });

