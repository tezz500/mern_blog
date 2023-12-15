const CatchAsyncError = require('../Middleware/CatchAsyncError');
const Category = require('../Models/Category');

const testAllQueries = CatchAsyncError(async(req, res, next)=>{
    const data =await testQueries();
    res.status(200).json({
        success:true,
        message:"Query Test",
        data:data,
        status:200,
    });
})


const testQueries = async ()=>{
    let data = [];
    let newData = [];
    const category = Category;
    try {
        // to get all;
        // data = await category.find({});

        // to get all on to the level
        data = await category.find({parent:null});
        for(const d of data){
            const childs = await populateChildren(d.toObject());
            newData.push(childs);
        }
    } catch (error) {
        console.log(error);
    }
    return newData;
}

const populateChildren = async(category) => {
    if (category.childs && category.childs.length > 0) {
        category.childs = await Promise.all(
            category.childs.map(async (childId) => {
                const child = await Category.findById(childId);
                if (child) {
                    return await populateChildren(child.toObject());
                }
                return null;
            })
        );
    }
    return category;
}



module.exports = { testAllQueries };