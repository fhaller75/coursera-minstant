
Meteor.methods({
  initChat:function(users){
    if (!this.userId){ // user not logged in
      console.log("ERROR in method initChat: not logged in");
      return;
    }
    // console.log("method: sendChat "+chat._id);
    chatId = Chats.insert(users, function(err, res){
      if (err){
        console.log("ERROR in method: initChat "+err);
      }
      else {
        console.log("method: initChat created id "+res);
      }
    });
    return chatId;
  },
  sendChat:function(chat){
    if (!this.userId){ // user not logged in
      console.log("ERROR in method sendChat: not logged in");
      return;
    }
    // console.log("method: sendChat "+chat._id);
    Chats.update(chat._id, chat, function(err, res){
      if (err){
        console.log("ERROR in method: sendChat "+err);
      }
      else {
        console.log("method: sendChat updated "+res+" chat");
      }
    });
    return;
  }
})

