const user = {
    name: 'Salman Alfarizi',
    handle: '@salmanalfarizi',
    location: 'Jakarta, Indonesia'
}

//extraction
const name = user.name
const handle = user.handle
const location = user.location
console.log("Extraction ->",name, handle)

//desctruction function result
const getUser = () => {
    return {
        name2: 'Salman Alfarizi',
        handle2: '@salmanalfarizi',
        location2: 'Jakarta, Indonesia'
    }
}

const {name2, handle2, location2} = getUser()
console.log("desctruction function result ->",name2, handle2, location2)

// Desctructuring Array
const csv = "2001, Ciajur, F350, Salman Alfarizi!"
const [year, make, model, description] = csv.split(",");
console.log("Desctructuring Array ->",year, make, model, description)

// Aliasing Obeject Properties
const user2 = {
    n: 'Salman Alfarizi',
    h: '@salmanalfrz',
    l: 'Jakarta, Indonesia'
}

// keluaran
const { n: name3, h: handle3, l: location3} = user2
console.log("Aliasing Obeject Properties (n: name3, h: handle3, l: location3) ->", name3, handle3, location3)