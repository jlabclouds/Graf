Install an Excel parsing library

The SheetJS library (xlsx) is the most popular for reading Excel files in JavaScript.


npm install xlsx

2. Read and parse the Excel file

You can do this when a user uploads the file, but I would like to load it from the server. Here’s an example of parsing an uploaded Excel file and converting it to the same format as countryLocations:
JavaScript

import * as XLSX from 'xlsx';

// Suppose you have a <input type="file" onChange={handleFileChange} />
function handleFileChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(worksheet);

    // Now 'json' is an array of objects, similar to your countryLocations
    // You may want to validate or map the fields if needed
    console.log(json);
    // e.g. setCountryLocations(json)
  };
  reader.readAsArrayBuffer(file);
}

3. What Should Your Excel File Look Like?

Your Excel file should have columns matching your object keys, e.g.:
name	lat	lng	event	severity	side	region
United States	39.8283	-98.5795	Home base	Critical	us	Americas
...	...	...	...	...	...	...


