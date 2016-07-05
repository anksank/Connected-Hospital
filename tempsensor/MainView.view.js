sap.ui.jsview("tempsensor.MainView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tempsensor.MainView
	*/ 
	getControllerName : function() {
		return "tempsensor.MainView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tempsensor.MainView
	*/ 
	createContent : function(oController) {
		
			var aControls = [];
	      
//	       aControls.push(oButton.attachPress(oController.doIt));
//	       return aControls;
	       
	       
//	        var oSplitterV = new sap.ui.commons.Splitter("splitterV"); 
//			oSplitterV.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
//			oSplitterV.setSplitterPosition("60%");
//			oSplitterV.setMinSizeFirstPane("20%");
//			oSplitterV.setMinSizeSecondPane("20%");
//			oSplitterV.setWidth("100%");
//			oSplitterV.setHeight("80%");
//
//			//adding Labels to both panes
//			var oLabel1 = new sap.ui.commons.Label({text: ""});
//			//oSplitterV.addFirstPaneContent(oLabel1);	
//			var oLabel2 = new sap.ui.commons.Label({text: ""});
			//oSplitterV.addSecondPaneContent(oLabel2);		

			

			
			//Create a layout instance
			var oBeach = this.getMainImageLayout();//new sap.ui.commons.layout.AbsoluteLayout({width: "1103px", height: "659px"});

			//Set the beach image, descriptions, ...
			//oBeach.addContent(new sap.ui.commons.Image({src: "images/background.png"}));
			
	
			//oSplitterV.addFirstPaneContent(oBeach);
			
			var oText = new sap.ui.commons.TextField({value:"Edward"});
			var oLabel = new sap.ui.commons.Label({text:"Name:", labelFor: oText});
			var oButton = new sap.ui.commons.Button({text:"Submit", tooltip:"Submit value"});
			var vLayout = new sap.ui.layout.VerticalLayout("Layout1", {
				content: [oLabel, oText, oButton]
			});
			
	
		
			var oSAPLogo = new sap.ui.commons.Image({
				src : "images/saplogo.png",
				alt : "alternative text for image",
				width :"110px",
				height: "60px"
				});
			
			var hospitalLogo = new sap.ui.commons.Image({
				src : "images/hospital.png",
				alt : "alternative text for image",
				width :"120px",
				height: "100px"
				});
			
			var blankLogo = new sap.ui.commons.Image({
				src : "images/blank2.gif",
				alt : "alternative text for image",
				width :"400px",
				height: "100px"
				});
			
			var liveLongLogo = new sap.ui.commons.Image({
				src: "images/livelong.gif", 
				
			});
			
			var mainMLayout = new sap.ui.commons.layout.MatrixLayout({
				id : "mainMLayout",
				layoutFixed : true,
				columns : 2,
				width : "100%",
				widths : [ "80%", "20%" ]
				});
 

			var topMLayout = new sap.ui.commons.layout.MatrixLayout({
				id : "topMLayout",
				layoutFixed : true,
				columns : 3,
				width : "100%",
				height : "100px",
				widths : [ "10%", "50%","40%"]
				});
			
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
	               height: '100px' });
	        var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
	        oCell1.addContent(hospitalLogo);
	        
	        var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
	         
	        
	        var oTV2 = new sap.ui.commons.TextView({
	               text : 'Long Live Hospital'}).addStyleClass("boldStyle");
	        //oCell2.addContent(oTV2);
	        oCell2.addContent(liveLongLogo);
	        
	        
	        var oCell3= new sap.ui.commons.layout.MatrixLayoutCell();
	        oCell3.addContent(blankLogo);
	        var oCell4 = new sap.ui.commons.layout.MatrixLayoutCell();
	        oCell3.addContent(oSAPLogo);
	        
	
	        
	        
	        oRow.addCell(oCell1);
	        oRow.addCell(oCell2);
	        oRow.addCell(oCell3);
	        oRow.addCell(oCell4);
	        topMLayout.addRow(oRow);
			
			
			//topMLayout.createRow({height: "100px"}, oSAPLogo);
			
			
			var fieldValueLayout = new sap.ui.commons.layout.MatrixLayout({
				id : 'matrix3',
				layoutFixed : true,
				columns : 4,
				width : '100%',
				widths : ['30%', '30%', '20%','20%'] });

			//row1
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
				id : 'Row-0',
				height: '35px' });

			fieldValueLayout.addRow(oRow);

			oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan : 4 });
			oTV = new sap.ui.commons.TextView({
				text : 'Details 1',
				design : sap.ui.commons.TextViewDesign.H2 });

			oCell.addContent(oTV);
			oRow.addCell(oCell);

			//row2
			var field1 = new sap.ui.commons.TextView({
				text : 'field1',
				design : sap.ui.commons.TextViewDesign.H1 });
			
			var data1 = new sap.ui.commons.TextView({
				text : 'data1',
				design : sap.ui.commons.TextViewDesign.H1 });
			
			
			var status1 = new sap.ui.commons.Image({
				src : "images/status_green.png",
				alt : "alternative text for image"
				});
			
			var status2 = new sap.ui.commons.Image({
				src : "images/status_green.png",
				alt : "alternative text for image"
				});
			
			fieldValueLayout.createRow({height: "50px"}, field1, data1, status1,status2 );

			
			
			
			var rightPanelLayout = this.createRightPanel();
			
		var logoLayout = new sap.ui.layout.VerticalLayout({
				content: [oSAPLogo]
			});
			
			
			mainMLayout.createRow({height: "2%"}, topMLayout, logoLayout);
			mainMLayout.createRow({height: "70%"}, oBeach, rightPanelLayout );
			
			
			
			
			aControls.push(mainMLayout);
			 return aControls;
	       
	       
	},
	
	createRightPanel: function() {
		var rightPanelLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 1,
			width : '100%'});

		//add heading
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
			height: '30px' });
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		var oTV = new sap.ui.commons.TextView({
			text : 'Equipment Details',
			design : sap.ui.commons.TextViewDesign.H3 });
		oCell.addContent(oTV);
		oRow.addCell(oCell);
		rightPanelLayout.addRow(oRow);
		
		//add divider
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oCell.addContent(new sap.ui.commons.HorizontalDivider());
		rightPanelLayout.createRow(oCell);
		
		//add chart
		var details1 = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 1,
			width : '100%'});
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
			height: '200px' });
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		
		
		var data = [
		            {"Week (Daily Average)" :"10",temperature:0.5,temp2:0.5},
                    {"Week (Daily Average)" :"20",temperature:0.2,temp2:0.8},
                    {"Week (Daily Average)" :"30",temperature:0.1,temp2:1},
                    {"Week (Daily Average)" :"40",temperature:0.3,temp2:0.9},
                    {"Week (Daily Average)" :"50",temperature:0.6,temp2:0.5},
                    {"Week (Daily Average)" :"60",temperature:0.9,temp2:0.3}
             ];
