// elem = HTML container of checkboxes
// attr = desired checkbox attribute to collect
// Returns an array of the attributes of the checked checkboxes.
module.exports = function(elem,attr){
	var output = [];
	//only get checkboxes with requested attribute
	var checkboxes = $(elem).find('input[type=checkbox][checked]['+attr+']');	
	$('input[type=checkbox][checked]['+attr+']').each(function() {
		var item = $(this).attr(attr);
		output.push(item);
	});
	return output;
};