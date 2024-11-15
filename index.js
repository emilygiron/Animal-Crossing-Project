var viz
function initViz(){
		
			 var url = 'http://public.tableau.com/views/Project2_16393538324200/VillagerbyAveragebellssold',
			vizDiv = document.getElementById('vizContainer'),
			 options = {
			   hideTabs: true,
			   hideToolbar: false,
			   width: '900px',
			   height:'700px',
			   onFirstInteractive: function () {
				console.log("Our viz has finished loading")
				workbook = viz.getWorkbook();
				activeSheet = workbook.getActiveSheet();
				console.log(activeSheet.getName())
			    //document.getElementById('vizTitle').innerHTML = activeSheet.getName()
			   }
			 }
			 //create viz object
			  viz = new tableau.Viz(vizDiv, url, options); 
		}
		
function initViz2(){
		
			 var url = 'http://public.tableau.com/views/Project2_16393538324200/AveragebellspervillagerbySpecies',
			vizDiv = document.getElementById('vizContainer'),
			 options = {
			   hideTabs: true,
			   hideToolbar: false,
			   width: '900px',
			   height:'700px',
			   onFirstInteractive: function () {
				console.log("Our viz has finished loading")
				workbook = viz.getWorkbook();
				activeSheet = workbook.getActiveSheet();
				console.log(activeSheet.getName())
			    //document.getElementById('vizTitle').innerHTML = activeSheet.getName()
			   }
			 }
			 //create viz object
			  viz = new tableau.Viz(vizDiv, url, options); 
		}
		
function initViz3(){
		
			 var url = 'http://public.tableau.com/views/Project2_16393538324200/WordCloud',
			vizDiv = document.getElementById('vizContainer'),
			 options = {
			   hideTabs: true,
			   hideToolbar: false,
			   width: '900px',
			   height:'700px',
			   onFirstInteractive: function () {
				console.log("Our viz has finished loading")
				workbook = viz.getWorkbook();
				activeSheet = workbook.getActiveSheet();
				console.log(activeSheet.getName())
			    //document.getElementById('vizTitle').innerHTML = activeSheet.getName()
			   }
			 }
			 //create viz object
			  viz = new tableau.Viz(vizDiv, url, options); 
		}
		
function speciesFilter(value) {
    var sheet = viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync("Species", value, tableau.FilterUpdateType.REPLACE);
	if (value === 'All') {
        sheet.clearFilterAsync("Species")
    } else  {
        sheet.applyFilterAsync("Species",value, tableau.FilterUpdateType.REPLACE);
    }
}		
		
			
function openDiv(evt, divName){
			var i, x, tablinks;
			x = document.getElementsByClassName("tab");
			for(i = 0; i< x.length; i++){
				x[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablink");
			for(i = 0; i< tablinks.length; i++){
				tablinks[i].className = 'tablink' 

			}
			//setting up the active links
			document.getElementById(divName).style.display = "block";
			evt.currentTarget.className += " nav-active";
		}
		
var switchView = function(sheetName) {
    workbook = viz.getWorkbook();
    workbook.activateSheetAsync(sheetName);
    activeSheet = workbook.getActiveSheet();
   // document.getElementById('vizTitle').innerHTML = sheetName
    console.log("changed " + sheetName)
}


function filterPersonality(value)  {
    sheet = viz.getWorkbook().getActiveSheet();
    console.log(sheet)
    if (value === 'All') {
        sheet.clearFilterAsync("Personality")
    } else  {
        sheet.applyFilterAsync("Personality",value, tableau.FilterUpdateType.REPLACE);
    }

}