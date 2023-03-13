$(document).ready(function(){
    // Check if we are on a job page
    if( hh_api_version<=1 && doc_type == 1) {
    
        //will hold the total cost
        let total_cost;
        
       //API call to get the values generated when clicking on "Job > Menu > Job > Proft and Margins"
      $.ajax({
        url: "/php_functions/job_margins.php",
        type: "GET",
        data: {
            job_id: job_id,
            project: 0
        },
        success: function (data) {
           
           
           total_cost = data.custom_revenue
           
          


        },
        error: function (jqXHR, status, error) {
            console.log('Failed to save job fields: [' + status + '] ' + error);
        }
    });


    $('#tabs_list').on('click','#supplying_tab', function () {

        $(document ).ready( function() {
            if($('#to_co') == undefined){
                 $('#items_tab > table > tr > td:nth-child(1)').append("<td id='total_cost_paragraph'>Total Cost: </td>").append("<span id=total_cost_span>"+ total_cost +  "</span>");


                 $("<tr id='cost_tr'><span id=total_cost_span>"+ total_cost +  "</span></tr>").insertAfter('#items_tab > table > tr > td:nth-child(1)')

                 console.log('first click')
        }
            else {
                console.log('second click')
                $('#total_cost_span').text(total_cost)
            }
    })} )


    }
    });
