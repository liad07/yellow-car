function f() {
    var x=document.getElementById("text").value
    $.ajax({
        type: 'GET',
        url: 'https://data.gov.il/api/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&filters={"mispar_rechev":"'+x+'"}',
        dataType: 'json',
        success: function (data) {
            var bool=data.result.records[0].tzeva_rechev=="צהוב";
            if (bool){
                $('#tzeva_rechev').html(bool)
            }
            else{
                document.getElementById("tx2").textContent="no yellow car, the color of car is:";
                $('#tzeva').html(data.result.records[0].tzeva_rechev);

            }
        }
    });

}