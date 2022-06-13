function saturdayFun(activityy = 'roller-skate'){
    return"This Saturday, I want to " +activityy+"!"
}

function mondayWork(activityyy = 'go to the 0ffice'){
    return 'This Monday, I will ' +activityyy+"."
}

function wrapAdjective(adjective){
    function special(receive){
        return `you are `+ adjective + receive + adjective+"!"
    }
    return special
}
