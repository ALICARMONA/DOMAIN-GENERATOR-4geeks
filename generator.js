let pronoun = ['el','la']; 
let adj = ['verde', 'gigante' ]; 
let noun = ['cosa','carro'];

for (i=0; i<pronoun.length; i++){
	for(j=0; j<adj.length; j++){
		for(k=0; k<noun.length; k++){
			console.log(pronoun[i] + " "+adj[j] + " "+noun [k] );
		}
	}
}