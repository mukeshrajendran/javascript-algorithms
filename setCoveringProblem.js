//The set-covering problem - NP
function findMinStations(states_needed,stations){
    const getIntersection = (states,statesNeeded) =>{
        return states.filter(item => states_needed.includes(item))
    }
    const removeIntersection = (states,statesNeeded) =>{
        return statesNeeded.filter(item => !states.includes(item))
    }
    let bestStation = [];
    while (states_needed.length > 0){
        let highIntersection = [];
        let bestCrrStation;
        let intersection = [];
        for(let s in stations){
            highIntersection = getIntersection(stations[s],states_needed);
            if(intersection.length < highIntersection.length){
                intersection = highIntersection;
                bestCrrStation = s;
            }

        }
        states_needed = removeIntersection(intersection,states_needed);
        bestStation.push(bestCrrStation);
    }
    return bestStation;
}
states_needed = ['mt', 'wa', 'or', 'id', 'nv', 'ut',
'ca', 'az'];
stations = {}
stations['kone'] = ['id', 'nv', 'ut'];
stations['ktwo'] = ['wa', 'id', 'mt'];
stations['kthree'] =['or', 'nv', 'ca'];
stations['kfour'] = ['nv', 'ut'];
stations['kfive'] = ['ca', 'az'];
findMinStations(states_needed,stations)




