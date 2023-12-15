const Category = require('../../app/Models/Category');
const connectDatabase =  require('../../config/database');
const dotenv = require('dotenv');
const { getSlug, getRandom } = require('../../app/Helpers/Helper');
dotenv.config();
connectDatabase();

const getCategories = ()=>{
    const categories = [
        {
            title:"Category 1",
            slug:getSlug('Category 1')+'-'+getRandom(),
            childrens:[
                {
                    title:"Category 1 1",
                    slug:getSlug('Category 1 1')+'-'+getRandom(),
                    childrens:[
                        {
                            title:"Category 1 1",
                            slug:getSlug('Category 1 1')+'-'+getRandom(),
                            childrens:[
                                {
                                    title:"Category 1 1",
                                    slug:getSlug('Category 1 1')+'-'+getRandom(),
                                    childrens:[
                                        {
                                            title:"Category 1 1",
                                            slug:getSlug('Category 1 1')+'-'+getRandom(),
                                        },
                                        {
                                            title:"Category 1 2",
                                            slug:getSlug('Category 1 2')+'-'+getRandom(),
                                        },
                                        {
                                            title:"Category 1 3",
                                            slug:getSlug('Category 1 3')+'-'+getRandom(),
                                        },
                                    ]
                                },
                                {
                                    title:"Category 1 2",
                                    slug:getSlug('Category 1 2')+'-'+getRandom(),
                                },
                                {
                                    title:"Category 1 3",
                                    slug:getSlug('Category 1 3')+'-'+getRandom(),
                                },
                            ]
                        },
                        {
                            title:"Category 1 2",
                            slug:getSlug('Category 1 2')+'-'+getRandom(),
                        },
                        {
                            title:"Category 1 3",
                            slug:getSlug('Category 1 3')+'-'+getRandom(),
                        },
                    ]
                },
                {
                    title:"Category 1 2",
                    slug:getSlug('Category 1 2')+'-'+getRandom(),
                },
                {
                    title:"Category 1 3",
                    slug:getSlug('Category 1 3')+'-'+getRandom(),
                },
            ]
        },
        {
            title:"Category 2",
            slug:getSlug('Category 2')+'-'+getRandom(),
            childrens:[
                {
                    title:"Category 2 1",
                    slug:getSlug('Category 2 2')+'-'+getRandom(),
                    childrens:[
                        {
                            title:"Category 2 1",
                            slug:getSlug('Category 2 2')+'-'+getRandom(),
                        },
                        {
                            title:"Category 2 3",
                            slug:getSlug('Category 2 3')+'-'+getRandom(),
                            
                        }
                    ]
                },
                {
                    title:"Category 2 3",
                    slug:getSlug('Category 2 3')+'-'+getRandom(),
                    
                }
            ]
        },
        {
            title:"Category 3",
            slug:getSlug('Category 3')+'-'+getRandom(),
        },
        {
            title:"Category 4",
            slug:getSlug('Category 4')+'-'+getRandom(),
        },
        {
            title:"Category 5",
            slug:getSlug('Category 5')+'-'+getRandom(),
        },
        {
            title:"Category 6",
            slug:getSlug('Category 6')+'-'+getRandom(),
            childrens:[
                {
                    title:"Category 1 2 1",
                    slug:getSlug('Category 1 2 2')+'-'+getRandom(),
                },
                {
                    title:"Category 1 2 3",
                    slug:getSlug('Category 1 2 4')+'-'+getRandom(),
                },
                {
                    title:"Category 1 2 5",
                    slug:getSlug('Category 1 2 5')+'-'+getRandom(),
                    childrens:[
                        {
                            title:"Category 1 2 1",
                            slug:getSlug('Category 1 2 2')+'-'+getRandom(),
                        },
                        {
                            title:"Category 1 2 3",
                            slug:getSlug('Category 1 2 4')+'-'+getRandom(),
                        },
                        {
                            title:"Category 1 2 5",
                            slug:getSlug('Category 1 2 5')+'-'+getRandom(),
                            childrens:[
                                {
                                    title:"Category 1 2 1",
                                    slug:getSlug('Category 1 2 2')+'-'+getRandom(),
                                },
                                {
                                    title:"Category 1 2 3",
                                    slug:getSlug('Category 1 2 4')+'-'+getRandom(),
                                },
                                {
                                    title:"Category 1 2 5",
                                    slug:getSlug('Category 1 2 5')+'-'+getRandom(),
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    ];
    return categories;
}


const seedCategory = async () => {
    try {
        const categories = getCategories();
        await Category.deleteMany();
        for (const category of categories) {
            await seedCategoryRecursive(category, null); // Pass null as the parent for top-level categories
        }
        // const cats = await Category.find({parent:null});
        // for(const cat of cats){
        //     const childs = await Category.find({ parent: cat._id });
        //     const childIds = childs.map(item=>item._id);
        //     await cat.update({
        //         child:childIds,
        //     });
        //     console.log(cat.childs);
        // }
        console.log("Category Successfully Seed");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit();
    }
};

const seedCategoryRecursive = async (category, parent) => {
    const newCategory = new Category({
        ...category,
        parent: parent,
    });

    const cat =await Category.findById(parent);
    if(cat){
            cat.childs = [
                ...cat.childs,
                newCategory._id
            ];

            await cat.save();
    }

    await newCategory.save();
    if (category.childrens && category.childrens.length > 0) {
        for (const child of category.childrens) {
            await seedCategoryRecursive(child, newCategory._id);
        }
    }
};

seedCategory();