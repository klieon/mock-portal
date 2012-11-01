//document starts - inital drop state
$('document').ready(function(){


		dropOrg(1);
		
	//Get the selection

			

});


function dropOrg(index){
	var html='';
	selected = index;
	html += '<p>Please Choose an Organization</p>';
//	html += '<select ref="countries" id="org">';
	html +='<form id="org_selection" class="jqtransform clearfix" method="post" action=""><select ref="countries" id="org">';
	for (j=0; j<4; j++){
		html +='<option value="' + CONFIG.orgs[j] + '">' + CONFIG.orgs[j] + '</option>';
	}
	html +='</select></form>';	
//	console.log(html);
	console.log('dropOrg');
	$('#org_selection').empty();
	$('#org_selection').hide().append(html).fadeIn();
}

function dropCountry(index){
	var html='';
	html += '<p>Please Choose an Country</p>';
//	html += '<select ref="branches" id="org">';
	html +='<form id="org_selection" class="jqtransform clearfix" method="post" action=""><select ref="branches" id="org">';
	for (j=0; j<5; j++){
		html +='<option value="' + CONFIG.countries[j] + '">' + CONFIG.countries[j] + '</option>';
	}
	html +='</select></form>';
//	console.log(html);
	console.log('dropCountry');
	$('#org_selection').empty();
	$('#org_selection').hide().append(html).fadeIn();
}

function dropBranches(index){
	var html='';
	html += '<p>Please Choose an Branch</p>';
//	html += '<select ref="" class="5201" id="org">';
	html +='<form id="org_selection" class="jqtransform clearfix" method="post" action=""><select ref="" class="5201" id="org">';
	for (j=0; j<5; j++){
		html +='<option value="' + CONFIG.branches[j] + '">Branch ' + j + '</option>';
	}
	html +='</select></form>';
//	console.log(html);
	console.log('dropBranches');
	$('#org_selection').empty();
	$('#org_selection').hide().append(html).fadeIn();
}

// This block writes out the dynamic org dropdown
function dropblock(token, type ){
var ref;
var nme;
var length;
	switch(type){
		case '1': 
				ref = 'countries';
				nme = 'Organization';
				length = '4';			
		break;
		case '2': 
				ref = 'branches';
				nme = 'Country';			
				length = '4';			
		break;

		case '3': 
				ref = '';
				nme = 'Branch';				
				length = '4';			
		break;
	}

	var html='';
	html += '<p>Please Choose a ' + nme + '</p>';
	html +='<a href="#"></a><form id="org_selection" class="jqtransform clearfix" method="post" action=""><select ref="' + ref + '" id="org">';

	for (j=0; j<length; j++){
		html +='<option value="' + j + '">' + token[j] + '</option>';
	}

	html +='</select></form>';

	console.log('name:' + nme + ' length:' + length + ' ref:' + ref );
	console.log(html);
	$('#box20').empty();
	$('#box20').append(html);
}

// listening for dropdown changes - acts accordingly

      $('.5201').live('change', function () {
console.log('5201');
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
      
       
$(function()
{
	$('#country').chainSelect('#state','http://localhost/jquerychained/combobox.php',
	{ 
		before:function (target) //before request hide the target combobox and display the loading message
		{ 
			$("#loading").css("display","block");
			$(target).css("display","none");
		},
		after:function (target) //after request show the target combobox and hide the loading message
		{ 
			$("#loading").css("display","none");
			$(target).css("display","inline");
		}
	});
	$('#state').chainSelect('#city','http://localhost/jquerychained/combobox.php',
	{ 
		before:function (target) 
		{ 
			$("#loading").css("display","block");
			$(target).css("display","none");
		},
		after:function (target) 
		{ 
			$("#loading").css("display","none");
			$(target).css("display","inline");
		}
	});
	$('#city').chainSelect('#report','http://localhost/jquerychained/combobox.php',
	{ 
		before:function (target) 
		{ 
			$("#loading").css("display","block");
			$(target).css("display","none");
		},
		after:function (target) 
		{ 
			$("#loading").css("display","none");
			$(target).css("display","inline");
			$("#link").css("display","inline");

		}
	});

});



