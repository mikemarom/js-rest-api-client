// Note: Node.js doesn't natively implement XMLHttpRequest nor fetch(), so this needs to run in an actual browser page
// To run on node.js, use Node Fetch: https://www.npmjs.com/package/node-fetch or another library

const apiUrl = 'http://api.coincap.io/v2/assets/bitcoin';

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the GET request
xhr.open('GET', apiUrl, true);

// Set up a callback function to handle the response
xhr.onload = function () {
   if (xhr.status >= 200 && xhr.status < 300) {
     // The request was successful, and the response is in xhr.responseText
	 var responseJSON = xhr.responseText;
	 var responseData = JSON.parse(responseJSON);
     document.write('Raw response: ',xhr.responseText);
	 document.write('<br><br>');
	 var symbol = responseData.data.symbol;
	 var id = responseData.data.id;
	 var priceUSD = responseData.data.priceUsd;
	 document.write('<b>Cryptocurrency information:</b><br>');
	 document.write('Symbol: ',symbol, '<br>');
	 document.write('ID: ',id,'<br>');
	 document.write('Current price in USD: ',priceUSD,'<br>');
	 
   } else {
     // The request was not successful, handle the error here
     document.write('Request failed with status:', xhr.status);
   }
 };

// Handle network errors
xhr.onerror = function () {
    document.write('Network error occurred');
};

// Send the GET request
xhr.send();