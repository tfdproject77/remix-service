  function docSearch() {
    a = document.location;
	questionIndex = a.indexOf("?");
	if ( questionIndex > 0 ) {
	  search = a.substring(questionIndex, a.length);
	  return search;
	}
    return "";
  }
  function go(a){
	target = a + docSearch();
	document.location = target;
  }
  function getProp(name, defaultValue) {
    a = docSearch();
	val = defaultValue;
	if ( a != null ) {
	  ni = a.indexOf(name + "=");
	  if ( ni >= 0 ) {
	    start = a.indexOf("=", ni) + 1;
		end = a.indexOf("&", start);
		if ( 0 > end ) {
		  end = a.length;
		}
		val = a.substring(start, end);
	  }
	}
	return val;
  }

function jackRatingClickDone() {
  go(getProp("JackRatingTarget", "Games.html"));
}

function doomRatingClickDone() {
  go(getProp("DoomRatingTarget", "Games.html"));
}