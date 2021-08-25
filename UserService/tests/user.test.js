// const request = require('supertest');
// const app = require('../app');
// const mongoose = require('mongoose');

// let token;
// let fakeToken;

// let testUser = {
//     email: "test@gmail.com",
//     password: "test@123"
// }

// let userData = {
//     email: 'test@gmail.com',
//     password: 'test@123',
//     name: 'test',
//     username: 'test01', 
//     address: 'test city',
//     state: 'test state',
//     country: 'test country',
//     pan: 'testuiu78T6',
//     phone: 7898098767,
//     dob: '1998-09-12',
//     accType: 'Savings'
// }

// beforeAll((done) => {
//     request(app).post('/signup')
//         .send(userData)
//         .end((err, response) => {
//             done();
//         })
// })

// beforeEach((done) => {
//     request(app).post('/login')
//         .send(testUser)
//         .end((err, response) => {
//             //console.log(response)
//             token = response.body.token // saving the token
//             console.log(token);
//             done();
//         })
// })

// describe('GET: /user', () => {
//     test('get user details - failure', async () => {
//         await request(app)
//             .get('/getUser')
//             .expect(401)
//     })

//     test('get user details successful', async () => {
//         await request(app)
//             .get('/getUser')
//             .set('Cookie', `jwt=${token}`)
//             .expect(200)
//     })

//     test('get user details - using fake token', async () => {
//         await request(app)
//             .get('/getUser')
//             .set('Cookie', `jwt=${fakeToken}`)
//             .expect(401)
//     })
// })

// describe('POST: /signup', () => {

//     test('user signup failure', async () => {
//         await request(app).post('/signup')
//             .expect(403)

//     })

//     test('user signup - Handling errors', async () => {
//         const data = {
//             name: 'test',
//             username: 'chi98',
//             email:'chi@gmail.com',
//             password: 'test@123',
//             pan: 'Mjg567RE45',
//             phone: 7898098767,
//             dob: '1998-09-12',
//             accType: 'Savings'
//         }
//         await request(app).post('/signup')
//             .send(data)
//             .expect(403)

//     })
// })

// describe('POST: /login', () => {

//     test('user login failure - email and password missing', async () => {
//         await request(app).post('/login')
//             .expect(401)
//     })

//     test('user login failure - email missing', async () => {
//         await request(app).post('/login')
//             .send({
//                 password: 'test@123'
//             })
//             .expect(401)
//     })

//     test('user login failure - email incorrect', async () => {
//         await request(app).post('/login')
//             .send({
//                 email: 'fakeemail',
//                 password: 'test@123'
//             })
//             .expect(401)
//     })

//     test('user login failure - password missing', async () => {
//         await request(app).post('/login')
//             .send({
//                 email: 'test@gmail.com'
//             })
//             .expect(401)
//     })

//     test('user login failure - password incorrect', async () => {
//         await request(app).post('/login')
//             .send({
//                 email: 'test@gmail.com',
//                 password: 'fakePassword'
//             })
//             .expect(401)
//     })

//     test('user login failure - email and password incorrect', async () => {
//         await request(app).post('/login')
//             .send({
//                 email: 'fakeemail',
//                 password: 'fakePassword'
//             })
//             .expect(401)
//     })

//     test('user login successful', async () => {
//         await request(app).post('/login')
//             .send({
//                 email: 'test@gmail.com',
//                 password: 'test@123'
//             })
//             .expect(200)
//     })
// })

// describe('PUT: /user', () => {

//     const data = {
//         email: 'test@gmail.com',
//         password: 'test@123',
//         name: 'test_updated',
//         username: 'test01',
//         address: 'test city',
//         state: 'test state',
//         country: 'test country',      
//         pan: 'testuiu78T6',
//         phone: 7898098767,
//         dob: '1998-09-12',
//         accType: 'Savings'
//     }

//     test('update user details - failure', async () => {
//         await request(app)
//             .put('/updateUser')
//             .send(data)
//             .expect(401)
//     })

//     test('update user details successful', async () => {
//         await request(app)
//             .put('/updateUser')
//             .send(data)
//             .set('Cookie', `jwt=${token}`)
//             .expect(200)
//     })
// })

// describe("GET: /logout", () => {
//     test('logout - failure', async () => {
//         await request(app).get('/logout')
//             .expect(401)
//     })
//     test('logout - successful', async () => {
//         await request(app).get('/logout')
//             .set('Cookie', `jwt=${token}`)
//             .expect(200)
//     })
// })

// describe('DELETE: /user', () => {

//     test('delete user - failure', async () => {
//         await request(app)
//             .delete('/deleteUser')
//             .expect(401)
//     })

//     test('delete user successful', async () => {
//         await request(app)
//             .delete('/deleteUser')
//             .set('Cookie', `jwt=${token}`)
//             .expect(200)
//     })
// })


// // test('Should signup for a user',async ()=>{
// //     await request(app).post('/signup')
// //     .send({
// //     email:"cvkarankar1@gmail.com",
// //     password:"123456789",
// //     username:"chinmay1",
// //     name:"rehan199",
// //     address:"badnera road",
// //     state:"andhra ",
// //     country:"INDIA Aus",
// //     pan:"EPMPK3009AAab",
// //     phone:9623436547,
// //     accType:"savings",
// //     dob:"2012-12-12"
// //     })
// //     .expect(201)
// // })

// // test('Should log in a user',async()=>{
// //     await request(app).post('/login')
// //     .send({
// //     email:"rehanbhai@gmail.com",
// //     password:'123456789'
// //     })
// //     .expect(200)
// // })



// // describe("GET: /logout", () => {
// //     test('logout - failure', async () => {
// //         await request(app).get('/logout')
// //             .expect(401)
// //     })
// //     test('logout - successful', async () => {
// //         await request(app).get('/logout')
// //             .expect(200)
// //     })
// // })









