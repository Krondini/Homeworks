$(document).ready(function() {    
    var apiKey = "8329485b284ca1b00e29947e972ff7e4"; // Enter your API Key here        
    console.log(`state_info is: ${state_info}`); // Notice the templating here, use that when you form your url
    for (var i in state_info) {
        console.log(state_info[i]);
    }


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var state_obj = state_info['CO'];
    // console.log(Object.values(state_obj));
    // console.log("Lat is: " + Object.values(state_obj)[0]);
    var url =`https://api.darksky.net/forecast/8329485b284ca1b00e29947e972ff7e4/37.8267,-122.4233`;
    
    function APICall(i){
       state_obj = state_info[i]; //How to get each state in state_info
        console.log(Object.values(state_obj)); //Array of values in key:value pair
        url = `https://api.darksky.net/forecast/8329485b284ca1b00e29947e972ff7e4/` + Object.values(state_obj)[0] + ',' + Object.values(state_obj)[1];
        console.log(url);
        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                // console.log(data);
                var temperature = null;
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                //temperature = data.currently.apparentTemperature;
                //temperature = 35;

                temperature = data.currently.apparentTemperature;
                console.log("Curr temperature in " + i +" is "+ temperature);

                //TODO 
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                // Between 11 and 30 should be cyan
                // Between 31 and 50 should be green
                // Between 51 and 80 should be orange
                // Greater than 80 should be red                
                
                if(temperature <= 10)
                {
                    $('#'+i).css({fill: 'blue'});
                }
                else if(temperature > 10 && temperature <= 30)
                {
                    $('#'+i).css({fill: 'cyan'});
                }
                else if(temperature > 30 && temperature <= 50)
                {
                    $('#'+i).css({fill: 'green'});
                }
                else if(temperature > 50 && temperature <= 80)
                {
                    $('#'+i).css({fill: 'orange'});
                }
                else
                {
                    $('#'+i).css({fill: 'red'});
                }

            });
        }
    for(var i in state_info)
        APICall(i);
});