var axis = 'Week (Daily Average)';
var measure1 = 'temperature';
var measure2 = 'temp2';

 	
			
			var chartLayout = this.createChart(data, axis, measure1, null);
		
		
		var cLayout = new sap.ui.layout.VerticalLayout({
			content: [chartLayout]
			});
				
			
		oCell.addContent(cLayout);
		oRow.addCell(oCell);
		rightPanelLayout.addRow(oRow);
		
		//add details1 heading
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
			height: '20px' });
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		var oTV = new sap.ui.commons.TextView({
			text : 'Equipment Statistics',
			design : sap.ui.commons.TextViewDesign.H3 });
		oCell.addContent(oTV);
		oRow.addCell(oCell);
		rightPanelLayout.addRow(oRow);
		
		
		//add details1 matrix
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
			height: '200px' });
		oCell.addContent(this.getDetails1Matrix());
		oRow.addCell(oCell);
		rightPanelLayout.addRow(oRow);
		
		
		//add details2 heading
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
			height: '20px' });
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		var oTV = new sap.ui.commons.TextView({
			text : 'Equipment Details',
			design : sap.ui.commons.TextViewDesign.H3 });
		oCell.addContent(oTV);
		oRow.addCell(oCell);
		rightPanelLayout.addRow(oRow);
		
		
		//add details2 matrix
		var oRow1 = new sap.ui.commons.layout.MatrixLayoutRow({
			height: '200px' });
		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
		oCell1.addContent(this.getDetails2Matrix());
		oRow1.addCell(oCell1);
		rightPanelLayout.addRow(oRow1);
		
		return rightPanelLayout;
	},
	
	

    getDetails1Matrix:function(){
        var rightPanelLayout = new sap.ui.commons.layout.MatrixLayout({
               layoutFixed : true,
               columns : 2,
               width : '80%'});
        
        var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
               height: '20px' });
        var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV1 = new sap.ui.commons.TextView({
               text : 'Last Fluctuation Detected:'});
        oCell1.addContent(oTV1);
        
        var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV2 = new sap.ui.commons.TextView({
               text : '03/03/2015 04:43:125'});
        oCell2.addContent(oTV2);
        
        oRow.addCell(oCell1);
        oRow.addCell(oCell2);
        rightPanelLayout.addRow(oRow);
                                            
                                            var oRow2 = new sap.ui.commons.layout.MatrixLayoutRow({
               height: '20px' });
        var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV3 = new sap.ui.commons.TextView({
               text : 'Last Deviation:'});
        oCell3.addContent(oTV3);
        
        var oCell4 = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV4 = new sap.ui.commons.TextView({
               text : '-1°C'});
        oCell4.addContent(oTV4);
        
        oRow2.addCell(oCell3);
        oRow2.addCell(oCell4);
        rightPanelLayout.addRow(oRow2);
                                            
                                            
                                            var oRow3 = new sap.ui.commons.layout.MatrixLayoutRow({
               height: '20px' });
        var oCell5 = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV5 = new sap.ui.commons.TextView({
               text : 'Fluctuation Rate:'});
        oCell5.addContent(oTV5);
        
        var oCell6 = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV6 = new sap.ui.commons.TextView({
               text : '-0.02°C per minute'});
        oCell6.addContent(oTV6);
        
        oRow3.addCell(oCell5);
        oRow3.addCell(oCell6);
        rightPanelLayout.addRow(oRow3);
                                            
        var vlayout = new sap.ui.layout.VerticalLayout({
        content: [rightPanelLayout]
        });
        
        return vlayout;
        
 },

 
 getDetails2Matrix:function(){
     var rightPanelLayout = new sap.ui.commons.layout.MatrixLayout({
            layoutFixed : true,
            columns : 2,
            width : '80%'});
     
     var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '20px' });
     var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV1 = new sap.ui.commons.TextView({
            text : 'Machine ID:'});
     oCell1.addContent(oTV1);
     
     var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV2 = new sap.ui.commons.TextView({
            text : 'MACH_PD_02'});
     oCell2.addContent(oTV2);
     
     oRow.addCell(oCell1);
     oRow.addCell(oCell2);
     rightPanelLayout.addRow(oRow);
                                         
                                         var oRow2 = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '20px' });
     var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV3 = new sap.ui.commons.TextView({
            text : 'Manufacturer:'});
     oCell3.addContent(oTV3);
     
     var oCell4 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV4 = new sap.ui.commons.TextView({
            text : 'GE'});
     oCell4.addContent(oTV4);
     
     oRow2.addCell(oCell3);
     oRow2.addCell(oCell4);
     rightPanelLayout.addRow(oRow2);
                                         
                                         
                                         var oRow3 = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '20px' });
     var oCell5 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV5 = new sap.ui.commons.TextView({
            text : 'Location:'});
     oCell5.addContent(oTV5);
     
     var oCell6 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV6 = new sap.ui.commons.TextView({
            text : 'Pediatric Ward'});
     oCell6.addContent(oTV6);
     
     oRow3.addCell(oCell5);
     oRow3.addCell(oCell6);
     rightPanelLayout.addRow(oRow3);
                                         
                                         var oRow4 = new sap.ui.commons.layout.MatrixLayoutRow({
           height: '20px' });
     var oCell7 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV7 = new sap.ui.commons.TextView({
            text : 'Last Serviced:'});
     oCell7.addContent(oTV7);
     
     var oCell8 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV8 = new sap.ui.commons.TextView({
            text : '14/Nov/2014'});
     oCell8.addContent(oTV8);
     
     oRow4.addCell(oCell7);
     oRow4.addCell(oCell8);
     rightPanelLayout.addRow(oRow4);
                                         

                                       
                                         var oRow5 = new sap.ui.commons.layout.MatrixLayoutRow({
            height: '20px' });
     var oCell9 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV9 = new sap.ui.commons.TextView({
            text : 'Service Due By:'});
     oCell9.addContent(oTV9);
     
     var oCell10 = new sap.ui.commons.layout.MatrixLayoutCell();
     var oTV10 = new sap.ui.commons.TextView({
            text : '13/Nov/2015'});
     oCell10.addContent(oTV10);
     
     oRow5.addCell(oCell9);
     oRow5.addCell(oCell10);
     rightPanelLayout.addRow(oRow5);
     
     var vlayout = new sap.ui.layout.VerticalLayout({
     content: [rightPanelLayout]
     });
     
     return vlayout;
     
},


	
createChart: function(data,axis,measure1,measure2)
{
       if(measure2)
              {
              // some business data 
              var oModel = new sap.ui.model.json.JSONModel({
                    businessData : data
              });           

           // A Dataset defines how the model data is mapped to the chart 
              var oDataset = new sap.viz.ui5.data.FlattenedDataset({

                    // a Bar Chart requires exactly one dimension (x-axis) 
                    dimensions : [ 
                                         {
                                               axis : 1, // must be one for the x-axis, 2 for y-axis
                                               name : axis, 
                                               value : '{'+axis+'}'
                                         } 
                                  ],

                                  // it can show multiple measures, each results in a new set of bars in a new color 
                                  measures : [ 
                                      // measure 1
                                         {
                                               name : "", // 'name' is used as label in the Legend 
                                               value : '{'+measure1+'}' // 'value' defines the binding for the displayed value   
                                         },
                                         {
                                               name : "", 
                                               value : '{'+measure2+'}'
                                         } 
                                  ],
                    
                    // 'data' is used to bind the whole data collection that is to be displayed in the chart 
                    data : {
                           path : "/businessData"
                    }
                    
              });
              
              
              
              
              }
       else
              {
              // some business data 
              var oModel = new sap.ui.model.json.JSONModel({
                    businessData : data
              });           

           // A Dataset defines how the model data is mapped to the chart 
              var oDataset = new sap.viz.ui5.data.FlattenedDataset({

                    // a Bar Chart requires exactly one dimension (x-axis) 
                    dimensions : [ 
                                         {
                                               axis : 1, // must be one for the x-axis, 2 for y-axis
                                               name : axis, 
                                               value : '{'+axis+'}'
                                         } 
                                  ],

                                  // it can show multiple measures, each results in a new set of bars in a new color 
                                  measures : [ 
                                      // measure 1
                                         {
                                               name : "", // 'name' is used as label in the Legend 
                                               value : '{'+measure1+'}' // 'value' defines the binding for the displayed value   
                                         } 
                                  ],
                    
                    // 'data' is used to bind the whole data collection that is to be displayed in the chart 
                    data : {
                           path : "/businessData"
                    }
                    
              });
              
              }


    // create a Bar chart
    // you also might use Combination, Line, StackedColumn100, StackedColumn or Column
    // for Donut and Pie please remove one of the two measures in the above Dataset.  
       var oBarChart = new sap.viz.ui5.Line({
              width : "300px",
              height : "200px",
              plotArea : {
              //'colorPalette' : d3.scale.category20().range()
              },
              title : {
                    visible : true,
                    text : 'Temperature Range'
              },
              dataset : oDataset
       });

    // attach the model to the chart and display it
       oBarChart.setModel(oModel);

       //return oBarChart;
       var vLayout = new sap.ui.layout.VerticalLayout({width:"1000px", height: "1000px"});
       vLayout.addContent(oBarChart);
       return vLayout;

    // some business data 
       
},
    
    getMainImageLayout: function(){
    	var calloutsArray = [];
        var equipmentArray = ["Ice Line Refrigerator", "Drug Refrigerator", "Blood Platelets Storage", "Photo Therapy", "Incubators"];
        var iconArray = ["blank.gif", "red.gif", "blank.gif","yellow.gif", "blank.gif" ];
        var temperatureArray = ["17°C", " 10.2°C"," 6°C","10°C","  16.5°C" ];
        var rangeValue = [" "," "," ", "10-15°C", "16-18°C" ];

        //oImage.placeAt("sample1");
        //return oImage;

        var currentTempLabel = new sap.ui.commons.Label({text:"Current Temperature: "});
        var tempRangeLabel = new sap.ui.commons.Label({text: "Temperature Range: "});
        
 
        var infoLayout = new sap.ui.layout.VerticalLayout({
               content: [currentTempLabel, tempRangeLabel, oImage]
        });

        //return infoLayout;

        //Create a layout instance


        for(var i = 0; i < 5; i++){
               var oBeach = new sap.ui.commons.layout.AbsoluteLayout({width: "100%", height: "100%"});

               //Set the beach image, descriptions, ...
               var oImage = new sap.ui.commons.Image({width: "220px", height: "185px"});
               oImage.setSrc("images/calloutNew.gif");
          
               oImage.setDecorative(false);

               oBeach.addContent(oImage);
               /*oBeach.addContent(
                            new sap.ui.commons.TextView({text: 'Welcome to Sunny Beach', design: sap.ui.commons.TextViewDesign.H1, textAlign: "Center"}),
                            {left: "0px", right: "0px", top: "5px"}
               );
               oBeach.addContent( 
                            new sap.ui.commons.TextView({text: 'Please reserve your canvas\nchair by type in your name\nand clicking the desired loaction. ', textAlign: "Left"}),
                            {left: "20px", top: "20px"}
               );*/

               //Helper function to create a chair on the beach
               var addLabels = function(oPosition){

                     var equipName = new sap.ui.commons.Label({text:equipmentArray[i], width :"200px" }).addStyleClass("equipmentName");
                     var currentTempLabel = new sap.ui.commons.Label({text: temperatureArray[i]}).addStyleClass("equipmentName");
                     var tempRangeLabel = new sap.ui.commons.Label({text: rangeValue[i], width :"200px"}).addStyleClass("equipmentName");
                     
                     
                     var temperatureLayout = new sap.ui.layout.HorizontalLayout();
                     var tempImage = new sap.ui.commons.Image({src: "images/" + iconArray[i],width:"20px",height:"20px"});
                     temperatureLayout.addContent(currentTempLabel);
                     temperatureLayout.addContent(tempImage);
                     
                     var simpleLayout = new sap.ui.layout.VerticalLayout();
                     simpleLayout.addContent(equipName);
                     simpleLayout.addContent(temperatureLayout);
                     simpleLayout.addContent(tempRangeLabel);


                     oBeach.addContent(simpleLayout, oPosition);
               };

               //Add the chairs using the helper function
               addLabels({left: "45px", top: "60px"});

               calloutsArray.push(oBeach);
        }
        //return oBeach;

        var mainImage = new sap.ui.commons.Image({width:"1200px", height:"700px"});
        mainImage.setSrc("images/hospital_big.png");
        mainImage.setDecorative(false);

        var mainImageLayout = new sap.ui.commons.layout.AbsoluteLayout({width:"1200px", height:"700px"});
        mainImageLayout.addContent(mainImage);

        var addCallouts = function(oPosition, iPrice){
               //var oImage = new sap.ui.commons.Image({src: "images/beach_free.png", decorative: false, tooltip: iPrice+"$ per hour"});
               /*var doReservation = function(){
                     if(!oNameInput.getValue()){
                            alert("Please type in your name.");
                            return;
                     }
                     oImage.setSrc("images/beach_occupied.png");
                     alert("Thank you. Chair is reserved for "+oNameInput.getValue());
                     oImage.detachPress(doReservation);
               };
               oImage.attachPress(doReservation); */
               mainImageLayout.addContent(calloutsArray[iPrice], oPosition);
        };

        addCallouts({left: "180px", top: "80px"}, 0);
        addCallouts({left: "782px", top: "85px"}, 1);
        addCallouts({left: "470px", top: "20px"}, 2);
        addCallouts({left: "250px", top: "230px"}, 3);
        addCallouts({left: "635px", top: "225px"}, 4);
        return mainImageLayout;
    }



});
