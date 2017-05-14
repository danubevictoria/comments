$(document).ready(function (){
	
	// For simplicity, I put myself as the default user
	var user = {
		firstname: 'Danube',
		lastname: 'Phan',
		emailaddress: 'danubevictoria@gmail.com',
		profile: 'images/profile.png'
	}

	// When the user enters in text in the comment box and clicks the "Add comment" button
	// Add the comment to a list of comments
	function addComment() {

		// save the comment that the user inputted in the comment box
		var user_input = document.getElementById('comment-box').value;
		console.log(user_input);

		// if the user input a comment, create a li that can be added to the ul in the comment-log
		if (user_input != null) {
			var li = document.createElement('li');
			var profilepic = document.createElement('img');
			var span_comment = document.createElement('span');
			var comment = document.createTextNode(user_input);
			var p_name = document.createElement('p');
			var name = document.createTextNode(user.firstname + ' ' + user.lastname);

			profilepic.setAttribute('src', user.profile);
			span_comment.appendChild(comment);
			p_name.appendChild(name);
			li.appendChild(profilepic);
			li.appendChild(p_name);
			li.appendChild(span_comment);
			li.setAttribute("class", 'list-group-item');

			document.getElementById('comment-list').appendChild(li);
		}
	}

	// when user clicks add comment, add a comment to the log
	$('#add-button').click(function () {
		addComment();
	})
});