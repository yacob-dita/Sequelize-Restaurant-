// const{Sequelize, DataTypes, Model} = require("./db")


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
            {name: 'breakfastMenu', type:'breakfast', inLanguage: true},
            {name: 'lunchMenu', type:'entrees', inLanguage: true},
            {name: 'dinnerMenu', type:'drinks', inLanguage: true},
            
        ]
        //add arrays to database
        await Restaurant.bulkCreate(arrayOfRestaurants)
        await Menu.bulkCreate(arrayOfMenus)
    })




test('menu have name', async() => {
    //read test instance from db
    //read test Musician instance from db
    const testMenu= await Menu.findOne({where: {name: 'breakfastMenu'}});
    expect(testMenu.name).toBe('breakfastMenu')
})

test('menu have type', async() => {
    //read test instance from db
    //read test Musician instance from db
    const testMenu= await Menu.findOne({where: {type: 'entrees'}});
    expect(testMenu.type).toBe('entrees')
// })
// test('menu have inLangauage', async() => {
//     //read test instance from db
//     //read test Musician instance from db
//     // const testMenu= await Menu.findOne({where: {inLanguage: 'true'}});
//     // expect(testMenu.inLanguage).toBe('true')

//     const inLanguage = await inLanguage.getMenuList("Truthy");
//     expect(testMenu.inLanguage.length).toBe("Truthy")
    
})






 })

 