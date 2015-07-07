var chat_messages = [

		{
			'user': 'Lim',
			'message': 'I want to order a coffee',
		},
		{
			'user': 'Lim',
			'message': 'I want to order a tea',
		},

		{
			'user': 'John',
			'message': 'I want to sleep',
			

		},

		{
			'user': 'Corina',
			'message': 'I want to go to the cinema',


		},
]

function log_chat() {
	for (var index = 0; index < chat_messages.length; index++) {
		var item = chat_messages[index]
		console.log("user: " + item['user'] + "\n" + "message : " + item['message'])
	}
}

function is_user_ok(user) {
	if (user === undefined || user === null) {
		return false;
	}
	if (user.length > 0) {
		return true;
	} 
	return false;
}

function point_chat_log(user){
	if (!is_user_ok(user)) {
		return undefined;
	}

	var selection = [];
	for (var index = 0; index < chat_messages.length; index++) {
		var item = chat_messages[index]
		if ('user' in item && item['user'] === user){
			selection.push(item)
		}
	}
			
	return selection;
}

function add_chat_messages(user, message){
	var add_chat_messages = [
			{
				'user': 'Adrian',
				'message': 'I want to wash me!',
			},
			{
				'user': 'Valentino',
				'message': 'I want to clean my flat!',
			},

	]
	chat_messages.push(add_chat_messages)
}

var list = add_chat_messages("Adrian")
if (list) {
	for (var i = 0; i < list.length; i++) {
		console.log(list[i].message);
	}
}

var HELLOwORLD = point_chat_log("Lim");

if (HELLOwORLD) {
	for (var i = 0; i < HELLOwORLD.length; i++) {
		console.log(HELLOwORLD[i].message);
	}
}
