var cur_section="home";
function myMove() {
    // var height = $(window).height()-200; 
    // var width = $(window).width()-200;
    var height = document.getElementById('myContainer').clientHeight-200;
    var width = document.getElementById('myContainer').clientWidth-200;
    // var height = document.getElementById('myContainer').style.height-200;
    // var width = document.getElementById('myContainer').style.width-200;
    
    width = height;
    
    // var height = 320;
    // var width = 240;
    console.log("size height:"+height+" width:"+width);
    var movie = document.getElementById("movieAnimation"); 
    var food = document.getElementById("foodAnimation");
    var book = document.getElementById("bookAnimation");
    var ac = document.getElementById("acAnimation");
    var id = setInterval(frame, 15);
    var pos = 0;
    var ac_x = 0;
    var ac_y = 0;
    var speed = 3;//pos=pos+speed;
    function frame() {
        if (pos >= (3*height+2*width)) {
            clearInterval(id);
            //document.getElementById("movie").onclick();
        } 
        else if(pos < height) {
            pos=pos+speed;
            movie.style.top = pos + 'px'; 
            // console.log("pos"+pos+" height:"+height+" "+ movie.style.top );
            food.style.left = width - pos+ 'px'; 
            book.style.left = pos+'px';
            ac.style.top = height - pos+'px';
            
        }
        else if((pos-height)<width){
            pos=pos+speed;
            movie.style.left = (pos-height) + 'px';
            food.style.top = (pos-width)+'px';
            book.style.top = height-(pos-width)+'px';
            ac.style.left = width-(pos-height)+'px';
        }
        else if ((pos-height - width)<height){
            pos=pos+speed;
            movie.style.top = height-(pos-height - width) + 'px';
            food.style.left = (pos-width-height)+'px';
            book.style.left = width-(pos-height - width)+'px';
            ac.style.top = pos-height-width+'px';
        }
        else if((pos-2*height-width)<width){
            pos=pos+speed;
            movie.style.left = width-(pos-2*height-width) + 'px';
            food.style.top = height-(pos-width-2*height)+'px';
            book.style.top = pos-height-2*width+'px';
            ac.style.left = pos-width-2*height +'px';
        }
        else {
            pos=pos+speed;
            movie.style.top = pos-2*height - 2*width + 'px';
            food.style.left = width-(pos-2*width-2*height)+'px';
            book.style.left = pos-2*width-2*height+'px';
            ac.style.top = height-(pos-2*width-2*height)+'px';
        }
        
            
    }
    
}

function clickmovie(select)
{
    var height = 700; 
    var width = 700;

    //Replace the icons
    if(cur_section == "home")
    {
        cur_section = "movie";
        var m1 = document.getElementById("movieAnimation");
        var m2 = document.getElementById("foodAnimation");
        var m3 = document.getElementById("bookAnimation");
        var m4 = document.getElementById("acAnimation");
        m1.style.backgroundImage = "url('https://i.pinimg.com/236x/39/8d/04/398d04d0b65bae7e39762097516e3ad3--dreamworks-movies-dreamworks-animation.jpg')";
        m2.style.backgroundImage = "url('http://www.togomeetings.com/wp-content/uploads/2017/07/charming-hunger-games-movie-posters-and-cool-ideas-of-the-mockinjay-part-2-movie-poster-by-liomdesign-on-12-128x128.jpg')";
        m3.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/736x/e6/38/22/e638227096d168fa70f1c8ab32776495.jpg')";
        m4.style.backgroundImage = "url('http://www.togomeetings.com/wp-content/uploads/2017/08/inspiring-breakfast-at-tiffanys-movie-poster-and-ideas-of-at-poster-by-joanna-carrero-posters-19-128x128.jpg')";
    }

    else if(cur_section =="movie")
    {
        cur_section = "play_movie";
        var play = document.getElementById("myContainer");
        if(select==1)
            play.innerHTML='<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/D6oj6zBHu8o?autoplay=1" frameborder="0" allowfullscreen></iframe>';
        else if(select == 2)
            play.innerHTML = '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/eO0T9A3kdqc?autoplay=1" frameborder="0" allowfullscreen></iframe>'
        else if(select == 3)
            play.innerHTML = '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/DxpuF-_5miw?autoplay=1" frameborder="0" allowfullscreen></iframe>'
        else
            play.innerHTML = '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/5F9MvhzexVw?autoplay=1" frameborder="0" allowfullscreen></iframe>'
    }
    
    
}
function clickfood()
{
    if(cur_section == "home")
    {
        cur_section = "food";
        //Replace the icons
        var f1 = document.getElementById("movieAnimation");
        var f2 = document.getElementById("foodAnimation");
        var f3 = document.getElementById("bookAnimation");
        var f4 = document.getElementById("acAnimation");
        f1.style.backgroundImage = "url('https://www.shareicon.net/data/256x256/2016/08/19/817540_food_512x512.png')";
        f2.style.backgroundImage = "url('https://static1.squarespace.com/static/58cfebd3b8a79b2da14dd209/t/58dac311cd0f68168e2a3957/1490819696440/')";
        f3.style.backgroundImage = "url('https://i1.wp.com/fsjna.org/wp-content/uploads/2012/05/COFFEE.jpg?resize=256%2C256&ssl=1')";
        f4.style.backgroundImage = "url('https://cdn0.iconfinder.com/data/icons/Dunking/512/Donut_2.png')";
    }
    else if(cur_section =="food")
    {
        var play = document.getElementById("myContainer");
        // if(select==1)
        //     play.innerHTML
        
    }
   
    
}
function clickbook()
{
    cur_section="book";
    var b1 = document.getElementById("movieAnimation");
    var b2 = document.getElementById("foodAnimation");
    var b3 = document.getElementById("bookAnimation");
    var b4 = document.getElementById("acAnimation");
    b1.style.backgroundImage = "url('https://images-na.ssl-images-amazon.com/images/I/512FAHfICTL._CR0,82,335,335_UX128.jpg')";
    b2.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/5/52/Caesar_II_Coverart.png')";
    b3.style.backgroundImage = "url('http://www.startwithabook.org/sites/default/files/book/watersources.jpg')";
    b4.style.backgroundImage = "url('https://d2qbxixihjvzn0.cloudfront.net/ps/getCropped/6skoyR9000?res=256x256&index=www_sps')";
}

