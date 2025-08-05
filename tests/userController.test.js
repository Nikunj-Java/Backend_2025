const userController = require('../controller/userController');
//Mock the user model
const User = require('../model/userModel');
jest.mock('../model/userModel');
//import helper to simulate req,res object
const httpMocks = require('node-mocks-http');

//test suit
describe('User Controller', () => {

    //clean up mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    })

    //creat user test
    it('should create a user', () => {

        const req = httpMocks.createRequest({
            method: 'POST',
            body: { name: 'Nikunj Soni', email: 'nikunj@neueda.com' }
        });

        const res = httpMocks.createResponse();
        const mockUser = { id: 1, name: 'Nikunj Soni', email: 'nikunj@testmail.com' };
        User.createUser.mockImplementation((name, email, cb) => cb(null, mockUser));
        //call the controller
        userController.createUser(req, res);

        //assertion
        expect(res.statusCode).toBe(201); //created
        expect(res._getJSONData()).toEqual({
            message: 'User Created',
            data: mockUser
        });
    });

    //get all user
    it('should return all users', () => {
        const req = httpMocks.createRequest(
            { method: 'GET' }
        );
        const res = httpMocks.createResponse();
        const mockUsers = [
            { id: 1, name: "Nikunj Soni", email: "nikunj@testmail.com" }
        ];
        //mock the get all users
        User.getAllUser.mockImplementation((cb) => cb(null, mockUsers));
        userController.getUsers(req, res);
        expect((res.statusCode)).toBe(200); //ok
        expect(res._getJSONData()).toEqual(mockUsers)
    });

    it('should return user by id',()=>{
        // --------GET USER BY ID---------------
    const req = httpMocks.createRequest({
        method: 'GET',
        params:{ id: 1} //simulates users/1
    });
    const res= httpMocks.createResponse();
    const mockUser = { id: 1, name: 'Nikunj Soni', email: 'nikunj@testmail.com' };

    User.getUserById.mockImplementation((id,cb)=>cb(null,mockUser));
    userController.getUserById(req,res);

    //asertion
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(mockUser);
    });

    it('it should update user successfully',()=>{

         const req = httpMocks.createRequest({
            method: 'PUT',
            params: { id: 1},
            body: { name: 'Nikunj Soni', email: 'nikunj@neueda.com' }
        });
        const res= httpMocks.createResponse();

        User.updateUser.mockImplementation((id,name,email,cb)=>cb(null,true));
        userController.updateUser(req,res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual({
            message:'User Updated',
            data: req.body 
        })
    });


});