This adaptar provides test data and is built for hackathon purposes

# Install
```
To Run the adaptar
1. Clone The repo
2. yarn
3. yarn start

app runs at port:8080
```
# Query
```
# To get data of a NFT land request property

Send Request with following attributes

method:- POST,
body:- { "id": 0, "data": {  "tokenId": 1 } }
URL:- "http://localhost:8080"

OR

# Copy this query in the terminal/postman
curl --location --request POST 'http://localhost:8080' \
  --header 'Content-Type: application/json' \
  --header 'Cookie: sails.sid=s%3AHYkPqnIr0QvMvrUXGZCZ8HZUX5mHSsl1.Fu004NCfxYWKUcIyYo9fVEhMeR4mPFGM0Vqlpjigk6I; connect.sid=s%3AgqjwNeY7ykOiBhUm0r5HdSEfA32LKlQU.rGjRKhdpVSA5QHwBzO0t0ufE22sjFIzw2gE%2B%2BZzROHg' \
  --data-raw '{
      "id": 0, 
      "data": { "tokenId": 2 } 
  }'
  
```
# Example Response
```
{
    "jobRunID": 0,
    "data": {
        "_id": "600fff73c329ba1712dcec66",
        "tokenId": 2,
        "name": "Aave",
        "symbol": "Aave",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8H9ac470u0xea6VieQbNJnt0OAOykOEaOQ&usqp=CAU",
        "details": "Aave Defi Protocols",
        "sqftArea": 100,
        "pricePerSqft": 1,
        "type": "blockchain",
        "rent": 1,
        "amountStaked": 0,
        "votes": 0,
        "minimumAmountCreation": 50,
        "org": "Aave",
        "link": "http",
        "createdAt": "2021-01-26T11:39:31.260Z",
        "__v": 0,
        "result": null
    },
    "result": null,
    "statusCode": 200
}
```
