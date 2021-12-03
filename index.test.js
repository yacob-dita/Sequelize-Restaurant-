const{Sequelize, DataTypes, Model} = require("./db")


const {Menu, Restaurant, sequelize} = require('./index')


describe('Menu Database', () => {

    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of Restaurant
        const arrayOfRestaurants = [
            {name: "yacob's Gourmet Restaurant",location:"Hawasa",capacity:236},
            {name: "Preeti's Italian Kitchen", location:"pune",capacity:1529},
            {name: "Preeti's Italian Kitchen", location:"pune",capacity:1429},
            {name: "Yannic's ", location:"pune",capacity:1629},
        ]
        //create array of Menu
    
        const arrayOfMenus =[
            {name: 'breakfastMenu', type:'breakfast', isSpanish: true},
            {name: 'lunchMenu', type:'entrees', isSpanish: true},
            {name: 'dinnerMenu', type:'drinks', isSpanish: true},
            
        ]
        //add arrays to database
        await Band.bulkCreate(arrayOfBands)
        await Musician.bulkCreate(arrayOfMusicians)
    })

})


test('menu have name', async() => {
    //read test instance from db
    //read test Musician instance from db
    const testMenu= await Menu.findOne({where: {name: 'breakfastMenu'}});
    expect(testMenu.name).toBe('breakfastMenu')
})