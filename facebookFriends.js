/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Becky",
    friends: 5,
    messages: ["Good morning!", "I'm sooooo tired, lol. ;)", "This program is great!"],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(post) {
        let index = post - 1;
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
        facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend: function() {
        facebookProfile.friends = facebookProfile.friends - 1;
    },
};
// These console.log's are just to prove to myself that the code was
// working at each successive step.
facebookProfile.postMessage("Hi!");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(4);
console.log(facebookProfile.messages);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
