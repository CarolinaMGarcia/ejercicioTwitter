const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test('1. Create a new user using the UserService',() => {
        //aqui invocas el codigo que vas usar en tu app
        const user = new UserService.create(1, "kika", "kikaRodriguez")
 
        
 
       
        
        expect(user.username).toBe("kika")
        expect(user.name).toBe("kikaRodriguez")
       
        expect(user.id).toBe(1)

        expect(user.bio).not.toBeUndefined()
 
 
 
    });
 })