# Description of the Challenge

In this challenge, we need to create an application that allows generating and storing maps based on user-defined parameters. The maps will be generated using JavaScript and will be displayed in an HTML page. The application should allow specifying the map size, the maximum area that can be occupied, and the number of nature zones, among other parameters. The generated maps will be saved in a database and can be loaded and displayed at any time.

## Form

The HTML page should have a form with the following fields:

- Map size: the number of plots on the map, both in width and height. (default value: 64)
- Max occupied area %: the maximum number of plots on the total map that will have an assigned use. (default value: 80)
- Nature:
    - Min zones: the minimum number of nature zones on the map. (default value: 2)
    - Max zones: the maximum number of nature zones on the map. (default value: 8)
    - Zone max size: the maximum number of plots that a nature zone can occupy on the map. (default value: 500)
    - Total max size: the maximum number of nature plots that can be on the map. (default value: 800)
- Urban:
    - Min zones: the minimum number of nature zones on the map. (default value: 4)
    - Max zones: the maximum number of nature zones on the map. (default value: 6)
    - Zone max size: the maximum number of plots that a nature zone can occupy on the map. (default value: 100)
    - Total max size: the maximum number of nature plots that can be on the map. (default value: 800)
- Commercial:
    - Min zones: the minimum number of nature zones on the map. (default value: 2)
    - Max zones: the maximum number of nature zones on the map. (default value: 8)
    - Zone max size: the maximum number of plots that a nature zone can occupy on the map. (default value: 50)
    - Total max size: the maximum number of nature plots that can be on the map. (default value: 200)

- Generate: button to start the map generation with the specified parameters.

___

## Map Generation
The map generation will be performed using JavaScript and will follow the steps below:

### 1. Initialization:

- Clean any previous visualizations.
Randomly select the number of zones of each type within the parameters entered in the form.

### 2. Germ:
Randomly select a point on the plane (X and Y coordinates) and assign the first plot for each zone. These plots will establish the starting point from which the different zones will grow.

### 3. Growth:
While the limits established in the configuration form are not reached:
- For each zone on the map:
    - Randomly choose a plot within that zone.
    - Randomly choose a growth direction and look for the first available plot in that direction. If found, assign that plot to the zone. Note that if you reach another zone or go outside the map boundaries, the zone will not grow in this iteration, and we move to the next zone.

- Show the generated map

### 4. Map Visualization
The generated map should be displayed in the same HTML page using squares to represent the plots. Non-empty plots should show the zone identifier they belong to (a numeric ID) and a background color indicating the type of zone (nature: green, urban: yellow, commercial: orange).

## Database Persistence
We need to add a new button labeled "Save" that will store the generated maps in a database with an associated ID. Additionally, we should add a basic list showing the IDs of all saved maps. Clicking on an item in the list should load and display that particular map.

## ***Additional Information***
The generation of the zones should start from a random focus point within the map and can be extended in all directions, including diagonals.

## Examples how it should look like:

![First example](/examples/example1.png "First example")
![Second example](/examples/example2.png "Second example")
![Third example](/examples/example3.png "Third example")


