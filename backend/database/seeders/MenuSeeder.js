const { getSlug } = require('../../app/Helpers/Helper');
const Menu = require('../../app/Models/Menu');
const MenuTypeEnum = require('../../app/Enum/MenuTypeEnum');
const dotenv = require('dotenv');
const connectDatabase = require('../../config/database');
dotenv.config();
connectDatabase();
const seedMenu =async ()=>{
    try {
        await Menu.deleteMany();
        const menus = getMenu();
        for(const menu of menus){
            const newMenu = new Menu(menu);
            await newMenu.save();
        }
        console.log("Menu Successfully Seed");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

const getMenu = ()=>{
    return [
        {
            title:"Home",
            slug:getSlug('Home'),
        },
        {
            title:"About",
            slug:getSlug('About'),
        },
        {
            title:"Contact",
            slug:getSlug('Contact'),
        },
    ];
}

seedMenu();