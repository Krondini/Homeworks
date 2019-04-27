$(document).ready(function() {    
    var apiKey = "cf52254d8bd072d33e99a0492f99721b"; // Enter your API Key here        
    console.log(`state_info is: ${state_info}`); // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var state_obj = state_info['CO'];
    var url =`https://api.darksky.net/forecast/cf52254d8bd072d33e99a0492f99721b/37.8267,-122.4233`;

    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                
                console.log(data);
                var temperature = null;
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                //temperature = data.currently.apparentTemperature;
                //temperature = 35;
                var curr_state = $('#outlines')[1];
                console.log(curr_state);
                temperature = $('')
                console.log("The current temperature is: " + temperature);

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
                    $('#CO').css("fill", "blue");
                }
                else if(temperature >= 11 && temperature <= 30)
                {
                    $('#CO').css("fill", "cyan");
                }
                else if(temperature >= 31 && temperature <= 50)
                {
                    $('#CO').css("fill", "green");
                }
                else if(temperature >= 51 && temperature <= 80)
                {
                    $('#CO').css("fill", "orange");
                }
                else if (temperature > 80)
                {
                    $('#CO').css("fill", "red");                    
                }
               // $('#CO').css("fill", "blue");   // Example on how to fill colors for your state.    
                
    });
});