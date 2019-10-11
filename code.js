	enabled = true;
	function disable(vote){
		if(enabled){
		enabled = false;
			var smiles = document.getElementsByTagName('img');
			for (i = 0; i < smiles.length; i++) {
				smiles[i].src = smiles[i].src.replace('.svg','_disable.svg');
				smiles[i].style.display = "none";
				document.getElementById('thanks').style.display = "";
            }
            
            var xhttp = new XMLHttpRequest();

            xhttp.open("GET", "https://docs.google.com/forms/d/e/1FAIpQLSd-BtSXkR0tJtlwOcj9nvnDY50ouXejYCybZFP4Hz9h8iM9Eg/viewform?usp=pp_url&entry.746412578=" + vote, true);
            xhttp.send();
			
			setTimeout(function(){enable()}, 500);
		}
	}
	
	function enable(){
		var smiles = document.getElementsByTagName('img');
		for (i = 0; i < smiles.length; i++) {
			smiles[i].src = smiles[i].src.replace('_disable.svg','.svg');
			document.getElementById('thanks').style.display = "none";
			smiles[i].style.display = "";
			
		}
		
		enabled = true;
	}
