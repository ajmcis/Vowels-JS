 function getVowels()
 {
     var word = document.getElementById("myWrd").value;
     var vowels = document.getElementById("vowels");
     var myColor = " ";
     
      if (word == "")
          alert("Please enter a word");
      else
      {
	   
         // Print a label
         vowels.innerHTML = "Vowels: ";
		   
         // Change the color of each vowel in the word
         for (var index = 0; index < word.length; index++)
         {
             if (word.charAt(index) == 'a')
	         myColor = "blue";
	     else if (word.charAt(index) == 'e')
	         myColor = "red";
	     else if (word.charAt(index) == 'i')
	         myColor = "green";
	     else if (word.charAt(index) == 'o')
	         myColor = "orange";
             else if (word.charAt(index) == 'u')
	         myColor = "brown";
             else if (word.charAt(index) == ' ')
	         myColor = "white";
             else
                myColor = "black";
	      vowels.innerHTML += "<span style = color:" + myColor 
                 + ">" + word.charAt(index) + "</span>";   
         }
     }
 }
