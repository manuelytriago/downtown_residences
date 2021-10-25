
    var /*tbody = document.getElementById("tbody"),
        first = document.getElementById("first"),
        area_break = document.getElementById("area_breakdown"),*/
        pay = document.getElementById("pay"),
        main_cont = document.getElementById("main"),
        facing = document.getElementById("main_facing"),
        sold = document.getElementById("status"),
        image = document.getElementById("image");
        id_apto = null;
    const 
        main_mage = document.createElement("tr"),
        main = document.createElement("tr"),
        status = document.createElement("tr"),
        opt = document.createElement("th"),
        facingtd = document.createElement("td"),
        availabletd = document.createElement("td"),
        pictureth = document.createElement("th"),
        img = document.createElement("img"),
        buildingsPt = [
            { Selector: "Select Building",},
            { Building: 1, },
            { Building: 2, },
            { Building: 3, },
            { Building: 4, },
            { Building: 5, },
            { Building: 6, },
        ],
        buildingsfloors = [
            { Selector: "Select Floor", },
            { Floor: "First", },
            { Floor: "Second", },
            { Floor: "Third", },
            { Floor: "Fourth", },
        ],
        metrics = ["I", "M"];
    var apartments1 = {},
        apartments = [
            { Selector: "Select Apartment" },
            {
                Floor: "First",
                Apartment: "APTO-1A",
                Price: [140900],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "34.00",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Terrace is facing the pool",
            },
            {
                Floor: "First",
                Apartment: "APTO-1B",
                Price: [198e3],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "66.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Terrace is facing the pool",
            },
            {
                Floor: "First",
                Apartment: "APTO-1C",
                Price: [236250],
                Available: "",
                Area_Apparment: "116.00",
                Area_Terrace: "69.00",
                Rooms: "3",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "I",
                Living_Dining: "29.17.",
                Kitchen: "9.68",
                Main_Bedroom: "16.58",
                Second_Bedroom: "15.80",
                Third_Bedroom: "15.13",
                Other_Areas: "29.64",
                Total_Area: "116",
                Facing: "Terrace is facing the pool",
            },
            {
                Floor: "First",
                Apartment: "APTO-1D",
                Price: [214470],
                Available: "",
                Area_Apparment: "108.00",
                Area_Terrace: "55.80",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "J",
                Living_Dining: "24.25",
                Kitchen: "12.41",
                Main_Bedroom: "17.97",
                Second_Bedroom: "17.02",
                Third_Bedroom: "",
                Other_Areas: "36.35",
                Total_Area: "108",
                Facing: "Terrace is facing its surroundings",
            },
            {
                Floor: "First",
                Apartment: "APTO-1E",
                Price: [196050],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "63.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Terrace is facing its surroundings",
            },
            {
                Floor: "First",
                Apartment: "APTO-1F",
                Price: [139600],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "32.00",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Terrace is facing its surroundings",
            },
            {
                Floor: "Second",
                Apartment: "APTO-2A",
                Price: [121770],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "6.60",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Second",
                Apartment: "APTO-2B",
                Price: [155100],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "0.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Second",
                Apartment: "APTO-2C",
                Price: [195225],
                Available: "",
                Area_Apparment: "116.00",
                Area_Terrace: "8.50",
                Rooms: "3",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "I",
                Living_Dining: "29.17.",
                Kitchen: "9.68",
                Main_Bedroom: "16.58",
                Second_Bedroom: "15.80",
                Third_Bedroom: "15.13",
                Other_Areas: "29.64",
                Total_Area: "116",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Second",
                Apartment: "APTO-2D",
                Price: [168900],
                Available: "",
                Area_Apparment: "92.00",
                Area_Terrace: "38.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "G",
                Living_Dining: "18.86",
                Kitchen: "12.41",
                Main_Bedroom: "13.35",
                Second_Bedroom: "13.71",
                Third_Bedroom: "",
                Other_Areas: "33.67",
                Total_Area: "92",
                Facing: "Balcony is facing its surroundings",
            },
            {
                Floor: "Second",
                Apartment: "APTO-2E",
                Price: [155100],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "0.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Balcony is facing its surroundings",
            },
            {
                Floor: "Second",
                Apartment: "APTO-2F",
                Price: [121770],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "6.60",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Balcony is facing its surroundings",
            },
            {
                Floor: "Third",
                Apartment: "APTO-3A",
                Price: [118800],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "0.00",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Third",
                Apartment: "APTO-3B",
                Price: [159600],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "10.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Third",
                Apartment: "APTO-3C",
                Price: [191400],
                Available: "",
                Area_Apparment: "116.00",
                Area_Terrace: "0.00",
                Rooms: "3",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "I",
                Living_Dining: "29.17.",
                Kitchen: "9.68",
                Main_Bedroom: "16.58",
                Second_Bedroom: "15.80",
                Third_Bedroom: "15.13",
                Other_Areas: "29.64",
                Total_Area: "116",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Third",
                Apartment: "APTO-3D",
                Price: [151800],
                Available: "",
                Area_Apparment: "92.00",
                Area_Terrace: "0.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "G",
                Living_Dining: "18.86",
                Kitchen: "12.41",
                Main_Bedroom: "13.35",
                Second_Bedroom: "13.71",
                Third_Bedroom: "",
                Other_Areas: "33.67",
                Total_Area: "92",
                Facing: "Balcony is facing its surroundings",
            },
            {
                Floor: "Third",
                Apartment: "APTO-3E",
                Price: [159600],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "10.00",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Balcony is facing its surroundings",
            },
            {
                Floor: "Third",
                Apartment: "APTO-3F",
                Price: [118800],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "0.00",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Balcony is facing its surroundings",
            },
            {
                Floor: "Fourth",
                Apartment: "APTO-4A",
                Price: [118800],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "0.00",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Fourth",
                Apartment: "APTO-4B",
                Price: [157620],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "5.60",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Fourth",
                Apartment: "APTO-4C",
                Price: [193920],
                Available: "",
                Area_Apparment: "116.00",
                Area_Terrace: "5.60",
                Rooms: "3",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "I",
                Living_Dining: "29.17.",
                Kitchen: "9.68",
                Main_Bedroom: "16.58",
                Second_Bedroom: "15.80",
                Third_Bedroom: "15.13",
                Other_Areas: "29.64",
                Total_Area: "116",
                Facing: "Balcony is facing the pool",
            },
            {
                Floor: "Fourth",
                Apartment: "APTO-4D",
                Price: [159810],
                Available: "",
                Area_Apparment: "92.00",
                Area_Terrace: "17.80",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "G",
                Living_Dining: "18.86",
                Kitchen: "12.41",
                Main_Bedroom: "13.35",
                Second_Bedroom: "13.71",
                Third_Bedroom: "",
                Other_Areas: "33.67",
                Total_Area: "92",
                Facing: "Balcony is facing its surrounding",
            },
            {
                Floor: "Fourth",
                Apartment: "APTO-4E",
                Price: [157620],
                Available: "",
                Area_Apparment: "94.00",
                Area_Terrace: "5.60",
                Rooms: "2",
                Bathrooms: "2",
                Parking_Space: "2",
                Type: "H",
                Living_Dining: "18.22",
                Kitchen: "12.37",
                Main_Bedroom: "19.83",
                Second_Bedroom: "17.70",
                Third_Bedroom: "",
                Other_Areas: "25.88",
                Total_Area: "94",
                Facing: "Balcony is facing its surrounding",
            },
            {
                Floor: "Fourth",
                Apartment: "APTO-4F",
                Price: [118800],
                Available: "",
                Area_Apparment: "72.00",
                Area_Terrace: "0.00",
                Rooms: "1",
                Bathrooms: "1",
                Parking_Space: "1",
                Type: "A",
                Living_Dining: "23.50",
                Kitchen: "12.50",
                Main_Bedroom: "19.90",
                Second_Bedroom: "",
                Third_Bedroom: "",
                Other_Areas: "16.10",
                Total_Area: "72",
                Facing: "Balcony is facing its surrounding",
            },
        ],
        apartments2 = JSON.parse(JSON.stringify(apartments)),
        apartments3 = JSON.parse(JSON.stringify(apartments)),
        apartments4 = JSON.parse(JSON.stringify(apartments)),
        apartments5 = JSON.parse(JSON.stringify(apartments)),
        apartments6 = JSON.parse(JSON.stringify(apartments));
    (apartments[1].Available = "Available"),
        (apartments[2].Available = "Sold"),
        (apartments[3].Available = "Sold"),
        (apartments[4].Available = "Available"),
        (apartments[5].Available = "Available"),
        (apartments[6].Available = "Available"),
        (apartments[7].Available = "Sold"),
        (apartments[8].Available = "Sold"),
        (apartments[9].Available = "Sold"),
        (apartments[10].Available = "Available"),
        (apartments[11].Available = "Available"),
        (apartments[12].Available = "Sold"),
        (apartments[13].Available = "Available"),
        (apartments[14].Available = "Sold"),
        (apartments[15].Available = "Available"),
        (apartments[16].Available = "Available"),
        (apartments[17].Available = "Available"),
        (apartments[18].Available = "Available"),
        (apartments[19].Available = "Sold"),
        (apartments[20].Available = "Sold"),
        (apartments[21].Available = "Sold"),
        (apartments[22].Available = "Sold"),
        (apartments[23].Available = "Sold"),
        (apartments[24].Available = "Sold"),
        (apartments2[1].Available = "Sold"),
        (apartments2[2].Available = "Sold"),
        (apartments2[3].Available = "Sold"),
        (apartments2[4].Available = "Available"),
        (apartments2[5].Available = "Available"),
        (apartments2[6].Available = "Available"),
        (apartments2[7].Available = "Available"),
        (apartments2[8].Available = "Available"),
        (apartments2[9].Available = "Sold"),
        (apartments2[10].Available = "Sold"),
        (apartments2[11].Available = "Available"),
        (apartments2[12].Available = "Available"),
        (apartments2[13].Available = "Available"),
        (apartments2[14].Available = "Sold"),
        (apartments2[15].Available = "Available"),
        (apartments2[16].Available = "Available"),
        (apartments2[17].Available = "Available"),
        (apartments2[18].Available = "Available"),
        (apartments2[19].Available = "Sold"),
        (apartments2[20].Available = "Sold"),
        (apartments2[21].Available = "Sold"),
        (apartments2[22].Available = "Sold"),
        (apartments2[23].Available = "Sold"),
        (apartments2[24].Available = "Available"),
        (apartments3[1].Available = "Available"),
        (apartments3[2].Available = "Sold"),
        (apartments3[3].Available = "Sold"),
        (apartments3[4].Available = "Available"),
        (apartments3[5].Available = "Available"),
        (apartments3[6].Available = "Available"),
        (apartments3[7].Available = "Available"),
        (apartments3[8].Available = "Sold"),
        (apartments3[9].Available = "Sold"),
        (apartments3[10].Available = "Available"),
        (apartments3[11].Available = "Available"),
        (apartments3[12].Available = "Available"),
        (apartments3[13].Available = "Available"),
        (apartments3[14].Available = "Sold"),
        (apartments3[15].Available = "Available"),
        (apartments3[16].Available = "Available"),
        (apartments3[17].Available = "Available"),
        (apartments3[18].Available = "Available"),
        (apartments3[19].Available = "Sold"),
        (apartments3[20].Available = "Sold"),
        (apartments3[21].Available = "Sold"),
        (apartments3[22].Available = "Sold"),
        (apartments3[23].Available = "Sold"),
        (apartments3[24].Available = "Available"),
        (apartments4[1].Available = "Reserved"),
        (apartments4[2].Available = "Reserved"),
        (apartments4[3].Available = "Reserved"),
        (apartments4[4].Available = "Reserved"),
        (apartments4[5].Available = "Reserved"),
        (apartments4[6].Available = "Reserved"),
        (apartments4[7].Available = "Reserved"),
        (apartments4[8].Available = "Reserved"),
        (apartments4[9].Available = "Reserved"),
        (apartments4[10].Available = "Reserved"),
        (apartments4[11].Available = "Reserved"),
        (apartments4[12].Available = "Reserved"),
        (apartments4[13].Available = "Reserved"),
        (apartments4[14].Available = "Sold"),
        (apartments4[15].Available = "Reserved"),
        (apartments4[16].Available = "Reserved"),
        (apartments4[17].Available = "Reserved"),
        (apartments4[18].Available = "Reserved"),
        (apartments4[19].Available = "Reserved"),
        (apartments4[20].Available = "Reserved"),
        (apartments4[21].Available = "Sold"),
        (apartments4[22].Available = "Reserved"),
        (apartments4[23].Available = "Reserved"),
        (apartments4[24].Available = "Reserved"),
        (apartments5[1].Available = "Available"),
        (apartments5[2].Available = "Available"),
        (apartments5[3].Available = "Available"),
        (apartments5[4].Available = "Available"),
        (apartments5[5].Available = "Available"),
        (apartments5[6].Available = "Available"),
        (apartments5[7].Available = "Sold"),
        (apartments5[8].Available = "Sold"),
        (apartments5[9].Available = "Sold"),
        (apartments5[10].Available = "Sold"),
        (apartments5[11].Available = "Sold"),
        (apartments5[12].Available = "Sold"),
        (apartments5[13].Available = "Available"),
        (apartments5[14].Available = "Sold"),
        (apartments5[15].Available = "Sold"),
        (apartments5[16].Available = "Available"),
        (apartments5[17].Available = "Available"),
        (apartments5[18].Available = "Available"),
        (apartments5[19].Available = "Available"),
        (apartments5[20].Available = "Sold"),
        (apartments5[21].Available = "Sold"),
        (apartments5[22].Available = "Sold"),
        (apartments5[23].Available = "Sold"),
        (apartments5[24].Available = "Available"),
        (apartments6[1].Available = "Sold"),
        (apartments6[2].Available = "Available"),
        (apartments6[3].Available = "Sold"),
        (apartments6[4].Available = "Available"),
        (apartments6[5].Available = "Available"),
        (apartments6[6].Available = "Available"),
        (apartments6[7].Available = "Available"),
        (apartments6[8].Available = "Sold"),
        (apartments6[9].Available = "Sold"),
        (apartments6[10].Available = "Available"),
        (apartments6[11].Available = "Sold"),
        (apartments6[12].Available = "Available"),
        (apartments6[13].Available = "Sold"),
        (apartments6[14].Available = "Available"),
        (apartments6[15].Available = "Sold"),
        (apartments6[16].Available = "Available"),
        (apartments6[17].Available = "Sold"),
        (apartments6[18].Available = "Available"),
        (apartments6[19].Available = "Available"),
        (apartments6[20].Available = "Sold"),
        (apartments6[21].Available = "Sold"),
        (apartments6[22].Available = "Sold"),
        (apartments6[23].Available = "Sold"),
        (apartments6[24].Available = "Available");
    let /*select = document.getElementById("metric"),*/
        building = document.getElementById("building"),
        floor = document.getElementById("apartment"),
        price = document.getElementById("price");

  
    function myFunctionFill() {
        clear_tables();
            answer = document.getElementById("apartment").value,
            building = document.getElementById("building").value;
            if("Select Building" != building){
                if ("Select Floor" != answer) {
                    (building = parseInt(building)),
                        1 === building && (apartments1 = JSON.parse(JSON.stringify(apartments))),
                        2 === building && (apartments1 = JSON.parse(JSON.stringify(apartments2))),
                        3 === building && (apartments1 = JSON.parse(JSON.stringify(apartments3))),
                        4 === building && (apartments1 = JSON.parse(JSON.stringify(apartments4))),
                        5 === building && (apartments1 = JSON.parse(JSON.stringify(apartments5))),
                        6 === building && (apartments1 = JSON.parse(JSON.stringify(apartments6)));
                        
                        const principal = document.createElement("div")
                        principal.id = "half"
                        principal.className = "table_div";
                        main_cont.appendChild(principal)
                        const secondary = document.createElement("div")
                        secondary.id = "other"
                        secondary.className = "table_div";
                        main_cont.appendChild(secondary)
                        const last_div = document.createElement("div")
                            last_div.id = "info"
                            last_div.className = "table_div";
                        const last_div2 = document.createElement("div")
                        last_div2.className = "data_image_flex";
                        const lastin_div = document.createElement("h1")
                            lastin_div.className = "col-12 text";
                            lastin_div.value = "BUILDING "+building+ " "+answer.toUpperCase()+ " FLOOR"
                            lastin_div.innerHTML = "BUILDING "+building+ " "+answer.toUpperCase()+ " FLOOR"
                            main_cont.appendChild(last_div)
                            last_div.appendChild(last_div2)
                            last_div2.appendChild(lastin_div)
                            let cont = 0;
                    for (var i = 0; i < apartments1.length; i++)
                    
                    if ( answer == apartments1[i].Floor ){
                        console.log("Floor = "+apartments1[i].Floor)
                        cont++;
                        const newone = document.createElement("div")
                        newone.className = "data_table_flex";
                        const first = document.createElement("div")
                        first.className = "data_image_flex";
                        const second = document.createElement("div")
                        second.className = "data_image_flex";
                        const third = document.createElement("div")
                        third.className = "data_image_flex";


                        const link = document.createElement("a")
                        link.id = apartments1[i].Apartment;
                        link.value = apartments1[i].Apartment;
                        link.onclick =function(){
                            fillPlan(this);
                        }

                        const image = document.createElement("img")
                        image.src = "img/apartments_images/" + apartments1[i].Apartment + ".png"
                        image.id = "apartment_image"+apartments1[i].Apartment;
                        //img.style.display = "block"
                        image.style.width = "400px"
                        image.style.height = "400px"
                        const faceapto = document.createElement("p")
                        faceapto.className = "text";
                        facingtd.id = "facing"
                        faceapto.value = "facing"+apartments1[i].Facing;
                        faceapto.innerHTML = apartments1[i].Facing
                        const statusapto = document.createElement("p")
                        statusapto.className = "text";
                        statusapto.id = "status"+apartments1[i].Available;
                        statusapto.value = apartments1[i].Available;
                        statusapto.innerHTML = apartments1[i].Available;;
                        console.log("contador = "+cont);
                        if (cont <=3){
                            principal.appendChild(newone)
                            newone.appendChild(first)
                            newone.appendChild(second)
                            newone.appendChild(third)
                            first.appendChild(link)
                            link.appendChild(image)
                            second.appendChild(faceapto)
                            third.appendChild(statusapto)
                        }
                        if (cont > 3){
                            secondary.appendChild(newone)
                            newone.appendChild(first)
                            newone.appendChild(second)
                            newone.appendChild(third)
                            first.appendChild(link)
                            link.appendChild(image)
                            second.appendChild(faceapto)
                            third.appendChild(statusapto)
                        }
                       
                    } 

                }
            }
    
    }
    function clear_tables() {
        const info = document.getElementById("info");
        const other = document.getElementById("other");
        const half = document.getElementById("half");
        (document.getElementById("price").value = ""),
            (document.getElementById("price").innerHTML = ""),
            (document.getElementById("price").style.backgroundColor = "unset"),
            (document.getElementById("advance_cash").value = ""),
            (document.getElementById("advance_cash").innerHTML = ""),
            (document.getElementById("balance_to_finance").value = ""),
            (document.getElementById("balance_to_finance").innerHTML = ""),
            (document.getElementById("total_investment").value = ""),
            (document.getElementById("total_investment").innerHTML = ""),
            (document.getElementById("discount").value = ""),
            (document.getElementById("discount").innerHTML = ""),
            
                null != info &&
                null != other &&
                null != half &&
                (document.getElementById("info").remove(0),document.getElementById("other").remove(0),document.getElementById("half").remove(0));
    }

    function fillPlan(apto){
        console.log("entre fill plan")
        building = document.getElementById("building").value;
        answer = apto.id;
        id_apto = apto.id;
        console.log("building "+building)
        if ("Select Apartment" != answer) {
            (building = parseInt(building)),
                1 === building && (apartments1 = JSON.parse(JSON.stringify(apartments))),
                2 === building && (apartments1 = JSON.parse(JSON.stringify(apartments2))),
                3 === building && (apartments1 = JSON.parse(JSON.stringify(apartments3))),
                4 === building && (apartments1 = JSON.parse(JSON.stringify(apartments4))),
                5 === building && (apartments1 = JSON.parse(JSON.stringify(apartments5))),
                6 === building && (apartments1 = JSON.parse(JSON.stringify(apartments6)));
            for (var i = 0; i < apartments1.length; i++)
                answer == apartments1[i].Apartment &&
                    ((document.getElementById("price").value = apartments1[i].Price),
                    (document.getElementById("price").innerHTML = Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(apartments1[i].Price)),
                    (document.getElementById("total_investment").value = apartments1[i].Price),
                    (document.getElementById("total_investment").innerHTML = Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(apartments1[i].Price)),
                    null != facing && null != sold && null != image
                        ? (document.getElementById("breakdown").remove(0),
                          document.getElementById("status").remove(0),
                          document.getElementById("main_facing").remove(0),
                          document.getElementById("image").remove(0),
                          (main_mage.id = "image"),
                          (main_mage.value = "image"),
                          (main_mage.rowspan = 1),
                          (main_mage.innerHTML = ""),
                          (main.id = "main_facing"),
                          (main.value = "main_facing"),
                          (main.rowspan = 1),
                          (main.innerHTML = ""),
                          (status.id = "status"),
                          (status.value = "status"),
                          (status.rowspan = 1),
                          (status.innerHTML = ""),
                          tbody.insertBefore(status, first),
                          (sold = document.getElementById("status")),
                          tbody.insertBefore(main, sold),
                          (facing = document.getElementById("main_facing")),
                          tbody.insertBefore(main_mage, facing),
                          (image = document.getElementById("image")),
                          (opt.id = "breakdown"),
                          (opt.value = "breakdown"),
                          (opt.colSpan = 3),
                          (opt.className = "black_background"),
                          (opt.innerHTML = "Area Breakdown for " + apartments1[i].Apartment + " in building " + building + " Type " + apartments1[i].Type),
                          (facingtd.id = "facing"),
                          (facingtd.value = "facing"),
                          (facingtd.colSpan = 3),
                          (facingtd.innerHTML = apartments1[i].Facing),
                          "Available" == apartments1[i].Available && (availabletd.style.backgroundColor = "Green"),
                          "Sold" == apartments1[i].Available && (availabletd.style.backgroundColor = "Red"),
                          "Reserved" == apartments1[i].Available && (availabletd.style.backgroundColor = "Orange"),
                          (availabletd.id = ""),
                          (availabletd.value = ""),
                          (availabletd.style.textAlign = "Center"),
                          (availabletd.colSpan = 3),
                          (availabletd.innerHTML = apartments1[i].Available),
                          (pictureth.id = "picture"),
                          (pictureth.value = "picture"),
                          (pictureth.style.width = "400px"),
                          (pictureth.style.height = "400px"),
                          (pictureth.colSpan = 3),
                          (pictureth.innerHTML = ""),
                          /*(img.src = "//img1.wsimg.com/isteam/ip/6306d63f-c18a-41b6-b82a-c1a90cd2a78a/" + answer + ".png"),*/
                          (img.src = "img/apartments_images/" + answer + ".png"),
                          (img.id = "apartment_image"),
                          (img.style.display = "block"),
                          (img.style.width = "100%"),
                          (img.style.height = "100%"),
                          pictureth.appendChild(img),
                          area_break.appendChild(opt),
                          facing.appendChild(facingtd),
                          sold.appendChild(availabletd),
                          image.appendChild(pictureth))
                        : ((main_mage.id = "image"),
                          (main_mage.value = "image"),
                          (main_mage.rowspan = 1),
                          (main_mage.innerHTML = ""),
                          (main.id = "main_facing"),
                          (main.value = "main_facing"),
                          (main.rowspan = 1),
                          (main.innerHTML = ""),
                          (status.id = "status"),
                          (status.value = "status"),
                          (status.rowspan = 1),
                          (status.innerHTML = ""),
                          
                          (sold = document.getElementById("status")),
                          (facing = document.getElementById("main_facing")),
                          (image = document.getElementById("image")),
                          (opt.id = "breakdown"),
                          (opt.value = "breakdown"),
                          (opt.colSpan = 3),
                          (opt.className = "black_background"),
                          (opt.innerHTML = "Area Breakdown for " + apartments1[i].Apartment + " in building " + building + " Type " + apartments1[i].Type),
                          (facingtd.id = "facing"),
                          (facingtd.value = "facing"),
                          (facingtd.colSpan = 3),
                          (facingtd.innerHTML = apartments1[i].Facing),
                          "Available" == apartments1[i].Available && (availabletd.style.backgroundColor = "Green"),
                          "Sold" == apartments1[i].Available && (availabletd.style.backgroundColor = "Red"),
                          "Reserved" == apartments1[i].Available && (availabletd.style.backgroundColor = "Orange"),
                          (availabletd.id = ""),
                          (availabletd.value = ""),
                          (availabletd.style.textAlign = "Center"),
                          (availabletd.colSpan = 3),
                          (availabletd.innerHTML = apartments1[i].Available),
                          (pictureth.id = "picture"),
                          (pictureth.value = "picture"),
                          (pictureth.style.width = "400px"),
                          (pictureth.style.height = "400px"),
                          (pictureth.colSpan = 3),
                          (pictureth.innerHTML = ""),
                          /*(img.src = "//img1.wsimg.com/isteam/ip/6306d63f-c18a-41b6-b82a-c1a90cd2a78a/" + answer + ".png"),*/
                          (img.src = "img/apartments_images/" + answer + ".png"),
                          (img.id = "apartment_image"),
                          (img.style.display = "block"),
                          (img.style.width = "100%"),
                          (img.style.height = "100%")));
        } else clear_tables();
        calculation();
            

    }
    
    function myFunction(array, element) {
        for (var i = 0; i < array.length; i++) {
            var opt = document.createElement("option");
            (opt.value = array[i]), (opt.innerHTML = array[i]), element.appendChild(opt);
        }
    }
    function myFunctionBuilding(array, element) {
        clear_tables();
        for (var i = 0; i < array.length; i++) {
            var opt = document.createElement("option");
            if (0 != i){
                ((opt.value = array[i].Building), (opt.innerHTML = array[i].Building), element.appendChild(opt))
                
            }else{
                ((opt.value = array[i].Selector), (opt.innerHTML = array[i].Selector), element.appendChild(opt))
                
            }
                
        }
    }
    function myFunctionAp(array, element) {
        for (var i = 0; i < array.length; i++) {
            var opt, opt;
            if(0 != i){
                (((opt = document.createElement("option")).value = array[i].Floor), (opt.innerHTML = array[i].Floor), element.appendChild(opt))
               
            }else{
            (((opt = document.createElement("option")).value = array[i].Selector), (opt.innerHTML = array[i].Selector), element.appendChild(opt));
            }
        }
    }
    function sendBuilding() {

        for (; floor.options.length > 0; ) floor.remove(0);
        clear_tables();
        let answer = document.getElementById("building").value;
        1 == answer && myFunctionAp(buildingsfloors, floor),
            2 == answer && myFunctionAp(buildingsfloors, floor),
            3 == answer && myFunctionAp(buildingsfloors, floor),
            4 == answer && myFunctionAp(buildingsfloors, floor),
            5 == answer && myFunctionAp(buildingsfloors, floor),
            6 == answer && myFunctionAp(buildingsfloors, floor);
    }
    function calculation() {
        let percentage = document.getElementById("advance_percentage").value,
            apt_discount = (document.getElementById("discount").value * document.getElementById("price").value) / 100,
            price_new = document.getElementById("price").value - apt_discount;
        if ("Select Building" != document.getElementById("building").value && "Select Apartment" != document.getElementById("apartment").value)
            if (document.getElementById("discount").value >= 0 && document.getElementById("discount").value <= 15 && document.getElementById("discount").value >= "") {
                if (null != document.getElementById("price").value && "" != document.getElementById("price").value)
                    if (percentage <= 100 && percentage >= 0) {
                        var cash = (price_new * percentage) / 100,
                            balance_finance = price_new - cash,
                            discount = (document.getElementById("discount").value * price_new) / 100,
                            monto,
                            tasa = 3.8 / 12 / 100,
                            meses = 60,
                            elevado,
                            top,
                            bottom,
                            monthly_fee = (tasa * balance_finance) / (1 - Math.pow(1 + tasa, -60));
                        (document.getElementById("advance_cash").value = cash),
                            (document.getElementById("advance_cash").innerHTML = Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(cash)),
                            (document.getElementById("balance_to_finance").value = balance_finance),
                            (document.getElementById("balance_to_finance").innerHTML = Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(balance_finance)),
                            (document.getElementById("monthly_fee").value = monthly_fee),
                            (document.getElementById("monthly_fee").innerHTML = Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(monthly_fee)),
                            (document.getElementById("total_discount").value = apt_discount),
                            (document.getElementById("total_discount").innerHTML = Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(apt_discount)),
                            (document.getElementById("total_investment").value = price_new),
                            (document.getElementById("total_investment").innerHTML = Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(price_new));
                    } else
                        (document.getElementById("advance_cash").value = ""),
                            (document.getElementById("advance_cash").innerHTML = ""),
                            (document.getElementById("balance_to_finance").value = ""),
                            (document.getElementById("balance_to_finance").innerHTML = ""),
                            alert("You need to write a valid percentage");
            } else
                document.getElementById("discount").value < 0
                    ? (alert("Discount can not be less than 0%"),
                      (document.getElementById("discount").value = ""),
                      (document.getElementById("discount").innerHTML = ""),
                      (document.getElementById("total_discount").value = ""),
                      (document.getElementById("total_discount").innerHTML = ""),
                      (document.getElementById("total_investment").value = ""),
                      (document.getElementById("total_investment").innerHTML = ""),
                      myFunctionFill())
                    : (alert("Discount can not be more than 15%"),
                      (document.getElementById("discount").value = ""),
                      (document.getElementById("discount").innerHTML = ""),
                      (document.getElementById("total_discount").value = ""),
                      (document.getElementById("total_discount").innerHTML = "")
                      
                      );
        console.log(document.getElementById("apartment").isEmpty)
        console.log(document.getElementById("apartment").value)
            null == id_apto &&
            ((document.getElementById("discount").value = ""),
            (document.getElementById("discount").innerHTML = ""),
            (document.getElementById("total_discount").value = ""),
            (document.getElementById("total_discount").innerHTML = ""),
            (document.getElementById("total_investment").value = ""),
            (document.getElementById("total_investment").innerHTML = ""),
            myFunctionFill(),
            alert("You need to click on the apartment photo")),
            "Select Building" != document.getElementById("building").value &&
                "" == document.getElementById("apartment").value ||
                "Select Floor" === document.getElementById("apartment").value &&
                ((document.getElementById("discount").value = ""),
                (document.getElementById("discount").innerHTML = ""),
                (document.getElementById("total_discount").value = ""),
                (document.getElementById("total_discount").innerHTML = ""),
                (document.getElementById("total_investment").value = ""),
                (document.getElementById("total_investment").innerHTML = ""),
                myFunctionFill(),
                alert("You need to select an apartment")),
            "Select Building" == document.getElementById("building").value &&
                null == document.getElementById("apartment").isEmpty &&
                ((document.getElementById("discount").value = ""),
                (document.getElementById("discount").innerHTML = ""),
                (document.getElementById("total_discount").value = ""),
                (document.getElementById("total_discount").innerHTML = ""),
                (document.getElementById("total_investment").value = ""),
                (document.getElementById("total_investment").innerHTML = ""),
                myFunctionFill(),
                alert("You need to select a building and an apartment"));
    }
    /*myFunction(metrics, select),*/ myFunctionBuilding(buildingsPt, building);
