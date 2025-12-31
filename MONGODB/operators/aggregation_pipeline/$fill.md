$fill is a stage used to populate null or missing field values in a sequence of documents.
It is primarily designed for data cleaning and time-series analysis where gaps in data need to be addressed without losing context. 



Fill Methods
    1.Constant Value: 
        Sets a specific, fixed value for all missing fields.
    2.LOCF (Last Observation Carried Forward): 
        Fills missing values with the last known non-null value in the sequence.
    3.Linear Interpolation: 
        Calculates a value based on the range between the surrounding non-null values. 
        For example, if document A has a value of 10 and document C has a value of 20, 
        a missing value in document B would be filled as 15. 


{
  $fill: {
    partitionBy: <expression>,   // Optional: Groups data (e.g., "$userId")
    sortBy: { <field>: 1 },      // Required for linear/locf
    output: {
      <field1>: { method: "linear" },
      <field2>: { method: "locf" },
      <field3>: { value: <constant> }
    }
  }
}
