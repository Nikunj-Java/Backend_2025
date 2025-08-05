const userController=require('../controller/userController');

//Mock the user model
const User=require('../model/userModel');
jest.mock('../model/userModel');
//import helper to simulate req,res object
const httpMocks= require('node-mocks-http');

//test suit
describe('User Controller',()=>{

    //clean up mocks after each test
    afterEach(()=>{
        jest.clearAllMocks();
    })

    //creat user test
    it('should create a user',()=>{

        const req=httpMocks.createRequest({
            method:'POST',
            body:{name:'Nikunj Soni',email:'nikunj@neueda.com'}
        });

        const res= httpMocks.createResponse();
        const mockUser={id:1 ,name:'Nikunj Soni',email:'nikunj@testmail.com'};
        User.createUser.mockImplementation((name,email,cb)=>cb(null, mockUser));
        //call the controller
        userController.createUser(req,res);

        //assertion
        expect(res.statusCode).toBe(201); //created
        expect(res._getJSONData()).toEqual({
            message: 'User Created',
            data: mockUser
        });
    });


});