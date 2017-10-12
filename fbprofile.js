var token = "EAACEdEose0cBADA0Acjh21Tn9NfdILqjsgLsu8URJvViZAZC0m6ML6W8zZCmZAaHR8005M73E5aBtQeKDgGV4qwZCdZCNvBm5qIkqSFafJwNlCYLgYwrIUFbUAyWiCMoKrybLc6MEbtpg5LeDREw5vSc7hiVMNvLJTGBLuU2kF6xsJx0U9VWDqYhpZCzhULOWKN62xNDTT82gZDZD"

// function for index page
$(document).ready(function(){

  function getInfo(){

    $.ajax('https://graph.facebook.com/me?fields=birthday,name,email&access_token='+token,{
      success: function(response){
        console.log(response);
        console.log(typeof(response));
        $('#name').text(response.name);
        $('#email').text(response.email);
        $('#id').text(response.id);
        $('#birth').text(response.birthday);

      }
    });
  }
$("#i").on('click',getInfo);
});

// function for feeds page
$(document).ready(function(){

  function getInfo(){

    $.ajax('https://graph.facebook.com/me?fields=posts&access_token='+token,{
      success: function(response){
        console.log(response);
        console.log(typeof(response));

        $('#post').append("1. "+response.posts.data[0].message+"<br/>"+response.posts.data[0].story+"<br/><br/>");
        $('#post').append("2. "+response.posts.data[1].message+"<br/>"+response.posts.data[1].story+"<br/><br/>");
        $('#post').append("3. "+response.posts.data[2].message+"<br/>"+response.posts.data[2].story+"<br/><br/>");
        $('#post').append("4. "+response.posts.data[3].message+"<br/>"+response.posts.data[3].story+"<br/><br/>");
        $('#post').append("5. "+response.posts.data[4].message+"<br/>"+response.posts.data[4].story+"<br/><br/>");
        $('#post').append("6. "+response.posts.data[5].message+"<br/>"+response.posts.data[5].story+"<br/><br/>");
        $('#post').append("7. "+response.posts.data[6].message+"<br/>"+response.posts.data[6].story+"<br/><br/>");
        $('#post').append("8. "+response.posts.data[7].message+"<br/>"+response.posts.data[7].story+"<br/><br/>");
        $('#post').append("9. "+response.posts.data[8].message+"<br/>"+response.posts.data[8].story+"<br/><br/>");
        $('#post').append("10. "+response.posts.data[9].message+"<br/>"+response.posts.data[9].story+"<br/><br/>");

      }
    });
  }
$("#p").on('click',getInfo);
});
