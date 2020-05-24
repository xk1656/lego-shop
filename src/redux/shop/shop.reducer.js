const INIT_STATE = {
  collections: {
    ninjago: {
      id: 1,
      title: "NINJAGO®",
      routeName: "ninjago",
      themeTitleBg:
        "https://www.lego.com/cdn/cs/set/assets/blt89c27ea22b5586eb/Ninjago_AP_In-Page-Nav-Large.jpg",
      themeTitleImg:
        "https://www.lego.com/cdn/cs/set/assets/blt73edf1c375fefe0d/ninjago_white_desktop_center_logo.png",
      items: [
        {
          id: 1,
          name: "Land Bounty",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt3027ae0e9fc8723c/70677.jpg",
          price: 159.99,
        },
        {
          id: 2,
          name: "The Ultra Dragon",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltcd21ceddeb6f9faa/70679.jpg",
          price: 119.99,
        },
        {
          id: 3,
          name: "Lloyd's Titan Mech",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt68cdeded772ce24e/70676.jpg",
          price: 99.99,
        },
        {
          id: 4,
          name: "Empire Temple of Madness",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt8f9e439f619131ca/71712.jpg",
          price: 109.99,
        },
        {
          id: 5,
          name: "Monastery of Spinjitzu",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltad0fb0276ecb510b/70670.jpg",
          price: 99.99,
        },
        {
          id: 6,
          name: "Jay's Cyber Dragon",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt2bd90f3454e73d23/71711.jpg",
          price: 69.99,
        },
        {
          id: 7,
          name: "Thunder Raider",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt53360e470c2cb4b5/71699.jpg",
          price: 69.99,
        },
        {
          id: 8,
          name: "Ninja Tuner Car",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt4f3e32db0cb82279/71710.jpg",
          price: 49.99,
        },
        {
          id: 9,
          name: "Gamer's Market",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltc153bd7bf54fca5d/71708.jpg",
          price: 39.99,
        },
      ],
    },
    city: {
      id: 2,
      title: "City",
      routeName: "city",
      themeTitleBg:
        "https://www.lego.com/cdn/cs/set/assets/blte67473094960d277/city-navigation-background2.jpg?quality=80",
      themeTitleImg:
        "https://www.lego.com/cdn/cs/set/assets/blt159dfa2ca7af7ef3/city-logo.png?quality=80",
      items: [
        {
          id: 10,
          name: "Passenger Train",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt54edbbaa46b0761d/60197.jpg",
          price: 199.99,
        },
        {
          id: 11,
          name: "Rocket Assembly & Transport",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt1f5014102a6c5d9a/60229.jpg",
          price: 199.99,
        },
        {
          id: 12,
          name: "Deep Space Rocket",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt328778fddf465431/60228.jpg",
          price: 139.99,
        },
        {
          id: 13,
          name: "Sky Police Air Base",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt7813592e548913ef/60210.jpg",
          price: 119.99,
        },
        {
          id: 14,
          name: "Fire Station",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltee7e195a078afb85/60215.jpg",
          price: 89.99,
        },
        {
          id: 15,
          name: "Lunar Space Station",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt1f2421df1ca73727/60227.jpg",
          price: 79.99,
        },
        {
          id: 16,
          name: "Mobile Command Center",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltc787e8e0194fdc33/60139.jpg",
          price: 59.99,
        },
        {
          id: 17,
          name: "Burger Bar Fire Rescue",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltd0bb70f85eaa6b5c/60214.jpg",
          price: 49.99,
        },
      ],
    },
    starwars: {
      id: 3,
      title: "Star Wars™",
      routeName: "starwars",
      themeTitleBg:
        "https://www.lego.com/cdn/cs/set/assets/blt1c73c2580019b250/starwars-branding-black.jpg?quality=80",
      themeTitleImg:
        "https://www.lego.com/cdn/cs/set/assets/bltdbff7b71f6987248/Star_Wars-Logo.png?quality=80",
      items: [
        {
          id: 18,
          name: "A-wing Starfighter™",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt5269884b4a475813/75275.jpg",
          price: 259.99,
        },
        {
          id: 19,
          name: "D-O™",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt0c0516c512ea785d/75278.jpg",
          price: 99.99,
        },
        {
          id: 20,
          name: "Kylo Ren's Shuttle™",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt4f1f4cfcabd8e876/75256.jpg",
          price: 159.99,
        },
        {
          id: 21,
          name: "Yoda™",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltcbf69ce35da7ccc7/75255.jpg",
          price: 139.99,
        },
        {
          id: 22,
          name: "Poe Dameron's X-wing Fighter™",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt9d411c8fcf66d68c/75273.jpg",
          price: 119.99,
        },
      ],
    },
    technic: {
      id: 4,
      title: "Technic™",
      routeName: "technic",
      themeTitleBg:
        "https://www.lego.com/cdn/cs/set/assets/blt041396db908be56b/DC_InPage-Navigation_desktop.jpg?quality=80",
      themeTitleImg:
        "https://www.lego.com/cdn/cs/set/assets/bltca9ab01c598efe66/Technic-Logo.png?quality=80",
      items: [
        {
          id: 23,
          name: "Bugatti Chiron",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltd13aa93d1b640045/42083.jpg",
          price: 399.99,
        },
        {
          id: 24,
          name: "Liebherr R 9800 Excavator",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt6671666129aff0d0/42100.jpg",
          price: 549.99,
        },
        {
          id: 25,
          name: "Rough Terrain Crane",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt2d8a53450d5e8ddc/42082.jpg",
          price: 349.99,
        },
        {
          id: 26,
          name: "Porsche 911 RSR",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt468d63d0eb6c81a8/42096.jpg",
          price: 199.99,
        },
        {
          id: 27,
          name: "Remote-Controlled Stunt Racer",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/bltbc2cddaf964cfe28/42095.jpg",
          price: 139.99,
        },
        {
          id: 28,
          name: "Rescue Helicopter",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt494949e120e3ffc8/42092.jpg",
          price: 49.99,
        },
        {
          id: 29,
          name: "Dragster",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt6ba96282f294342f/42103.jpg",
          price: 24.99,
        },
      ],
    },
    jurassicworld: {
      id: 5,
      title: "Jurassic World™",
      routeName: "jurassicworld",
      themeTitleBg:
        "https://www.lego.com/cdn/cs/set/assets/bltb9df185177e027d7/In-Page-Nav-Large.jpg?quality=80",
      themeTitleImg:
        "https://www.lego.com/cdn/cs/set/assets/bltb821b1d88560cf2b/Jurassic-Logo.png?quality=80",
      items: [
        {
          id: 30,
          name: "Jurassic Park: T. rex Rampage",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt715b09153deaef73/75936.jpg",
          price: 299.99,
        },
        {
          id: 31,
          name: "Baryonyx Face-Off: The Treasure Hunt",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt49d5b3acc2aac2a7/75935.jpg",
          price: 79.99,
        },
        {
          id: 32,
          name: "T. rex vs Dino-Mech Battle",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt5a42746343fb6e16/75938.jpg",
          price: 119.99,
        },
        {
          id: 33,
          name: "Indominus Rex vs. Ankylosaurus",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blta00f5ba4ee55db86/75941.jpg",
          price: 139.99,
        },
        {
          id: 34,
          name: "Velociraptor: Biplane Rescue Mission​",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt3c9ee9b5aee321e4/75942.jpg",
          price: 39.99,
        },
        {
          id: 35,
          name: "Dilophosaurus Outpost Attack",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt9f0fbcf03230629b/75931.jpg",
          price: 39.99,
        },
      ],
    },
  },
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.types) {
    default:
      return state;
  }
};

export default shopReducer;
