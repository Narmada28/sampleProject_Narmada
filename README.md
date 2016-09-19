# What is this?
This is a starting point to be used as a simple coding exercise using AngularJs 1.5.x

# Important Note: 
**You can take any liberty you want to modify the existing code and add new files**
If you see any area of improvement, do not hesitate to modify anything. 
You will not only be evaluated on the completion of the 3 goals alone (continue reading)

Lodash and Bootstrap 3 have already been included for your convenience, but you can add any other library you feel you might need

To add any library, you can add them in the `index.html` file. 
You can use the External Library Browser provided by Plunker (click the book icon from the top in the rightmost toolbar)

----

# Before starting
  - **Very Important** Click the `fork` button at the top.
    - You should see the URL of your browser change

# What's expected of you
  - Modify the `getProducts` methods in _catalog.service.js_ so it does the following:
      - The method must return a promise
      - Check if `self.products` is already populated:
        - If not, load data from `'./products.json'` using `$http`
        - If it is populated, return that value (remember, you still must return a promise!)

  
  - Add a functionality to delete products from the shopping cart
      - If an item has been added more than once, the "remove button" should remove items one at a time
      - When an item quantity is brought down to '0', remove the line from the shopping display


  - Using Bootstrap 3.x classes and custom CSS, make the app look better.
      - You have full liberty of how to make it look
      - You will find the html of each components inlined in the `*.component.js` files


# When you are done, make sure you save you code
  - Then copy the URL of your browser and send it back to the person that initially sent you this exercise
