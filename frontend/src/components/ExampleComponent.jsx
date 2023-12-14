import { useEffect } from "react";

const ExampleComponent = ()=>{

    const oldData = [
        {
            id:1,
            name:"kathmandu",
            parent:3,
        },
        {
            id:2,
            name:"Dhangadhi",
            parent:3,
        },
        {
            id:3,
            name:"Nepal",
            parent:0,
        },
        {
            id:4,
            name:"India",
            parent:0,
        },
        {
            id:5,
            name:"Delhi",
            parent:4,
        },
        {
            id:6,
            name:"baneswor",
            parent:1,
        },
        {
            id:7,
            name:"buddhanagar",
            parent:6,
        }
    ];


    const students=[
        {
            name:"john",
            marks:43
        },
        {
            name:"tejendra",
            marks:73
        },
        {
            name:"rahul",
            marks:34
        },
        {
            name:"bikram",
            marks:80
        }
    ];

    useEffect(()=>{
        sortData();
        sorWithPosition();
    }, []);

    const sortData = ()=>{
        let sortedData = oldData.map((item, index)=>{
            if(item.parent == 0 || item.parent==null){
                return finalSort(oldData, item);
            }
        }).filter((item)=>{
            return item !== undefined;
        });
        console.log(sortedData);
    }
    const finalSort = (arrayData, objectData)=>{
            let childs = [];
            if(
                arrayData.filter((item)=>{
                    return item.parent === objectData.id;
                }).shift()
            ){
                arrayData.map((item)=>{
                    if(item.parent === objectData.id){
                        childs = [
                            ...childs,
                            finalSort(arrayData, item),
                        ];
                    }
                });
            }
            return {
                ...objectData,
                childs:childs,
            }
    }

    const sorWithPosition = ()=>{
        let newStudent = students.sort((student1, student2)=>{
            return student2.marks - student1.marks
        }).map((item, index)=>{
            return {
                ...item,
                position:`${index + 1}`
            }
        });
        console.log(newStudent);
    }
    


    return(
        <div>
            This is example component
        </div>
    )
}

export default ExampleComponent;