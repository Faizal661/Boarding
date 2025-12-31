1.  starts with vowels
    db.members.find( { name : { $regex : /^[aeiou]/i } } )

2.  not starts with vowels
    db.members.find( { name : { $regex : /^[^aeiou]/i } } )
    db.members.find( { name : { $not : /^[aeiou]/i } } )

3.  ends with vowels
    db.members.find( { name : { $regex : /[aeiou]$/i } } )

4.  not ends with vowels
    db.members.find( { name : { $regex : /[^aeiou]$/i } } )
    db.members.find( { name : { $not : /[aeiou]$/i } })

5.  starts and ends with vowels
    db.members.find( { name : { $regex : /^[aeiou].*[aeiou]$/i } } )

6.  not starts and not ends with vowels
    db.members.find( { name : { $regex : /^[^aeiou].*[^aeiou]$/i } } )

7.  $and in regex
    db.members.find({ $and: [ { name: /^[aeiou]/i }, { name: /[aeiou]$/i }] })




1. Anchors
    These specify where in the string the match must occur.

    Symbol	    Description	                            Use Case	                            Example (Field: name)

    ^	        Caret: Matches the start of the string.	Find names starting with "A".	        { name: /^A/ }
    $	        Dollar: Matches the end of the string.	Find names ending with "son".	        { name: /son$/ }
    ^...$	    Both: Matches the exact entire string.	Find names that are exactly "Bob".	    { name: /^Bob$/ }


2. Quantifiers 
    These specify how many times the preceding character or group should repeat. 
    
    Symbol      Description                             Use Case                                Example

    *           Asterisk: 0 or more times.              Match "ac", "abc", "abbbc".             /ab*c/
    +           Plus: 1 or more times.                  Match "abc", "abbc" (not "ac").         /ab+c/
    ?           Question: 0 or 1 time.                  Match "color" or "colour".              /colou?r/
    {n,m}       Braces: Between \(n\) and \(m\) times.  Find exactly 5-digit zip codes.         /^\d{5}$/


3. Character Classes & Sets
    These specify what kind of character is allowed at a specific position.

    Symbol      Description                                     Use Case                        Example

    .	        Dot: Any single character (except newline).	    Match "cat", "cot", "c9t".      /c.t/
    [ ]	        Brackets: Any character inside the set.	        Match any one vowel.            /[aeiou]/
    [^ ]	    Negated Set: Any character NOT in the set.	    Match any consonant.            /[^aeiou]/
    |	        Pipe: Alternation (OR logic).	                Match "Apple" OR "Google".	    /Apple|Google/


4. Shorthand Classes
    Standard shortcuts used frequently in MongoDB queries.

    Symbol      Description                                 Use Case                        Example

    \d	        Any Digit [0-9].	                        Find phone numbers.	            /\d{10}/
    \w	        Any Word character (letters, numbers, _).	Validate usernames.	            /^\w+$/
    \s	        Any Whitespace (space, tab).	            Find strings with spaces.	    /\s/
    \b	        Word Boundary.                              Match "plan" but not "planet".	/\bplan\b/


5. Escaping
    If you want to search for a literal symbol that is usually a regex command 
    (like searching for a price with a $ or a file extension with .), 
    you must use the backslash \.

    Example: To find a filename ending in .pdf:
        ❌Incorrect: /\.pdf$/ (The dot matches any character)
        ✅Correct: /\\.pdf$/ (The backslash tells MongoDB to look for a literal dot)



PRACTICE QUESTIONS : 

01. Find all documents where the name starts with "S" and ends with "h".
02. Find documents where the username is exactly 8 characters long and contains only lowercase letters.
03. Find all comments that contain the word "urgent" as a standalone word (not part of another word).
04. Find employees whose email belongs specifically to a .org or .net domain.
05. Find documents where the phoneNumber follows the specific format (XXX) XXX-XXXX.
06. Find all names that contain at least two consecutive identical characters (e.g., "Apple" or "Aaron").
07. Find description fields that contain at least three numerical digits anywhere in the string.
08. Find all documents where the department field does not contain the word "Admin".
09. Find names that consist of exactly two words separated by a single space.
10. Find address fields that start with a number but do not end with a number.
11. Find strings where the third character is a vowel and the last character is a consonant.
12. Find all notes that are either empty or consist entirely of whitespace characters (spaces, tabs, or newlines).
13. Find documents where the productID contains a literal period (.) followed by exactly three digits.
14. Find names that start with an uppercase vowel and contain at least one special character.
15. Find all tags that contain either the string "internal" or "private" case-insensitively.