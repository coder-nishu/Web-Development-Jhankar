//task 1: find secondary school location of sophia
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary: 
                    [
                        {school_name: "ABC School", year: 2000},
                        {location: "Dhaka", country: "Bangladesh"}
                    ]
            },
            {
                secondary: [
                    {school_name: "XYZ School", year: 2005},
                    {location: "Mirpur", country: "Bangladesh"}
                ]
            },
        ]
    }
}
console.log(data.Sophia.study[1].secondary[1].location);

// task 2: find Dhaka ,harry
let student = {
    2222: {
        name: "jack",
        section: "c",
        class: "IX",
        address: {
            "building no" : 12,
            "street" : "abc",
            "city" : "Dhaka",
            "country" : "Bangladesh"
        }
    },
    3333: {
        name: "Harry",
        section: "a",
        class: "X",
        address: {
            "building no" : 12,
            "street" : "abc",
            "city" : "Dhaka",
            "country" : "Bangladesh"
        }
    }
}
console.log(student['2222'].address['city'])
console.log(student['3333']['name'])