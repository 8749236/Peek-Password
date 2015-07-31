/*****************************************************************************
                            Peek Password for HTML

                        Author:     Dennis Liu
                        Date:       2015-06-01_18:31

                            Everything in short:
            This is a plugin that enables programmer to temporarily change 
            input type of 'password' into 'text' when specified element is
            being clicked and held and it will change input type back to 
            'password' once the click is released..

            This enables user to take a quick look at the password they have
            just entered in plaintext in case they have made a mistake..


                            *** HOW TO USE THIS ***

Step 1:     Insert "peek-password" class into any element that you want
            to act as a button such that when it get clicked and held it
            will reveal the password in plaintext until click is released

            REMARK: See Step 2 for example..

Step 2:     Insert 'for' attribute into the element that you want to act
            as the button in the behavior stated above..
            e.g.
                <span class="peek-password" for="passwordFieldId">
                </span>
            e.g.
                <div class="peek-password" for="passwordFieldId">
                </div>

Step 3:     Insert class "glyphicon-eye-close" (or "glyphicon-eye-open")
(Optional)  to the element or any children of it.. When being clicked,
            the class will be changed to "glyphicon-eye-open"; and it will
            be changed back to "glyphicon-eye-close" when mouse is released
            e.g.
                <span class="glyphicon glyphicon-eye-close">
                </span>
            e.g.
                <div class="peek-password">
                    <span class="glyphicon glyphicon-eye-close">
                    </span
                </div>
                    
            REMARK: Make sure you have glyphicon available or this
                    won't work!..
                    Glyphicon in Bootstrap should be sufficient..

Step 4:     Call document.EnablePeekPassword() somewhere in your code such
            that when it gets executed, page is already loaded and rendered..
            e.g.
                // Pure JavaScript, cross-browser compatible 
                (function() {
                    // your page initialization code here
                    // the DOM will be available here
                    document.EnablePeekPassword();
                })();
            e.g.
                // Using jQuery..
                $(document).ready(function() {
                    document.EnablePeekPassword();
                });
            e.g.
                // this is one way of how jQuery does .ready()..
                document.addEventListener(
                    'DOMContentLoaded',
                    function() {
                        document.EnablePeekPassword();
                    },
                    false
                );
            e.g.
                // this is another way of how jQuery does .ready()..
                window.addEventListener(
                    'load',
                    function() {
                        document.EnablePeekPassword();
                    },
                    false
                );

Step 5:     ???
Step 6:     Profit!..

    License:
            License? What license? You mean that scrap paper which I spend
            whole day reading it and still yet to understand what it was
            trying to say?

            a.k.a. Free for all =D
        
*****************************************************************************/



// Decided to expose this function instead incase someone ever need it..
// Loop through all children under a node and toggles class accordingly..
function toggleAllChildrenClass(item, from, to) {
    for (var i = 0; i < item.children.length; ++i) {
        var child = item.children[i];
        child.className = child.className.replace(from, to);
        if (child.children.length > 0) {
            toggleIcon(child);      // Toggle all icon under it, too..
        }
    }
}

document.EnablePeekPassword = function () {
    var listOfItemToHook = document.getElementsByClassName("peek-password");
    for (var i = 0; i < listOfItemToHook.length; ++i) {
        var item = listOfItemToHook[i];
        item.onmousedown = function (e) {
            // 'this.attributes.for.value' is VERY useful..
            document.getElementById(this.attributes.for.value).type = "text";     // Make password visible..
            this.className = this.className.replace("glyphicon-eye-close", "glyphicon-eye-open");
            toggleAllChildrenClass(this, "glyphicon-eye-close", "glyphicon-eye-open");
        }
        item.onmouseup = function (e) {
            document.getElementById(this.attributes.for.value).type = "password";     // Make password invisible..
            this.className = this.className.replace("glyphicon-eye-open", "glyphicon-eye-close");
            toggleAllChildrenClass(this, "glyphicon-eye-open", "glyphicon-eye-close");
        }
    }
}
