
to run project you can simply open an index.html file
	or
install all dependencies and run gulp to start

    >npm install
    >gulp

server will be working on port 3000

## Usage
	//the constructor takes the id of the 
	//parent element and draws the calendar inside
		const calendar = new Calendar('calendar-wrap')

	//set the date of the calendar you want
		calendar.setDateTo(next_date)

	//redraw calendar to the next month
		calendar.moveRight()

	//redraw to the prev month
		calendar.moveLeft()

	//get the date the user has chosen
		calendar.selected_date
