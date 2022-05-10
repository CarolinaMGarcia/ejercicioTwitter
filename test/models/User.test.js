const User = require('../../app/models/User')

/*describe("unit tests for user class", () => {
   test('Create an user object',() => {
       //aqui invocas el codigo que vas usar en tu app
       const usuario = new User(1, "kika","kikaRodriguez", "bio")

       //aqui validas los resultados de ese codigo
       //esta es una comparacion que va a igualar el valor de la izquierda
       //con el valor de la derecha

       expect(usuario.id).toBe(1)
       expect(usuario.username).toBe("kika")
       expect(usuario.name).toBe("kikaRodriguez")
       expect(usuario.bio).toBe("bio")
       expect(usuario.dateCreated).not.toBeUndefined()
       expect(usuario.lastUpdated).not.toBeUndefined()



   });
})*/

/*describe("unit tests for user class", () => {
    test('Add getters',() => {
        //aqui invocas el codigo que vas usar en tu app
        const usuario = new User(1, "kika","kikaRodriguez", "bio")
 
        //aqui validas los resultados de ese codigo
        //esta es una comparacion que va a igualar el valor de la izquierda
        //con el valor de la derecha
 
       
        expect(usuario.getUsername).toBe("kika")
        expect(usuario.getBio).toBe("bio")
        expect(usuario.getDateCreated).not.toBeUndefined()
        expect(usuario.getLastUpdated).not.toBeUndefined()
 
 
 
    });
 })*/

 describe("unit tests for user class", () => {
    test('Add setters',() => {
        //aqui invocas el codigo que vas usar en tu app
        const usuario = new User(1, "kika","kikaRodriguez", "bio")
 
        //aqui validas los resultados de ese codigo
        //esta es una comparacion que va a igualar el valor de la izquierda
        //con el valor de la derecha
 
       
        usuario.setUsername = "kiku"
        expect(usuario.username).toBe("kiku")

        usuario.setBio = "New bio"
        expect(usuario.bio).toBe("New bio")
 
 
 
    });
 })