import {
  CalculatorIcon,
  HashtagIcon,
  PhotoIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export const userData = [
  {
    highlight: "Entries Count",
    icon: (
      <div className="entry-logo-container" style={{ background: "#44355B" }}>
        <CalculatorIcon className="logo-default entry-logo" />
      </div>
    ),
    value: "5",
  },
  {
    highlight: "Word Count",
    icon: (
      <div className="entry-logo-container" style={{ background: "#AD343E" }}>
        <HashtagIcon className="logo-default entry-logo" />
      </div>
    ),
    value: "650k",
  },
  {
    highlight: "Image Count",
    icon: (
      <div className="entry-logo-container" style={{ background: "#62BBC1" }}>
        <PhotoIcon className="logo-default entry-logo" />
      </div>
    ),
    value: "24",
  },
  {
    highlight: "Daily Entries",
    icon: (
      <div className="entry-logo-container" style={{ background: "#30332E" }}>
        <InformationCircleIcon className="logo-default entry-logo" />
      </div>
    ),
    value: "24",
  },
];

export const recentData = [
  {
    image: "https://images2.alphacoders.com/130/1301855.jpg",
    title: "The culture of Journals",
    lastAccessed: "April 16, 2023",
  },
  {
    image: "https://images7.alphacoders.com/130/1309265.jpg",
    title: "A dog eats dog world",
    lastAccessed: "April 15, 2023",
  },
];

export const savedEntries = [
  {
    image: "https://images2.alphacoders.com/130/1301855.jpg",
    title: "The culture of Journals",
    lastmodified: "April 16, 2023",
    createdBy: "Raejae Sandy",
  },
  {
    image: "https://images7.alphacoders.com/130/1309265.jpg",
    title: "A dog eats dog world",
    lastmodified: "April 15, 2023",
    createdBy: "Raejae Sandy",
  },
  {
    image: "https://images4.alphacoders.com/123/1235534.png",
    title: "Anime Unveiled",
    lastmodified: "April 14, 2023",
    createdBy: "Emilia Tan",
  },
  {
    image: "https://images2.alphacoders.com/130/1306762.jpg",
    title: "A Foxy Tail",
    lastmodified: "April 12, 2023",
    createdBy: "Mr.Fox",
  },
];
