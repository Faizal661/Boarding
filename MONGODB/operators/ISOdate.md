1. Extraction Operators
    These operators extract specific numeric components from an ISODate object. 
    They are most commonly used in $project or $group stages of an aggregation pipeline.

$year: 
    Returns the year (e.g., 2025).
$month: 
    Returns the month as a number between 1 (January) and 12 (December).
$dayOfMonth: 
    Returns the day as a number from 1 to 31.
$dayOfWeek: 
    Returns a number from 1 (Sunday) to 7 (Saturday).
$dayOfYear: 
    Returns a number from 1 to 366.
$hour / $minute / $second: 
    Extracts the time components (0–23 for hours, 0–59 for others).
$week: 
    Returns the week of the year as a number from 0 to 53.
$isoDayOfWeek: 
    Returns the weekday number in ISO 8601 format (1 for Monday, 7 for Sunday). 



2. Arithmetic & Comparison Operators
    These allow you to manipulate dates or find the duration between two points in time.    

$dateAdd: 
    Increments a date by a specified number of units (years, months, days, etc.).
$dateSubtract: 
    Decrements a date by a specified unit.
$dateDiff: 
    Calculates the difference between two dates in a specific unit (e.g., find how many days an employee has worked).
$dateTrunc: 
    Truncates a date to a specific unit (e.g., rounding 2025-12-31T14:30:00 down to 2025-12-31T00:00:00).
Comparison ($gt, $lt, $gte, $lte): 
    Standard operators used to filter documents within a specific date range. 


3. Formatting & Conversion
    These operators change how a date is stored or displayed.

$dateToString:
    Converts a date object into a custom string (e.g., "%Y-%m-%d"). Useful for reports.
$dateFromString: 
    Converts a string (like "2025-01-01") into a proper ISODate object.
$toDate: 
    A shortcut to convert various types (timestamps, strings, ObjectIds) into a date.
$dateFromParts / $dateToParts: 
    Either builds a date from separate numbers (year: 2025, month: 1...) or breaks a date down into an object containing all its parts. 


4. Special Update Operator

$currentDate: 
    Used in update commands (updateOne, updateMany) to set a field to the current server time immediately. 


5. Practice Summary Table

    Goal	            Use This Operator

    Extract Month	    $month
    Add 30 Days	        $dateAdd
    Get Difference	    $dateDiff
    Filter by Year	    $expr + $year or Range Query
    Pretty Print	    $dateToString
    Set "Updated At"	$currentDate