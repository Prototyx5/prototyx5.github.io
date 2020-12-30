var Output

var ConfirmEjects = ['ON', 'OFF']

var EmergencyMeetings = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

var EmergencyCooldown = ['0s', '5s', '10s', '15s', '20s', '25s', '30s', '35s', '40s', '45s', '50s', '55s', '60s',]

var DiscussionTime = ['0s', '15', '30', '45', '60', '75', '90', '105', '120']

var VotingTime = ['0s', '15s', '30s', '45s', '60s', '75s', '90s', '105s', '120s', '135s', '150s', '165s', '180s', '195s', '210s', '225s', '240s', '255s', '270s', '285s', '300s',]

var PlayerSpeed = ['0,5x', '0,75x', '1,0x', '1,25x', '1,5x', '1,75x', '2,0x', '2,25x', '2,5x', '2,75x', '3,0x',]

var CrewmateVision = ['0,5x', '0,75x', '1,0x', '1,25x', '1,5x', '1,75x', '2,0x', '2,25x', '2,5x', '2,75x', '3,0x', '3,25x', '3,5x', '3,75x', '4,0x', '4,25x', '4,5x', '4,75x', '5,0x',]

var ImpostorVision = ['0,5x', '0,75x', '1,0x', '1,25x', '1,5x', '1,75x', '2,0x', '2,25x', '2,5x', '2,75x', '3,0x', '3,25x', '3,5x', '3,75x', '4,0x', '4,25x', '4,5x', '4,75x', '5,0x',]

var KillCooldown = ['10,0s', '12,5s', '15,0s', '17,5s', '20,0s', '22,5s', '25,0s', '27,5s', '30,0s', '32,5s', '35,0s', '37,5s', '40,0s', '42,5s', '45,0s', '47,5s', '50,0s', '52,5s', '55,0s', '57,5s', '60,0s',]

var KillDistance = ['Short', 'Medium', 'Long']

var VisualTasks = ['ON', 'OFF']

var CommonTasks = ['0', '1', '2']

var LongTasks = ['0', '1', '2', '3']

var ShortTasks = ['0', '1', '2', '3', '4', '5']

var SettingsText = ["Confirm Ejects: ", "# Emergency Meetings: ", "Emergency Cooldown: ", "Discussion Time: ", "Voting Time: ", "Player Speed: ", "Crewmate Vision: ", "Impostor Vision: ", "Kill Cooldown: ", "Kill Distance: ", "Visual Task: ", "# Common Tasks: ", "# Long Tasks: ", "# Short Tasks: "]

var selector = [ConfirmEjects,EmergencyMeetings,EmergencyCooldown,DiscussionTime,VotingTime,PlayerSpeed,CrewmateVision,ImpostorVision,KillCooldown,KillDistance,VisualTasks,CommonTasks,LongTasks,ShortTasks]
choose = function () {
    var identifier = ""
 for (let i = 0; i < 14; i++) {
     var randomized = Math.floor(Math.random() * selector[i].length)
     var element = document.getElementById('settings0' + i)
     element.innerHTML = SettingsText[i] + selector[i][randomized]
     if (identifier == "") {
        identifier += randomized
     } else {
        identifier += "," + randomized
     }
    }
    window.location.hash = identifier
}

init = function () {
    if(window.location.hash) {
        var hash = window.location.hash.substring(1).split(","); //Puts hash in variable, and removes the # character
        for (let i = 0; i < hash.length; i++) {
            var element = document.getElementById('settings0' + i)
            element.innerHTML = SettingsText[i] + selector[i][hash[i]]
        }
    } else {
        choose()
    }
}

window.onhashchange = function() { 
    if(window.location.hash) {
        var hash = window.location.hash.substring(1).split(","); //Puts hash in variable, and removes the # character
        for (let i = 0; i < hash.length; i++) {
            var element = document.getElementById('settings0' + i)
            element.innerHTML = SettingsText[i] + selector[i][hash[i]]
        }
    }
}

DataSelector = function() {

    for (let i = 0; i < 14; i++) {
     var randomized = Math.floor(Math.random() * selector[i].length)
     Output[i] = selector[i][randomized]
    }

}