const UserService = require('./../../app/services/UserService')

/*describe("Tests for UserService", () => {
    test('1. Create a new user using the UserService',() => {
        //aqui invocas el codigo que vas usar en tu app
        const user = UserService.create(1, "kika", "kikaRodriguez")
 
        
 
       
        
        expect(user.username).toBe("kika")
        expect(user.name).toBe("kikaRodriguez")
       
        expect(user.id).toBe(1)

        expect(user.bio).not.toBeUndefined()
 
 
 
    });
 })*/

 /*describe("Get all user data in a list", () => {
    test('2. Create a new user using the UserService',() => {
        //aqui invocas el codigo que vas usar en tu app
        const user = UserService.create(1, "kika", "kikaRodriguez")
 
        
 
       
        
        const userInfoInlist = UserService.getInfo(user)
        expect(userInfoInlist[0]).toBe(1)
        expect(userInfoInlist[1]).toBe("kika")
        expect(userInfoInlist[2]).toBe("kikaRodriguez")


 
 
 
    });
 })*/
 

 /*test("3. Update username", () => {
    const user = UserService.create(1, "kika", "kikaRodriguez")
    UserService.updateUserUsername(user, "kikita")
    expect(user.username).toBe("carlog")
  })*/


  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "kika", "KikaRodriguez")
    const user2 = UserService.create(1, "kiku", "kikuRodriguez")
    const user3 = UserService.create(1, "manchas", "ManchasRodriguez")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    //expect(usernames).toContain("KikaRodriguez")
    //expect(usernames).toContain("KikuRodriguez")
    //expect(usernames).toContain("ManchasRodriguez")
  })


