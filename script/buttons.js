	enabled = true;

	function disable(){
		if(enabled){
		enabled = false;
			var smiles = document.getElementsByTagName('img');
			for (i = 0; i < smiles.length; i++) {
				smiles[i].src = smiles[i].src.replace('.svg','_disable.svg');
			}
			
			setTimeout(function(){enable()}, 1500);
		}
	}
	
	function enable(){
		var smiles = document.getElementsByTagName('img');
		for (i = 0; i < smiles.length; i++) {
			smiles[i].src = smiles[i].src.replace('_disable.svg','.svg');
		}
		
		enabled = true;
	}