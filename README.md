#### tslil-brami-autodesk-home-assignment


###### API documantion-
https://app.swaggerhub.com/apis/Tslilb/tslil-brami-autodesk-home-assignment/1.0.0

###### If you would like to run my service locally with Docker- 

>1. Generate token to Twitter API docomntation on [Twitter API](https://developer.twitter.com/en/docs/apps/overview.)
>2. Create .env file, and in it create TWITTER_TOKEN environment variable to set to your twitter    token.
>3. build docker image with this command : 
     ```docker build . -t image-name ```
>4. run docker image with this command :
     ``` docker run -p 5000:80 -it image-name ```
   you can change the port number before the colon but not after it.
>5. The service will be available in your browser at localhost:5000/
  If you selected a different port number in section 2, you will also have to change the port number at the local address respectively.

###### Live API link on Heroku-


https://secret-lake-30613.herokuapp.com/