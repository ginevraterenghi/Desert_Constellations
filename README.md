# DesertConstellations_CreativeCoding
Creative Coding Final Exam
![alt text](https://github.com/ginevraterenghi/DesertConstellations_CreativeCoding/blob/master/ReadMe_Images/Title.jpg)

# Desert Constellations

## About
**Desert Constellations** is a university project built using **p5.js library** during the **Creative Coding** course at the Politecnico di Milano. 
The goal was to develop an interactive sketch ables to reproduce and explain a phenomena.

## Project idea
The theme we choose is the *deserts vastness*. The user has the chance to travel from desert to desert, discovering the locations and the dimensions. The experience gives the possibility to compare the deserts and learn intresting information about them. <br/>
We called our project * *Desert Constellations* * in regard to the pattern created by desert from an aerial view. The lack of water generats different kind of desolated land. They are different depending on where they are in the world. These properties recreate a lot of repetitive drawings on the Earth's surface. Each single desert has his own pattern from which it is recognizable. We have made the comparison with the star constellation. A constellation is a group of stars that are considered to form imaginary outlines or meaningful patterns on the celestial sphere. We see the star-constellation from the Earth. But, what about if we could see the Earth from the space? Deserts would seem to be the Earth's constellation.

## Dataset
### Information dataset
The dataset we use is from [Wikipedia](https://it.wikipedia.org/wiki/Deserti_pi%C3%B9_grandi_del_mondo) and from [National Geographic](https://www.nationalgeographic.com/environment/habitats/deserts/). The dataset shows the list of the largest deserts in the world with an area over 50,000 km². We selects the first 20 deserts. Starting from the Wikipedia and Nationa Geographic pages we create our `deserts.JSON` file for each desert:
```
{
	{
   "number": 20,
   "deserts": [
       {
           "name": "Antarctic",
           "range": "1.",
           "kind": "Polar",
           "area": "13.829.430",
           "country": "Antarctic"
       },
```
### Images dataset
We also create our dataset of images from [geojson.io](http://geojson.io). <br>
We collected 10 screenshots from different altitude for each deserts and we modified them manually using a Photoshop filter.

![alt text](https://github.com/ginevraterenghi/DesertConstellations/blob/master/README%20Images%20Folder/Images_effect.jpg)

## Coding
### Interaction
The experience is recreated by the `function mouseWheel()`. The main idea is realted to the deserts exploration. Using the mouse you can move from where you are positioned to far away in the space to have a global view. Mouse wheel increases the  distance from the Earth's surface. <br> 
The users can also discover additional information whith the `function mousePressed`. The screen shows a new window where you can find the definition of Desert and a poetic description of the project. The treemap gathers all the deserts' name to make possibile the direct comparison. The dimension represent the vastness while the color menans the kind. 

#### Function mouseWheel
We essently created 4 kinds of list (`myList`):
- Images
- Landmark square 
- Meter altitude
- Dataset information (`deserts.JSON`)

Each list have a `own var = 0` that give us the possibility to browse the array in loop.
```
function mouseWheel(event) 
	if (index < 0) {
		index = myList.length - 1;
	}
	if (index > myList.length - 1) {
		index = 0;
	}
```
We use `mousewheel(event)` to control the mouse wheel rotation:
```
	if (event.delta > 0) {
		index = index + 1;
	}
```
#### Function mouseIsPressed
The user can compare the deserts in each moment by pressing everywhere in the canvas. 
![information](https://github.com/ginevraterenghi/DesertConstellations_CreativeCoding/blob/master/ReadMe_Images/Cover.jpg)
```
	if (mouseIsPressed) {
		fill('#c1f4f3');
		rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
		noStroke();
		image(cover, windowWidth / 2, windowHeight / 2, windowWidth, windowWidth / 1.7);
	} else {
		print(mouseIsPressed);
	}
```

### Page Organization
#### Marker dots
We created dots line on the bottom. There are twenty dots. Each dot represents a desert. The dot becomes highlited when a new desert serie starts. It is useful to make user more aware on the exploration.

#### Landmark square 
The red square works like a landmark. It starts big as the destert image and it becomes small as a dot, until it disappears. The landmark purpose is to give the proportion of each view. The first one is based on a 100 meters altitude.
![alt text](https://github.com/ginevraterenghi/DesertConstellations/blob/master/README%20Images%20Folder/landmark-08.jpg)

#### Meter altitude
The meters altitude label is related with the landmark square. It writes down the more accurate number that landmark square shows.

## Reference
Our main resources for this sketch:
[The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)
[p5 Reference](https://p5js.org/reference/)

## Team
Federica Delprino - [@federicadelprino](https://github.com/federicadelprino) - federica.delprino@mail.polimi.it <br /> 
Chiara Piva - [@chiarapiva](https://github.com/chiarapiva) - chiara1.piva@mail.polimi.it <br /> 
Ginevra Terenghi - [@ginevraterenghi](https://github.com/ginevraterenghi) - ginevra.terenghi@mail.polimi.it
