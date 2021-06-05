const buildingsPt = [{Selector:"Select Building",unlock:true},
    {Building:1,unlock:true},{Building:2,unlock:true},{Building:3,unlock:true},
    {Building:4,unlock:false},{Building:5,unlock:false},{Building:6,unlock:false}];
const metrics = ["I","M"];
const apartments1 = [{Selector:"Select Appartment"},
{Apartment:"APTO-1A",Price:[123100.00],Available:"Sold",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-1B",Price:[172600.00],Available:"Sold",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-1C",Price:[206150.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-1D",Price:[187290.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-1E",Price:[170950.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-1F",Price:[122000.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-2A",Price:[106578.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-2B",Price:[136300.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-2C",Price:[171005.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-2D",Price:[145940.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-2E",Price:[136300.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-2F",Price:[106578.00],Available:"Sold",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-3A",Price:[104400.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-3B",Price:[139600.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-3C",Price:[168200.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-3D",Price:[133400.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-3E",Price:[139600.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-3F",Price:[104400.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-4A",Price:[104400.00],Available:"Sold",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-4B",Price:[138148.00],Available:"Sold",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-4C",Price:[170048.00],Available:"Sold",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-4D",Price:[139274.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-4E",Price:[138148.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"},
{Apartment:"APTO-4F",Price:[104400.00],Available:"Available",Area_Apparment:"72.00",Area_Terrace:"34",Rooms:"1",Bathrooms:"1",Parking_Space:"1"
,Living_Dining:"23.50",Kitchen:"12.50",Main_Bedroom:"19.90",Second_Bedroom:"",Third_Bedroom:"",Other_Areas:"16.10",Total_Area:"72"}]


console.log(apartments1);
let select = document.getElementById("metric");
let building = document.getElementById("building");
let Apartment = document.getElementById("apartment");
let price = document.getElementById('price');

myFunction (metrics,select);
console.log(document.getElementById("metric").value);
myFunctionBuilding (buildingsPt,building);

function myFunctionAp( array , element ) {
   
    for (var i = 0; i < array.length; i++){
        if(i != 0){
            console.log(array[i].Apartment);
            var opt = document.createElement('option');
                opt.value = array[i].Apartment;
                opt.innerHTML = array[i].Apartment;
                element.appendChild(opt);
        }else{
            console.log(array[i].Selector);
            var opt = document.createElement('option');
                opt.value = array[i].Selector;
                opt.innerHTML = array[i].Selector;
                element.appendChild(opt);

        }
    }
  }


  /* 1 square meter is 10.7639 square ft */
  function myFunctionFill() {
      let element_selected = document.getElementById("picture");
    let answer = document.getElementById("apartment").value;
    let availability = document.getElementById("available");
    /*checkPicture();*/
    if (document.getElementById("apartment_image") != null){
        var img = document.getElementById("apartment_image");
        img.src = "./img/apartments_images/"+answer+".png";
    }else{
        var img = document.createElement('img');
        img.src = "./img/apartments_images/"+answer+".png";
        img.id = "apartment_image";
        img.style.display = "block";
        img.style.width = "100%";
        img.style.height = "100%";
        element_selected.appendChild(img);

    }
    
    

    for (var i = 0; i < apartments1.length; i++){

        if (answer == apartments1[i].Apartment){
            availability.value = apartments1[i].Available;
            availability.innerHTML = apartments1[i].Available;
            availability.style.textAlign = "Center";
            if (apartments1[i].Available == "Available"){
                availability.style.backgroundColor = "Green";
            }if(apartments1[i].Available == "Sold"){
                availability.style.backgroundColor = "Red";
            }
            if (apartments1[i].Available == "Reserved"){
                availability.style.backgroundColor = "Orange";
            }

            document.getElementById('price').value = apartments1[i].Price;
            document.getElementById('price').innerHTML = Intl.NumberFormat('en-US', {currency:"USD" , style: 'currency'}).format(apartments1[i].Price);
            document.getElementById('total_investment').value = apartments1[i].Price;
            document.getElementById('total_investment').innerHTML = Intl.NumberFormat('en-US', {currency:"USD" , style: 'currency'}).format(apartments1[i].Price);
            
            if ( (document.getElementById("metric").value) == 'M'){
                document.getElementById('area_apartment').value = apartments1[i].Area_Apparment;
                document.getElementById('area_apartment').innerHTML = apartments1[i].Area_Apparment;
                document.getElementById('area_terrace').value = apartments1[i].Area_Terrace;
                document.getElementById('area_terrace').innerHTML = apartments1[i].Area_Terrace;
            }else{
                document.getElementById('area_apartment').value = Math.round(((apartments1[i].Area_Apparment)*10.7639).toFixed(2));
                document.getElementById('area_apartment').innerHTML = Math.round(((apartments1[i].Area_Apparment)*10.7639).toFixed(2));
                document.getElementById('area_terrace').value = Math.round(((apartments1[i].Area_Terrace)*10.7639).toFixed(2));
                document.getElementById('area_terrace').innerHTML = Math.round(((apartments1[i].Area_Terrace)*10.7639).toFixed(2));
            }

            document.getElementById('rooms').value = apartments1[i].Rooms;
            document.getElementById('rooms').innerHTML = apartments1[i].Rooms;

            document.getElementById('bathrooms').value = apartments1[i].Bathrooms;
            document.getElementById('bathrooms').innerHTML = apartments1[i].Bathrooms;

            document.getElementById('parking_space').value = apartments1[i].Parking_Space;
            document.getElementById('parking_space').innerHTML = apartments1[i].Parking_Space;

            if(apartments1[i].Living_Dining == ""){
            document.getElementById('area_living_dining_ft').value = "N/A";
            document.getElementById('area_living_dining_ft').innerHTML = "N/A";
            document.getElementById('area_living_dining_m').value = "N/A";
            document.getElementById('area_living_dining_m').innerHTML = "N/A";

            }else{
            document.getElementById('area_living_dining_ft').value = Math.round(((apartments1[i].Living_Dining)*10.7639).toFixed(2));
            document.getElementById('area_living_dining_ft').innerHTML = Math.round(((apartments1[i].Living_Dining)*10.7639).toFixed(2));
            document.getElementById('area_living_dining_m').value = apartments1[i].Living_Dining;
            document.getElementById('area_living_dining_m').innerHTML = apartments1[i].Living_Dining;

            }
            if(apartments1[i].Kitchen == ""){
                document.getElementById('kitchen_ft').value = "N/A";
                document.getElementById('kitchen_ft').innerHTML = "N/A";
                document.getElementById('kitchen_m').value = "N/A";
                document.getElementById('kitchen_m').innerHTML = "N/A";        
            }else{
                document.getElementById('kitchen_ft').value = Math.round(((apartments1[i].Kitchen)*10.7639).toFixed(2));
                document.getElementById('kitchen_ft').innerHTML = Math.round(((apartments1[i].Kitchen)*10.7639).toFixed(2));
                document.getElementById('kitchen_m').value = (apartments1[i].Kitchen);
                document.getElementById('kitchen_m').innerHTML = (apartments1[i].Kitchen);
            }
            if(apartments1[i].Main_Bedroom == ""){

                document.getElementById('main_bedroom_ft').value = "N/A";
                document.getElementById('main_bedroom_ft').innerHTML = "N/A";
                document.getElementById('main_bedroom_m').value = "N/A";
                document.getElementById('main_bedroom_m').innerHTML = "N/A";
                
            }else{
                document.getElementById('main_bedroom_ft').value = Math.round(((apartments1[i].Main_Bedroom)*10.7639).toFixed(2));
                document.getElementById('main_bedroom_ft').innerHTML = Math.round(((apartments1[i].Main_Bedroom)*10.7639).toFixed(2));
                document.getElementById('main_bedroom_m').value = (apartments1[i].Main_Bedroom);
                document.getElementById('main_bedroom_m').innerHTML = (apartments1[i].Main_Bedroom);
    
            }
            if(apartments1[i].Second_Bedroom == ""){

                document.getElementById('second_bedroom_ft').value = "N/A";
                document.getElementById('second_bedroom_ft').innerHTML = "N/A";

                document.getElementById('second_bedroom_m').value = "N/A";
                document.getElementById('second_bedroom_m').innerHTML = "N/A";
                
            }else{

                document.getElementById('second_bedroom_ft').value = Math.round(((apartments1[i].Second_Bedroom)*10.7639).toFixed(2));
                document.getElementById('second_bedroom_ft').innerHTML = Math.round(((apartments1[i].Second_Bedroom)*10.7639).toFixed(2));
                document.getElementById('second_bedroom_m').value = (apartments1[i].Second_Bedroom);
                document.getElementById('second_bedroom_m').innerHTML = (apartments1[i].Second_Bedroom);
    
            }
            if(apartments1[i].Third_Bedroom == ""){
                document.getElementById('third_bedroom_ft').value = "N/A";
                document.getElementById('third_bedroom_ft').innerHTML = "N/A";
                document.getElementById('third_bedroom_m').value = "N/A";
                document.getElementById('third_bedroom_m').innerHTML = "N/A";
                
            }else{
                document.getElementById('third_bedroom_ft').value = Math.round(((apartments1[i].Third_Bedroom)*10.7639).toFixed(2));
                document.getElementById('third_bedroom_ft').innerHTML = Math.round(((apartments1[i].Third_Bedroom)*10.7639).toFixed(2));
                document.getElementById('third_bedroom_m').value = (apartments1[i].Third_Bedroom);
                document.getElementById('third_bedroom_m').innerHTML = (apartments1[i].Third_Bedroom);
    
            }
            if(apartments1[i].Other_Areas == ""){
                document.getElementById('other_areas_ft').value = "N/A";
                document.getElementById('other_areas_ft').innerHTML = "N/A";
                document.getElementById('other_areas_m').value = "N/A";
                document.getElementById('other_areas_m').innerHTML = "N/A";
                
            }else{

                document.getElementById('other_areas_ft').value = Math.round(((apartments1[i].Other_Areas)*10.7639).toFixed(2));
                document.getElementById('other_areas_ft').innerHTML = Math.round(((apartments1[i].Other_Areas)*10.7639).toFixed(2));
                document.getElementById('other_areas_m').value = (apartments1[i].Other_Areas);
                document.getElementById('other_areas_m').innerHTML = (apartments1[i].Other_Areas);

            }
            if(apartments1[i].Total_Area == ""){
                document.getElementById('total_ft').value = "N/A";
                document.getElementById('total_ft').innerHTML = "N/A";
                document.getElementById('total_m').value = "N/A";
                document.getElementById('total_m').innerHTML = "N/A";
                
            }else{
                document.getElementById('total_ft').value = Math.round(((apartments1[i].Total_Area)*10.7639).toFixed(2));
                document.getElementById('total_ft').innerHTML = Math.round(((apartments1[i].Total_Area)*10.7639).toFixed(2));
                document.getElementById('total_m').value = (apartments1[i].Total_Area);
                document.getElementById('total_m').innerHTML = (apartments1[i].Total_Area);
    
            }
            }
        }
    }



  

  function myFunction( array , element ) {
   
    for (var i = 0; i < array.length; i++){
        var opt = document.createElement('option');
            opt.value = array[i];
            opt.innerHTML = array[i];
            element.appendChild(opt);
        
    }
  }

  function myFunctionBuilding( array , element ) {
   
    for (var i = 0; i < array.length; i++){
        var opt = document.createElement('option');
            
        if(i != 0){
        if(array[i].unlock == true){
            console.log(array[i].Building);
            opt.value = array[i].Building;
                opt.innerHTML = array[i].Building;
                element.appendChild(opt);
        }else{
            opt.setAttribute("disabled","disabled");
        }
         
                
        }else{
            if(array[i].unlock == true){
                console.log(array[i].Selector);
                opt.value = array[i].Selector;
                opt.innerHTML = array[i].Selector;
                element.appendChild(opt);
            }else{
                opt.setAttribute("disabled","disabled");
            }
            

        }
    }
  }

  function checkPicture(){

    let element_selected = document.getElementById("picture");
    if (document.getElementById("apartment_image") != null){
        var img = document.getElementById("apartment_image");
        img.src = "./img/apartments_images/"+answer+".png";
    }else{
        var img = document.createElement('img');
        img.src = "./img/apartments_images/"+answer+".png";
        img.id = "apartment_image";
        img.style.display = "block";
        img.style.display = "block";
        img.style.width = "100%";
        img.style.height = "100%";
        element_selected.appendChild(img);

    }

  }

  function clearPicture(){
    let element_selected = document.getElementById("picture");
    if (document.getElementById("apartment_image") != null){
        document.getElementById("apartment_image").remove(0);
    }else{

    }
    document.getElementById('available').value = "";
    document.getElementById('available').innerHTML = "";
    document.getElementById('available').style.backgroundColor = "unset";
    document.getElementById('price').value = "";
    document.getElementById('price').innerHTML = "";
    document.getElementById('price').style.backgroundColor = "unset";
    document.getElementById('area_apartment').value = "";
    document.getElementById('area_apartment').innerHTML = "";
    document.getElementById('area_terrace').value = "";
    document.getElementById('area_terrace').innerHTML = "";
    document.getElementById('rooms').value = "";
    document.getElementById('rooms').innerHTML = "";
    document.getElementById('bathrooms').value = "";
    document.getElementById('bathrooms').innerHTML = "";
    document.getElementById('parking_space').value = "";
    document.getElementById('parking_space').innerHTML = "";
    document.getElementById('area_living_dining_m').innerHTML = "";
    document.getElementById('kitchen_m').value = "";
    document.getElementById('kitchen_m').innerHTML = "";
    document.getElementById('main_bedroom_m').value = "";
    document.getElementById('main_bedroom_m').innerHTML = "";
    document.getElementById('second_bedroom_m').value = "";
    document.getElementById('second_bedroom_m').innerHTML = "";
    document.getElementById('third_bedroom_m').value = "";
    document.getElementById('third_bedroom_m').innerHTML = "";
    document.getElementById('other_areas_m').value = "";
    document.getElementById('other_areas_m').innerHTML = "";
    document.getElementById('total_m').value = "";
    document.getElementById('total_m').innerHTML = "";
    document.getElementById('area_living_dining_ft').value = "";
    document.getElementById('area_living_dining_ft').innerHTML = "";
    document.getElementById('kitchen_ft').value = "";
    document.getElementById('kitchen_ft').innerHTML = "";
    document.getElementById('main_bedroom_ft').value = "";
    document.getElementById('main_bedroom_ft').innerHTML = "";
    document.getElementById('second_bedroom_ft').value = "";
    document.getElementById('second_bedroom_ft').innerHTML = "";
    document.getElementById('third_bedroom_ft').value = "";
    document.getElementById('third_bedroom_ft').innerHTML = "";
    document.getElementById('other_areas_ft').value = "";
    document.getElementById('other_areas_ft').innerHTML = "";
    document.getElementById('total_ft').value = "";
    document.getElementById('total_ft').innerHTML = "";
    document.getElementById('advance_cash').value = "";
    document.getElementById('advance_cash').innerHTML = "";
    document.getElementById('balance_to_finance').value = "";
    document.getElementById('balance_to_finance').innerHTML = "";
    document.getElementById('advance_percentage').value = "";
    document.getElementById('advance_percentage').innerHTML = "";

    

  }



  //Función para cargar las provincias al campo "select".
function sendBuilding() {
    
    while(Apartment.options.length > 0){                
        Apartment.remove(0);
      }
      clearPicture();

      
    let answer = document.getElementById("building").value;
    console.log(answer);
   if ( answer == 1 ){
    myFunctionAp( apartments1 , Apartment ) ;
    console.log("entre1");
   }
   if ( answer == 2 ){
    myFunctionAp( appartments2 , Apartment ) ;
    console.log("entre2");
   }
   if ( answer == 3 ){
    myFunctionAp( appartments3 , Apartment ) ;
    console.log("entre3");
   }
   if ( answer == 4 ){
    myFunctionAp( appartments4 , Apartment ) ;
    console.log("entre4"); 
   }
   if ( answer == 5 ){
    myFunctionAp( appartments5 , Apartment ) ; 
    console.log("entre5");
   }
   if ( answer == 6 ){
    myFunctionAp( appartments6 , Apartment ) ; 
    console.log("entre6");
}
}
function calculation(percentage){

    if ((document.getElementById('price').value != null) || (document.getElementById('price').value != "")){
        var cash = (((document.getElementById('price').value) * percentage)/100);
        var balance_finance = ((document.getElementById('price').value)-cash);
        console.log("CALCULATION"+(((document.getElementById('price').value) * percentage))/100);
        document.getElementById('advance_cash').value = cash;
        document.getElementById('advance_cash').innerHTML = Intl.NumberFormat('en-US', {currency:"USD" , style: 'currency'}).format(cash);
        document.getElementById('balance_to_finance').value = balance_finance;
        document.getElementById('balance_to_finance').innerHTML = Intl.NumberFormat('en-US', {currency:"USD" , style: 'currency'}).format(balance_finance);
        /*document.getElementById('capital').value = balance_finance;
        document.getElementById('capital').innerHTML = Intl.NumberFormat('en-US', {currency:"USD" , style: 'currency'}).format(balance_finance);
        */

    }else{
        alert("You need to select the building and the apartment");
    }

}