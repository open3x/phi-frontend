export type ObjectID = number;

export const ObjectNameMap: { [key in ObjectID]: string } = {
  1: "Game center",
  2: "Taxi",
  3: "Green car",
  4: "Heart Device",
  5: "House",
  6: "Loot Stone",
  7: "Uniswap Rocking Horse",
  8: "Uniswap Merry-go-round",
  9: "Uniswap Bank",
  10: "Voter’s Monument",
  11: "ETH Salon",
  12: "Sprite-Box",
  13: "Soil",
  14: "Oil",
  15: "Seed",
  16: "Iron",
  17: "Brick",
  18: "BrickHouse",
  19: "Wood",
  20: "IronSword",
  21: "Steel",
  22: "Plastic",
  23: "Computer",
  24: "ElectronicsStore",
  25: "Red Tile",
  26: "Blue Tile",
  27: "Green Tile",
  28: "Yellow Tile",
  29: "Black Tile",
  30: "White Tile",
};

export const tileList = [25, 26, 27, 28, 29, 30];

export type ObjectName = "snapshot" | "uniswap" | "lootbalance" | "ethbalance" | "polygon";
export type CouponCondition = {
  objectName: ObjectName;
  value?: number;
};
export const CouponConditionMap: { [name in ObjectID]: CouponCondition } = {
  6: {
    objectName: "lootbalance",
  },
  7: {
    objectName: "uniswap",
    value: 1,
  },
  8: {
    objectName: "uniswap",
    value: 5,
  },
  9: {
    objectName: "uniswap",
    value: 10,
  },
  10: {
    objectName: "snapshot",
  },
  11: {
    objectName: "ethbalance",
    value: 1,
  },
  12: {
    objectName: "polygon",
  },
};

export const ObjectMetadata: { [key in ObjectID]: string } = {
  1: "https://bafyreig7a6iezakkky25h7qwtxw4idn7ttgmkkqfmiaf2eezf2zpsr2dg4.ipfs.dweb.link/metadata.json",
  2: "https://dweb.link/ipfs/bafyreifhkrjl3eo3qixofehnshrxnlz6nosd3zachst7d6cr7gsn6krmxm/metadata.json",
  3: "https://dweb.link/ipfs/bafyreibsvbkw6u6ltgtgne3l5efzlnwpf65bdqonyo5mdop5gmu6jtapca/metadata.json",
  4: "https://bafyreiadunyydcvk5gas2ltu2hpbllutftltjop66gq35ckmbo5o5pgcie.ipfs.dweb.link/metadata.json",
  5: "https://dweb.link/ipfs/bafyreidimhonbyf2dmfkwsfgru7jy2n6ixyfr4bmwqjuf7vqrx6voxi4tu/metadata.json",
  6: "https://dweb.link/ipfs/bafyreids2mkzfzhl26hoshmmpc5mudmz4anti4dmskjsykgjvz2o5d3wwm/metadata.json",
  7: "https://dweb.link/ipfs/bafyreieq3yrcie5phpgbwxaig6exosznc23cxcde3by36bakequ24zwymu/metadata.json",
  8: "https://bafyreifyd7b576se6cf5mzywxu4znfuqzw43lrf2irgjidhcqq4xvvrjti.ipfs.dweb.link/metadata.json",
  9: "https://dweb.link/ipfs/bafyreiaewslbnuxj4kfqvatzjs5dpmmrswtyah7r7rxtshw5a7igjks73u/metadata.json",
  10: "https://dweb.link/ipfs/bafyreigb2ltsvhr4lgt6h2xmsyakw2nrxj3f4j6zb34n64au3t5ae4vhz4/metadata.json",
  11: "https://bafyreicud4icbxdgukl7u3fjxovoildamvwlh2pf7ipldyolrx6n3sqtiu.ipfs.dweb.link/metadata.json",
  12: "https://bafyreib62zurt4enxttuydrtfpew4wti4u7bnd25dichniqdxhdipjscia.ipfs.dweb.link/metadata.json",
  13: "https://www.arweave.net/5YrW3gGztNlw8AIvvRgDAvf51EiT-ax3xhKDvABL6G8",
  14: "https://www.arweave.net/j2VW88KWd4b2LUpfYUeyTeWbYAlp7w5l7bjcuZv4cN0",
  15: "https://www.arweave.net/uIY0_wHpsJFMQ9haSi0VAqKUnrHuXRLITiF92U_I4-Q",
  16: "https://www.arweave.net/nzV3l2Nq8V98z8uX7zy0SIoBJrCnQaK9fhNxO8Wjyb4",
  17: "https://www.arweave.net/KjqkYSiyOL3K0nuHdNMGzBg6NjPgiHoVZSumQ8w9pGo",
  18: "https://www.arweave.net/CjtHPTawClEneCHb0KHJSJQob2CpA6VMWxGOg0k3Knk",
  19: "https://www.arweave.net/cGQOJuN2Hno4fdiAZ8sUhOqUEaMrJY1ksonKzl_rqDc",
  20: "https://www.arweave.net/v01wZhAJsRhGNfERsKsYSQM8hJT-jFvwEYxCq8MYQhY",
  21: "https://www.arweave.net/g7ga9c7d7pYAAKFjNc4tFbGCQ0IjnLxY3MuneV3jJ_A",
  22: "https://www.arweave.net/teFq3fe-G_ea7KgHfWuDFunyZ-IqmIcWu9ko_mKub1g",
  23: "https://www.arweave.net/XS1uJMGquJgeeqwq3KPjXqhAhHTFp0KJfZX0hK5_v68",
  24: "https://www.arweave.net/fLBsJwFYAiN8pWXwDDFJqam2WRYdo9QsYb6KmXzAf24",
  25: "https://www.arweave.net/_Q7UniNSu3zpxU9b6TPJPpaduoSzpvnRtb62NgMaKOw",
  26: "https://www.arweave.net/LAIeXqKNDxCfz0d_3vysE-8raYaYMs8puTfz1QR3dZA",
  27: "https://www.arweave.net/QxHUMGa8y5lAsC14OgIseeMgGEvYq7FJO0HphGnjhaw",
  28: "https://www.arweave.net/by4EjfysmT2KUUEyE-v9rGw0KtRRrm4gEEqLAxQO4_o",
  29: "https://www.arweave.net/_7hV1aMIJNueEVIBcXvnzhzbMYZoBqw8ntMBbUAK0uI",
  30: "https://www.arweave.net/2uRzkJzN7HfFRZRjxdGUTiMW6OrIRq8OSWnAG4rKpLY",
};

export type Metadata = {
  name: string;
  image: string;
  description: string;
  attributes: { trait_type: string; value: string }[];
};

export const defaultMetadata: Metadata = {
  name: "",
  image: "",
  description: "",
  attributes: [],
};

export type MaterialID = number;

export const MaterialNameMap: { [key in MaterialID]: string } = {
  1: "Soil",
  // 2: "Brick",
};

export const MaterialMetadata: { [key in MaterialID]: string } = {
  1: "https://bafyreihuydndhyqyu6x4rd2ofbpyfxeptva7tqlqdm3rlp4ub6dvgn3xry.ipfs.dweb.link/metadata.json",
};

export const defaultPhiland: ObjectID[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export const defaultPhilandLinks: string[][] = defaultPhiland.map((row) => row.map(() => ""));

export type Coupon = {
  r: string;
  s: string;
  v: number;
};

export const defaultCoupon: Coupon = {
  r: "",
  s: "",
  v: 0,
};

export type Domain = {
  id: string;
  name: string;
  labelName: string;
  labelhash: string;
};

export type PhilandHolder = { address: string; ens: string };
