function filterReposts(){
	var allPosts = document.getElementsByClassName("soundList__item");
	var post;
	for (var i = 0; i < allPosts.length; i++){

		if(allPosts[i].getElementsByClassName("soundContext__repost").length>0) {
			//console.log(allPosts[i]);
			allPosts[i].parentNode.removeChild(allPosts[i]);
			i--;
		}
	}
}

function remove(item){
	if(item.getElementsByClassName("soundContext__repost").length>0){
		item.parentNode.removeChild(post);	
	}
}

setInterval(filterReposts,5000);