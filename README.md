# Peek-Password
A light-weight pure JavaScript plugin that enables programmer to set up one or more button which make a specified password input field temporarily visible (in plain text) to user when the button is clicked and held

# Everything in short:
This is a plugin that enables programmer to temporarily change 
input type of 'password' into 'text' when specified element is
being clicked and held and it will change input type back to 
'password' once the click is released..
This enables user to take a quick look at the password they have
just entered in plaintext in case they have made a mistake..
			

# How to use this?
#### Step 1:
Insert "peek-password" class into any element that you want
to act as a button such that when it get clicked and held it
will reveal the password in plaintext until click is released
REMARK: See Step 2 for example..

#### Step 2:     
Insert 'for' attribute into the element that you want to act
as the button in the behavior stated above..

#### Step 3 (Optional):
Insert class "glyphicon-eye-close" (or "glyphicon-eye-open")
to the element or any children of it.. When being clicked,
the class will be changed to "glyphicon-eye-open"; and it will
be changed back to "glyphicon-eye-close" when mouse is released

##### REMARK: Make sure you have glyphicon available or icons won't work! 
But Glyphicon from Bootstrap should be sufficient..

#### Step 4:
Call document.EnablePeakPassword() somewhere in your code such
that when it gets executed, page is already loaded and rendered..

#### Step 5:     ???

#### Step 6:     Profit!..

#### License:
            'AS IS' License.
            You are free to use, compile, modify, re-distribute, re-package this code or include into your own project or code.


Note: Complete steps with code snippet are in the file..
