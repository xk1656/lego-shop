const INIT_STATE = {
  sections: [
    {
      title: "NINJAGO®",
      titleImg:
        "https://www.lego.com/cdn/cs/set/assets/bltc26efeafda5f77e6/ninjago_logo_neg_300w.png",
      imageUrl:
        "https://www.lego.com/cdn/cs/set/assets/blta27e8e4a28ab4f71/Theme-All-Page-Image-NINJAGO.jpg",
      id: 1,
      size: "med",
      linkUrl: "shop/ninjago",
    },
    {
      title: "City",
      titleImg:
        "https://www.lego.com/cdn/cs/set/assets/blt159dfa2ca7af7ef3/city-logo.png",
      imageUrl:
        "https://www.lego.com/cdn/cs/set/assets/blt4b0d7b36964e35f3/Theme-All-Page-Image-City.jpg",
      id: 2,
      linkUrl: "shop/city",
    },
    {
      title: "Star War",
      titleImg:
        "https://www.lego.com/cdn/cs/set/assets/bltbe1c7e12529f08fb/star_wars_ep9_original_srgb_2019_mobile.png?quality=80",
      imageUrl:
        "https://www.lego.com/cdn/cs/set/assets/bltaf67a5cb96b69b76/Theme-All-Page-Image-Star-Wars.jpg",
      id: 3,
      size: "med1",
      linkUrl: "shop/star%20wars",
    },
    {
      title: "Technic™",
      titleImg:
        "https://www.lego.com/cdn/cs/set/assets/bltca9ab01c598efe66/Technic-Logo.png?quality=80",
      imageUrl:
        "https://www.lego.com/cdn/cs/set/assets/blt8ae7f39996130a1c/Theme-All-Page-Image-Technic.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/technic",
    },
    {
      title: "Jurassic World™",
      titleImg:
        "https://www.lego.com/cdn/cs/set/assets/bltb821b1d88560cf2b/Jurassic-Logo.png?quality=80",
      imageUrl:
        "https://www.lego.com/cdn/cs/set/assets/blt512918fec3b7ae4f/Theme-All-Page-Image-Jurassic-World.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/jurassic%20world",
    },
  ],
};

const directoryReducer = (state = INIT_STATE, action) => {
  switch (action.types) {
    default:
      return state;
  }
};

export default directoryReducer;
