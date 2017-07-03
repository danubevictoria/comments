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

			// Profile Pic
			var profilepic = document.createElement('img');

			// Username
			var p_name = document.createElement('p');
			var name = document.createTextNode(user.firstname + ' ' + user.lastname);

			// Comment
			var span_comment = document.createElement('span');
			var comment = document.createTextNode(user_input);
	
			// Date & Time
			var today = new Date();
			var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
			var time = today.getHours() + ':' + ("0" + today.getMinutes()).slice(-2);
			var amPM = (today.getHours() > 11) ? "PM" : "AM";
			var p_today = document.createElement('p');
			var post_date = document.createTextNode("Posted " + date + " " + time + " " + amPM);

			// Delete
			var del_icon = document.createElement('i');

			// Adding on to elements
			profilepic.setAttribute('src', user.profile);
			profilepic.setAttribute('class', 'profilepic')
			p_name.appendChild(name);
			span_comment.appendChild(comment);
			p_today.appendChild(post_date);
			del_icon.setAttribute('class', 'icon-remove-sign-2x');
			del_icon.setAttribute('id', 'delete');

			// Adding elements to li
			li.setAttribute("class", 'list-group-item');
			li.appendChild(profilepic);
			li.appendChild(del_icon);
			li.appendChild(p_name);
			li.appendChild(span_comment);
			li.appendChild(p_today);
			p_today.setAttribute("class", 'posted');

			document.getElementById('comment-list').appendChild(li);
		}
	}

	// when user clicks add comment, add a comment to the log
	$('#add-button').click(function () {
		addComment();
	})
});