function clickac()
{
    if(cur_section == "home")
    {
        cur_section = "ac";
        var ac = document.getElementById("myContainer");
        ac.innerHTML="<h1>current temprature</h1>";
    }
}

//Hide and show items
function train()
{
    var hideItem=["movieAnimation","foodAnimation","bookAnimation","acAnimation"];
    Element(hideItem,'h');
}
function home()
{
    var h1 = document.getElementById("movieAnimation");
    var h2 = document.getElementById("foodAnimation");
    var h3 = document.getElementById("bookAnimation");
    var h4 = document.getElementById("acAnimation");
    h1.style.backgroundImage = "url('http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Clapper-icon.png')";
    h2.style.backgroundImage = "url('http://www-static.dreambox.com/wp-content/uploads/2015/02/Prize-Icon-Pizza.png')";
    h3.style.backgroundImage = "url('https://freeiconshop.com/wp-content/uploads/edd/book-flat.png')";
    h4.style.backgroundImage = "url('https://daks2k3a4ib2z.cloudfront.net/58adc68142ff652745bbf599/58add3fc4effab671dfe7da6_Ikes%20Icon-03.png')";
    var hideItem=["movieAnimation","foodAnimation","bookAnimation","acAnimation"];
    Element(hideItem,'s');
}

function Element(hideItem, operation)
{
    var len = hideItem.length;
    if(operation == 'h')
    {
        for(var i=0; i<len; i++)
        {
            var content = document.getElementById(hideItem[i]);
            content.style.display = "none";
        }
    }
    else
    {
        for(var i=0; i<len; i++)
        {
            var content = document.getElementById(hideItem[i]);
            content.style.display = "block";
        }
    }
    
}

function correct()
{
    var select = 1;//select=templatematching();
    if(cur_section == "home")
    {
        if(select == 1)
            clickmovie();
        else if(select == 2)
            clickfood();
        else if(select == 3)
            clickbook();
        else
            clickac();
    }
    else if(cur_section == "movie")
    {
        clickmovie(select);
    }
    else if(cur_section =="food")
    {
        clickfood(select);
    }
    else if(cur_section == "book")
    {
        clickbook(select);
    }
    else if(cur_section == "ac")
    {
        clickac(select);
    }
}

function incorrect()
{
    if(cur_section =="play_movie"||cur_section == "ac" )
    {
        
        var h=document.getElementById("myContainer");
        h.innerHTML = '<div id ="movieAnimation"></div><div id ="foodAnimation"></div><div id ="bookAnimation"></div><div id ="acAnimation"></div>';
        home();
        if(cur_section == "play_movie")
        {
            cur_section ="home";
            clickmovie();
        }
        else if(cur_section == "ac")
        {
            cur_section ="home";
            clickac();
        }
    }
    else if(cur_section == "movie" || cur_section == "food" || cur_section == "book" || cur_section == "ac")
    {
        cur_section="home";
        home();
    }
    else
    {
        cur_section = "home";
        home();
    }
}


