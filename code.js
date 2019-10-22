document.getElementById('thanks').style.display = "none";

function disable(vote){
	
	if(enabled){
		console.log(vote);
		enabled = false;

		var smiles = document.getElementsByTagName('img');
		for (i = 0; i < smiles.length; i++) {
			smiles[i].src = smiles[i].src.replace('.svg','_disable.svg');
			smiles[i].onclick = "";
			document.getElementById('thanks').style.display = "";
		}

		fetch("https://docs.google.com/forms/d/e/1FAIpQLSd-BtSXkR0tJtlwOcj9nvnDY50ouXejYCybZFP4Hz9h8iM9Eg/formResponse?usp=pp_url&entry.746412578=" + vote + "&submit=Submit",
		{
			method : "GET",
			mode: "no-cors"
		});


	    	setTimeout(function(){enable()}, 3000);
	}
}
	
function enable(){
    var smiles = document.getElementsByTagName('img');
    for (i = 0; i < smiles.length; i++) {
	smiles[i].src = smiles[i].src.replace('_disable.svg','.svg');
	document.getElementById('thanks').style.display = "none";
    }
    smiles[0].addEventListener('click', function(){disable(1)});
    smiles[1].addEventListener('click', function(){disable(2)});
    smiles[2].addEventListener('click', function(){disable(3)});
    smiles[3].addEventListener('click', function(){disable(4)});
    enabled = true;
}

enable();
