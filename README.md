# spine-web-player-template
A template based on the design of the live2d visualiser of the website nikke-db. Only works with animations made using the spine software and of the versions 4.0 or 4.1.
The template will work with any animation made from spine, not restricting to animations coming only from the game Nikke: Goddess of Victory.

# Installation
```git clone https://github.com/Nikke-db/spine-web-player-template.git```   
Or download as .zip and extract.

# How to use

In ```animation_list.json``` add a name to your animation and give it a custom ID. This ID is extremely important.  
As of 24th may 2023 you also need to reference the spine version of the assets, in order to call the right spine player.  
In ```/assets```, create a folder using the ID of your animation as a name.   
Inside ```/assets/ID``` you must import a ```ID.atlas```, ```ID.png```, and ```ID.skel```.  
Make sure the 1st line of ```ID.atlas``` have the correct name file for ```ID.png```.  
If everything have been done correctly, the new animated character will appear in the list, and clicking on it will open the animation on the browser.  
Please check how it is working for spine_boy and neon if it doesn't work. Or send me a message.  
  
By default, the animation is paused. Click the play button on the bottom left corner.  
You can change the current animation with the running icon in the bottom right corner.  

# How to launch

The program make CORS requests to load the files needed, meaning it cannot be launched as is.   The easiest way to make it work locally is by using the extension Live Server in Visual Studio Code.

# Features

You can zoom using the scrool wheel, and click + drag to move the animation around the screen.

# Json vs Skel

By default, the program works with .skel files. If you use .json files for your animations, please go to ```js/change_current_animation.js```, uncomment line 27 and comment line 28.

# Credits

Spine web player made by esoteric software, learn more about it at http://esotericsoftware.com/spine-player.  
Template made by Koshirei https://github.com/Koshirei and used for the Nikke-db website https://github.com/Nikke-db/Nikke-db.github.io.



# Archive notice

As of March 8th 2026 this repository will be archived.  
It was a small side project dedicated to a couple Nikke modders in the early life of the game, but as time progressed other alternatives appeared and a similar feature was even added to the main project, nikke-db.  
Furthermore the "UI" aspect of the template was based on the 2022 version of the website, which has gotten heavely revamped over time.  
As such, I advise using nikke-db as an alternative. The main wesite offers much more tools at your disposal, and don't require git knowledge to even setup, just a website URL.
