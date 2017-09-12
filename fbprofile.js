$(document).ready(function(){
  var token = "EAACEdEose0cBAJYbJjG79yELmlQKRMjgm3A7MTZAlUKdXTbPxG5zlFfmE13ncRUTwUMFcGE15zpuAZACJ3tnhEYPqcClwveIVnvC08JG2xJkqb9tILUXJ9BzjHYzubZAkRWFAglSd1ZAjUzqPZBjlZBpJZAq6tZChZCHoorRZBxzJcmkbdFsVz5F9X2e9WyyinVsgNIlHfjHf1EgZDZD"

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

$(document).ready(function(){
  var token = "EAACEdEose0cBAJYbJjG79yELmlQKRMjgm3A7MTZAlUKdXTbPxG5zlFfmE13ncRUTwUMFcGE15zpuAZACJ3tnhEYPqcClwveIVnvC08JG2xJkqb9tILUXJ9BzjHYzubZAkRWFAglSd1ZAjUzqPZBjlZBpJZAq6tZChZCHoorRZBxzJcmkbdFsVz5F9X2e9WyyinVsgNIlHfjHf1EgZDZD"

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
