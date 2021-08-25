const request = require('supertest');
const app = require('../app');

beforeAll((done) => {
    request(app).post('/signup')
        .send(userData)
        .end((err, response) => {
            done();
        })
})

beforeEach((done) => {
    request(app).post('/login')
        .send(testUser)
        .end((err, response) => {
            //console.log(response)
            token = response.body.token // saving the token
            console.log(token);
            done();
        })
})

let loanData = {
    loanType: 'M Loan',
    loanAmount: 90000,
    date: '2021-08-10',
    rateOfInterest: 7,
    durationOfLoan: 7

}

describe('POST: /loan', () => {
    
    test('apply loan - failure', async () => {
        await request(app)
            .post('/applyLoan')
            .send(data)
            .expect(401)
    })

    test('apply loan - handling errors', async () => {
        await request(app)
            .post('/applyLoan')
            .send({
                loanType: 'Home Loan',
                date: '2021-08-18',
                rateOfInterest: 8,
                durationOfLoan: 5
            })
            .set('Cookie', `jwt=${token}`)
            .expect(403)
    })

    test('apply loan successful', async () => {
        await request(app)
            .post('/applyLoan')
            .send(data)
            .set('Cookie', `jwt=${token}`)
            .expect(200)
    })
})

describe('GET: /loan', () => {
    test('get loan details - failure', async () => {
        await request(app)
            .get('/getLoans')
            .expect(401)
    })

    test('get loan details successful', async () => {
        await request(app)
            .get('/getLoans')
            .set('Cookie', `jwt=${token}`)
            .expect(200)
    })
})