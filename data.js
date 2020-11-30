const categories = {
  edible: "Edible Salts",
  lamps: "Salt Lamps",
  tiles: "Salt Tiles",
  lick: "Lick Salts"
}

const data = [
  {
    "category": "edible",
    "desc": "Pink Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Pink Salt",
    "oldprice": "$100.00",
    "saleprice": "$50.00",
    "slug": "pink-salt",
    "src": "assets/img/portfolio/edible/ancient-ocean-himalayan-pink-salt-coarse-bowl.jpg",
    "title": "Pink Salt by Himalayan Salts"
  },
  {
    "category": "edible",
    "desc": "Fine Pink Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Fine Pink Salt",
    "oldprice": "$70.00",
    "saleprice": "$30.00",
    "slug": "fine-pink-salt",
    "src": "assets/img/portfolio/edible/ancient-ocean-himalayan-pink-salt-fine-bowl.jpg",
    "title": "Fine Pink Salt by Himalayan Salts"
  },
  {
    "category": "edible",
    "desc": "Granular Pink Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Granular Pink Salt", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "granular-pink-salt", 
    "src": "assets/img/portfolio/edible/ancient-ocean-himalayan-pink-salt-small-bowl.jpg",
    "title": "Granular Salt by Himalayan Salts"
  },
  {
    "category": "edible",
    "desc": "Iodized Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Iodized Salt", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "iodized-salt", 
    "src": "assets/img/portfolio/edible/iodized-salt-fine-bowl.jpg",
    "title": "Iodized Salt by Himalayan Salts"
  },
  {
    "category": "edible",
    "desc": "Black Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Black Salt", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "black-salt", 
    "src": "assets/img/portfolio/edible/kala-namak-indian-black-salt.jpg", 
    "title": "Black Salt by Himalayan Salts"
  },
  {
    "category": "edible",
    "desc": "Australian Sea Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Australian Sea Salt", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "australian-sea-salt", 
    "src": "assets/img/portfolio/edible/paragon-australian-sea-salt-fine-bowl.jpg", 
    "title": "Australian Sea Salt by Himalayan Salts"
  },
  {
    "category": "edible",
    "desc": "Ocean Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Ocean Salt", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "ocean-salt", 
    "src": "assets/img/portfolio/edible/pure-ocean-premium-sea-salt-fine-bulk-bowl.jpg", 
    "title": "Ocean Salt by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Angel Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Angel Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "angel-salt-lamp", 
    "src": "assets/img/portfolio/lamps/angel.png", 
    "title": "Angel Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Boat Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Boat Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "boat-salt-lamp", 
    "src": "assets/img/portfolio/lamps/boat.png", 
    "title": "Boat Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Bowl Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Bowl Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "bowl-salt-lamp", 
    "src": "assets/img/portfolio/lamps/bowl.png", 
    "title": "Bowl Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Bowl Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Bowl Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "bowl-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/bowl-2.jpg", 
    "title": "Bowl Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Bullet Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Bullet Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "bullet-salt-lamp", 
    "src": "assets/img/portfolio/lamps/bullet.png",  
    "title": "Bullet Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Cactus Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Cactus Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "cactus-salt-lamp", 
    "src": "assets/img/portfolio/lamps/cactus.png",  
    "title": "Cactus Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Cave Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Cave Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "cave-salt-lamp", 
    "src": "assets/img/portfolio/lamps/cave.png",  
    "title": "Cave Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Christmas Tree Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Christmas Tree Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "christmas-tree-salt-lamp", 
    "src": "assets/img/portfolio/lamps/christmas-tree.png",  
    "title": "Christmas Tree Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Cross Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Cross Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "cross-salt-lamp", 
    "src": "assets/img/portfolio/lamps/cross.png",  
    "title": "Cross Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Cubical Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Cubical Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "cubical-salt-lamp", 
    "src": "assets/img/portfolio/lamps/cubical-1.jpg",  
    "title": "Cubical Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Cubical Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Cubical Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "cubical-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/cubical-2.png",  
    "title": "Cubical Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Cubical Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Cubical Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "cubical-3-salt-lamp", 
    "src": "assets/img/portfolio/lamps/cubical-3.png",  
    "title": "Cubical Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Cylinderical Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Cylinderical Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "cylinderical-salt-lamp", 
    "src": "assets/img/portfolio/lamps/cylinder.png",  
    "title": "Cylinderical Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Date Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Date Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "date-salt-lamp", 
    "src": "assets/img/portfolio/lamps/date.png",  
    "title": "Date Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Diamond Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Diamond Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "diamond-salt-lamp", 
    "src": "assets/img/portfolio/lamps/diamond.png",  
    "title": "Diamond Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Diamond Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Diamond Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "diamond-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/dimaond-2.png",  
    "title": "Diamond Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Dollar Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Dollar Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "dollar-salt-lamp", 
    "src": "assets/img/portfolio/lamps/dollar.png",  
    "title": "Dollar Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Drum Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Drum Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "drum-salt-lamp", 
    "src": "assets/img/portfolio/lamps/drum.png",  
    "title": "Drum Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Egg Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Egg Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "egg-salt-lamp", 
    "src": "assets/img/portfolio/lamps/egg.png",  
    "title": "Egg Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Eye Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Eye Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "eye-salt-lamp", 
    "src": "assets/img/portfolio/lamps/eye.png",  
    "title": "Eye Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Fire Bowl Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Fire Bowl Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "fire-bowl-salt-lamp", 
    "src": "assets/img/portfolio/lamps/fire-bowl.png",  
    "title": "Fire Bowl Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Flame Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Flame Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "flame-salt-lamp", 
    "src": "assets/img/portfolio/lamps/flame.png",  
    "title": "Flame Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Flower Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Flower Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "flower-salt-lamp", 
    "src": "assets/img/portfolio/lamps/flower.png",  
    "title": "Flower Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Flower Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Flower Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "flower-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/flower-2.png",  
    "title": "Flower Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Fort Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Fort Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "fort-salt-lamp", 
    "src": "assets/img/portfolio/lamps/fort.png",  
    "title": "Fort Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Globe Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Globe Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "globe-salt-lamp", 
    "src": "assets/img/portfolio/lamps/globe-1.jpg",  
    "title": "Globe Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Globe Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Globe Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "globe-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/globe-2.png",  
    "title": "Globe Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Heart Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Heart Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "heart-salt-lamp", 
    "src": "assets/img/portfolio/lamps/heart.png",  
    "title": "Heart Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Heart Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Heart Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "heart-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/heart-2.png",  
    "title": "Heart Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Leaf Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Leaf Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "leaf-salt-lamp", 
    "src": "assets/img/portfolio/lamps/leaf.png",  
    "title": "Leaf Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Leaf Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Leaf Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "leaf-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/leaf-2.png",  
    "title": "Leaf Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Lotus Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Lotus Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "lotus-salt-lamp", 
    "src": "assets/img/portfolio/lamps/lotus.png",  
    "title": "Lotus Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Mushroom Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Mushroom Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "mushroom-salt-lamp", 
    "src": "assets/img/portfolio/lamps/mushroom.png",  
    "title": "Mushroom Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Natural Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Natural Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "natural-salt-lamp", 
    "src": "assets/img/portfolio/lamps/natural-1.png",  
    "title": "Natural Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Octane Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Octane Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "octane-salt-lamp", 
    "src": "assets/img/portfolio/lamps/octacone.png",  
    "title": "Octane Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Orchid Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Orchid Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "orchid-salt-lamp", 
    "src": "assets/img/portfolio/lamps/orchid.png",  
    "title": "Orchid Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Oval Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Oval Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "oval-salt-lamp", 
    "src": "assets/img/portfolio/lamps/oval.jpg",  
    "title": "Oval Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Palm Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Palm Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "palm-salt-lamp", 
    "src": "assets/img/portfolio/lamps/palm.png",  
    "title": "Palm Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Pyramid Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Pyramid Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "pyramid-salt-lamp", 
    "src": "assets/img/portfolio/lamps/pyramid.png",  
    "title": "Pyramid Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Pyramid Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Pyramid Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "pyramid-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/pyramid-2.jpg",  
    "title": "Pyramid Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Rectangular Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Rectangular Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "rectangular-salt-lamp", 
    "src": "assets/img/portfolio/lamps/rectanular-1.png",  
    "title": "Rectangular Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Rectangular Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Rectangular Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "rectangular-2-salt-lamp", 
    "src": "assets/img/portfolio/lamps/rectanular-2.png",  
    "title": "Rectangular Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Rectangular Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Rectangular Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "rectangular-3-salt-lamp", 
    "src": "assets/img/portfolio/lamps/rectanular-3.png",  
    "title": "Rectangular Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Rectangular Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Rectangular Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "rectangular-4-salt-lamp", 
    "src": "assets/img/portfolio/lamps/rectanular-4.png",  
    "title": "Rectangular Salt Lamp by Himalayan Salts"
  },
  {
    "category": "lamps",
    "desc": "Round Salt Lamp's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Round Salt Lamp", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "round-salt-lamp", 
    "src": "assets/img/portfolio/lamps/round.png",  
    "title": "Round Salt Lamp by Himalayan Salts"
  },
  {
    "category": "tiles",
    "desc": "Circular Salt Block's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Circular Salt Block", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "circular-salt-block", 
    "src": "assets/img/portfolio/tiles/circle-block.jpg",  
    "title": "Circular Salt Block by Himalayan Salts"
  },
  {
    "category": "tiles",
    "desc": "Rectangular Salt Brick's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Rectangular Salt Brick", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "rectangular-salt-brick", 
    "src": "assets/img/portfolio/tiles/rect_brick.jpg",  
    "title": "Rectangular Salt Brick by Himalayan Salts"
  },
  {
    "category": "tiles",
    "desc": "Rectangular Salt Plate's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Rectangular Salt Plate", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "rectangular-salt-plate", 
    "src": "assets/img/portfolio/tiles/rect-plate.jpg",  
    "title": "Rectangular Salt Plate by Himalayan Salts"
  },
  {
    "category": "tiles",
    "desc": "Circular Salt Tile's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Circular Salt Tile", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "circular-salt-tile", 
    "src": "assets/img/portfolio/tiles/circle-2.png",  
    "title": "Circular Salt Tile by Himalayan Salts"
  },
  {
    "category": "lick",
    "desc": "Animal Lick Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Animal Lick Salt", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "animal-lick-salt", 
    "src": "assets/img/portfolio/lick/lick-1.png",  
    "title": "Animal Lick Salt by Himalayan Salts"
  },
  {
    "category": "lick",
    "desc": "Animal Lick Salt's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Animal Lick Salt", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "animal-2-lick-salt", 
    "src": "assets/img/portfolio/lick/lick-2.png",  
    "title": "Animal Lick Salt by Himalayan Salts"
  },
  {
    "category": "lick",
    "desc": "Salt Lick Lump's decription. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis",
    "name": "Salt Lick Lump", 
    "oldprice": "$80.00",
    "saleprice": "$40.00",
    "slug": "salt-lick-lumps", 
    "src": "assets/img/portfolio/lick/lick-lumps.png",  
    "title": "Salt Lick Lump by Himalayan Salts"
  },



]