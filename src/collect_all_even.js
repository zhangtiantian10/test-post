
function collect_same_elements(collection_a, object_b) {
    var newArray = [];

    for(var i = 0 ;i<collection_a.length;i++)
    {
        if(isExit(collection_a[i].key,object_b.value))
            newArray.push(collection_a[i].key);
    }

    return newArray;
}


function isExit(element,collection){

    for(var i= 0; i<collection.length; i++)
    {
        if(element === collection[i])

            return true;
    }

    return false;
}

module.exports = collect_same_elements;
