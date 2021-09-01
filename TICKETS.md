# QA has submitted the following tickets


## Customer Orders Table
### QA Notes
When viewing the Customer Orders table, the times don't always display correctly. They're in 24-hour format when they should be in 12-hour format with AM/PM displayed.

Additionally, time should display in (H)H:MM format, but currently 12:07 displays as 12:7.

### Dev Notes / Response
With the current method, we're counting or getting the number of hours or minutes, that's why is displaying a single digit instead of "07" (like in the ticket info). To keep the same method, I just add the additional digit necessary to display the dates with 2 digits. In the same case with the hours, I made sure the dates display the hours with the am/pm displaying, avoiding the problem on the 00hrs.

Finally, I believe if we implement the moment.js, day.js library to make all this parsing date in one single line (making the entire project a little more efficient) or even JavaScript Internationalization API if we have particular cases with different local formats.

---


## Customer Order Details
### QA Notes
There seems to be an issue with total price sometimes. On some order details, the total price is displaying values after the penny.

### Dev Notes / Response

Since we're dividing by 100, we need to set an output format with n digits (in this case 2) to display the cents on the amount.

---


## Delete a Customer Order
### QA Notes
I'm currently unable to delete a customer order. Every time I click the "Delete" button from the Customer Orders table, I get a white screen.

### Dev Notes / Response

I just called the inline function on the event.
---


## Other

on the order details page, the price on each item was displayed with the same error as the total, I fixed to display 2 digits on the cents, also it wasn't taking the items by quantity just a total price per item without considering the quantity.

I deduced the tables are displaying the quantities per item and the price per item, and not the total amount per item per quantity, I got this idea because I assume this front end and the other back end project are related, and when the QA provides the information on the issue while they were trying to insert a new order, the initial total price was "missing" an item, but the reality was the function wasn't taking the quantities on the items, just the price. So after realizing that part was missing, and here I found the same behavior, that's why I noted that thing was missing here as well, and I fixed =D